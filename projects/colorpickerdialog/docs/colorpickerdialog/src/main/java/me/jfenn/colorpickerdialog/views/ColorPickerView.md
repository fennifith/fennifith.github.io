---
layout: docs
title: ColorPickerView Documentation
---
#### [.](./../../../../../../../../index) > [colorpickerdialog](./../../../../../../../index) > [src](./../../../../../../index) > [main](./../../../../../index) > [java](./../../../../index) > [me](./../../../index) > [jfenn](./../../index) > [colorpickerdialog](./../index) > [views](./index) > **ColorPickerView.java**

## [setColor](https://github.com/fennifith/ColorPickerDialog/blob/master/colorpickerdialog/src/main/java/me/jfenn/colorpickerdialog/views/ColorPickerView.java#L92)

**Type:** `public` `void`

Set the picker's color. Changes to values will not be animated. 





|Parameter Name|Description|
|-----|-----|
|color|The picker's color.  |








## [setColor](https://github.com/fennifith/ColorPickerDialog/blob/master/colorpickerdialog/src/main/java/me/jfenn/colorpickerdialog/views/ColorPickerView.java#L101)

**Type:** `public` `void`

Set the picker's color. 





|Parameter Name|Description|
|-----|-----|
|color|The picker's color.|
|animate|Whether to animate changes in values.  |








## [getColor](https://github.com/fennifith/ColorPickerDialog/blob/master/colorpickerdialog/src/main/java/me/jfenn/colorpickerdialog/views/ColorPickerView.java#L111)

**Type:** `@ColorInt` `public` `abstract` `int`

Get the current color value. 






**Returned Value:**  The current color value.  








## [setAlphaEnabled](https://github.com/fennifith/ColorPickerDialog/blob/master/colorpickerdialog/src/main/java/me/jfenn/colorpickerdialog/views/ColorPickerView.java#L119)

**Type:** `public` `void`

Set whether the color's alpha value can be changed. 





|Parameter Name|Description|
|-----|-----|
|isAlpha|Whether the color's alpha value can be changed.  |








## [isAlphaEnabled](https://github.com/fennifith/ColorPickerDialog/blob/master/colorpickerdialog/src/main/java/me/jfenn/colorpickerdialog/views/ColorPickerView.java#L135)

**Type:** `public` `boolean`

Determine whether the color's alpha value can be modified. 






**Returned Value:** Whether the color's alpha value can be modified.  








## [setColorAlpha](https://github.com/fennifith/ColorPickerDialog/blob/master/colorpickerdialog/src/main/java/me/jfenn/colorpickerdialog/views/ColorPickerView.java#L144)

**Type:** `public` `void`

Set the color's alpha, from 0-255. Change in values 
will not be animated. 





|Parameter Name|Description|
|-----|-----|
|alpha|The color's alpha, from 0-255.  |








## [setColorAlpha](https://github.com/fennifith/ColorPickerDialog/blob/master/colorpickerdialog/src/main/java/me/jfenn/colorpickerdialog/views/ColorPickerView.java#L154)

**Type:** `public` `void`

Set the color's alpha, between 0-1 (inclusive). 





|Parameter Name|Description|
|-----|-----|
|alpha|The color's alpha, between 0-1 (inclusive).|
|animate|Whether to animate the change in values.  |








## [getColorAlpha](https://github.com/fennifith/ColorPickerDialog/blob/master/colorpickerdialog/src/main/java/me/jfenn/colorpickerdialog/views/ColorPickerView.java#L170)

**Type:** `public` `int`

Gets the color's alpha, from 0-255. 






**Returned Value:** The color's alpha, from 0-255.  








## [setListener](https://github.com/fennifith/ColorPickerDialog/blob/master/colorpickerdialog/src/main/java/me/jfenn/colorpickerdialog/views/ColorPickerView.java#L184)

**Type:** `public` `void`

Set an interface to receive updates to color values. This may 
be called multiple times in succession if a slider is dragged 
or animated; be wary of performance. 





|Parameter Name|Description|
|-----|-----|
|listener|An interface to receive color updates.  |








