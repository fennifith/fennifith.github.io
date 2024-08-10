---
title: "Declarativ: an experimental React-like HTML framework"
description: "A breakdown of the concepts used in Declarativ, a lightweight JavaScript HTML templating library."
links:
  - name: "Declarativ"
    url: "https://jfenn.me/projects/declarativ/"
  - name: "React JSX"
    url: "https://reactjs.org/docs/introducing-jsx.html"
  - name: "Reactive programming"
    url: "https://en.wikipedia.org/wiki/Reactive_programming"
tags: blog
---

A while ago, I started writing a JavaScript library to facilitate HTML templating in web apps without introducing a compilation step. React's [JSX](https://reactjs.org/docs/introducing-jsx.html) syntax is one of the most well-known methods of constructing elements in JavaScript, but needs to be translated into `React.createElement` calls before it can be used in the browser. My goal - somewhat as a joke - was to eliminate this, and create an intuitive equivalent in plain JavaScript.

This turned into a genuine attempt at creating a counterpart to modern UI frameworks which implements many of the same features. It includes full support for any HTML attributes, the Event API, and even allows other functions and Promises to be nested arbitrarily.

Of course, this was still an experiment, will not be maintained, and isn't something I would recommend for any critical applications (the missing 'e' in Declarativ stands for "efficient" - which this library is not). However, I still learned a lot from it, and I thought I would put together a post to share some of the ideas that went into its development.

## Design

There are many advantages to "declarative" templating in any programming language, as it can offer huge benefits to the stability and simplicity of an application. Rather than creating a layout and locating nodes with `getElementById()` to update their attributes manually, declarative programming enables automatic state updates simply by specifying where the data should come from in the layout.

```js
container(
	jumbotron(
		h1("This is a big header."),
		button("Do something").on("click", () => alert("Hello!")),
		p($.get("https://loripsum.net/api/plaintext"))
	)
)
```

The process of manipulating these updates manually can be a significant source of error - if a piece of data is used in multiple places, it can be easy to forget about an element that uses it, or create an illegal state when an update shouldn't occur.

```html
<div class="jumbotron">
	<h1>This is a big header.</h1>
	<button id="doSomething">Do something</button>
	<p id="greyParagraph"></p>
</div>

<script>
$.get("https://loripsum.net/api/plaintext").then((string) => {
	const element = document.getElementById('grayParagraph'); // does this element even exist?
	element.innerText = string;
});
</script>
```

Declarative programming lends itself more to an "observer" pattern, where you specify the data source, and the elements decide to 'observe' it. This is also known as [Reactive Programming](https://en.wikipedia.org/wiki/Reactive_programming) - where variables and data are described as a process of change that implicitly update any components that use them.

The Declarativ library functions similarly to this; while I focused more on the initial collection of asynchronous data, it is entirely possible to observe and update the created elements with little effort.

### Variadic Functions

Commonly known as "varargs," this is the backbone of Declarativ's API: the ability for any function to receive an indefinite amount of arguments. This means that, rather than using a function like `createElement()` with defined parameters, I can _write a separate function for each HTML element and pass child elements to it as arguments._

```js
div(
	h1("Hello, world!"),
	p("Constructed with Declarativ.")
)
```

While it seems like a lot of work to write a separate function for every possible HTML element, this is made a lot simpler by the dynamic nature of JavaScript: all these functions really only have one underlying implementation. Each of these "element functions" are constructed by passing their HTML syntax to a "compose" function that then returns the actual implementation (in other words, I have a function returning another function). Essentially:

```js
function compose(elementName) {
	return function(...children) {
		return new Component(`<${elementName}>${children}</${elementName}>`);
	}
}

const h1 = compose('h1');
```

[The actual code](https://github.com/fennifith/declarativ/blob/68cd92e61d39b1dcdee555c68256fc71ca1bda85/src/compose.ts) in Declarativ is a bit different, to handle attributes and events and other complexities, but this is an effective representation of how it works.

### Polymorphism

In the previous example, a set of `children` arguments are passed to each element function - but the type of each argument is not consistent. The `div()` function receives two `Component` objects (h1 and p), while `h1()` receives a `string`. These arguments, along with nested functions and Promises (which will evaluate to any of the compatible types) needed to be handled uniformly within Declarativ, without duplicating too much functionality. To make this a little easier, I used [TypeScript](https://www.typescriptlang.org) to define the expected types for these arguments:

```typescript
export type ResolvableValue<T> = T | ((data: any) => ResolvableValue<T>) | Promise<T>

export type ComponentNode = Component | string
export type ResolvableNode = ResolvableValue<ComponentNode | ResolvableNode[]>
```

To abstract the asynchronous functionality, I created a `resolve()` function to accept a `ResolvableValue<T>` and return a `T`. This gives me an easy way to convert any `Promise<Component>` or `() => Component` to a type that I can work with. However, you might notice that `ResolvableNode` can also evaluate to a `ResolvableNode[]` - so I needed to write some code to handle this as well.

I ended up with a `resolveChildren()` function to specifically handle all of these cases and return a flattened array of `ComponentNode` values for the rest of my program to deal with.

```typescript
async resolveChildren(data: any) : Promise<ComponentNode[]> {
	let children: ComponentNode[] = [];

	const pushItem = (item: ComponentNode) => {
		if (typeof item === 'string')
			children.push(item);
		else children.push(new Component(item));
	};

	let arr = this.children.flat(Infinity);
	for (let i = 0; i < arr.length; i++) {
		let value = await resolve(arr[i], data);

		if (value instanceof Array) {
			// flatten inner arrays (avoid creating unnecessary nodes)
			value.flat(Infinity).forEach((item) => {
				pushItem(item);
			});
		} else {
			pushItem(value);
		}
	}

	return children;
}
```

### Asynchronous Templating

With the complex polymorphism issues out of the way, I still needed to consider how elements with asynchronous components should be handled. Obviously, in the case of an `h1("Hello, world!")`, all of the information I need to create a template is immediately provided. However, what about a more complex scenario, such as `h1("Hello, ", db.fetchUserName())`? In this case, `db.fetchUserName()` might return a Promise, which the `h1` element will have to wait for before it can be templated. However, I might not want to hold up the entire element tree to await a single data source when the rest of the page can be rendered without it.

I solved this by inserting an empty placeholder element into the DOM with a unique id for each asynchronous child, and using `Promise.all` to await all child elements in parallel (or, at least, the single-threaded JavaScript equivalent of that). This means that, if the `h1()` is next to a `p()` that can be templated instantly, it will appear on the page first, while the `h1()` can wait to replace its placeholder element after it has finished loading.

```typescript
let innerHtml = "";
let components: {[id: string]: Component} = {};
await forEachAsync(await component.resolveChildren(data), async (child, index) => {
	if (typeof child === "string") {
		// if the child is a resolved string, template it immediately
		innerHtml += child;
	} else {
		// insert a placeholder element for each asynchronous component
		let id = `decl-${nodeCount++}-${index}`;
		innerHtml += `<template id="${id}"></template>`;
		components[id] = child;
	}
});

// iterate over components & template them asynchronously
await Promise.all(Object.keys(components).map(async (id) => {
	let temp = document.querySelector(`#${id}`);
	await render(temp, components[id]);
}));
```

Again - like all the previous examples - this code is still a simplified version of [what Declarativ actually does](https://github.com/fennifith/declarativ/blob/68cd92e61d39b1dcdee555c68256fc71ca1bda85/src/render/dom-render.ts#L22), as there are even more edge cases and extra conditions that it needs to handle.

A lot of these cases were only discovered during actual use, such as the possibility for a single component to result in more than one root element - for example, if an asynchronous function returns an array of other nodes. This was also when I discovered how clunky my state-updating mechanism was when compared to other frameworks.

### Reactivity

[Svelte](https://svelte.dev/tutorial/reactive-declarations) is one example that I think approaches this really well. The framework keeps track of where any variable is used in the document, and the Svelte compiler inserts an update function after every place that its value is modified - providing automatic state updates for any variable.

```html
<script>
let count = 0;

function handleClick() {
	count++;
}
</script>

<button on:click={handleClick}>
	Clicked {count} times!
</button>
```

Needless to say, this isn't possible in Declarativ as I specifically wanted to avoid a compilation process. However, it would be interesting to explore different ways to accomplish this in plain JavaScript.

Other frameworks have different mechanisms for creating state updates: with the [`useState`](https://reactjs.org/docs/hooks-state.html) hook, React allows for state "objects" to be associated with each defined component. When the state is updated, React simply re-renders the component it resides in.

```jsx
function CountButton() {
	const [count, setCount] = useState(0);

	return (
		<button onclick={() => setCount(count + 1)}>
			Clicked {count} times!
		</button>
	);
}
```

The approach I used in declarativ is closer to how refs are used in React/Vue, though a little more verbose (making use of [Proxy objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy)):

```js
function CountButton() {
	const state = declarativ.observe({ count: 0 });

	return button(() => `Clicked ${state.proxy.count} times!`)
		.on("click", () => {
			state.proxy.count += 1;
		})
		.bind(state);
}
```

While this is very flexible, it is much harder to work with than other frameworks which create these state associations automatically. Needing to invoke a specific `bind()` function, while more verbose, effectively creates the same problems as manual DOM manipulation with connecting a data source to its consumer.

## Takeaways

One of the major things I've learnt while using this library is that, while it certainly makes it fast to iterate over different designs, *mixing your application logic directly with the UI structure is a horrible idea!* Providing easy access to DOM events with the `.on('event', () => {}))` function was very intuitive, but I found that it often allowed me to write very confusing and cluttered logic directly inside the event handlers, when I should've been separating it into external functions.

This might be why many developers like to categorize their work into architectural patterns such as MVC or MVVM - to ensure an appropriate separation of concerns and prevent applications from accumulating this "UI clutter" that can be very difficult to maintain.

### Actual Implementations

While Declarativ is obviously inapplicable to most actual usage, there are plenty of examples of so-called "declarative UI" in other (better) frameworks:

- [kotlinx.html](https://github.com/Kotlin/kotlinx.html) provides a DSL for Kotlin applications to construct HTML/DOM trees (in a very similar method to how Declarativ works)
- [Jetpack Compose](https://developer.android.com/jetpack/compose) uses a declarative API to define "composable functions" which the library can manage and invoke to reflect state updates
- [SwiftUI](https://developer.apple.com/xcode/swiftui/) similarly uses a declarative syntax to indicate the data sources of each view and automate most of the work that would otherwise be done by a view controller
- [Flutter](https://flutter.dev/docs/get-started/flutter-for/declarative#how-to-change-ui-in-a-declarative-framework) creates immutable "widgets" to represent UI states
