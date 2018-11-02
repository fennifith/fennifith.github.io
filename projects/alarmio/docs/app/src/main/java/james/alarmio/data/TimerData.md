---
layout: docs
title: TimerData Documentation
---
#### [.](./../../../../../../../index) > [app](./../../../../../../index) > [src](./../../../../../index) > [main](./../../../../index) > [java](./../../../index) > [james](./../../index) > [alarmio](./../index) > [data](./index) > **TimerData.java**

## [onIdChanged](https://github.com/fennifith/Alarmio/blob/master/app/src/main/java/james/alarmio/data/TimerData.java#L44)

**Type:** `public` `void`

Moves this TimerData's preferences to another "id". 





|Parameter Name|Description|
|-----|-----|
|id|The new id to be assigned|
|context|An active context instance.  |








## [onRemoved](https://github.com/fennifith/Alarmio/blob/master/app/src/main/java/james/alarmio/data/TimerData.java#L61)

**Type:** `public` `void`

Removes this TimerData's preferences. 





|Parameter Name|Description|
|-----|-----|
|context|An active context instance.  |








## [isSet](https://github.com/fennifith/Alarmio/blob/master/app/src/main/java/james/alarmio/data/TimerData.java#L74)

**Type:** `public` `boolean`

Decides if the Timer has been set or should be ignored. 






**Returned Value:**  True if the timer should go off at some time in the future.  








## [getRemainingMillis](https://github.com/fennifith/Alarmio/blob/master/app/src/main/java/james/alarmio/data/TimerData.java#L83)

**Type:** `public` `long`

Get the remaining amount of milliseconds before the timer should go off. This 
may return a negative number. 






**Returned Value:**  The amount of milliseconds before the timer should go off.  








## [getDuration](https://github.com/fennifith/Alarmio/blob/master/app/src/main/java/james/alarmio/data/TimerData.java#L93)

**Type:** `public` `long`

The total length of the timer. 






**Returned Value:**  The total length of the timer, in milliseconds.  








## [setDuration](https://github.com/fennifith/Alarmio/blob/master/app/src/main/java/james/alarmio/data/TimerData.java#L102)

**Type:** `public` `void`

Set the duration of the timer. 





|Parameter Name|Description|
|-----|-----|
|duration|The total length of the timer, in milliseconds.|
|context|An active Context instance.  |








## [setVibrate](https://github.com/fennifith/Alarmio/blob/master/app/src/main/java/james/alarmio/data/TimerData.java#L113)

**Type:** `public` `void`

Set whether the timer should vibrate when it goes off. 





|Parameter Name|Description|
|-----|-----|
|context|An active Context instance.|
|isVibrate|Whether the timer should vibrate.  |








## [hasSound](https://github.com/fennifith/Alarmio/blob/master/app/src/main/java/james/alarmio/data/TimerData.java#L124)

**Type:** `public` `boolean`

Return whether the timer has a sound or not. 






**Returned Value:**  A boolean defining whether a sound has been set for the timer.  








## [getSound](https://github.com/fennifith/Alarmio/blob/master/app/src/main/java/james/alarmio/data/TimerData.java#L134)

**Type:** `@Nullable` `public` `SoundData`

Get the [SoundData](./SoundData) sound specified for the timer. 






**Returned Value:**  An instance of SoundData describing the sound that the timer should make (or null).  








## [setSound](https://github.com/fennifith/Alarmio/blob/master/app/src/main/java/james/alarmio/data/TimerData.java#L145)

**Type:** `public` `void`

Set the sound that the timer should make. 





|Parameter Name|Description|
|-----|-----|
|context|An active context instance.|
|sound|A [SoundData](./SoundData) defining the sound that the timer should make.  |








## [set](https://github.com/fennifith/Alarmio/blob/master/app/src/main/java/james/alarmio/data/TimerData.java#L157)

**Type:** `public` `void`

Set the next time for the timer to ring. 





|Parameter Name|Description|
|-----|-----|
|context|An active context instance.|
|manager|The AlarmManager to schedule the timer on.  |








## [setAlarm](https://github.com/fennifith/Alarmio/blob/master/app/src/main/java/james/alarmio/data/TimerData.java#L170)

**Type:** `public` `void`

Schedule a time for the alert to ring at. 





|Parameter Name|Description|
|-----|-----|
|context|An active context instance.|
|manager|The AlarmManager to schedule the alert on.  |








## [cancel](https://github.com/fennifith/Alarmio/blob/master/app/src/main/java/james/alarmio/data/TimerData.java#L182)

**Type:** `public` `void`

Cancel the pending alert. 





|Parameter Name|Description|
|-----|-----|
|context|An active context instance.|
|manager|The AlarmManager that the alert was scheduled on.  |








## [getIntent](https://github.com/fennifith/Alarmio/blob/master/app/src/main/java/james/alarmio/data/TimerData.java#L195)

**Type:** `private` `PendingIntent`

The intent to fire when the alert should ring. 





|Parameter Name|Description|
|-----|-----|
|context|An active context instance.|


**Returned Value:**  A PendingIntent that will open the alert screen.  








