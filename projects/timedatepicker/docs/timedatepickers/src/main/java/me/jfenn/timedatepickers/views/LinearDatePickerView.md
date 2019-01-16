---
layout: docs
title: LinearDatePickerView Documentation
---
#### [.](./../../../../../../../../index) > [timedatepickers](./../../../../../../../index) > [src](./../../../../../../index) > [main](./../../../../../index) > [java](./../../../../index) > [me](./../../../index) > [jfenn](./../../index) > [timedatepickers](./../index) > [views](./index) > **LinearDatePickerView.java**

## [getYear](https://github.com/fennifith/TimeDatePicker/blob/master/timedatepickers/src/main/java/me/jfenn/timedatepickers/views/LinearDatePickerView.java#L74)

**Type:** `public` `int`

Obtain the currently selected year. 






**Returned Value:** An integer representing the currently selected year, e.x. the year 2019 would return "2019".  








## [getMonth](https://github.com/fennifith/TimeDatePicker/blob/master/timedatepickers/src/main/java/me/jfenn/timedatepickers/views/LinearDatePickerView.java#L84)

**Type:** `public` `int`

Obtain the currently selected month. 






**Returned Value:** An integer representing the currently selected month, e.x. the month "February" would return "2".  








## [getDay](https://github.com/fennifith/TimeDatePicker/blob/master/timedatepickers/src/main/java/me/jfenn/timedatepickers/views/LinearDatePickerView.java#L94)

**Type:** `public` `int`

Obtain the currently selected day. 






**Returned Value:** An integer representing the currently selected day, e.x. the 31st would return "31".  








## [setDate](https://github.com/fennifith/TimeDatePicker/blob/master/timedatepickers/src/main/java/me/jfenn/timedatepickers/views/LinearDatePickerView.java#L104)

**Type:** `public` `void`

Set the currently selected date of the picker. Because 
reasons, the year must only be +/- 50 years from the 
current date. This normally should not be an issue, as 
any software written today will likely be obsolete within 
that amount of time anyway. 





|Parameter Name|Description|
|-----|-----|
|year|An integer representing the selected year.|
|month|An integer representing the selected month.|
|day|An integer representing the selected day.  |








