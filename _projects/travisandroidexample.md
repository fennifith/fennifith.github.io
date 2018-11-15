---
layout: project
type: undefined
title: "ValCanBuild/TravisAndroidExample"
description: "Example of distributing an Android app to GitHub / Play Store releases."
repo: fennifith/TravisAndroidExample
git: git://github.com/fennifith/TravisAndroidExample.git
links:
  - name: GitHub
    url: https://github.com/fennifith/TravisAndroidExample
    icon: https://github.com/favicon.ico
  - name: Issues
    url: https://github.com/fennifith/TravisAndroidExample/issues
    icon: /images/ic/bug.svg
  - name: Other
    url: https://choosealicense.com/licenses/other/
    icon: /images/ic/copyright.svg
contributors:
  - login: fennifith
    avatar: https://avatars1.githubusercontent.com/u/13000407?v=4
    url: https://github.com/fennifith
  - login: ValCanBuild
    avatar: https://avatars1.githubusercontent.com/u/1429306?v=4
    url: https://github.com/ValCanBuild
isDocs: false
isWiki: false
languages:
  - Java
pushed: 2018-11-14T21:20:16Z
---

TravisAndroidExample is a sample project demonstrating how to distribute an Android app to GitHub and Play Store releases using [Travis CI](https://travis-ci.com/).

You can find the accompanying blog [here](https://jfenn.me/blog/2018-11-14-Continuous-Integration).

Relevant files: 

- [.travis.yml](https://github.com/fennifith/TravisAndroidExample/blob/master/./.travis.yml)
- [build.gradle](https://github.com/fennifith/TravisAndroidExample/blob/master/./build.gradle)
- [app/build.gradle](./app/build.gradle)
- [key.jks](https://github.com/fennifith/TravisAndroidExample/blob/master/./key.jks) (a dummy file)
- [service.json](https://github.com/fennifith/TravisAndroidExample/blob/master/./service.json) (also a dummy file)
- [secrets.tar](https://github.com/fennifith/TravisAndroidExample/blob/master/./secrets.tar) (a dummy file composed of the two dummy files)
- [secrets.tar.enc](https://github.com/fennifith/TravisAndroidExample/blob/master/./secrets.tar.enc) (this shouldn't be a dummy file - since it is encrypted you will never know - but in this sample project it is)
