---
layout: docs
title: StatusServiceImpl Documentation
---
#### [.](./../../../../../../../../index) > [app](./../../../../../../../index) > [src](./../../../../../../index) > [main](./../../../../../index) > [java](./../../../../index) > [com](./../../../index) > [james](./../../index) > [status](./../index) > [services](./index) > **StatusServiceImpl.java**

## [onTaskRemoved](https://github.com/fennifith/Status/blob/master/app/src/main/java/com/james/status/services/StatusServiceImpl.java#L231)

**Type:** `public` `void`

I can't remember why this is here or what it does, but it seems important. 





|Parameter Name|Description|
|-----|-----|
|rootIntent|a... root intent, possibly part of a plant  |








## [getOverlayType](https://github.com/fennifith/Status/blob/master/app/src/main/java/com/james/status/services/StatusServiceImpl.java#L249)

**Type:** `public` `int`

Decides which overlay type Status should use 
on a specific device. 






**Returned Value:** The overlay type for Status to use.  








## [setUp](https://github.com/fennifith/Status/blob/master/app/src/main/java/com/james/status/services/StatusServiceImpl.java#L261)

**Type:** `public` `void`

Initializes the StatusView if it doesn't exist yet, sets listeners, 
applies any changes to preferences/icons 





|Parameter Name|Description|
|-----|-----|
|shouldKeepOld|whether to reuse the old IconData instances  |








