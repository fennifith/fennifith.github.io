---
layout: docs
title: StopwatchService Documentation
---
#### [.](./../../../../../../../../index) > [app](./../../../../../../../index) > [src](./../../../../../../index) > [main](./../../../../../index) > [java](./../../../../index) > [me](./../../../index) > [jfenn](./../../index) > [alarmio](./../index) > [services](./index) > **StopwatchService.java**

## [reset](https://github.com/fennifith/Alarmio/blob/master/app/src/main/java/me/jfenn/alarmio/services/StopwatchService.java#L118)

**Type:** `public` `void`

Reset the stopwatch, cancelling any notifications and setting everything to zero. 












## [toggle](https://github.com/fennifith/Alarmio/blob/master/app/src/main/java/me/jfenn/alarmio/services/StopwatchService.java#L138)

**Type:** `public` `void`

Toggle whether the stopwatch is currently running (pausing it and storing a temporary 
time if so). 












## [lap](https://github.com/fennifith/Alarmio/blob/master/app/src/main/java/me/jfenn/alarmio/services/StopwatchService.java#L161)

**Type:** `public` `void`

Record the current time as a "lap". 












## [getNotification](https://github.com/fennifith/Alarmio/blob/master/app/src/main/java/me/jfenn/alarmio/services/StopwatchService.java#L175)

**Type:** `private` `Notification`

Get a notification to send to the user for the current time. 





|Parameter Name|Description|
|-----|-----|
|time|A formatted string defining the current time on the stopwatch.|


**Returned Value:**  A notification to use for this stopwatch.  








