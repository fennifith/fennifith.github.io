---
layout: docs
title: SunriseSunsetView Documentation
---
#### [.](./../../../../../../../index) > [sunrisesunsetview](./../../../../../../index) > [src](./../../../../../index) > [main](./../../../../index) > [java](./../../../index) > [me](./../../index) > [jfenn](./../index) > [sunrisesunsetview](./index) > **SunriseSunsetView.java**

## [setSunriseColor](https://github.com/fennifith/SunriseSunsetView/blob/master/sunrisesunsetview/src/main/java/me/jfenn/sunrisesunsetview/SunriseSunsetView.java#L75)

**Type:** `public` `void`

Sets the color for the segment of the day where the 
sun is above the horizon. 





|Parameter Name|Description|
|-----|-----|
|color|The sunrise color.  |








## [getSunriseColor](https://github.com/fennifith/SunriseSunsetView/blob/master/sunrisesunsetview/src/main/java/me/jfenn/sunrisesunsetview/SunriseSunsetView.java#L85)

**Type:** `@ColorInt` `public` `int`






**Returned Value:** The color of the segment of the day where the sun is above the horizon.  








## [setSunsetColor](https://github.com/fennifith/SunriseSunsetView/blob/master/sunrisesunsetview/src/main/java/me/jfenn/sunrisesunsetview/SunriseSunsetView.java#L94)

**Type:** `public` `void`

Sets the color for the segment of the day where the 
sun is below the horizon. 





|Parameter Name|Description|
|-----|-----|
|color|The sunset color.  |








## [getSunsetColor](https://github.com/fennifith/SunriseSunsetView/blob/master/sunrisesunsetview/src/main/java/me/jfenn/sunrisesunsetview/SunriseSunsetView.java#L104)

**Type:** `@ColorInt` `public` `int`






**Returned Value:** The color of the segment of the day where the sun is below the horizon.  








## [setFutureColor](https://github.com/fennifith/SunriseSunsetView/blob/master/sunrisesunsetview/src/main/java/me/jfenn/sunrisesunsetview/SunriseSunsetView.java#L113)

**Type:** `public` `void`

Sets the color for the segment of the day that has 
not passed yet; some may refer to it as the future, 
but what truly is the future but a moment in time 
which has yet to occur? Since nobody truly knows the 
exact outcome of a future event, the future cannot 
possibly exist until it actually happens. With that 
said, we refer to an event which we believe might 
happen as the future, but there is no fail-safe method 
of proving that said event will actually occur, short 
of it occurring. Can one really say it is possible to 
determine what is essentially an abstraction of a 
future event with no uncertainty that it might not 
occur? 





|Parameter Name|Description|
|-----|-----|
|color|The future color.  |








## [getFutureColor](https://github.com/fennifith/SunriseSunsetView/blob/master/sunrisesunsetview/src/main/java/me/jfenn/sunrisesunsetview/SunriseSunsetView.java#L134)

**Type:** `@ColorInt` `public` `int`






**Returned Value:** The color of the segment of the day which has yet to occur.  








## [setDayStart](https://github.com/fennifith/SunriseSunsetView/blob/master/sunrisesunsetview/src/main/java/me/jfenn/sunrisesunsetview/SunriseSunsetView.java#L143)

**Type:** `public` `void`

Set the sunrise time, in milliseconds. Values can range 
beyond the period of a day; they are modulated by a 24 hour 
period. Change in values will not be animated. 





|Parameter Name|Description|
|-----|-----|
|dayStartMillis|The sunrise time, in milliseconds.  |








## [setDayStart](https://github.com/fennifith/SunriseSunsetView/blob/master/sunrisesunsetview/src/main/java/me/jfenn/sunrisesunsetview/SunriseSunsetView.java#L154)

**Type:** `public` `void`

Set the sunrise time, in milliseconds. Values can range 
beyond the period of a day; they are modulated by a 24 hour 
period. 





|Parameter Name|Description|
|-----|-----|
|dayStartMillis|The sunrise time, in milliseconds.|
|animate|Whether to animate the change in values.  |








## [getDayStart](https://github.com/fennifith/SunriseSunsetView/blob/master/sunrisesunsetview/src/main/java/me/jfenn/sunrisesunsetview/SunriseSunsetView.java#L170)

**Type:** `public` `long`

Calculate the sunrise time, in milliseconds. Returned values 
will not range beyond a 24 hour period. 






**Returned Value:** The sunrise time, in milliseconds.  








## [setDayEnd](https://github.com/fennifith/SunriseSunsetView/blob/master/sunrisesunsetview/src/main/java/me/jfenn/sunrisesunsetview/SunriseSunsetView.java#L180)

**Type:** `public` `void`

Set the sunset time, in milliseconds. Values can range 
beyond the period of a day; they are modulated by a 24 hour 
period. Change in values will not be animated. 





|Parameter Name|Description|
|-----|-----|
|dayEndMillis|The sunset time, in milliseconds.  |








## [setDayEnd](https://github.com/fennifith/SunriseSunsetView/blob/master/sunrisesunsetview/src/main/java/me/jfenn/sunrisesunsetview/SunriseSunsetView.java#L191)

**Type:** `public` `void`

Set the sunset time, in milliseconds. Values can range 
beyond the period of a day; they are modulated by a 24 hour 
period. 





|Parameter Name|Description|
|-----|-----|
|dayEndMillis|The sunset time, in milliseconds.|
|animate|Whether to animate the change in values.  |








## [getDayEnd](https://github.com/fennifith/SunriseSunsetView/blob/master/sunrisesunsetview/src/main/java/me/jfenn/sunrisesunsetview/SunriseSunsetView.java#L207)

**Type:** `public` `long`

Calculate the sunset time, in milliseconds. Returned values 
will not range beyond a 24 hour period. 






**Returned Value:** The sunset time, in milliseconds.  








## [setListener](https://github.com/fennifith/SunriseSunsetView/blob/master/sunrisesunsetview/src/main/java/me/jfenn/sunrisesunsetview/SunriseSunsetView.java#L217)

**Type:** `public` `void`

Specify an interface to receive updates when the sunrise/sunset 
times are modified by the user. Methods in this interface are only 
called when the view is interacted with; calling setDayEnd or 
setDayStart will not result in this interface being notified. 





|Parameter Name|Description|
|-----|-----|
|listener|An interface to receive updates when the sunrise/sunset times are modified.  |








