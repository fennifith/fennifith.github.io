---
layout: "project"
type: "website"
title: "Cellularmusic"
description: "A \"cellular automaton\" based music generation tool, written with p5js."
repo: "fennifith/cellularmusic"
git: "git://github.com/fennifith/cellularmusic.git"
links: 
  - name: "GitHub"
    url: "https://github.com/fennifith/cellularmusic"
    icon: "https://github.com/favicon.ico"
  - name: "Issues"
    url: "https://github.com/fennifith/cellularmusic/issues"
    icon: "/images/ic/bug.svg"
  - name: "MIT License"
    url: "https://choosealicense.com/licenses/mit/"
    icon: "/images/ic/copyright.svg"
  - name: "Website"
    url: "https://jfenn.me/cellularmusic/"
    icon: "https://jfenn.me/images/favicon-32.ico"
contributors: 
  - login: "fennifith"
    avatar: "https://avatars1.githubusercontent.com/u/13000407?v=4"
    url: "https://github.com/fennifith"
languages: 
  - "JavaScript"
  - "CSS"
  - "HTML"
  - "Makefile"
  - "Ruby"
isDocs: "false"
isWiki: "false"
pushed: "2019-04-19T17:38:07Z"
---

The aim of this project is to create an application that can recursively write and "accompany" existing music or melodies in real-time. Hosted at [jfenn.me/cellularmusic](https://jfenn.me/cellularmusic/).

[![Discord](https://img.shields.io/discord/514625116706177035.svg?logo=discord&colorB=7289da)](https://discord.gg/mAdmKDH)

## Inspiration

This was mainly inspired by the work of [Lars Dietrich](https://www.youtube.com/channel/UCznARY34-PH2Yv4jFxj3SUA). I can only speculate as to how it was put together, but (with the exception of [Titan](https://www.youtube.com/watch?v=t3zha5WAY3w)) a large amount of it does appear to be scripted, and most of the work seems to have been put into the visualization rather than automating the music itself. Which is perfectly fine.

[65 Days of Static](https://decompositiontheory.info/) is also doing work that is perhaps closer to what this project hopes to accomplish. [This video](https://www.youtube.com/watch?v=oW_lK9yWsCA) shows a lot of what they have achieved, and [many](https://twitter.com/65dos/status/1115956359470690305) [of](https://twitter.com/65dos/status/1115258013059821570) [their](https://twitter.com/65dos/status/1115583157913493504) [tweets](https://twitter.com/65dos/status/1114917016438226945) show this in practical use.

Some of the actual music generation strategies are based on [this article](https://web.archive.org/web/20160312060120/http://www.ibm.com/developerworks/library/j-camusic/index.html) by Paul D. Reiners about the relationship between cellular automata and music. Huge thanks to the [Wayback Machine](https://archive.org/) for keeping copies of these things so that they aren't completely lost to the void when [IBM redesigns their developer site and removes a bunch of useful information](https://twitter.com/fennifith/status/1118354510643191808).

## Building

I use [`make`](https://gnu.org/software/make/) for local testing and development. To install the project's dependencies, run `make install`. Once that is finished, simply running `make` should build and serve a local version of the site. To clean up build files and such afterwards, run `make clean`.
