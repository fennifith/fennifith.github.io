---
layout: docs
title: PickerDialog Documentation
---
#### [.](./../../../../../../../../index) > [base](./../../../../../../../index) > [src](./../../../../../../index) > [main](./../../../../../index) > [java](./../../../../index) > [me](./../../../index) > [jfenn](./../../index) > [colorpickerdialog](./../index) > [dialogs](./index) > **PickerDialog.java**

## [withRetainInstance](https://github.com/fennifith/ColorPickerDialog/blob/master/base/src/main/java/me/jfenn/colorpickerdialog/dialogs/PickerDialog.java#L110)

**Type:** `public` `T`

Set whether the dialog should retain its current instance. 

Defaults to true. If this is true, the dialog will be dismissed on 
an orientation / config change - if not, it will be automatically 
recreated by the system. The current color, pickers, and theme 
options will be retained, but you will need to reconnect to this 
fragment to re-apply an `OnColorPickedListener`. 





|Parameter Name|Description|
|-----|-----|
|shouldRetainInstance|Whether the dialog should retain its current instance.|


**Returned Value:**  "This" dialog instance, for method chaining.  








## [withListener](https://github.com/fennifith/ColorPickerDialog/blob/master/base/src/main/java/me/jfenn/colorpickerdialog/dialogs/PickerDialog.java#L129)

**Type:** `public` `T`

Specify a listener to receive updates when a new color is selected. 





|Parameter Name|Description|
|-----|-----|
|listener|The listener to receive updates.|


**Returned Value:**  "This" dialog instance, for method chaining.  








## [withColor](https://github.com/fennifith/ColorPickerDialog/blob/master/base/src/main/java/me/jfenn/colorpickerdialog/dialogs/PickerDialog.java#L140)

**Type:** `public` `T`

Specify an initial color for the picker to use. 





|Parameter Name|Description|
|-----|-----|
|color|The initial color int.|


**Returned Value:**  "This" dialog instance, for method chaining.  








## [getColor](https://github.com/fennifith/ColorPickerDialog/blob/master/base/src/main/java/me/jfenn/colorpickerdialog/dialogs/PickerDialog.java#L156)

**Type:** `@ColorInt` `public` `int`

Get the current color int selected by the picker. 






**Returned Value:**  The current color of the picker.  








## [withTitle](https://github.com/fennifith/ColorPickerDialog/blob/master/base/src/main/java/me/jfenn/colorpickerdialog/dialogs/PickerDialog.java#L166)

**Type:** `public` `T`

Specify a title for the dialog. Passing "null" will set the dialog to 
its default title. 





|Parameter Name|Description|
|-----|-----|
|title|The (string) title of the dialog.|


**Returned Value:**  "This" dialog instance, for method chaining.  








## [getTitle](https://github.com/fennifith/ColorPickerDialog/blob/master/base/src/main/java/me/jfenn/colorpickerdialog/dialogs/PickerDialog.java#L178)

**Type:** `@Nullable` `public` `String`

Get the current title of the dialog; "null" if there is not one set. 






**Returned Value:**  The title of the dialog.  








## [withTheme](https://github.com/fennifith/ColorPickerDialog/blob/master/base/src/main/java/me/jfenn/colorpickerdialog/dialogs/PickerDialog.java#L188)

**Type:** `public` `T`

Specify a theme/style of the dialog. Defaults to @style/ColorPickerDialog 





|Parameter Name|Description|
|-----|-----|
|style|The style for the dialog to use.|


**Returned Value:**  "This" dialog instance, for method chaining.  








## [withCornerRadius](https://github.com/fennifith/ColorPickerDialog/blob/master/base/src/main/java/me/jfenn/colorpickerdialog/dialogs/PickerDialog.java#L199)

**Type:** `public` `T`

Specify the corner radius for the dialog to use, in dp. 





|Parameter Name|Description|
|-----|-----|
|cornerRadius|The corner radius of the dialog, in dp.|


**Returned Value:**  "This" dialog instance, for method chaining.  








## [withCornerRadiusPx](https://github.com/fennifith/ColorPickerDialog/blob/master/base/src/main/java/me/jfenn/colorpickerdialog/dialogs/PickerDialog.java#L210)

**Type:** `public` `T`

Specify the corner radius for the dialog to use, in px. 





|Parameter Name|Description|
|-----|-----|
|cornerRadiusPx|The corner radius of the dialog, in px.|


**Returned Value:**  "This" dialog instance, for method chaining.  








## [getCornerRadius](https://github.com/fennifith/ColorPickerDialog/blob/master/base/src/main/java/me/jfenn/colorpickerdialog/dialogs/PickerDialog.java#L221)

**Type:** `public` `float`

Get the currently applied corner radius, in dp. 






**Returned Value:**  The corner radius, in dp.  








## [getCornerRadiusPx](https://github.com/fennifith/ColorPickerDialog/blob/master/base/src/main/java/me/jfenn/colorpickerdialog/dialogs/PickerDialog.java#L230)

**Type:** `public` `int`

Get the currently applied corner radius, in px. 






**Returned Value:**  The corner radius, in px.  








## [withPickerTheme](https://github.com/fennifith/ColorPickerDialog/blob/master/base/src/main/java/me/jfenn/colorpickerdialog/dialogs/PickerDialog.java#L266)

**Type:** `public` `T`

Initialize theme-related variables from a provided PickerTheme 
interface. Coincidentally, this class also implements that 
interface. 





|Parameter Name|Description|
|-----|-----|
|theme|The theme to initialize values from.|


**Returned Value:**  "This" dialog instance, for method chaining.  








