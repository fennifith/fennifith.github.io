---
layout: docs
title: AlarmData Documentation
---
#### [.](./../../../../../../../../index) > [app](./../../../../../../../index) > [src](./../../../../../../index) > [main](./../../../../../index) > [java](./../../../../index) > [me](./../../../index) > [jfenn](./../../index) > [alarmio](./../index) > [data](./index) > **AlarmData.java**

## [onIdChanged](https://github.com/fennifith/Alarmio/blob/master/app/src/main/java/me/jfenn/alarmio/data/AlarmData.java#L49)

**Type:** `public` `void`

Moves this AlarmData's preferences to another "id". 





|Parameter Name|Description|
|-----|-----|
|id|The new id to be assigned|
|context|An active context instance.  |








## [onRemoved](https://github.com/fennifith/Alarmio/blob/master/app/src/main/java/me/jfenn/alarmio/data/AlarmData.java#L71)

**Type:** `public` `void`

Removes this AlarmData's preferences. 





|Parameter Name|Description|
|-----|-----|
|context|An active context instance.  |








## [getName](https://github.com/fennifith/Alarmio/blob/master/app/src/main/java/me/jfenn/alarmio/data/AlarmData.java#L89)

**Type:** `public` `String`

Returns the user-defined "name" of the alarm, defaulting to 
"Alarm (1..)" if unset. 





|Parameter Name|Description|
|-----|-----|
|context|An active context instance.|


**Returned Value:**  The alarm name, as a string.  








## [isRepeat](https://github.com/fennifith/Alarmio/blob/master/app/src/main/java/me/jfenn/alarmio/data/AlarmData.java#L102)

**Type:** `public` `boolean`

Returns whether the alarm should repeat on a set interval 
or not. 






**Returned Value:**  If repeat is enabled for this alarm.  








## [setName](https://github.com/fennifith/Alarmio/blob/master/app/src/main/java/me/jfenn/alarmio/data/AlarmData.java#L117)

**Type:** `public` `void`

Sets the user-defined "name" of the alarm. 





|Parameter Name|Description|
|-----|-----|
|context|An active context instance.|
|name|The new name to be set.  |








## [setTime](https://github.com/fennifith/Alarmio/blob/master/app/src/main/java/me/jfenn/alarmio/data/AlarmData.java#L128)

**Type:** `public` `void`

Change the scheduled alarm time, 





|Parameter Name|Description|
|-----|-----|
|context|An active context instance.|
|manager|An AlarmManager to schedule the alarm on.|
|timeMillis|The UNIX time (in milliseconds) that the alarm should ring at. This is independent to days; if the time correlates to 9:30 on a Tuesday when the alarm should only repeat on Wednesdays and Thursdays, then the alarm will next ring at 9:30 on Wednesday.  |








## [setEnabled](https://github.com/fennifith/Alarmio/blob/master/app/src/main/java/me/jfenn/alarmio/data/AlarmData.java#L145)

**Type:** `public` `void`

Set whether the alarm is enabled. 





|Parameter Name|Description|
|-----|-----|
|context|An active context instance.|
|manager|An AlarmManager to schedule the alarm on.|
|isEnabled|Whether the alarm is enabled.  |








## [setDays](https://github.com/fennifith/Alarmio/blob/master/app/src/main/java/me/jfenn/alarmio/data/AlarmData.java#L160)

**Type:** `public` `void`

Sets the days of the week that the alarm should ring on. If 
no days are specified, the alarm will act as a one-time alert 
and will not repeat. 





|Parameter Name|Description|
|-----|-----|
|context|An active context instance.|
|days|A boolean array, with a length of 7 (seven days of the week) specifying whether repeat is enabled for that day.  |








## [setVibrate](https://github.com/fennifith/Alarmio/blob/master/app/src/main/java/me/jfenn/alarmio/data/AlarmData.java#L177)

**Type:** `public` `void`

Set whether the alarm should vibrate. 





|Parameter Name|Description|
|-----|-----|
|context|An active context instance.|
|isVibrate|Whether the alarm should vibrate.  |








## [hasSound](https://github.com/fennifith/Alarmio/blob/master/app/src/main/java/me/jfenn/alarmio/data/AlarmData.java#L188)

**Type:** `public` `boolean`

Return whether the alarm has a sound or not. 






**Returned Value:**  A boolean defining whether a sound has been set for the alarm.  








## [getSound](https://github.com/fennifith/Alarmio/blob/master/app/src/main/java/me/jfenn/alarmio/data/AlarmData.java#L198)

**Type:** `@Nullable` `public` `SoundData`

Get the [SoundData](./SoundData) sound specified for the alarm. 






**Returned Value:**  An instance of SoundData describing the sound that the alarm should make (or null).  








## [setSound](https://github.com/fennifith/Alarmio/blob/master/app/src/main/java/me/jfenn/alarmio/data/AlarmData.java#L210)

**Type:** `public` `void`

Set the sound that the alarm should make. 





|Parameter Name|Description|
|-----|-----|
|context|An active context instance.|
|sound|A [SoundData](./SoundData) defining the sound that the alarm should make.  |








## [getNext](https://github.com/fennifith/Alarmio/blob/master/app/src/main/java/me/jfenn/alarmio/data/AlarmData.java#L222)

**Type:** `@Nullable` `public` `Calendar`

Get the next time that the alarm should wring. 






**Returned Value:**  A Calendar object defining the next time that the alarm should ring at.





**Reference:**  [java.util.Calendar Documentation](https://developer.android.com/reference/java/util/Calendar)  





## [set](https://github.com/fennifith/Alarmio/blob/master/app/src/main/java/me/jfenn/alarmio/data/AlarmData.java#L260)

**Type:** `public` `Date`

Set the next time for the alarm to ring. 





|Parameter Name|Description|
|-----|-----|
|context|An active context instance.|
|manager|The AlarmManager to schedule the alarm on.|


**Returned Value:**  The next [Date](https://developer.android.com/reference/java/util/Date) at which the alarm will ring.  








## [setAlarm](https://github.com/fennifith/Alarmio/blob/master/app/src/main/java/me/jfenn/alarmio/data/AlarmData.java#L274)

**Type:** `private` `void`

Schedule a time for the alarm to ring at. 





|Parameter Name|Description|
|-----|-----|
|context|An active context instance.|
|manager|The AlarmManager to schedule the alarm on.|
|timeMillis|A UNIX timestamp specifying the next time for the alarm to ring.  |








## [cancel](https://github.com/fennifith/Alarmio/blob/master/app/src/main/java/me/jfenn/alarmio/data/AlarmData.java#L308)

**Type:** `public` `void`

Cancel the next time for the alarm to ring. 





|Parameter Name|Description|
|-----|-----|
|context|An active context instance.|
|manager|The AlarmManager that the alarm was scheduled on.  |








## [getIntent](https://github.com/fennifith/Alarmio/blob/master/app/src/main/java/me/jfenn/alarmio/data/AlarmData.java#L324)

**Type:** `private` `PendingIntent`

The intent to fire when the alarm should ring. 





|Parameter Name|Description|
|-----|-----|
|context|An active context instance.|


**Returned Value:**  A PendingIntent that will open the alert screen.  








