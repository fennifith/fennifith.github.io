---
layout: blog
title: "Exceptional Traveler"
description: "I explain how and why (sort of) I wrote an implementation of the Traveling Salesperson Problem using Exceptional Programming standards."
project: "fennifith/ExceptionalTraveler"
---

Some time ago, I read [an article](https://medium.com/pointer-io/exceptional-programming-62ea8150f61f) by Chet Haase on the topic of a new style of programming called "Exceptional Programming". In this style, programs are written in a way that handles all possible errors that could be thrown; your programming is Exceptional, after all. It shouldn't fail because of an uncaught ClassCastException and such. And when you cannot beat the enemy, you must become it.

In other words, Exceptional Programming is a style in which you use thrown exceptions as the only control structure.

However, to me the article written by Chet Haase seemed a little incomplete. Sure, it explained the basics, but there were few examples of how such a concept would actually work. While I was discussing this with a friend, they suggested that I write an implementation of the Traveling Salesperson problem to demonstrate its use. And so I took it upon myself to bring this marvelous beauty into the world.

### Pre-determined Rules

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
- The only way a value can be returned is by modifying a variable with a scope larger than that of the current function, and throwing an exception (that is not caught within the function) to signify its "end".

### Modifications

Now, as I was writing the program, these rules turned out to be unexpectedly strict, and were especially annoying when working with the standard Java APIs such as `List` or `Scanner`. As such, I made a few modifications/exceptions (ha) to these rules.

- Variable declarations do not count as statements (it shouldn't matter, as long as they only define the scope of a variable)
- Methods in Java APIs are not subject to these rules (and therefore can return values)
- Even if a specific statement does not throw an exception, the try/catch(/finally) block that it is in MUST throw one eventually.

### Explanations

#### Chronological Order

As programs by definition are meant to run in chronological order, I had a bit of an internal debate as to whether multiple consecutive statements should be allowed - and if not, does the restriction include the `finally` block? Eventually, I decided on "no", but decided to allow the `finally` block on one condition:

- if a `finally` block is used, an exception must be thrown in the try/catch/finally block that it is a part of.

This allows one specific functionality which is necessary in order to make use of the standard Java APIs: throwing an exception even if one is not thrown by a statement (or throwing a different one if it is).

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

Another possible argument for this is that assertions are intended mainly for use as tests and should not show up in the code of an actual application. But mainly, in the view of Exceptional Programming, they are kind of cheating. Half of the fun of Exceptional Programming is figuring out how to throw an exception in certain situations so that your program will do what you want - an example of which is below. If assertions could be used here, the structure would be the same, but not nearly as fun to write.

```java
try {
	try {
		throw new ArbitraryException();
	} catch (ArbitraryException exce) {
		throw exce;
	} finally {
		try { // assert which distance is smaller
			int shouldNotBeZero = 1 / (int) Math.floor(nearestDistance / nearestDistance2);
		} catch (ArithmeticException exce) {
			throw exce;
		}
	}
} catch (ArbitraryException exce) {
	// "nearestDistance2" is smaller
} catch (ArithmeticException exce) {
	// "nearestDistance" is smaller
}
```

## Fin

And that's it! Simple, right? Yeah...

If you're still curious, you can find the source code for the resulting atrocity [here](/redirects/?t=github&d=ExceptionalTraveler/blob/master/TravelingSalesPerson.java). It is partly documented, at least, though I don't recommend trying to figure out how any of it works. It does, though, and that is enough.

