---
layout: docs
title: AnimatedColor Documentation
---
#### [.](./../../../../../../../../index) > [androidutils](./../../../../../../../index) > [src](./../../../../../../index) > [main](./../../../../../index) > [java](./../../../../index) > [me](./../../../index) > [jfenn](./../../index) > [androidutils](./../index) > [anim](./index) > **AnimatedColor.java**

# [AnimatedColor](https://github.com/fennifith/AndroidUtils/blob/master/androidutils/src/main/java/me/jfenn/androidutils/anim/AnimatedColor.java#L8)

**Type:** `public` `class`

The AnimatedColor class animates a color int, to a granularity of 
1/255. That is, if the difference between the target and current 
value is 1 or less, it will be ignored and the animation will 
be regarded as complete. 












## [set](https://github.com/fennifith/AndroidUtils/blob/master/androidutils/src/main/java/me/jfenn/androidutils/anim/AnimatedColor.java#L25)

**Type:** `public` `void`

Set the current value to be drawn. 





|Parameter Name|Description|
|-----|-----|
|value|The current value.  |








## [setDefault](https://github.com/fennifith/AndroidUtils/blob/master/androidutils/src/main/java/me/jfenn/androidutils/anim/AnimatedColor.java#L35)

**Type:** `public` `void`

Set the default value to return to. 





|Parameter Name|Description|
|-----|-----|
|defaultValue|The default value.  |








## [setCurrent](https://github.com/fennifith/AndroidUtils/blob/master/androidutils/src/main/java/me/jfenn/androidutils/anim/AnimatedColor.java#L47)

**Type:** `public` `void`

Set the current (and target) value. 





|Parameter Name|Description|
|-----|-----|
|value|The current value.  |








## [val](https://github.com/fennifith/AndroidUtils/blob/master/androidutils/src/main/java/me/jfenn/androidutils/anim/AnimatedColor.java#L59)

**Type:** `@ColorInt` `public` `int`

Get the current value to be drawn. 






**Returned Value:**  The current value.  








## [nextVal](https://github.com/fennifith/AndroidUtils/blob/master/androidutils/src/main/java/me/jfenn/androidutils/anim/AnimatedColor.java#L74)

**Type:** `@ColorInt` `public` `int`

Get the next value about to be drawn, without setting 
the current value to it. 






**Returned Value:**  The next value.  








## [nextVal](https://github.com/fennifith/AndroidUtils/blob/master/androidutils/src/main/java/me/jfenn/androidutils/anim/AnimatedColor.java#L85)

**Type:** `@ColorInt` `public` `int`

Get the next value about to be drawn, without setting 
the current value to it. 





|Parameter Name|Description|
|-----|-----|
|duration|The duration, in milliseconds, that the animation should take.|


**Returned Value:**  The next value.  








## [nextVal](https://github.com/fennifith/AndroidUtils/blob/master/androidutils/src/main/java/me/jfenn/androidutils/anim/AnimatedColor.java#L103)

**Type:** `@ColorInt` `public` `int`

Get the next value about to be drawn, without setting 
the current value to it. 





|Parameter Name|Description|
|-----|-----|
|start|The time at which the animation started, in milliseconds.|
|duration|The duration, in milliseconds, that the animation should take.|


**Returned Value:**  The next value.  








## [getTarget](https://github.com/fennifith/AndroidUtils/blob/master/androidutils/src/main/java/me/jfenn/androidutils/anim/AnimatedColor.java#L123)

**Type:** `@ColorInt` `public` `int`

Get the target value that is currently being animated to. 






**Returned Value:**  The target value.  








## [getDefault](https://github.com/fennifith/AndroidUtils/blob/master/androidutils/src/main/java/me/jfenn/androidutils/anim/AnimatedColor.java#L138)

**Type:** `@ColorInt` `public` `int`

Get the default value that the animation should return to. 






**Returned Value:**  The default value.  








## [isTarget](https://github.com/fennifith/AndroidUtils/blob/master/androidutils/src/main/java/me/jfenn/androidutils/anim/AnimatedColor.java#L153)

**Type:** `public` `boolean`

Determine if the target value has been drawn (implying that 
the animation is complete). 






**Returned Value:**  True if the target value has supposedly been drawn.  








## [isDefault](https://github.com/fennifith/AndroidUtils/blob/master/androidutils/src/main/java/me/jfenn/androidutils/anim/AnimatedColor.java#L164)

**Type:** `public` `boolean`

Determine if the default value has been drawn. 






**Returned Value:**  True if the default value has supposedly been drawn.  








## [isTargetDefault](https://github.com/fennifith/AndroidUtils/blob/master/androidutils/src/main/java/me/jfenn/androidutils/anim/AnimatedColor.java#L174)

**Type:** `public` `boolean`

Determine if the default value has been set AND is the current 
target. 






**Returned Value:**  True if the default value is the current target.  








## [toDefault](https://github.com/fennifith/AndroidUtils/blob/master/androidutils/src/main/java/me/jfenn/androidutils/anim/AnimatedColor.java#L185)

**Type:** `public` `void`

Animate to the default value. 












## [to](https://github.com/fennifith/AndroidUtils/blob/master/androidutils/src/main/java/me/jfenn/androidutils/anim/AnimatedColor.java#L195)

**Type:** `public` `void`

Set the value to be animated towards. 





|Parameter Name|Description|
|-----|-----|
|value|The target value.  |








## [next](https://github.com/fennifith/AndroidUtils/blob/master/androidutils/src/main/java/me/jfenn/androidutils/anim/AnimatedColor.java#L207)

**Type:** `public` `void`

Update the current value. 





|Parameter Name|Description|
|-----|-----|
|animate|Whether to animate the change.  |








## [next](https://github.com/fennifith/AndroidUtils/blob/master/androidutils/src/main/java/me/jfenn/androidutils/anim/AnimatedColor.java#L216)

**Type:** `public` `void`

Update the current value. 





|Parameter Name|Description|
|-----|-----|
|animate|Whether to animate the change.|
|duration|The duration, in milliseconds, to animate across.  |








