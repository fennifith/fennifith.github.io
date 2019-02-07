---
layout: "project"
type: "android-library"
title: "Time Date Picker"
description: "A simple Android library containing several time/date pickers and dialogs."
repo: "fennifith/TimeDatePicker"
git: "git://github.com/fennifith/TimeDatePicker.git"
links: 
  - name: "GitHub"
    url: "https://github.com/fennifith/TimeDatePicker"
    icon: "https://github.com/favicon.ico"
  - name: "Issues"
    url: "https://github.com/fennifith/TimeDatePicker/issues"
    icon: "/images/ic/bug.svg"
  - name: "Apache License 2.0"
    url: "https://choosealicense.com/licenses/apache-2.0/"
    icon: "/images/ic/copyright.svg"
  - name: "JitPack"
    url: "https://jitpack.io/#me.jfenn/TimeDatePicker"
    icon: "/images/ic/launch.svg"
  - name: "TimeDatePicker.apk (0.0.6 stable)"
    url: "https://github.com/fennifith/TimeDatePicker/releases/download/0.0.6/TimeDatePicker.apk"
    icon: "/images/ic/download.svg"
contributors: 
  - login: "fennifith"
    avatar: "https://avatars1.githubusercontent.com/u/13000407?v=4"
    url: "https://github.com/fennifith"
languages: 
  - "Java"
isDocs: "true"
isWiki: "false"
pushed: "2019-01-16T20:06:55Z"
---

TimeDatePicker is a simple Android library containing several configurable time/date picker views and dialogs.

[![](https://jitpack.io/v/me.jfenn/TimeDatePicker.svg)](https://jitpack.io/#me.jfenn/TimeDatePicker)
[![Build Status](https://travis-ci.com/fennifith/TimeDatePicker.svg)](https://travis-ci.com/fennifith/TimeDatePicker)
[![Discord](https://img.shields.io/discord/514625116706177035.svg)](https://discord.gg/8q8GQF2)

This library was mainly created as a result of problems I ran into setting the colors/themes for Android's default time/date pickers to use. It will also try to combat some of the lack of intuitiveness created by the circular time picker (numbers immediately changing from hours to minutes after selection is nowhere near obvious to new users) while maintaining compatibility back to Android 4.0.3 (ICS).

## Screenshots

| Time Picker (12h) | Time Picker (24h) | Date Picker |
|-------------------|-------------------|-------------|
| ![img](https://github.com/fennifith/TimeDatePicker/blob/master/./.github/images/time-12h.png?raw=true) | ![img](https://github.com/fennifith/TimeDatePicker/blob/master/./.github/images/time-24h.png?raw=true) | ![img](https://github.com/fennifith/TimeDatePicker/blob/master/./.github/images/date.png?raw=true) |

An APK of the sample app can be downloaded [here](/../../releases).

## Usage

### Setup

This project is published on [JitPack](https://jitpack.io), which you can add to your project by copying the following to your root build.gradle file.

```gradle
allprojects {
  repositories {
    ...
    maven { url 'https://jitpack.io' }
  }
}
```

To add the dependency, copy this line into your app module's build.gradle:

```gradle
implementation 'me.jfenn:TimeDatePicker:0.0.6'
```

### Doing Stuff

Proper documentation/instructions will be added later.
