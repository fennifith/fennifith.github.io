---
layout: project
type: android-library
title: Attribouter
description: A lightweight "about screen" library to allow quick but customizable attribution in Android apps.
repo: TheAndroidMaster/Attribouter
links:
  - name: GitHub
    url: https://github.com/TheAndroidMaster/Attribouter
    icon: https://github.com/favicon.ico
  - name: Issues
    url: https://github.com/TheAndroidMaster/Attribouter/issues
    icon: /images/ic/bug.svg
  - name: Documentation
    url: https://github.com/TheAndroidMaster/Attribouter/wiki
    icon: /images/ic/assignment.svg
  - name: Apache License 2.0
    url: https://choosealicense.com/licenses/apache-2.0/
    icon: /images/ic/copyright.svg
  - name: Bintray
    url: https://bintray.com/18jafenn90/maven/attribouter
    icon: https://bintray.com/favicon.ico
  - name: Attribouter.apk
    url: https://github.com/TheAndroidMaster/Attribouter/releases/download/v0.1.0/Attribouter.apk
    icon: /images/ic/download.svg
contributors:
  - login: TheAndroidMaster
    avatar: https://avatars1.githubusercontent.com/u/13000407?v=4
    url: https://github.com/TheAndroidMaster
  - login: gcantoni
    avatar: https://avatars0.githubusercontent.com/u/30368951?v=4
    url: https://github.com/gcantoni
---

Attribouter is a lightweight "about screen" for Android apps, built to allow developers to easily give credit to a project's contributors and open source libraries, while matching the style of their app and saving the largest amount of time and effort possible. It is meant to use GitHub's [REST API](https://developer.github.com/v3/) to fetch and display information about open source projects and contributors, but it allows you to define some or all of its data in its configuration file in your app as well.

### Screenshots

This is just sample data. It is not real. Though Jahir is lazy, so that part is (joking).

|Contributors|Contributor|Licenses|License|
|-----|-----|-----|-----|
|![img](https://jfenn.me/images/screenshots/Attribouter-Main.png)|![img](https://jfenn.me/images/screenshots/Attribouter-Contributor.png)|![img](https://jfenn.me/images/screenshots/Attribouter-Licenses.png)|![img](https://jfenn.me/images/screenshots/Attribouter-License.png)|

### APK

For demonstration and experimentation, an apk of the sample project can be downloaded [here](https://github.com/TheAndroidMaster/Attribouter/releases/).

## Usage

### Setup

The Gradle dependency is available through jCenter, which is used by default in Android Studio. To add the dependency to your project, copy this line into the dependencies section of your app's build.gradle file.
 
```gradle
implementation 'me.jfenn:attribouter:0.1.0'
```

#### Starting an Activity
This is pretty simple.

``` java
Attribouter.from(context).show();
```

#### Creating a Fragment
This is also pretty simple.

``` java
Fragment fragment = Attribouter.from(context).toFragment();
```

### Request Limits

This library does not use an auth key for the GitHub API by default. It does cache data for up to 10 days to avoid crossing GitHub's [rate limits](https://developer.github.com/v3/rate_limit/), but if your project has more than a few contributors and libraries *or* you want it to have access to a private repository, you will need to provide an auth token by calling `.withGitHubToken(token)` on your instance of `Attribouter`.

### Setup

By default, Attribouter will use the configuration file at [res/xml/attribouter.xml](./attribouter/src/main/res/xml/attribouter.xml). You can either name your configuration file "attribouter.xml" to override the resource, or name it differently and call `.withFile(R.xml.[name])` on your instance of `Attribouter` instead.

The configuration file consists of a single root element, `<about>`, with many child elements that can be placed any amount of times in any order, the same as views in a layout file. These elements, called "wedges" in this library for no apparent reason, are created by Attribouter and added to the page in the order and heirarchy that they are defined in. To create your configuration file, you can either use the [file from the sample project](./app/src/main/res/xml/about.xml) as a template or use [the documentation](https://jfenn.me/Attribouter/) to write your own.
