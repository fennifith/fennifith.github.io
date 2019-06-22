---
layout: "project"
type: "undefined"
title: "Music Automata api"
description: "An Rx-based interface for programming musical automata in JavaScript. (WIP)"
repo: "fennifith/music-automata-api"
git: "git://github.com/fennifith/music-automata-api.git"
links: 
  - name: "GitHub"
    url: "https://github.com/fennifith/music-automata-api"
    icon: "https://github.com/favicon.ico"
  - name: "Issues"
    url: "https://github.com/fennifith/music-automata-api/issues"
    icon: "/images/ic/bug.svg"
contributors: 
  - login: "fennifith"
    avatar: "https://avatars1.githubusercontent.com/u/13000407?v=4"
    url: "https://github.com/fennifith"
languages: 
  - "JavaScript"
isDocs: "false"
isWiki: "false"
pushed: "2019-06-21T18:00:46Z"
---

The goal of this project is to create an API that can be used to schedule and
organize automated music generation using [ReactiveX](http://reactivex.io/)
and the observable pattern.

To gain some insight into how this can be used, think of music generation as a
series of mutations upon an existing set of data. For example, a random integer
value could be transformed into a chord, and made to conform to a specific beat
pattern before then being passed to an instrument to play. While it may be
common to do so, these are not mutations that need to happen at the exact time
that the note is played, and should happen independently.

In this API, something that can accept or output a note is referred to as a
"Block". Blocks are notified when a note is sent to them, and have the ability
to modify the note, remove it, or create new notes before passing them along.
Together, the blocks build a sort of tree structure along which notes are
passed. For example, consider a set of blocks that are organized like below:

```nohighlight
       [keyboard]
        /      \
    [piano]  [arpeggiator]
                 \
                [synth]
```

Here, all notes are created from keyboard input. They are then passed directly
to the blocks "piano" and "arpeggiator". The "piano" block simply plays the
notes it receives. The "arpeggiator" mutates them - into an arpeggio - and
passes the result of that mutation to the "synth" block which, again, plays
them.

Using this API, here is an example of what such a structure might look like:

```js
let synth = new Block()
    .on('noteStart', (note) => {
        audioApi.playMidiNote(note.midi, synthInstrument);
    });

let arpeggiator = new Block()
    .on('note', (note) => {
        arpeggiator.forward(note);
        arpeggiator.forward(Object.assign(note, { midi: note.midi + 4 }));
        arpeggiator.forward(Object.assign(note, { midi: note.midi + 7 }));
    })
    .to(synth);

let piano = new Block()
    .on('noteStart', (note) => {
        audioApi.playMidiNote(note.midi, pianoInstrument);
    });

let keyboard = new Block()
    .to(piano)
    .to(arpeggiator);
```
