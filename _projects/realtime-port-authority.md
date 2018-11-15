---
layout: project
type: undefined
title: "rectangle-dbmi/Realtime-Port-Authority"
description: "Realtime transit tracker of Pittsburgh's Port Authority buses using the realtime PAT API using Google Maps to Display the Maps"
repo: fennifith/Realtime-Port-Authority
git: git://github.com/fennifith/Realtime-Port-Authority.git
links:
  - name: GitHub
    url: https://github.com/fennifith/Realtime-Port-Authority
    icon: https://github.com/favicon.ico
  - name: Issues
    url: https://github.com/fennifith/Realtime-Port-Authority/issues
    icon: /images/ic/bug.svg
  - name: Apache License 2.0
    url: https://choosealicense.com/licenses/apache-2.0/
    icon: /images/ic/copyright.svg
contributors:
  - login: epicstar
    avatar: https://avatars1.githubusercontent.com/u/7193970?v=4
    url: https://github.com/epicstar
  - login: RitwikGupta
    avatar: https://avatars1.githubusercontent.com/u/4959141?v=4
    url: https://github.com/RitwikGupta
  - login: mikeantonacci
    avatar: https://avatars2.githubusercontent.com/u/8284049?v=4
    url: https://github.com/mikeantonacci
  - login: VincentIII
    avatar: https://avatars1.githubusercontent.com/u/800672?v=4
    url: https://github.com/VincentIII
  - login: fennifith
    avatar: https://avatars1.githubusercontent.com/u/13000407?v=4
    url: https://github.com/fennifith
isDocs: false
isWiki: false
languages:
  - Java
  - Python
pushed: 2016-07-05T15:59:25Z
---

Realtime-Port-Authority
=======================

The purpose of this was to create a real-time tracking of port authority
of Pittsburgh, PA, using the realtime API given by [Port Authority](http://realtime.portauthority.org/bustime/home.jsp) on top of
the Google Maps API.

### Features:
- Buses Run at Realtime
- shows ETAs of buses to stops and stops to buses
- shows stop markers above a certain zoom
- ListView saves via sharedpreferences
- polylines added via Asynctask
- multiple polylines connected to each other
- uses xml to read and write via XmlPullParser


### Releases:
- [Google Play Store](https://play.google.com/store/apps/details?id=rectangledbmi.com.pittsburghrealtimetracker)

API limitations:
- the buses don't update until after 10+ seconds. Our app only updates 
every 10 seconds
- There are only a couple buses offered publicly. We promise to get updates
to the new buses as soon as possible!

#Android Development

Please refer to the [Documentation](https://github.com/rectangle-dbmi/Realtime-Port-Authority/tree/master/Documentation) for instructions to install and use the project. You may have to scroll down to the bottom and please read the headers before we make a wiki.

Before running the program, you must request to get the PortAuthorityAPI class and email one of the main contributors. The instructions are in the LICENSE file.

This will be done using [Android Studio](https://developer.android.com/sdk/installing/studio.html) 1.0 as of 12-09-2014.


