---
title: "Audio Automation: using Java's MIDI APIs with Kotlin Flow"
description: "An explanation of the development process behind a MIDI library using the Kotlin Flow API."
links:
  - name: "Kotlin Flow Documentation"
    url: "https://kotlinlang.org/docs/reference/coroutines/flow.html"
  - name: "Java MIDI APIs"
    url: "https://docs.oracle.com/javase/8/docs/api/javax/sound/midi/MidiSystem.html"
  - name: "Source Code"
    url: "https://code.horrific.dev/james/audio-automation"
tags: blog
---

Last year, I had the opportunity to take a course on Programming Environments in Music focused on the [Max/MSP software](https://cycling74.com/products/max-features). It involved a wide variety of topics around the software and aspects of computer music in general, such as MIDI sequencing, manipulating sound samples, and creating our own waveforms. I also learnt a lot about the various control flows & structures in Max/MSP, which led me to revisit an earlier attempt at developing my own music programming API.

Firstly, I had a distinct need to write this software in Kotlin. I am most comfortable with this language, and its [multiplatform](https://kotlinlang.org/docs/reference/multiplatform.html) functionality would allow me to make use of it in websites, desktop programs, and Android applications. This is also why most existing solutions are inadequate; while I am certainly reinventing a few wheels here, the benefit is that its APIs can be used directly in other Kotlin applications to integrate with other variables - no experience needed.

## Using Kotlin Flows

In order to translate source events such as "a metronome tick" into a set of notes, I needed a way to construct the path of that data through my program. In Max/MSP, this path is visualized as a stream of events that gets transformed as it passes through different "objects" in its patcher interface. For my attempt to be effective, I would need a way to rapidly iterate upon these paths in a similar fashion.

![The Max/MSP patcher interface, a handful of objects connected with spaghetti wires in-between.](/images/blogs/audio-maxmsp.png)

My understanding of reactive programming and event streams is fairly limited, so I wasn't entirely sure what I was getting into with Kotlin Flow. In fact, it took me a while to decide if Flow was an API that I even wanted to use. Kotlin has [a few](https://kotlinlang.org/docs/reference/sequences.html) [other mechanisms](https://kotlinlang.org/docs/reference/coroutines/channels.html) that provide similar interactions in slightly different ways, not to mention the existence of more widely used third-party libraries such as [RxJava](https://github.com/ReactiveX/RxJava).

What eventually made up my mind was the relative simplicity of Kotlin Flow, despite the complex functionality it provides; the ability for a transform function to [emit multiple events](https://kotlinlang.org/docs/reference/coroutines/flow.html#transform-operator) from a single source value is particularly useful.

```kt
metronome(500.ms).onTick.transform {
	emit(Note("3A", 150.ms))
	emit(Note("3C", 150.ms))
}.playOn(piano)
```

However, Flows differ quite significantly from how one might expect them to function; instead of providing access to an existing data stream, Flows are only started _upon collection of the resulting data._ This is referred to in the documentation as being a ["cold" stream](https://kotlinlang.org/docs/reference/coroutines/flow.html#flows-are-cold). Creating a `metronome(500)` in my program does nothing until its eventual output - the `piano` implementation - invokes it.

This means that certain situations - like having a metronome invoke a function that starts another metronome - can be somewhat complex. However, I have yet to come across a situation that cannot be implemented in a single path from the metronome to an instrument.

## Java MIDI APIs

Java actually contains a [MIDI interface](https://docs.oracle.com/javase/8/docs/api/javax/sound/midi/MidiSystem.html) in its standard library, so connecting this library to a MIDI synthesizer was probably the easiest part of this whole process. The [General MIDI](https://en.wikipedia.org/wiki/General_MIDI) specification explains how the 16 available MIDI channels (and their 128 program numbers) are expected to function. I decided to leave this largely up to the user, with one channel + program per "instrument" class.

With this established, implementing the MIDI API was as simple as connecting the `noteOn` and `noteOff` functions to the expected start/stop times of each note object that is provided. I added some functionality to prevent it from breaking in situations where the same note is sent twice (two overlapping notes should stop when the last one ends), but this was rarely an issue.

## Solving Latency Issues

When I ran my first program with this library, it seemed a bit unstable - the timing was inconsistent, and some notes played faster than others - which wasn't a great experience after spending an entire day building it. While my metronome was working correctly, it seems that Flows (or Java in general) are not as precise with their timing. Some flows were taking 100ms or more to process an event, which had drastic consequences for the music my program was playing.

I decided that the easiest way to solve this would be to attach a specific timestamp to each event - a `metronome(500)` would send `startTime + [0, 500, 1000, 1500, ...]` and so on. However, this presented the challenge of how to send multiple values through the path of a single Flow. Since flows only support one data type, I needed to either create a wrapper object for every value they use, or write my own implementation; I ended up doing a bit of both.

My `metronome` function now uses a `TimedFlow<T>` (where `T` is the actual data type being sent by the flow), which internally references a `Flow<TimedInfo<T>>`. The `TimedInfo` class both contains the event value and its timestamp. I also wrote a custom `.transform` implementation for `TimedFlow`, which contains an `emit(value: T, delay: Long)` function (allowing flows to change the timestamp of their events).

Before these events are sent to each instrument, a slight delay is added as "buffer time" to prevent the inconsistencies I was experiencing.

This is far from an optimal solution; I would like to entirely hide the timing info while allowing direct use of all the Flow functions. This could be done by having my `TimedFlow` implement the [Flow interface](https://kotlin.github.io/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines.flow/-flow/) to provide access to all of its extension functions. However - as noted in the documentation - this interface is _not stable for inheritance_, so this is not a practical workaround as of yet.

## Conclusion

I'm still working on building more features into this library as I write more programs with it - and I'm open to any suggestions for improving it further! I would like to integrate it with different types of instruments (such as custom wave generators), and figuring out how to "ramp" certain variables (e.g. volume or pitch) through the Flow interface could be an interesting challenge.

If you're interested, the source code for this library is available [here](https://code.horrific.dev/james/audio-automation) - and I've even provided an [example program](https://code.horrific.dev/james/audio-automation/src/branch/main/example/src/RandomPitchStrings.kt) that demonstrates a lot of its current functionality.
