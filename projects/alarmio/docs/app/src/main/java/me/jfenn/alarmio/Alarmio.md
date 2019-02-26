---
layout: docs
title: Alarmio Documentation
---
#### [.](./../../../../../../../index) > [app](./../../../../../../index) > [src](./../../../../../index) > [main](./../../../../index) > [java](./../../../index) > [me](./../../index) > [jfenn](./../index) > [alarmio](./index) > **Alarmio.java**

## [newAlarm](https://github.com/fennifith/Alarmio/blob/master/app/src/main/java/me/jfenn/alarmio/Alarmio.java#L119)

**Type:** `public` `AlarmData`

Create a new alarm, assigning it an unused preference id. 






**Returned Value:**  The newly instantiated [AlarmData](./data/AlarmData).  








## [removeAlarm](https://github.com/fennifith/Alarmio/blob/master/app/src/main/java/me/jfenn/alarmio/Alarmio.java#L132)

**Type:** `public` `void`

Remove an alarm and all of its its preferences. 





|Parameter Name|Description|
|-----|-----|
|alarm|The alarm to be removed.  |








## [onAlarmCountChanged](https://github.com/fennifith/Alarmio/blob/master/app/src/main/java/me/jfenn/alarmio/Alarmio.java#L150)

**Type:** `public` `void`

Update preferences to show that the alarm count has been changed. 












## [onAlarmsChanged](https://github.com/fennifith/Alarmio/blob/master/app/src/main/java/me/jfenn/alarmio/Alarmio.java#L157)

**Type:** `public` `void`

Notify the application of changes to the current alarms. 












## [newTimer](https://github.com/fennifith/Alarmio/blob/master/app/src/main/java/me/jfenn/alarmio/Alarmio.java#L166)

**Type:** `public` `TimerData`

Create a new timer, assigning it an unused preference id. 






**Returned Value:**  The newly instantiated [TimerData](./data/TimerData).  








## [removeTimer](https://github.com/fennifith/Alarmio/blob/master/app/src/main/java/me/jfenn/alarmio/Alarmio.java#L178)

**Type:** `public` `void`

Remove a timer and all of its preferences. 





|Parameter Name|Description|
|-----|-----|
|timer|The timer to be removed.  |








## [onTimerCountChanged](https://github.com/fennifith/Alarmio/blob/master/app/src/main/java/me/jfenn/alarmio/Alarmio.java#L196)

**Type:** `public` `void`

Update the preferences to show that the timer count has been changed. 












## [onTimersChanged](https://github.com/fennifith/Alarmio/blob/master/app/src/main/java/me/jfenn/alarmio/Alarmio.java#L203)

**Type:** `public` `void`

Notify the application of changes to the current timers. 












## [onTimerStarted](https://github.com/fennifith/Alarmio/blob/master/app/src/main/java/me/jfenn/alarmio/Alarmio.java#L212)

**Type:** `public` `void`

Starts the timer service after a timer has been set. 












## [getPrefs](https://github.com/fennifith/Alarmio/blob/master/app/src/main/java/me/jfenn/alarmio/Alarmio.java#L219)

**Type:** `public` `SharedPreferences`

Get an instance of SharedPreferences. 






**Returned Value:**  The instance of SharedPreferences being used by the application.





**Reference:** [android.content.SharedPreferences Documentation](https://developer.android.com/reference/android/content/SharedPreferences)  





## [updateTheme](https://github.com/fennifith/Alarmio/blob/master/app/src/main/java/me/jfenn/alarmio/Alarmio.java#L229)

**Type:** `public` `void`

Update the application theme. 












## [isNight](https://github.com/fennifith/Alarmio/blob/master/app/src/main/java/me/jfenn/alarmio/Alarmio.java#L284)

**Type:** `public` `boolean`

Determine if the theme should be a night theme. 






**Returned Value:**  True if the current theme is a night theme.  








## [getActivityTheme](https://github.com/fennifith/Alarmio/blob/master/app/src/main/java/me/jfenn/alarmio/Alarmio.java#L294)

**Type:** `public` `int`

Get the theme to be used for activities and things. Despite 
what the name implies, it does not return a theme resource, 
but rather one of Alarmio.THEME_DAY_NIGHT, Alarmio.THEME_DAY, 
Alarmio.THEME_NIGHT, or Alarmio.THEME_AMOLED. 






**Returned Value:**  The theme to be used for activites.  








## [isDayAuto](https://github.com/fennifith/Alarmio/blob/master/app/src/main/java/me/jfenn/alarmio/Alarmio.java#L306)

**Type:** `public` `boolean`

Determine if the sunrise/sunset stuff should occur automatically. 






**Returned Value:**  True if the day/night stuff is automated.  








## [getDayStart](https://github.com/fennifith/Alarmio/blob/master/app/src/main/java/me/jfenn/alarmio/Alarmio.java#L315)

**Type:** `public` `int`






**Returned Value:** the hour of the start of the day (24h), as specified by the user  








## [getDayEnd](https://github.com/fennifith/Alarmio/blob/master/app/src/main/java/me/jfenn/alarmio/Alarmio.java#L324)

**Type:** `public` `int`






**Returned Value:** the hour of the end of the day (24h), as specified by the user  








## [getSunrise](https://github.com/fennifith/Alarmio/blob/master/app/src/main/java/me/jfenn/alarmio/Alarmio.java#L333)

**Type:** `@Nullable` `public` `Integer`






**Returned Value:** the hour of the calculated sunrise time, or null.  








## [getSunset](https://github.com/fennifith/Alarmio/blob/master/app/src/main/java/me/jfenn/alarmio/Alarmio.java#L343)

**Type:** `@Nullable` `public` `Integer`






**Returned Value:** the hour of the calculated sunset time, or null.  








## [getSunsetCalculator](https://github.com/fennifith/Alarmio/blob/master/app/src/main/java/me/jfenn/alarmio/Alarmio.java#L353)

**Type:** `@Nullable` `private` `SunriseSunsetCalculator`






**Returned Value:** the current SunriseSunsetCalculator object, or null if it cannot be instantiated.





**Reference:** [SunriseSunsetLib Repo](https://github.com/mikereedell/sunrisesunsetlib-java)  





## [isRingtonePlaying](https://github.com/fennifith/Alarmio/blob/master/app/src/main/java/me/jfenn/alarmio/Alarmio.java#L372)

**Type:** `public` `boolean`

Determine if a ringtone is currently playing. 






**Returned Value:**  True if a ringtone is currently playing.  








## [getCurrentRingtone](https://github.com/fennifith/Alarmio/blob/master/app/src/main/java/me/jfenn/alarmio/Alarmio.java#L381)

**Type:** `@Nullable` `public` `Ringtone`

Get the currently playing ringtone. 






**Returned Value:**  The currently playing ringtone, or null.  








## [playStream](https://github.com/fennifith/Alarmio/blob/master/app/src/main/java/me/jfenn/alarmio/Alarmio.java#L400)

**Type:** `public` `void`

Play a stream ringtone. 





|Parameter Name|Description|
|-----|-----|
|url|The URL of the stream to be passed to ExoPlayer.|





**Reference:** [ExoPlayer Repo](https://github.com/google/ExoPlayer)  





## [playStream](https://github.com/fennifith/Alarmio/blob/master/app/src/main/java/me/jfenn/alarmio/Alarmio.java#L413)

**Type:** `public` `void`

Play a stream ringtone. 





|Parameter Name|Description|
|-----|-----|
|url|The URL of the stream to be passed to ExoPlayer.|
|attributes|The attributes to play the stream with.|





**Reference:** [ExoPlayer Repo](https://github.com/google/ExoPlayer)  





## [stopStream](https://github.com/fennifith/Alarmio/blob/master/app/src/main/java/me/jfenn/alarmio/Alarmio.java#L426)

**Type:** `public` `void`

Stop the currently playing stream. 












## [isPlayingStream](https://github.com/fennifith/Alarmio/blob/master/app/src/main/java/me/jfenn/alarmio/Alarmio.java#L434)

**Type:** `public` `boolean`

Determine if the passed url matches the stream that is currently playing. 





|Parameter Name|Description|
|-----|-----|
|url|The URL to match the current stream to.|


**Returned Value:**  True if the URL matches that of the currently playing stream.  








## [stopCurrentSound](https://github.com/fennifith/Alarmio/blob/master/app/src/main/java/me/jfenn/alarmio/Alarmio.java#L445)

**Type:** `public` `void`

Stop the currently playing sound, regardless of whether it is a ringtone 
or a stream. 












