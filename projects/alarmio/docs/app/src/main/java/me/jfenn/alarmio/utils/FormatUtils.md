---
layout: docs
title: FormatUtils Documentation
---
#### [.](./../../../../../../../../index) > [app](./../../../../../../../index) > [src](./../../../../../../index) > [main](./../../../../../index) > [java](./../../../../index) > [me](./../../../index) > [jfenn](./../../index) > [alarmio](./../index) > [utils](./index) > **FormatUtils.java**

## [getFormat](https://github.com/fennifith/Alarmio/blob/master/app/src/main/java/me/jfenn/alarmio/utils/FormatUtils.java#L22)

**Type:** `public` `static` `String`

Get the proper hh:mm:ss time format to use, dependent on whether 
24-hour time is enabled in the system settings. 





|Parameter Name|Description|
|-----|-----|
|context|An active context instance.|


**Returned Value:**  A string to format hh:mm:ss time.  








## [getShortFormat](https://github.com/fennifith/Alarmio/blob/master/app/src/main/java/me/jfenn/alarmio/utils/FormatUtils.java#L33)

**Type:** `public` `static` `String`

A shorter version of [getFormat](#getformat) with the AM/PM indicator 
in the 12-hour version. 





|Parameter Name|Description|
|-----|-----|
|context|An active context instance.|


**Returned Value:**  A string to format hh:mm time.  








## [format](https://github.com/fennifith/Alarmio/blob/master/app/src/main/java/me/jfenn/alarmio/utils/FormatUtils.java#L44)

**Type:** `public` `static` `String`

Formats the provided time into a string using [getFormat](#getformat). 





|Parameter Name|Description|
|-----|-----|
|context|An active context instance.|
|time|The time to be formatted.|


**Returned Value:**  A formatted hh:mm:ss string.  








## [formatShort](https://github.com/fennifith/Alarmio/blob/master/app/src/main/java/me/jfenn/alarmio/utils/FormatUtils.java#L55)

**Type:** `public` `static` `String`

Formats the provided time into a string using [getShortFormat](#getshortformat). 





|Parameter Name|Description|
|-----|-----|
|context|An active context instance.|
|time|The time to be formatted.|


**Returned Value:**  A formatted hh:mm string.  








## [format](https://github.com/fennifith/Alarmio/blob/master/app/src/main/java/me/jfenn/alarmio/utils/FormatUtils.java#L66)

**Type:** `public` `static` `String`

Formats the provided time into the provided format. 





|Parameter Name|Description|
|-----|-----|
|time|The time to be formatted.|
|format|The format to format the time into.|


**Returned Value:**  The formatted time string.  








## [formatMillis](https://github.com/fennifith/Alarmio/blob/master/app/src/main/java/me/jfenn/alarmio/utils/FormatUtils.java#L77)

**Type:** `public` `static` `String`

Formats a duration of milliseconds into a "0h 00m 00s 00" string. 





|Parameter Name|Description|
|-----|-----|
|millis|The millisecond duration to be formatted.|


**Returned Value:**  The formatted time string.  








## [formatUnit](https://github.com/fennifith/Alarmio/blob/master/app/src/main/java/me/jfenn/alarmio/utils/FormatUtils.java#L96)

**Type:** `public` `static` `String`

Formats a duration of minutes into a meaningful string to be used in 
idk maybe a sentence or something. An input of 60 becomes "1 hour", 59 
becomes "59 minutes", and so on. 





|Parameter Name|Description|
|-----|-----|
|context|An active context instance.|
|minutes|The duration of minutes to format.|


**Returned Value:**  The formatted time string.  








