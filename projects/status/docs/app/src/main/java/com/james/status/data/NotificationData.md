---
layout: docs
title: NotificationData Documentation
---
#### [.](./../../../../../../../../index) > [app](./../../../../../../../index) > [src](./../../../../../../index) > [main](./../../../../../index) > [java](./../../../../index) > [com](./../../../index) > [james](./../../index) > [status](./../index) > [data](./index) > **NotificationData.java**

## [init](https://github.com/fennifith/Status/blob/master/app/src/main/java/com/james/status/data/NotificationData.java#L74)

**Type:** `private` `void`

Instantiate the NotificationData from whatever information there is. 





|Parameter Name|Description|
|-----|-----|
|notification|The Notification that was sent.|
|id|An "id" that may or may not be tied to the notification - who knows.|
|packageName|The package name that the notification _might_ have been from - we're only guessing here, after all.  |








## [set](https://github.com/fennifith/Status/blob/master/app/src/main/java/com/james/status/data/NotificationData.java#L162)

**Type:** `public` `boolean`

Change the attributes of this NotificationData to match those of 
another newly received notification. This should only be called 
when we are _sure_ that the two notifications are, er, the same. 





|Parameter Name|Description|
|-----|-----|
|notification|The new notification, that is, the new version of the notification that this notification is.|


**Returned Value:** True if anything changed.  








## [getIcon](https://github.com/fennifith/Status/blob/master/app/src/main/java/com/james/status/data/NotificationData.java#L237)

**Type:** `public` `Bitmap`

Get an icon bitmap with a specified height. If the current 
bitmap matches the height, great! if not, it's scaled to 
match it (and a reference to the scaled version is kept 
as "cache"). 





|Parameter Name|Description|
|-----|-----|
|height|The height to generate a bitmap at.|


**Returned Value:** The created bitmap, or null if things went wrong.  








## [getIcon](https://github.com/fennifith/Status/blob/master/app/src/main/java/com/james/status/data/NotificationData.java#L257)

**Type:** `@Nullable` `public` `Bitmap`

Get a full res icon of the notification. 





|Parameter Name|Description|
|-----|-----|
|context|The current application context.|


**Returned Value:** The created bitmap, or null if things went wrong.  








