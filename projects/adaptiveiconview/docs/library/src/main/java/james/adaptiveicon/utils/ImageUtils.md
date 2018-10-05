---
layout: docs
---
#### [.](./../../../../../../../index) > [library](./../../../../../../index) > [src](./../../../../../index) > [main](./../../../../index) > [java](./../../../index) > [james](./../../index) > [adaptiveicon](./../index) > [utils](./index) > **ImageUtils.java**

## [drawableToBitmap](https://github.com/TheAndroidMaster/AdaptiveIconView/blob/master/library/src/main/java/james/adaptiveicon/utils/ImageUtils.java#L16)

**Type:** `public` `static` `Bitmap`

Converts a drawable to a bitmap 





|Parameter Name|Description|
|-----|-----|
|drawable|a drawable|


**Returned Value:** a bitmap  








## [hasTransparency](https://github.com/TheAndroidMaster/AdaptiveIconView/blob/master/library/src/main/java/james/adaptiveicon/utils/ImageUtils.java#L46)

**Type:** `public` `static` `boolean`

Iterates through each pixel in a Bitmap and determines 
whether it has any transparent parts. 





|Parameter Name|Description|
|-----|-----|
|bitmap|a bitmap|


**Returned Value:** true if any part of the bitmap is transparent  








## [removeShadow](https://github.com/TheAndroidMaster/AdaptiveIconView/blob/master/library/src/main/java/james/adaptiveicon/utils/ImageUtils.java#L64)

**Type:** `public` `static` `Bitmap`

Removes the shadow (and any other transparent parts) 
from a bitmap. 





|Parameter Name|Description|
|-----|-----|
|bitmap|the original bitmap|


**Returned Value:** the bitmap with the shadow removed  








## [getDominantColor](https://github.com/TheAndroidMaster/AdaptiveIconView/blob/master/library/src/main/java/james/adaptiveicon/utils/ImageUtils.java#L86)

**Type:** `@ColorInt` `public` `static` `int`

Finds the color with the most occurrences inside of a bitmap. 





|Parameter Name|Description|
|-----|-----|
|bitmap|the bitmap to get the dominant color of|


**Returned Value:** the dominant color  








