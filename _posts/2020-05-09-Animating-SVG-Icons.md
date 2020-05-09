---
layout: blog
title: "Animating SVG Icons on the Web"
description: "A small breakdown of the process I used to create a couple interactive icons for a web project."
date: "2020-05-09"
links:
  - name: "Shape Shifter"
    url: "https://github.com/alexjlockwood/ShapeShifter"
  - name: "SVG Path Builder"
    url: "https://mavo.io/demos/svgpath/"
  - name: "Material Icons"
    url: "https://material.io/resources/icons/"
tags:
  - meta
categories:
  - blog
---

One of the projects I was working on last year was in need of some more refined interaction & UI polish - so I thought I'd try to animate some of the icons I'd been using. I often use Google's [Material Design icons](https://material.io/resources/icons/), which are published under the Apache 2.0 license. However, these are only static images by default - in Android development, it's easy to use a tool like [alexjlockwood/ShapeShifter](https://github.com/alexjlockwood/ShapeShifter) to design an animation and import it into Android Studio as an `AnimatedVectorDrawable`, but the web doesn't have this sort of tooling... or does it?

The thing about SVG images on the web is that they're actually parsed with support for the same browser APIs that are used to process a webpage - so, for example, mixing an SVG with CSS properties is totally valid. The only drawback is that this _won't_ work if it's included in an `<img>` tag, as many browsers will only render it as a static image.

As a result, there are two approaches to including these icons in your website. You can either directly include the SVG tag inside the element you want it to appear in...

```html
<button>
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" version="1.1">
    <path d="M0 0h24v24H0z" fill="none"/>
    <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/>
  </svg>
</button>
```

...or you can use the `<object>` tag to include it as an external resouce - allowing you to keep the scripts & styles separate from the rest of the page.

For simplicity (and a bit of organization), I'm going to use the latter - but if you're using some type of static site generator or web framework, it's entirely feasible to forego the `<object>` element and define these inline with your page for a bit of a performance benefit (I haven't actually measured how this affects its performance, but I imagine the impact is similar to using an `<iframe>`).

## Reorganizing the Path Data

Let's take a look at the icon I used in the code snippet above - this is the "launch" icon from Google's [material icons](https://github.com/google/material-design-icons) repo. The SVG contains two path elements: one rectangle with `fill="none"` that defines the boundaries of the svg (probably for browser compatibility), and one with a much longer path string that defines the actual shape of the icon.

Looking at the shape of the icon, it actually contains two distinct components - an arrow, and a surrounding box/border. With some understanding of SVG paths, we can actually split this icon into two separate path elements. The "path" is really just a list of actions and coordinates - the first letter, `M`, is an action that "moves" to a set of coordinates to start a path, and the `z` action "closes" the path (or draws a line back to the first set of coordinates). Since our path contains two of these segments, it won't have any effect on the rendered icon to split them into individual tags.

While we're at it, I'm going to define a "group" tag to contain them, and add `id` attributes so we can reference them with CSS selectors later on.

```html
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" version="1.1">
  <path d="M0 0h24v24H0z" fill="none"/>
  <g id="launch-icon">
    <path id="box" d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7z"/>
    <path id="arrow" d="M14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/>
  </g>
</svg>
```

## Defining CSS States

According to [w3c](https://www.w3.org/TR/SVG/styling.html), SVG 2 supports an inline `<style>` tag that can contain our CSS. However, to ensure backwards compatibility with prior versions, it's best to surround the CSS styles in a `<![CDATA[]]>` tag (this way, any older browsers won't try to parse its content).

To create our "animation", I'm going to use the [`transition`](https://developer.mozilla.org/en-US/docs/Web/CSS/transition) property - which simply animates the value of whatever it specifies. The animated state will be dependent on a "selected" property on the `<g>` element (for now, I'll just add this property to the tag so we can see what it looks like).

```html
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" version="1.1">
  <style type="text/css"><![CDATA[
    #box, #arrow {
      transition: transform .25s, opacity .25s;
    }

    #launch-icon[selected] #box {
      opacity: 0.5;
    }

    #launch-icon[selected] #arrow {
      transform: translate(2px, -2px);
    }
  ]]></style>
  <path d="M0 0h24v24H0z" fill="none"/>
  <g id="launch-icon" selected="true">
    <path id="box" d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7z"/>
    <path id="arrow" d="M14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/>
  </g>
</svg>
```

With this SVG, you _should_ be able to see the arrow move up and to the right, with the surrounding box faded out a little. If this doesn't work, check that the `selected` attribute is properly applied to the `<g>` tag in your developer tools menu - and make sure the id and attribute names match.

We should now have a working animation that will change based on our `selected` attribute - try running `document.getElementById("launch-icon").setAttribute("selected", true);` and `document.getElementById("launch-icon").removeAttribute("selected");` in your console, and you'll see it transition between the two states.

## Detecting the Hover State

Now that we've finished animating the actual SVG, the hard part is over - we just need to define our HTML element and detect its hover state to switch between the two states.

I've saved my SVG at `ic_launch.svg`, so - in the same folder - I'm going to create an `index.html` with the following content...

```html
<html>
  <head>
    <title>SVG Icon Fun</title>
  </head>
  <body>
    <button id="launch-button">
      <object id="launch-object" type="image/svg+xml" data="./ic_launch.svg"></object>
    </button>
    <script type="text/javascript">
      // JavaScript here...
    </script>
  </body>
</html>
```

Having defined our elements, we're going to listen to the `mouseover` and `mouseout` events of the `#launch-button` element to determine when to animate the icon.

```js
let _buttonElement = document.getElementById("launch-button");
let _objectElement = document.getElementById("launch-object");

_buttonElement.addEventListener("mouseover", (event) => {
	// TODO: add the "selected" attribute
});

_buttonElement.addEventListener("mouseout", (event) => {
	// TODO: remove the "selected" attribute
});
```

Now that we're listening to our mouse events on the button, we need a way to actually change the `selected` attribute inside the SVG. Because we're using the `<object>` tag, that can't be done directly, as the elements actually exist in a different "place" and can't be referenced from our page. However, we _can_ use the [`dispatchEvent`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/dispatchEvent) function with a [`CustomEvent`](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent) object to communicate with it instead.

```js
let _buttonElement = document.getElementById("launch-button");
let _objectElement = document.getElementById("launch-object");

_buttonElement.addEventListener("mouseover", (event) => {
	_objectElement.contentWindow.dispatchEvent(new CustomEvent("ic-launch-hover", { detail: true }));
});

_buttonElement.addEventListener("mouseout", (event) => {
	_objectElement.contentWindow.dispatchEvent(new CustomEvent("ic-launch-hover", { detail: false }));
});
```

Inside our SVG, we need to add a script tag that will listen for this event and change the `selected` attribute for us - this works similarly to adding the `<style>` tag with the `<![CDATA[]]>` section (older browsers will just ignore its contents), except it needs to be commented out with JavaScript comments as well...

```html
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" version="1.1">
  <style type="text/css"><![CDATA[
    #box, #arrow {
      transition: transform .25s, opacity .25s;
    }

    #launch-icon[selected] #box {
      opacity: 0.5;
    }

    #launch-icon[selected] #arrow {
      transform: translate(2px, -2px);
    }
  ]]></style>
  <path d="M0 0h24v24H0z" fill="none"/>
  <g id="launch-icon" selected="true">
    <path id="box" d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7z"/>
    <path id="arrow" d="M14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/>
  </g>
  <script>/* <![CDATA[ */
    const _iconElement = document.getElementById('launch-icon');
    window.addEventListener('ic-launch-hover', function(e) {
      if (e.detail)
        _iconElement.setAttribute("selected", true);
      else _iconElement.removeAttribute("selected");
    });
/* ]]> */</script>
</svg>
```

Finally, opening our page in the browser, we should now have a nice little animated SVG icon on our button. Ahh... very satisfying.

![A screen recording of the button being animated repeatedly.](/images/blogs/animsvg-icon.gif)

There are definitely limits to what can be done with CSS properties on details as fine as parts of an icon - but I've managed to pull off some fairly complicated animations with this already, so I encourage messing around with this to see what it can do.
