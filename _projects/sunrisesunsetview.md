---
layout: project
type: android-library
title: "Sunrise Sunset View"
description: "A lightweight Android view used for displaying and/or editing sunrise and sunset times."
repo: fennifith/SunriseSunsetView
git: git://github.com/fennifith/SunriseSunsetView.git
links:
  - name: GitHub
    url: https://github.com/fennifith/SunriseSunsetView
    icon: https://github.com/favicon.ico
  - name: Issues
    url: https://github.com/fennifith/SunriseSunsetView/issues
    icon: /images/ic/bug.svg
  - name: Apache License 2.0
    url: https://choosealicense.com/licenses/apache-2.0/
    icon: /images/ic/copyright.svg
  - name: JitPack
    url: https://jitpack.io/#me.jfenn/SunriseSunsetView
    icon: /images/ic/launch.svg
  - name: SunriseSunsetView.apk (0.0.2 stable)
    url: https://github.com/fennifith/SunriseSunsetView/releases/download/0.0.2/SunriseSunsetView.apk
    icon: /images/ic/download.svg
contributors:
  - login: fennifith
    avatar: https://avatars1.githubusercontent.com/u/13000407?v=4
    url: https://github.com/fennifith
isDocs: true
isWiki: false
languages:
  - Java
pushed: 2018-11-16T18:18:04Z
---

SunriseSunsetView is a lightweight Android view used for displaying and/or editing sunrise and sunset times. This is a part of my efforts to modularize some of the things that I write; it was originally a part of [Alarmio](https://jfenn.me/projects/alarmio), and has been separated into its own library.

[![](https://jitpack.io/v/me.jfenn/SunriseSunsetView.svg)](https://jitpack.io/#me.jfenn/SunriseSunsetView)

For testing and experimentation purposes, a sample apk can be downloaded [here](https://jfenn.me/projects/sunrisesunsetview).

|A Screenshot|
|-----|
|![img](https://raw.githubusercontent.com/fennifith/SunriseSunsetView/master/./.github/images/screenshot.png?raw=true)|

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
implementation 'me.jfenn:SunriseSunsetView:0.0.1'
```

### Basic Use

Adding the SlideActionView somewhere in your layout is fairly simple. Here is an example:

```xml
<me.jfenn.sunrisesunsetview.SunriseSunsetView
  android:id="@+id/sunView"
  android:layout_width="match_parent"
  android:layout_height="240dp" />
```

Note the `layout_height="240dp"`. The view does not have a minimum size, and will scale according to its width and height inside of the layout that it is placed in, so you must define a width and height for it to use.

You can specify an interface to recieve updates from the view by calling `.setListener(SunriseListener)`...

```java
sunView.setListener(new SunriseSunsetView.SunriseListener() {
  @Override
  public void onSunriseChanged(SunriseSunsetView view, long sunriseMillis) {
    // do something
  }
  
  @Override
  public void onSunsetChanged(SunriseSunsetView view, long sunsetMillis) {
    // do something else
  }
});
```

The sunrise and sunset times are passed as milliseconds ranging from 0 to "24 hours", or 86400000. Note that these values are not dependent on your current time zone - they start at 0, representing "0:00", and end at 864399999, representing "23:59".

You can set these values by calling `.setDayStart(millis)` and `.setDayEnd(millis)`.

As I am too lazy to write any more documentation, you can see my automated documentation for the view [here](https://jfenn.me/projects/sunrisesunsetview/docs/sunrisesunsetview/src/main/java/me/jfenn/sunrisesunsetview/SunriseSunsetView).
