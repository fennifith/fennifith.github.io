---
layout: docs
title: ColorUtils Documentation
---
#### [.](./../../../../../../../index) > [androidutils](./../../../../../../index) > [src](./../../../../../index) > [main](./../../../../index) > [java](./../../../index) > [me](./../../index) > [jfenn](./../index) > [androidutils](./index) > **ColorUtils.kt**

## [Int.isColorDark](https://github.com/fennifith/AndroidUtils/blob/master/androidutils/src/main/java/me/jfenn/androidutils/ColorUtils.kt#L55)

**Type:** `fun`

Determine if a color is readable on a light background, using some magic numbers. 






**Returned Value:** True if the color should be considered "dark". 








## [Int.isColorLight](https://github.com/fennifith/AndroidUtils/blob/master/androidutils/src/main/java/me/jfenn/androidutils/ColorUtils.kt#L64)

**Type:** `fun`

Negation of Int.isColorDark() 






**Returned Value:** True if the color should be considered "light". 








## [getColorDarkness](https://github.com/fennifith/AndroidUtils/blob/master/androidutils/src/main/java/me/jfenn/androidutils/ColorUtils.kt#L73)

**Type:** `private` `fun`

Determine the darkness of a color, using some magic numbers. 





|Parameter Name|Description|
|-----|-----|
|color|A color int to determine the luminance of.|


**Returned Value:**  The darkness of the color; a double between 0 and 1. 








## [Window.autoSystemUiColors](https://github.com/fennifith/AndroidUtils/blob/master/androidutils/src/main/java/me/jfenn/androidutils/ColorUtils.kt#L90)

**Type:** `fun`

Set light status/navigation bar window flags automatically. 
Falls back to Color.BLACK on lower SDK versions. 












