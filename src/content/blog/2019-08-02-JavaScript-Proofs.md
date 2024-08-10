---
title: "JavaScript: Productivity over Proof"
description: "In the vast majority everyday software, nobody writes a mathematical proof of every piece of functionality. Dynamically typed languages exist for a reason, and this is not it."
links:
  - name: "TypeScript"
    url: "https://www.typescriptlang.org/"
  - name: "Truthy and Falsey - James Padolsey"
    url: "https://j11y.io/javascript/truthy-falsey/"
  - name: "Destructuring Assignment - MDN"
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment"
tags: blog
---

I'll keep this blog post short, but this is in response to a conversation about
testing and proving code written in JavaScript as opposed to more so-called
"conventional languages" such as SML, Haskell, or OCaml.

The preface is that dynamically typed programs and languages are inherently
fallible by nature, especially in a large codebase, as it makes it nearly
impossible to create a "proof of correctness". Dynamic typing creates failures
that can only be seen upon execution of the code, not compilation, allowing
errors to pass through that might not be caught during testing.

Since scripting languages have no compilation phase, they rely entirely on tests
and linting to enforce proper use and prevent errors, but loose typing makes
this inherently difficult to do. In a language where `2 == "2"`, concepts such
as referential transparency are impossible to attain. In C, this is equivalent
to every function returning a `void*` with no static method of enforcing its
type or that it even exists.

## Why This is Okay

Now, there are several obvious rebuttals that I could make here, but I'll start
with this: _don't use JavaScript for something that must never fail_. Different
languages can be used for different things, and they're all built with different
purposes in mind. Nobody would dream of using JavaScript to pilot an aircraft.
If you really need a proof of correctness for everything you write, then maybe
it isn't for you.

The focus of languages like JavaScript that explicitly use dynamic typing is not
prevention of user error, but better polymorphism and prototype-based
data - promoting code re-use. Its purpose is not to reduce errors for people
that don't know how to use it, but to improve productivity and make it
_faster and easier to write_ for those that do. Just because you can't implement
[space shuttle style](https://github.com/kubernetes/kubernetes/blob/ec2e767e59395376fa191d7c56a74f53936b7653/pkg/controller/volume/persistentvolume/pv_controller.go#L55)
in a program doesn't mean you shouldn't write it. Not everything has to be
stable - code changes over time, and you should write it in a way which enables
that, not restricts it.

With proper documentation and source control, code reviews and test driven
development can catch the issues that would be caused by dynamic typing before
they reach production. And in the event that they do, then - in a properly
documented and organized codebase - the functionality can be changed and fixed
quickly without causing any problems or requiring a rewrite of the entire
codebase which one might experience in a language that is statically typed.

Dynamic typing doesn't just bring languages a lack of stability; it allows for
useful functionality as well, which might not otherwise be possible:

* The absence of a required compilation stage means that tests can be run as
  soon as your code is written, or even
  [while you're writing it](https://webpack.js.org/concepts/hot-module-replacement/).

* The lack of verbosity brought by dynamic typing means that common
  functionality can be written quickly and without context. For example:
  [truthy values](https://developer.mozilla.org/en-US/docs/Glossary/Truthy) can
  be used to quickly determine whether something _exists_, regardless of what it
  is. The integer `0` is false, and so is an empty string. However, even though
  `0 == '0'`, the string `'0'` is a truthy value and will evaluate to true.

* ["Destructuring assignment"](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
  is also a cool example of the advantages that prototype-based data and a lack
  of verbosity can bring:

  ```js
  let [a, b, c = 4, ...d] = [1,2, ,4,5];
  // a = 1, b = 2, c = 4, d = [4, 5]
  ```

<br>
Languages all have their own pros and cons, and "absolute stability" isn't
always a good thing. JavaScript is fairly good at what it is used for, and its
widespread adoption means that it has a well-developed community behind it and
is easy to learn and use as a result. The fact that you can't write a formal
inductive proof of a JavaScript function just goes to show why most programmers
aren't mathematicians (and don't need to be).

## Workarounds

JavaScript's "loose equality" and type-converting comparisons are confusing at
times, but there is a clear option to just not use them. In most cases, loose
equalities (`2 == 2`) can be replaced by strict comparisons (`2 === 2`) that
only evaluate if the operands are of the same type.

If you need to use JavaScript, but still want enforced typing, check out the
[TypeScript](https://www.typescriptlang.org/) project - it's essentially a typed
version of JavaScript that can compile to vanilla JS, so you can get the best of
both worlds.
