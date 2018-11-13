---
layout: docs
title: ColorUtils Documentation
---
#### [.](./../../../../../../../index) > [androidutils](./../../../../../../index) > [src](./../../../../../index) > [main](./../../../../index) > [java](./../../../index) > [me](./../../index) > [jfenn](./../index) > [androidutils](./index) > **ColorUtils.java**

## [isColorDark](https://github.com/fennifith/AndroidUtils/blob/master/androidutils/src/main/java/me/jfenn/androidutils/ColorUtils.java#L10)

**Type:** `public` `static` `boolean`

Determine if a color is dark or not, using some magic numbers. 





|Parameter Name|Description|
|-----|-----|
|color|A color int to determine the luminance of.|


**Returned Value:**  True if the color should be considered "light".  





**Reference:** [this confusing wikipedia article](https://en.wikipedia.org/wiki/Luma_%28video%29) 





## [getColorDarkness](https://github.com/fennifith/AndroidUtils/blob/master/androidutils/src/main/java/me/jfenn/androidutils/ColorUtils.java#L22)

**Type:** `private` `static` `double`

Determine the darkness of a color, using some magic numbers. 





|Parameter Name|Description|
|-----|-----|
|color|A color int to determine the luminance of.|


**Returned Value:**  The darkness of the color; a double between 0 and 1.  





**Reference:** [this confusing wikipedia article](https://en.wikipedia.org/wiki/Luma_%28video%29) 





## [withBackground](https://github.com/fennifith/AndroidUtils/blob/master/androidutils/src/main/java/me/jfenn/androidutils/ColorUtils.java#L36)

**Type:** `@ColorInt` `public` `static` `int`

Calculates an opaque color that is equivalent to a translucent color drawn on top of 
another. 





|Parameter Name|Description|
|-----|-----|
|color|The (transparent) color to be drawn on top.|
|background|The (opaque) color to be drawn on top of.|


**Returned Value:**  The opaque equivalent of the two colors.  








