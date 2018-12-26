---
layout: project
type: android-game
title: "Asteroid"
description: "A simple Android game based on avoiding incoming asteroids"
repo: fennifith/Asteroid
git: git://github.com/fennifith/Asteroid.git
links:
  - name: GitHub
    url: https://github.com/fennifith/Asteroid
    icon: https://github.com/favicon.ico
  - name: Issues
    url: https://github.com/fennifith/Asteroid/issues
    icon: /images/ic/bug.svg
  - name: Apache License 2.0
    url: https://choosealicense.com/licenses/apache-2.0/
    icon: /images/ic/copyright.svg
  - name: Google Play
    url: https://play.google.com/store/apps/details?id=james.asteroid
    icon: /images/ic/play-store.svg
  - name: app-release.apk (1.3 stable)
    url: https://github.com/fennifith/Asteroid/releases/download/1.3/app-release.apk
    icon: /images/ic/download.svg
contributors:
  - login: fennifith
    avatar: https://avatars1.githubusercontent.com/u/13000407?v=4
    url: https://github.com/fennifith
  - login: TacoTheDank
    avatar: https://avatars3.githubusercontent.com/u/32376686?v=4
    url: https://github.com/TacoTheDank
isDocs: true
isWiki: false
languages:
  - Java
pushed: 2018-12-26T17:47:27Z
---

# Asteroid

Asteroid is a simple Android game about avoiding incoming asteroids. It is made entirely using the Android Canvas API. All in-game graphics are either stored as vector drawables or drawn during runtime.

[![Build Status](https://travis-ci.com/fennifith/Asteroid.svg?branch=master)](https://travis-ci.com/fennifith/Asteroid)
[![Discord](https://img.shields.io/discord/514625116706177035.svg)](https://discord.gg/hTAZHJt)

|Main Screen|Gameplay|
|--------|--------|
|![img](https://raw.githubusercontent.com/fennifith/Asteroid/master/./.github/main.png)|![img](https://raw.githubusercontent.com/fennifith/Asteroid/master/./.github/gameplay.png)|

## Install

The app is published on Google Play:

[<img src="https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png"
    alt="Get it on Google Play"
    height="80">](https://play.google.com/store/apps/details?id=james.asteroid)

Alternatively, you can download the latest APK from [the GitHub releases](https://github.com/fennifith/Asteroid/blob/master/../../releases/).

## How to Play

Your "ship" is drawn at the bottom of the screen. You can press and hold the left and right sides of the screen to move left and right, respectively. Avoid the incoming asteroids. Double-tap to fire the current weapon. This launches a projectile that can destroy asteroids. Destroying asteroids gets you points. After destroying a certain amount of asteroids, you get a reward - more ammunition or a new weapon.

As you destroy more asteroids, the game speeds up and it becomes harder to evade them. Also, you have an ammunition counter at the bottom of the screen that decreases as you fire more projectiles. If you are hit by an asteroid or you run out of ammunition, you lose the game. The objective is to hit as many asteroids as you can, and get as many points as possible, without losing.

## License

```nohighlight
Copyright 2018 James Fenn

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```
