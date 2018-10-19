---
layout: docs
title: AnimatedInteger Documentation
---
#### [.](./../../../../../../../../index) > [app](./../../../../../../../index) > [src](./../../../../../../index) > [main](./../../../../../index) > [java](./../../../../index) > [james](./../../../index) > [alarmio](./../../index) > [utils](./../index) > [anim](./index) > **AnimatedInteger.java**

# [AnimatedValue<Integer>](https://github.com/TheAndroidMaster/Alarmio/blob/master/app/src/main/java/james/alarmio/utils/anim/AnimatedInteger.java#L4)

**Type:** `public` `class` `AnimatedInteger` `extends`

The AnimatedInteger class animates an integer, with a granularity 
of 1.00(...)1. That is, if the difference between the current and 
target value is less than or equal to 1, it will be ignored and the 
animation will be regarded as complete. 












## [nextVal](https://github.com/TheAndroidMaster/Alarmio/blob/master/app/src/main/java/james/alarmio/utils/anim/AnimatedInteger.java#L16)

**Type:** `@Override` `public` `Integer`

Get the next value about to be drawn, without setting 
the current value to it. 





|Parameter Name|Description|
|-----|-----|
|start|The time at which the animation started, in milliseconds.|
|duration|The duration, in milliseconds, that the animation should take.|


**Returned Value:**  The next value.  








