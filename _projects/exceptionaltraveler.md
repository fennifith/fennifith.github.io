---
layout: project
type: undefined
title: "Exceptional Traveler"
description: "An implementation of the Traveling Salesperson Problem using the fundamentals of Exceptional Programming."
repo: TheAndroidMaster/ExceptionalTraveler
git: git://github.com/TheAndroidMaster/ExceptionalTraveler.git
links:
  - name: GitHub
    url: https://github.com/TheAndroidMaster/ExceptionalTraveler
    icon: https://github.com/favicon.ico
  - name: Issues
    url: https://github.com/TheAndroidMaster/ExceptionalTraveler/issues
    icon: /images/ic/bug.svg
  - name: MIT License
    url: https://choosealicense.com/licenses/mit/
    icon: /images/ic/copyright.svg
  - name: Exceptional Programming – Pointer IO – Medium
    url: https://medium.com/pointer-io/exceptional-programming-62ea8150f61f
    icon: https://medium.com/favicon.ico
contributors:
  - login: TheAndroidMaster
    avatar: https://avatars1.githubusercontent.com/u/13000407?v=4
    url: https://github.com/TheAndroidMaster
isDocs: true
isWiki: false
languages:
  - Java
---

> My programming is always Exceptional.

This program is a joke. It is not serious. Please do not take this program seriously. It is not a good demonstration of my programming skills. Do not use this program as reference material. Please don't use this program to educate yourself or others on Java programming. Avoid looking at this program for extended amounts of time. If you experience dizziness or a loss of balance while viewing this program, stop staring at it in awe and seek medical help immediately. If you feel the effects depression or anxiety after becoming aware of this program's existence, please see a qualified counselor for assistance.

The idea for this program was taken from Chet Haase's article for Pointer IO on [Exceptional Programming](https://medium.com/pointer-io/exceptional-programming-62ea8150f61f), which describes a programming style using just try/catch blocks and exceptions as the only control structure.

This specific program takes a set of coordinates as input and uses a basic double neighbor heuristic to find the (probably) shortest (ish) possible path that crosses all of the points. It also keeps track of the total distance that has been covered, and outputs it with all of the points at the end of the program.

## Setup

Obviously, this is a Java program. In order to run this program, download the source code and run the following commands:

```shell
javac Main.java
java Main
```

The program will then prompt you to input coordinates, after which it will pass the coordinates to `TravelingSalesPerson.java`, which will calculate and output the resulting order.

## Guidelines

The article is a little vague about the requirements for a program to be "Exceptional", but a code snippet from the article establishes a few guidelines, from which I have made up some more specific rules for this program.

```java
try {
    someMethod();
} catch (NormalException e) {
    try {
        anotherMethod();
    } catch (NormalException e) {
        try {
            yetAnotherMethod();
        } catch (NormalException e) {
            throw new NormalException("Everything's fine");
        }
    }
} finally {
    throw new NormalException("Everything's fine");
}
```

The basic rules stated in the article were as follows:

- Each statement must be in its own "try" block.
- No other control structures may be used (although not specifically stated, this would include `if`, `else`, `while`, `for`, and even `return`).
- Every statement must throw an exception in order to progress further in the program.
- The details must wait for the final release

### Inferences

As it has been over a year since the article was written and there have been no updates (this is to be expected, given that the article was written almost entirely as a joke), this snippet was likely only provided to illustrate how ridiculous the idea of actually writing a program using this stupid and inefficient style would be. That said, there are some useful bits of knowledge that can be extracted from it.

- While methods can be called, no method may return a value.
- Despite relying partially on the "chronological control structure" (see [this](#chronological-order)), `finally` blocks are allowed.
- The only things allowed directly inside of a `catch` or `finally` block are:
	- Another try/catch(/finally) block.
	- A `throw` statement.
- As exceptions must be thrown in each statement, it is impossible to instantiate an object (without throwing an exception in its constructor).
	- The Reflection APIs might bypass this rule, but in my opinion are not worth the effort.
- The only way a value can be returned is 

### Modifications

Now, as I was writing the program, these rules turned out to be unexpectedly strict, and were especially annoying when working with the standard Java APIs such as `List` or `Scanner`. As such, I made a few modifications/exceptions (ha) to these rules.

- Variable declarations do not count as statements (it shouldn't matter, as long as they only define the scope of a variable)
- Methods in Java APIs are not subject to these rules (and therefore can return values)
- Even if a specific statement does not throw an exception, the try/catch(/finally) block that it is in MUST throw one eventually.

### Explanations

#### Chronological Order

As programs by definition are meant to run in chronological order, I had a bit of an internal debate as to whether multiple consecutive statements should be allowed - and if not, does the restriction include the `finally` block? Eventually, I decided on "no", but decided to allow the `finally` block on one condition:

- if a `finally` block is used, an exception must be thrown in the try/catch/finally block that it is a part of.

This allows one specific functionality which is necessary in order to use the standard Java APIs: throwing an exception even if one is not thrown by a statement (or throwing a different one if it is).

#### Statements Without Exceptions

If a statement does not always throw an exception, it is fairly easy to modify a try/catch block so that it does:

```java
try {
    willNotThrowAnException();
} catch (Exception e) {
    throw e; // this does not do anything
} finally {
    throw new ArbitraryException();
}
```

There. Now the method `willNotThrowAnException()` will always throw an `ArbitraryException` when it is run, right? However... what if you want a different result in the event that an exception *is* thrown by the method? If `willNotThrowAnException()` throws an exception in this snippet, then even though it gets passed to the `catch` block (which throws it again), the `finally` block is still run before the original exception is thrown, effectively overwriting it with the `ArbitraryException` either way. In order to combat this, I racked my brain and actually took advantage of this overwriting behavior to come up with this uselessly complex snippet:

```java
try {
    try {
        throw new ExceptionNotThrownException();
    } catch (Exception e) {
        throw e;
    } finally {
        try {
            mightThrowAnException();
        } catch (Exception e) {
            throw new ExceptionThrownException();
        }
    }
} catch (ExceptionThrownException e) {
    // an exception has been thrown
} catch (ExceptionNotThrownException e) {
    // an exception has not been thrown
}
```

Yep, this is definitely complicated and stupid. Just what I needed! Now, if `mightThrowAnException()` throws an exception, it will overwrite the `ExceptionNotThrownException` being thrown in the original `try` block and replace it with its own `ExceptionThrownException`, altering the flow of the program.

#### Assertions

As the primary joy that comes from Exceptional Programming is coming up with a way to throw an exception in a specific situation, I also added my own rule regarding the use of assertions:

- One can not assert.

Another possible argument for this is that assertions are intended mainly for use as tests and should not show up in the code of an actual application.

## Contributing

Please do not contribute to this project, it is horrific enough already. However, if you would like to contribute, you can see [CONTRIBUTING.md](https://github.com/TheAndroidMaster/ExceptionalTraveler/blob/master/./.github/CONTRIBUTING.md) for more information.
