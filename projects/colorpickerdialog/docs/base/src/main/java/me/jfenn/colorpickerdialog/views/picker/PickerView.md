---
layout: docs
title: PickerView Documentation
---
#### [.](./../../../../../../../../../index) > [base](./../../../../../../../../index) > [src](./../../../../../../../index) > [main](./../../../../../../index) > [java](./../../../../../index) > [me](./../../../../index) > [jfenn](./../../../index) > [colorpickerdialog](./../../index) > [views](./../index) > [picker](./index) > **PickerView.java**

## [init](https://github.com/fennifith/ColorPickerDialog/blob/master/base/src/main/java/me/jfenn/colorpickerdialog/views/picker/PickerView.java#L69)

**Type:** `protected` `abstract` `void`

Called by the constructor, used to initialize and inflate 
the child views of the picker layout. 












## [postInit](https://github.com/fennifith/ColorPickerDialog/blob/master/base/src/main/java/me/jfenn/colorpickerdialog/views/picker/PickerView.java#L75)

**Type:** `private` `void`

Called after `init()`, used to set up child views that should be 
present inmostpickers, such as the "alpha" slider. 












## [setColor](https://github.com/fennifith/ColorPickerDialog/blob/master/base/src/main/java/me/jfenn/colorpickerdialog/views/picker/PickerView.java#L127)

**Type:** `public` `void`

Set the picker's color. Changes to values will not be animated. 





|Parameter Name|Description|
|-----|-----|
|color|The picker's color.  |








## [setColor](https://github.com/fennifith/ColorPickerDialog/blob/master/base/src/main/java/me/jfenn/colorpickerdialog/views/picker/PickerView.java#L136)

**Type:** `public` `void`

Set the picker's color. 





|Parameter Name|Description|
|-----|-----|
|color|The picker's color.|
|animate|Whether to animate changes in values.  |








## [getColor](https://github.com/fennifith/ColorPickerDialog/blob/master/base/src/main/java/me/jfenn/colorpickerdialog/views/picker/PickerView.java#L146)

**Type:** `@ColorInt` `public` `abstract` `int`

Get the current color value. 






**Returned Value:**  The current color value.  








## [getName](https://github.com/fennifith/ColorPickerDialog/blob/master/base/src/main/java/me/jfenn/colorpickerdialog/views/picker/PickerView.java#L154)

**Type:** `@NonNull` `public` `abstract` `String`

Get the "name" of the type of picker view. For example, an RGBPickerView 
would return the string "RGB". 






**Returned Value:** The "name" of the type of picker.  








## [isTrackingTouch](https://github.com/fennifith/ColorPickerDialog/blob/master/base/src/main/java/me/jfenn/colorpickerdialog/views/picker/PickerView.java#L163)

**Type:** `public` `boolean`

Determine whether the view is currently tracking a touch interaction. 
This is useful for determining when the next color update will occur 
and deciding whether to animate a value change. 






**Returned Value:** Whether the view is currently tracking a touch interaction.  








## [setAlphaEnabled](https://github.com/fennifith/ColorPickerDialog/blob/master/base/src/main/java/me/jfenn/colorpickerdialog/views/picker/PickerView.java#L174)

**Type:** `public` `void`

Set whether the color's alpha value can be changed. 





|Parameter Name|Description|
|-----|-----|
|isAlpha|Whether the color's alpha value can be changed.  |








## [isAlphaEnabled](https://github.com/fennifith/ColorPickerDialog/blob/master/base/src/main/java/me/jfenn/colorpickerdialog/views/picker/PickerView.java#L190)

**Type:** `public` `boolean`

Determine whether the color's alpha value can be modified. 






**Returned Value:** Whether the color's alpha value can be modified.  








## [setColorAlpha](https://github.com/fennifith/ColorPickerDialog/blob/master/base/src/main/java/me/jfenn/colorpickerdialog/views/picker/PickerView.java#L199)

**Type:** `public` `void`

Set the color's alpha, from 0-255. Change in values 
will not be animated. 





|Parameter Name|Description|
|-----|-----|
|alpha|The color's alpha, from 0-255.  |








## [setColorAlpha](https://github.com/fennifith/ColorPickerDialog/blob/master/base/src/main/java/me/jfenn/colorpickerdialog/views/picker/PickerView.java#L209)

**Type:** `public` `void`

Set the color's alpha, between 0-1 (inclusive). 





|Parameter Name|Description|
|-----|-----|
|alpha|The color's alpha, between 0-1 (inclusive).|
|animate|Whether to animate the change in values.  |








## [getColorAlpha](https://github.com/fennifith/ColorPickerDialog/blob/master/base/src/main/java/me/jfenn/colorpickerdialog/views/picker/PickerView.java#L228)

**Type:** `public` `int`

Gets the color's alpha, from 0-255. 






**Returned Value:** The color's alpha, from 0-255.  








## [setListener](https://github.com/fennifith/ColorPickerDialog/blob/master/base/src/main/java/me/jfenn/colorpickerdialog/views/picker/PickerView.java#L237)

**Type:** `public` `void`

Set an interface to receive updates to color values. This may 
be called multiple times in succession if a slider is dragged 
or animated; be wary of performance. 





|Parameter Name|Description|
|-----|-----|
|listener|An interface to receive color updates.  |








## [withActivityRequestHandler](https://github.com/fennifith/ColorPickerDialog/blob/master/base/src/main/java/me/jfenn/colorpickerdialog/views/picker/PickerView.java#L258)

**Type:** `public` `PickerView`

Set a permissions handler interface for this view to use 
for permission requests. 





|Parameter Name|Description|
|-----|-----|
|requestHandler|The interface to pass permission requests to.|


**Returned Value:**  "This" view instance, for method chaining.  








## [hasActivityRequestHandler](https://github.com/fennifith/ColorPickerDialog/blob/master/base/src/main/java/me/jfenn/colorpickerdialog/views/picker/PickerView.java#L300)

**Type:** `public` `boolean`

Determine whether the PickerView currently has a request handler. 






**Returned Value:**  True if the view has a request handler.  








