---
layout: docs
title: LinearTimePickerView Documentation
---
#### [.](./../../../../../../../../index) > [timedatepickers](./../../../../../../../index) > [src](./../../../../../../index) > [main](./../../../../../index) > [java](./../../../../index) > [me](./../../../index) > [jfenn](./../../index) > [timedatepickers](./../index) > [views](./index) > **LinearTimePickerView.java**

## [setTime](https://github.com/fennifith/TimeDatePicker/blob/master/timedatepickers/src/main/java/me/jfenn/timedatepickers/views/LinearTimePickerView.java#L59)

**Type:** `public` `void`

Set the selected time of the picker. 





|Parameter Name|Description|
|-----|-----|
|hourOfDay|The hour of the day. Probably somewhere between 1 and 24. The next hour after 24 is 1.|
|minute|The minute of the hour. Between 0 and 59.  |








## [getHourOfDay](https://github.com/fennifith/TimeDatePicker/blob/master/timedatepickers/src/main/java/me/jfenn/timedatepickers/views/LinearTimePickerView.java#L79)

**Type:** `public` `int`

Get the selected hour. Between 1 and 24. The next hour after 24 
is 1. Doesn't care whether the format is 12 or 24 hour, because 
honestly they're going to occur at the same time either way. 






**Returned Value:** The currently selected hour.  








## [getMinute](https://github.com/fennifith/TimeDatePicker/blob/master/timedatepickers/src/main/java/me/jfenn/timedatepickers/views/LinearTimePickerView.java#L93)

**Type:** `public` `int`

Get the selected minute. Between 0 and 59. The next minute after 
59 is 0. 






**Returned Value:** The currently selected minute.  








