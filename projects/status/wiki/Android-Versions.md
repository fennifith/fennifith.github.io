---
layout: "wiki"
title: "Android Versions"
languages: 
  - "Java"
  - "Shell"
---

## Android Oreo (8.0+)

Status is listed as incompatible with Android Oreo and above due to a variety
of problems detailed in [issue #87][issue87]. These mostly consist of the
system status bar being drawn over all of Status's overlays as a result of the
migration from `TYPE_SYSTEM_OVERLAY` to `TYPE_APPLICATION_OVERLAY`, creating
situations such as the screenshot below:

[issue87]: https://jfenn.me/redirects/?t=github&d=Status/issues/87

![A picture of the status bar, in which the system icons are drawn on top of Status's content, creating an unusable mess.](https://user-images.githubusercontent.com/13000407/55281014-628ea180-5304-11e9-9a3d-79e3eeb084a9.png)

It may be possible to add Android O compatibility to Status by disabling the
icon features by default and optionally granting Status permission through ADB
to disable _most_ of the system icons, allowing Status to display its own
"underneath" without interfering. However, combined with the much stricter
background restrictions and Play Store requirements, this is more work than
I am willing to undertake at the moment.

## Android Marshmallow (6.0+)

Android Marshmallow introduced some more severe background limits, and may kill
some of Status's services arbitrarily if it is not:

* exempt from battery optimizations
* using a persistent notification
