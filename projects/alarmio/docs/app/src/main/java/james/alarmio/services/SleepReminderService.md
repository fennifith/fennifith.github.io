---
layout: docs
title: SleepReminderService Documentation
---
#### [.](./../../../../../../../index) > [app](./../../../../../../index) > [src](./../../../../../index) > [main](./../../../../index) > [java](./../../../index) > [james](./../../index) > [alarmio](./../index) > [services](./index) > **SleepReminderService.java**

## [refreshState](https://github.com/TheAndroidMaster/Alarmio/blob/master/app/src/main/java/james/alarmio/services/SleepReminderService.java#L63)

**Type:** `public` `void`

Refresh the state of the sleepy stuff. This will either show a notification if a notification 
should be shown, or stop the service if it shouldn't. 












## [getSleepyAlarm](https://github.com/TheAndroidMaster/Alarmio/blob/master/app/src/main/java/james/alarmio/services/SleepReminderService.java#L96)

**Type:** `@Nullable` `public` `static` `AlarmData`

Get a sleepy alarm. Well, get the next alarm that should trigger a sleep alert. 





|Parameter Name|Description|
|-----|-----|
|alarmio|The active Application instance.|


**Returned Value:**  The next [AlarmData](../data/AlarmData) that should trigger a sleep alert, or null if there isn't one.  








## [getNextWakeAlarm](https://github.com/TheAndroidMaster/Alarmio/blob/master/app/src/main/java/james/alarmio/services/SleepReminderService.java#L119)

**Type:** `@Nullable` `public` `static` `AlarmData`

Get the next scheduled [AlarmData](../data/AlarmData) that will ring. 





|Parameter Name|Description|
|-----|-----|
|alarmio|The active Application instance.|


**Returned Value:**  The next AlarmData that will wake the user up.  








## [refreshSleepTime](https://github.com/TheAndroidMaster/Alarmio/blob/master/app/src/main/java/james/alarmio/services/SleepReminderService.java#L155)

**Type:** `public` `static` `void`

To be called whenever an alarm is changed, might change, or when time might have 
unexpectedly leaped forwards. This will start the service if there is a 
[sleepy alarm](#getsleepyalarm) present. 





|Parameter Name|Description|
|-----|-----|
|context|An active context instance.  |








