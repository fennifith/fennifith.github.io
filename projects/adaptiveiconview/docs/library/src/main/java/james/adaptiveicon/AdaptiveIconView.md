---
layout: docs
---
#### [.](./../../../../../../index) > [library](./../../../../../index) > [src](./../../../../index) > [main](./../../../index) > [java](./../../index) > [james](./../index) > [adaptiveicon](./index) > **AdaptiveIconView.java**

## [setIcon](https://github.com/TheAndroidMaster/AdaptiveIconView/blob/master/library/src/main/java/james/adaptiveicon/AdaptiveIconView.java#L66)

**Type:** `public` `void`

Sets the icon for this view to use. It must contain a foreground image, 
but the background image is optional - without it, the foreground image 
will not be clipped and any scaling will not be applied. 





|Parameter Name|Description|
|-----|-----|
|icon|the icon for this view to use  |








## [getIcon](https://github.com/TheAndroidMaster/AdaptiveIconView/blob/master/library/src/main/java/james/adaptiveicon/AdaptiveIconView.java#L80)

**Type:** `public` `AdaptiveIcon`

Returns the current AdaptiveIcon. 






**Returned Value:** the current AdaptiveIcon  








## [setPath](https://github.com/TheAndroidMaster/AdaptiveIconView/blob/master/library/src/main/java/james/adaptiveicon/AdaptiveIconView.java#L89)

**Type:** `public` `void`

Sets a custom path for this view to use, providing that its AdaptiveIcon has 
a background image 





|Parameter Name|Description|
|-----|-----|
|size|the bounds of the path, used to scale it to fit the size of the view|
|path|the custom path  |








## [setPath](https://github.com/TheAndroidMaster/AdaptiveIconView/blob/master/library/src/main/java/james/adaptiveicon/AdaptiveIconView.java#L103)

**Type:** `public` `void`

Sets a path for this view to use from one of the presets. 





|Parameter Name|Description|
|-----|-----|
|pathType|must be either PATH_CIRCLE, PATH_SQUIRCLE, PATH_ROUNDED_SQUARE, PATH_SQUARE, or PATH_TEARDROP  |








## [setPath](https://github.com/TheAndroidMaster/AdaptiveIconView/blob/master/library/src/main/java/james/adaptiveicon/AdaptiveIconView.java#L137)

**Type:** `public` `void`

Sets a custom path from string data. 





|Parameter Name|Description|
|-----|-----|
|pathData|the path data string to use  |








## [getPath](https://github.com/TheAndroidMaster/AdaptiveIconView/blob/master/library/src/main/java/james/adaptiveicon/AdaptiveIconView.java#L147)

**Type:** `public` `Path`

Returns the current path this view is using. 






**Returned Value:** the current path this view is using  








## [setOffset](https://github.com/TheAndroidMaster/AdaptiveIconView/blob/master/library/src/main/java/james/adaptiveicon/AdaptiveIconView.java#L156)

**Type:** `public` `void`

Call this method to offset the icon for animating icon movements 





|Parameter Name|Description|
|-----|-----|
|offsetX|the amount to move the icon (reversed) horizontally, between 0 and 1|
|offsetY|the amount to move the icon (reversed) vertically, between 0 and 1  |








