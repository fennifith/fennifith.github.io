---
layout: "project"
type: "android-library"
title: "Android Utils"
description: "A bunch of util classes that I use in almost every project I write."
repo: "fennifith/AndroidUtils"
git: "git://github.com/fennifith/AndroidUtils.git"
links: 
  - name: "GitHub"
    url: "https://github.com/fennifith/AndroidUtils"
    icon: "https://github.com/favicon.ico"
  - name: "Issues"
    url: "https://github.com/fennifith/AndroidUtils/issues"
    icon: "/images/ic/bug.svg"
  - name: "MIT License"
    url: "https://choosealicense.com/licenses/mit/"
    icon: "/images/ic/copyright.svg"
  - name: "JitPack"
    url: "https://jitpack.io/#me.jfenn/AndroidUtils"
    icon: "/images/ic/launch.svg"
contributors: 
  - login: "fennifith"
    avatar: "https://avatars1.githubusercontent.com/u/13000407?v=4"
    url: "https://github.com/fennifith"
languages: 
  - "Java"
isDocs: "true"
isWiki: "false"
pushed: "2018-11-13T16:52:09Z"
---

AndroidUtils is a collection of util classes that I use in basically every project - I might as well give them their own module. This is more for personal use (I don't expect most people to use this as a dependency in their own projects, other than stealing a snippet or two), but feel free to add your own contributions as you wish.

[![](https://jitpack.io/v/me.jfenn/AndroidUtils.svg)](https://jitpack.io/#me.jfenn/AndroidUtils)

## Usage

### Setup

This project is published on [JitPack](https://jitpack.io), which you can add to your project by copying the following to your root build.gradle at the end of "repositories".

```gradle
allprojects {
  repositories {
    ...
    maven { url 'https://jitpack.io' }
  }
}
```

To add the dependency, copy this line into your app module's build.gradle file.

```gradle
implementation 'me.jfenn:AndroidUtils:0.0.1'
```

### Methods

Most of these methods are fairly self-explanatory in terms of what they actually do. As I'm lazy, you can find auto-generated docs for all of them [here](https://jfenn.me/projects/androidutils/docs), or just browse the source code to see what they do.
