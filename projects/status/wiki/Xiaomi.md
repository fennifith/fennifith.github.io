---
layout: "wiki"
title: "Xiaomi"
languages: 
  - "Java"
  - "Kotlin"
  - "Shell"
---

## Background Pinning

MIUI does not allow any apps to run in the background by default. In order to
use Status, it will need to be pinned to the background at all times. To pin
an app:

* Open Status
* Go to your home screen
* Open the recent apps / task manager
* Pull down on the app, revealing two icons: "Lock" and "Settings"
* Click the "Lock" icon

## Autostart

Status needs to be able to autostart its services, or it will not function over
longer periods of time. To enable this, go to Settings > Installed Apps >
Status, and make sure that "Autostart" is turned on. This option may not be
directly visible inside the app settings screen, you may have to go through
Permissions > Other Permissions in order to get to it. It is also sometimes
renamed to "Start in Background" instead of "Autostart".

On other versions of MIUI, this may not be directly inside the settings app, in
which case there will be a separate "Security" app for this purpose. Open it,
go to Permissions > Autostart, find Status, and enable it.

## Battery Optimizations

Xiaomi has their own battery optimization settings. To change them, go to
Settings > Battery & Performance > Manage apps battery performance, find
"Status" in the list, and make sure that "No restrictions" is checked.

## Developer Options

If you are comfortable with using the developer settings on your device, two
more settings that you can disable to give Status more stability are "don't keep
activities" and "memory optimization".

## Restarting

Some or all of these settings may go back to their previous states upon a
restart. For obvious reasons I cannot tell you to never turn your phone off,
but keep in mind that you may have to perform some of these steps again when
it is turned back on.
