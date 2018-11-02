---
layout: project
type: android-app
title: "Port Authority Complaint Reporter"
description: "A small application to make it easier for riders to report issues to the Pittsburgh Port Authority bus system."
repo: fennifith/PortAuthorityComplaintReporter
git: git://github.com/fennifith/PortAuthorityComplaintReporter.git
links:
  - name: GitHub
    url: https://github.com/fennifith/PortAuthorityComplaintReporter
    icon: https://github.com/favicon.ico
  - name: Issues
    url: https://github.com/fennifith/PortAuthorityComplaintReporter/issues
    icon: /images/ic/bug.svg
  - name: Apache License 2.0
    url: https://choosealicense.com/licenses/apache-2.0/
    icon: /images/ic/copyright.svg
  - name: Google Play
    url: https://play.google.com/store/apps/details?id=me.jfenn.pacomplaints
    icon: /images/ic/play-store.svg
  - name: PortAuthorityComplainter.apk (v1.1 stable)
    url: https://github.com/fennifith/PortAuthorityComplaintReporter/releases/download/v1.1/PortAuthorityComplainter.apk
    icon: /images/ic/download.svg
contributors:
  - login: fennifith
    avatar: https://avatars1.githubusercontent.com/u/13000407?v=4
    url: https://github.com/fennifith
isDocs: true
isWiki: false
languages:
  - Java
---

The Port Authority Feedback Reporter is a small application to make it easier for bus riders in Pittsburgh, PA to report incedents on the Port Authority bus system (such as missing / damaged bike racks - the main reason for creating this app). It works by scraping & injecting javascript into [this page](http://www.portauthority.org/paac/apps/webcomments/pgcomment.asp?t=con), and is designed to make it easier to report issues on mobile devices by using larger and more significant touch targets, auto-filling the date and time, and remembering the name, email, and phone number fields so that the user has less actions to perform in order to submit feedback.

|Input|Input|Preview|About (using [Attribouter](https://jfenn.me/about/?Attribouter)|
|-----|-----|-----|-----|
|![img](https://jfenn.me/images/screenshots/PAComplainter-Input.png?s=1)|![img](https://jfenn.me/images/screenshots/PAComplainter-Input2.png)|![img](https://jfenn.me/images/screenshots/PAComplainter-Preview.png)|![img](https://jfenn.me/images/screenshots/PAComplainter-About.png)|
