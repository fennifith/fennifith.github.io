---
layout: docs
title: AdaptiveIcon Documentation
---
#### [.](./../../../../../../index) > [library](./../../../../../index) > [src](./../../../../index) > [main](./../../../index) > [java](./../../index) > [james](./../index) > [adaptiveicon](./index) > **AdaptiveIcon.java**

## [AdaptiveIcon](https://github.com/TheAndroidMaster/AdaptiveIconView/blob/master/library/src/main/java/james/adaptiveicon/AdaptiveIcon.java#L40)

**Type:** `public`





|Parameter Name|Description|
|-----|-----|
|fgDrawable|the foreground drawable|
|bgDrawable|the background drawable, or null if the foreground drawable should not be clipped|
|scale|the scale to apply to the clipped drawables (assuming that bgDrawable is not null)  |








## [AdaptiveIcon](https://github.com/TheAndroidMaster/AdaptiveIconView/blob/master/library/src/main/java/james/adaptiveicon/AdaptiveIcon.java#L51)

**Type:** `public`





|Parameter Name|Description|
|-----|-----|
|fgBitmap|the foreground bitmap|
|bgBitmap|the background bitmap, or null if the foreground bitmap should not be clipped|
|scale|the scale to apply to the clipped bitmaps (assuming that bgBitmap is not null)  |








## [getFgDrawable](https://github.com/TheAndroidMaster/AdaptiveIconView/blob/master/library/src/main/java/james/adaptiveicon/AdaptiveIcon.java#L62)

**Type:** `public` `Drawable`





|Parameter Name|Description|
|-----|-----|
|context|an active context|


**Returned Value:** the foreground drawable of the icon  








## [getBgDrawable](https://github.com/TheAndroidMaster/AdaptiveIconView/blob/master/library/src/main/java/james/adaptiveicon/AdaptiveIcon.java#L72)

**Type:** `@Nullable` `public` `Drawable`





|Parameter Name|Description|
|-----|-----|
|context|an active context|


**Returned Value:** the background drawable of the icon, or null if the foreground should not be clipped  








## [getFgBitmap](https://github.com/TheAndroidMaster/AdaptiveIconView/blob/master/library/src/main/java/james/adaptiveicon/AdaptiveIcon.java#L83)

**Type:** `public` `Bitmap`






**Returned Value:** the foreground bitmap of the icon  








## [getBgBitmap](https://github.com/TheAndroidMaster/AdaptiveIconView/blob/master/library/src/main/java/james/adaptiveicon/AdaptiveIcon.java#L92)

**Type:** `@Nullable` `public` `Bitmap`






**Returned Value:** the background bitmap of the icon, or null if the foreground should not be clipped  








## [recycle](https://github.com/TheAndroidMaster/AdaptiveIconView/blob/master/library/src/main/java/james/adaptiveicon/AdaptiveIcon.java#L106)

**Type:** `public` `void`

Recycles the bitmaps used in this icon 












## [with](https://github.com/TheAndroidMaster/AdaptiveIconView/blob/master/library/src/main/java/james/adaptiveicon/AdaptiveIcon.java#L121)

**Type:** `public` `Loader`





|Parameter Name|Description|
|-----|-----|
|context|the active context for the loader to use|


**Returned Value:** the loader, for method chaining  








## [fallback](https://github.com/TheAndroidMaster/AdaptiveIconView/blob/master/library/src/main/java/james/adaptiveicon/AdaptiveIcon.java#L130)

**Type:** `public` `Loader`

Sets a fallback for the loader to use if an adaptive icon 
cannot be obtained. 





|Parameter Name|Description|
|-----|-----|
|fallback|the fallback to use|


**Returned Value:** the loader, for method chaining  








## [load](https://github.com/TheAndroidMaster/AdaptiveIconView/blob/master/library/src/main/java/james/adaptiveicon/AdaptiveIcon.java#L142)

**Type:** `@Nullable` `public` `AdaptiveIcon`

Loads an adaptive icon. 





|Parameter Name|Description|
|-----|-----|
|info|the app to load the icon for|


**Returned Value:** the adaptive icon, or null if it cannot be obtained  








## [loadAsync](https://github.com/TheAndroidMaster/AdaptiveIconView/blob/master/library/src/main/java/james/adaptiveicon/AdaptiveIcon.java#L280)

**Type:** `public` `Thread`

Crappy async implementation 





|Parameter Name|Description|
|-----|-----|
|info|the app to load the icon for|
|callback|an interface to pass the adaptive icon to, or null if it cannot be obtained|


**Returned Value:** the started thread  








## [withBackgroundColor](https://github.com/TheAndroidMaster/AdaptiveIconView/blob/master/library/src/main/java/james/adaptiveicon/AdaptiveIcon.java#L313)

**Type:** `public` `RoundIconFallback`





|Parameter Name|Description|
|-----|-----|
|backgroundColor|the color of the background, as a color int|


**Returned Value:** the current RoundIconFallback, for method chaining  








## [withBackground](https://github.com/TheAndroidMaster/AdaptiveIconView/blob/master/library/src/main/java/james/adaptiveicon/AdaptiveIcon.java#L322)

**Type:** `public` `RoundIconFallback`





|Parameter Name|Description|
|-----|-----|
|background|the drawable to use as the background, or null to find a color automatically|


**Returned Value:** the current RoundIconFallback, for method chaining  








## [withScale](https://github.com/TheAndroidMaster/AdaptiveIconView/blob/master/library/src/main/java/james/adaptiveicon/AdaptiveIcon.java#L331)

**Type:** `public` `RoundIconFallback`





|Parameter Name|Description|
|-----|-----|
|scale|the scale of the legacy icon, preferably between 1 and 2, but other values greater than 0 work also|


**Returned Value:** the current RoundIconFallback, for method chaining  








## [shouldRemoveShadow](https://github.com/TheAndroidMaster/AdaptiveIconView/blob/master/library/src/main/java/james/adaptiveicon/AdaptiveIcon.java#L340)

**Type:** `public` `RoundIconFallback`





|Parameter Name|Description|
|-----|-----|
|removeShadow|whether the shadow (or any other transparent parts) should be removed from the icon|


**Returned Value:** the current RoundIconFallback, for method chaining  








## [withBackgroundColor](https://github.com/TheAndroidMaster/AdaptiveIconView/blob/master/library/src/main/java/james/adaptiveicon/AdaptiveIcon.java#L433)

**Type:** `public` `LegacyIconFallback`





|Parameter Name|Description|
|-----|-----|
|backgroundColor|the color of the background, as a color int|


**Returned Value:** the current LegacyIconFallback, for method chaining  








## [withBackground](https://github.com/TheAndroidMaster/AdaptiveIconView/blob/master/library/src/main/java/james/adaptiveicon/AdaptiveIcon.java#L442)

**Type:** `public` `LegacyIconFallback`





|Parameter Name|Description|
|-----|-----|
|background|the drawable to use as the background, or null to find a color automatically|


**Returned Value:** the current LegacyIconFallback, for method chaining  








## [shouldClip](https://github.com/TheAndroidMaster/AdaptiveIconView/blob/master/library/src/main/java/james/adaptiveicon/AdaptiveIcon.java#L451)

**Type:** `public` `LegacyIconFallback`





|Parameter Name|Description|
|-----|-----|
|shouldClip|whether legacy icons should be clipped by the adaptive icon shape, or null to determine this automatically|


**Returned Value:** the current LegacyIconFallback, for method chaining  








## [withScale](https://github.com/TheAndroidMaster/AdaptiveIconView/blob/master/library/src/main/java/james/adaptiveicon/AdaptiveIcon.java#L460)

**Type:** `public` `LegacyIconFallback`





|Parameter Name|Description|
|-----|-----|
|scale|the scale of the legacy icon, preferably between 1 and 2, but other values greater than 0 work also|


**Returned Value:** the current LegacyIconFallback, for method chaining  








## [shouldRemoveShadow](https://github.com/TheAndroidMaster/AdaptiveIconView/blob/master/library/src/main/java/james/adaptiveicon/AdaptiveIcon.java#L469)

**Type:** `public` `LegacyIconFallback`





|Parameter Name|Description|
|-----|-----|
|removeShadow|whether the shadow (or any other transparent parts) should be removed from the icon|


**Returned Value:** the current LegacyIconFallback, for method chaining  








## [withFallback](https://github.com/TheAndroidMaster/AdaptiveIconView/blob/master/library/src/main/java/james/adaptiveicon/AdaptiveIcon.java#L511)

**Type:** `public` `final` `Fallback`

This method sets a fallback for this fallback to use if it 
fails to obtain an acceptable AdaptiveIcon. 





|Parameter Name|Description|
|-----|-----|
|fallback|the fallback to use if this one fails|


**Returned Value:** the current Fallback, for method chaining  








## [load](https://github.com/TheAndroidMaster/AdaptiveIconView/blob/master/library/src/main/java/james/adaptiveicon/AdaptiveIcon.java#L527)

**Type:** `@Nullable` `public` `abstract` `AdaptiveIcon`

Loads the adaptive icon for this fallback, or null if it cannot 
be obtained by this fallback or the fallback specified by the 
'withFallback' function. 





|Parameter Name|Description|
|-----|-----|
|context|the active context|
|info|the application to get the icon from|


**Returned Value:** the adaptive icon for this fallback, or null if it cannot be obtained  








