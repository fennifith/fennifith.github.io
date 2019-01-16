---
layout: docs
title: PickerView Documentation
---
#### [.](./../../../../../../../../index) > [timedatepickers](./../../../../../../../index) > [src](./../../../../../../index) > [main](./../../../../../index) > [java](./../../../../index) > [me](./../../../index) > [jfenn](./../../index) > [timedatepickers](./../index) > [views](./index) > **PickerView.java**

## [setAll](https://github.com/fennifith/TimeDatePicker/blob/master/timedatepickers/src/main/java/me/jfenn/timedatepickers/views/PickerView.java#L210)

**Type:** `public` `void`

Set up all of the required attributes of the picker at once. 





|Parameter Name|Description|
|-----|-----|
|items|a two-dimensional array of all the items in the picker|
|labels|an array of the labels to be applied to each row|
|selectedPositions|an array of the selected positions in each row  |








## [setAll](https://github.com/fennifith/TimeDatePicker/blob/master/timedatepickers/src/main/java/me/jfenn/timedatepickers/views/PickerView.java#L221)

**Type:** `public` `void`

Set up all of the required attributes of the picker at once. 





|Parameter Name|Description|
|-----|-----|
|items|a two-dimensional array of all the items in the picker|
|labels|an array of the labels to be applied to each row|
|selectedPositions|an array of the selected positions in each row|
|animate|whether to animate the switch between attributes  |








## [setRow](https://github.com/fennifith/TimeDatePicker/blob/master/timedatepickers/src/main/java/me/jfenn/timedatepickers/views/PickerView.java#L234)

**Type:** `public` `void`

Set all the attributes for a single row at once. 





|Parameter Name|Description|
|-----|-----|
|row|the index of the row|
|items|the new items in the row|
|label|the new label of the row|
|selectedPosition|the new selected position of the row  |








## [setRow](https://github.com/fennifith/TimeDatePicker/blob/master/timedatepickers/src/main/java/me/jfenn/timedatepickers/views/PickerView.java#L246)

**Type:** `public` `void`

Set all the attributes for a single row at once. 





|Parameter Name|Description|
|-----|-----|
|row|the index of the row|
|items|the new items in the row|
|label|the new label of the row|
|selectedPosition|the new selected position of the row|
|animate|whether to animate the switch between rows  |








## [setItem](https://github.com/fennifith/TimeDatePicker/blob/master/timedatepickers/src/main/java/me/jfenn/timedatepickers/views/PickerView.java#L260)

**Type:** `public` `void`

Set the value of a single item. 





|Parameter Name|Description|
|-----|-----|
|row|the row of the item|
|col|the column of the item|
|item|the (new) item to be set  |








## [getItem](https://github.com/fennifith/TimeDatePicker/blob/master/timedatepickers/src/main/java/me/jfenn/timedatepickers/views/PickerView.java#L272)

**Type:** `public` `T`

Get the current value of an item. 





|Parameter Name|Description|
|-----|-----|
|row|the row of the item|
|col|the index of the item|


**Returned Value:** the value of the item  








## [setLabel](https://github.com/fennifith/TimeDatePicker/blob/master/timedatepickers/src/main/java/me/jfenn/timedatepickers/views/PickerView.java#L283)

**Type:** `public` `void`

Set the label of a row. 





|Parameter Name|Description|
|-----|-----|
|row|the index of the row|
|label|the (new) label to be set  |








## [getLabel](https://github.com/fennifith/TimeDatePicker/blob/master/timedatepickers/src/main/java/me/jfenn/timedatepickers/views/PickerView.java#L294)

**Type:** `public` `String`

Get the current label of a row. 





|Parameter Name|Description|
|-----|-----|
|row|the index of the row|


**Returned Value:** the current label of the row  








