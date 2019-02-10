---
layout: docs
title: IconData Documentation
---
#### [.](./../../../../../../../../../index) > [app](./../../../../../../../../index) > [src](./../../../../../../../index) > [main](./../../../../../../index) > [java](./../../../../../index) > [com](./../../../../index) > [james](./../../../index) > [status](./../../index) > [data](./../index) > [icon](./index) > **IconData.java**

## [init](https://github.com/fennifith/Status/blob/master/app/src/main/java/com/james/status/data/icon/IconData.java#L129)

**Type:** `protected` `void`

Initialize all of the settings / variables of the icon to their 
preference values. If it's the first init, this will also set up 
the animated attributes; if not, it will simply update them to match 
their 'default' values. 





|Parameter Name|Description|
|-----|-----|
|isFirstInit|Whether this is the first initialization of the icon (this method may be called externally to update values on a preference change without restarting Status's entire service).  |








## [onMessage](https://github.com/fennifith/Status/blob/master/app/src/main/java/com/james/status/data/icon/IconData.java#L242)

**Type:** `public` `void`

Called when a message is sent to the icon from an external 
service. This is mainly used for the NotificationIconData, so 
that the NotificationService can send it information without 
calling a static method or holding a direct reference to it. 





|Parameter Name|Description|
|-----|-----|
|message|The message that was sent.  |








## [requestReDraw](https://github.com/fennifith/Status/blob/master/app/src/main/java/com/james/status/data/icon/IconData.java#L254)

**Type:** `public` `final` `void`

Called to request that the icon be drawn again; indicates that 
an attribute of the icon has changed that the user should be 
made aware of. 












## [isVisible](https://github.com/fennifith/Status/blob/master/app/src/main/java/com/james/status/data/icon/IconData.java#L264)

**Type:** `public` `final` `boolean`

Evaluates whether the icon should be visible on the screen. 






**Returned Value:** True if the icon should be drawn.  








## [isDefaultVisible](https://github.com/fennifith/Status/blob/master/app/src/main/java/com/james/status/data/icon/IconData.java#L273)

**Type:** `boolean`

Determine whether the icon should be visible by default. 






**Returned Value:** True if the icon should be visible by default.  








## [canHazIcon](https://github.com/fennifith/Status/blob/master/app/src/main/java/com/james/status/data/icon/IconData.java#L283)

**Type:** `public` `boolean`

Determine whether the element has the ability to draw an icon 
(the Data icon, for example, is only text and will never contain 
an icon). 






**Returned Value:** True if the element can draw an icon.  








## [hasIcon](https://github.com/fennifith/Status/blob/master/app/src/main/java/com/james/status/data/icon/IconData.java#L295)

**Type:** `public` `boolean`

Determine whether the element should have an icon, given its current 
state and preferences. 






**Returned Value:** True if the element should have an icon.  








## [canHazText](https://github.com/fennifith/Status/blob/master/app/src/main/java/com/james/status/data/icon/IconData.java#L305)

**Type:** `public` `boolean`

Determine whether the element has the ability to draw text data 
(the NFC icon, for example, is only an indicator and can never 
contain any text). 






**Returned Value:** True if the element can draw text.  








## [hasText](https://github.com/fennifith/Status/blob/master/app/src/main/java/com/james/status/data/icon/IconData.java#L317)

**Type:** `public` `boolean`

Determine whether the element should have any text, given its current 
state and preferences. 






**Returned Value:** True if the element should have text.  








## [String](https://github.com/fennifith/Status/blob/master/app/src/main/java/com/james/status/data/icon/IconData.java#L327)

**Type:** `public`

Get an array of the app permissions required for the icon to function (if any). 
Returns an empty array by default. 






**Returned Value:** A String[] of the permissions required by the icon.  








## [getReceiver](https://github.com/fennifith/Status/blob/master/app/src/main/java/com/james/status/data/icon/IconData.java#L337)

**Type:** `public` `T`

Get the BroadcastReceiver tied to the icon. 






**Returned Value:** The BroadcastReceiver instance tied to the icon.  








## [getIntentFilter](https://github.com/fennifith/Status/blob/master/app/src/main/java/com/james/status/data/icon/IconData.java#L346)

**Type:** `public` `IntentFilter`

Get the IntentFilter that the icon receives updates from. 






**Returned Value:** An IntentFilter that the icon receives updates from.  








## [register](https://github.com/fennifith/Status/blob/master/app/src/main/java/com/james/status/data/icon/IconData.java#L355)

**Type:** `public` `void`

Register the icon to listen for updates. `requestRedraw()` can be called after this. 












## [unregister](https://github.com/fennifith/Status/blob/master/app/src/main/java/com/james/status/data/icon/IconData.java#L364)

**Type:** `public` `void`

Unregister the icon so that it no longer receives any updates. `requestRedraw()` should no longer 
be called after this. 












## [setBackgroundColor](https://github.com/fennifith/Status/blob/master/app/src/main/java/com/james/status/data/icon/IconData.java#L396)

**Type:** `public` `void`

Determines the color of the icon based on various settings, 
some of which are icon-specific. 





|Parameter Name|Description|
|-----|-----|
|color|the color to be drawn behind the icon  |








## [needsDraw](https://github.com/fennifith/Status/blob/master/app/src/main/java/com/james/status/data/icon/IconData.java#L449)

**Type:** `public` `boolean`

Determine whether the icon needs to have another frame drawn. 






**Returned Value:** True if the icon should be re-drawn for the next frame.  








## [updateAnimatedValues](https://github.com/fennifith/Status/blob/master/app/src/main/java/com/james/status/data/icon/IconData.java#L469)

**Type:** `public` `void`

Update the animated attributes of the icon to match the current system 
time. 












## [draw](https://github.com/fennifith/Status/blob/master/app/src/main/java/com/james/status/data/icon/IconData.java#L501)

**Type:** `public` `void`

Draws the icon on a canvas. 





|Parameter Name|Description|
|-----|-----|
|canvas|the canvas to draw on|
|x|the x position (LTR px) to start drawing the icon at|
|width|the available width for the icon to be drawn within  |








## [getWidth](https://github.com/fennifith/Status/blob/master/app/src/main/java/com/james/status/data/icon/IconData.java#L543)

**Type:** `public` `int`

Returns the estimated width (px) of the icon, or -1 
if the icon needs to know the available space 
first. 





|Parameter Name|Description|
|-----|-----|
|height|the height (px) to scale the icon to|
|available|the available width for the icon, or -1 if not yet calculated|


**Returned Value:** the estimated width (px) of the icon  








## [getPreferences](https://github.com/fennifith/Status/blob/master/app/src/main/java/com/james/status/data/icon/IconData.java#L579)

**Type:** `public` `List<BasePreferenceData>`

Obtain a list of all of the "preferences" that can be used to modify the icon 
in the user-facing settings UI. 






**Returned Value:** A list of the preferences that can be used to modify the icon.  








## [getIconStyleSize](https://github.com/fennifith/Status/blob/master/app/src/main/java/com/james/status/data/icon/IconData.java#L940)

**Type:** `public` `int`

Get the amount of icons that each "icon style" should contain. 






**Returned Value:** An integer signifying the amount of icons that each style should contain.  








## [String](https://github.com/fennifith/Status/blob/master/app/src/main/java/com/james/status/data/icon/IconData.java#L950)

**Type:** `public`

Obtain an array containing user-facing "names" of each icon in the 
styles. 






**Returned Value:** An array containing user-facing "names" of each icon in the style.  








## [getIconStyles](https://github.com/fennifith/Status/blob/master/app/src/main/java/com/james/status/data/icon/IconData.java#L961)

**Type:** `public` `List<IconStyleData>`

Get a list of all of the available icon styles for the icon. 






**Returned Value:** A list of all of the available icon styles for the icon.  








## [addIconStyle](https://github.com/fennifith/Status/blob/master/app/src/main/java/com/james/status/data/icon/IconData.java#L980)

**Type:** `public` `final` `void`

Add a new icon style to the styles that can be used by the element. This 
verifies the size of the style, then writes it to the icon's preferences. 





|Parameter Name|Description|
|-----|-----|
|style|The new icon style to be added to the list of styles used by the element.  |








## [removeIconStyle](https://github.com/fennifith/Status/blob/master/app/src/main/java/com/james/status/data/icon/IconData.java#L1000)

**Type:** `public` `final` `void`

Remove an icon style from the styles that can be used by the element. 





|Parameter Name|Description|
|-----|-----|
|style|The style to be removed.  |








## [String](https://github.com/fennifith/Status/blob/master/app/src/main/java/com/james/status/data/icon/IconData.java#L1012)

**Type:** `public`

Get a list of the arguments that can be used to identify the icon in 
SharedPreferences. 






**Returned Value:** A String[] of the arguments that can be used to identify the icon in SharedPreferences.  








