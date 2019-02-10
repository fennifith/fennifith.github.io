---
layout: docs
title: IconStyleData Documentation
---
#### [.](./../../../../../../../../index) > [app](./../../../../../../../index) > [src](./../../../../../../index) > [main](./../../../../../index) > [java](./../../../../index) > [com](./../../../index) > [james](./../../index) > [status](./../index) > [data](./index) > **IconStyleData.java**

## [getSize](https://github.com/fennifith/Status/blob/master/app/src/main/java/com/james/status/data/IconStyleData.java#L75)

**Type:** `public` `int`

Get the amount of icons in the style. 






**Returned Value:** An integer representing the amount of icons in the style.  








## [getDrawable](https://github.com/fennifith/Status/blob/master/app/src/main/java/com/james/status/data/IconStyleData.java#L86)

**Type:** `@Nullable` `public` `Drawable`

Get a drawable of the style at a particular index. 





|Parameter Name|Description|
|-----|-----|
|context|The current application context.|
|value|The index to obtain.|


**Returned Value:** A created Drawable, or null if something has gone horribly wrong.  








## [getBitmap](https://github.com/fennifith/Status/blob/master/app/src/main/java/com/james/status/data/IconStyleData.java#L122)

**Type:** `@Nullable` `public` `Bitmap`

Get a bitmap from the style at a particular index. This will 
also cache the created bitmaps to increase performance of future 
calls. 





|Parameter Name|Description|
|-----|-----|
|context|The current application context.|
|value|The index to obtain.|


**Returned Value:** A created bitmap, or null if something has gone horribly wrong.  








## [writeToSharedPreferences](https://github.com/fennifith/Status/blob/master/app/src/main/java/com/james/status/data/IconStyleData.java#L146)

**Type:** `public` `void`

Write the icon style to a SharedPreferences instance. 





|Parameter Name|Description|
|-----|-----|
|editor|A SharedPreferences instance.|
|prefix|The preferences prefix.  |








## [fromSharedPreferences](https://github.com/fennifith/Status/blob/master/app/src/main/java/com/james/status/data/IconStyleData.java#L161)

**Type:** `@Nullable` `public` `static` `IconStyleData`

Instantiate an IconStyleData from an index in SharedPreferences, based on a name. 





|Parameter Name|Description|
|-----|-----|
|prefs|A SharedPreferences instance.|
|prefix|The preferences prefix.|
|name|The name of the style.|


**Returned Value:** The created IconStyleData, or null if not found.  








## [fromResource](https://github.com/fennifith/Status/blob/master/app/src/main/java/com/james/status/data/IconStyleData.java#L209)

**Type:** `@Nullable` `public` `static` `IconStyleData`

Instantiate an icon style from the app resources using a set of strings. 
If a resource is not found, this will return null. This is particularly 
useful for adding styles that may not necessarily be included in the 
published source code of the application; resources that may be under 
a different license will only be used if they are available. 





|Parameter Name|Description|
|-----|-----|
|name|The user-facing name of the style.|
|type|The type of icons the style uses, e.g. vector assets.|
|context|The current application context.|
|resourceNames|The names of the resources.|


**Returned Value:** The created IconStyleData, or null.  








