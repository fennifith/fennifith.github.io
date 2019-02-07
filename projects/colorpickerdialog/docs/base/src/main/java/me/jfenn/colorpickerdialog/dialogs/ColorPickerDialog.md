---
layout: docs
title: ColorPickerDialog Documentation
---
#### [.](./../../../../../../../../index) > [base](./../../../../../../../index) > [src](./../../../../../../index) > [main](./../../../../../index) > [java](./../../../../index) > [me](./../../../index) > [jfenn](./../../index) > [colorpickerdialog](./../index) > [dialogs](./index) > **ColorPickerDialog.java**

## [withAlphaEnabled](https://github.com/fennifith/ColorPickerDialog/blob/master/base/src/main/java/me/jfenn/colorpickerdialog/dialogs/ColorPickerDialog.java#L126)

**Type:** `public` `ColorPickerDialog`

Specify whether alpha values should be enabled. This parameter 
defaults to true. 





|Parameter Name|Description|
|-----|-----|
|isAlphaEnabled|Whether alpha values are enabled.|


**Returned Value:**  "This" dialog instance, for method chaining.  








## [withPresets](https://github.com/fennifith/ColorPickerDialog/blob/master/base/src/main/java/me/jfenn/colorpickerdialog/dialogs/ColorPickerDialog.java#L138)

**Type:** `public` `ColorPickerDialog`

Enables the preset picker view and applies the passed presets. Passing 
nothing will enable the picker view with the default preset values. 





|Parameter Name|Description|
|-----|-----|
|presets|The preset colors to use.|


**Returned Value:**  "This" dialog instance, for method chaining.  








## [withPicker](https://github.com/fennifith/ColorPickerDialog/blob/master/base/src/main/java/me/jfenn/colorpickerdialog/dialogs/ColorPickerDialog.java#L163)

**Type:** `public` `<T` `extends` `PickerView>` `ColorPickerDialog`

Add an unidentified picker view to the dialog, if it doesn't already 
exist. This class is instantiated by the dialog, to keep the view's 
Context consistent with the rest of the styled components. 

If the picker view already exists in the dialog, this will throw an 
error. 





|Parameter Name|Description|
|-----|-----|
|pickerClass|The class of the picker view to add.|


**Returned Value:**  "This" dialog instance, for method chaining.  








## [getPicker](https://github.com/fennifith/ColorPickerDialog/blob/master/base/src/main/java/me/jfenn/colorpickerdialog/dialogs/ColorPickerDialog.java#L189)

**Type:** `@Nullable` `public` `<T` `extends` `PickerView>` `DelayedInstantiation<T>`

Determine whether a particular picker view is enabled, and return 
it. If not, this will return null. 





|Parameter Name|Description|
|-----|-----|
|pickerClass|The class of the PickerView.|


**Returned Value:**  The view, if it is enabled; null if not.  








## [withPickers](https://github.com/fennifith/ColorPickerDialog/blob/master/base/src/main/java/me/jfenn/colorpickerdialog/dialogs/ColorPickerDialog.java#L206)

**Type:** `public` `ColorPickerDialog`

Set the picker views used by the dialog. If this method is called with 
no arguments, the default pickers will be used; an RGB and HSV picker. 





|Parameter Name|Description|
|-----|-----|
|pickers|The picker views to use.|


**Returned Value:**  "This" dialog instance, for method chaining.  








