---
layout: docs
title: AnimatedValue Documentation
---
#### [.](./../../../../../../../../../index) > [slideactionview](./../../../../../../../../index) > [src](./../../../../../../../index) > [main](./../../../../../../index) > [java](./../../../../../index) > [me](./../../../../index) > [jfenn](./../../../index) > [slideactionview](./../../index) > [utils](./../index) > [anim](./index) > **AnimatedValue.java**

# [AnimatedValue<T>](https://github.com/fennifith/SlideActionView/blob/master/slideactionview/src/main/java/me/jfenn/slideactionview/utils/anim/AnimatedValue.java#L6)

**Type:** `public` `abstract` `class`

AnimatedValue is a class which stores a value to be animated 
over a given duration of time. It provides methods to set a 
target value, default value, and current value. 

As this method is meant to be used alongside a view's Canvas, 
the animation should not occur in "steps", but rather as a 
function of System.currentTimeMillis. 





|Parameter Name|Description|
|-----|-----|
|<T>|The type of value to be animated. |








## [set](https://github.com/fennifith/SlideActionView/blob/master/slideactionview/src/main/java/me/jfenn/slideactionview/utils/anim/AnimatedValue.java#L33)

**Type:** `public` `void`

Set the current value to be drawn. 





|Parameter Name|Description|
|-----|-----|
|value|The current value.  |








## [setDefault](https://github.com/fennifith/SlideActionView/blob/master/slideactionview/src/main/java/me/jfenn/slideactionview/utils/anim/AnimatedValue.java#L42)

**Type:** `public` `void`

Set the default value to return to. 





|Parameter Name|Description|
|-----|-----|
|defaultValue|The default value.  |








## [setCurrent](https://github.com/fennifith/SlideActionView/blob/master/slideactionview/src/main/java/me/jfenn/slideactionview/utils/anim/AnimatedValue.java#L51)

**Type:** `public` `void`

Set the current (and target) value. 





|Parameter Name|Description|
|-----|-----|
|value|The current value.  |








## [val](https://github.com/fennifith/SlideActionView/blob/master/slideactionview/src/main/java/me/jfenn/slideactionview/utils/anim/AnimatedValue.java#L60)

**Type:** `public` `T`

Get the current value to be drawn. 






**Returned Value:**  The current value.  








## [nextVal](https://github.com/fennifith/SlideActionView/blob/master/slideactionview/src/main/java/me/jfenn/slideactionview/utils/anim/AnimatedValue.java#L69)

**Type:** `public` `T`

Get the next value about to be drawn, without setting 
the current value to it. 






**Returned Value:**  The next value.  








## [nextVal](https://github.com/fennifith/SlideActionView/blob/master/slideactionview/src/main/java/me/jfenn/slideactionview/utils/anim/AnimatedValue.java#L79)

**Type:** `public` `T`

Get the next value about to be drawn, without setting 
the current value to it. 





|Parameter Name|Description|
|-----|-----|
|duration|The duration, in milliseconds, that the animation should take.|


**Returned Value:**  The next value.  








## [nextVal](https://github.com/fennifith/SlideActionView/blob/master/slideactionview/src/main/java/me/jfenn/slideactionview/utils/anim/AnimatedValue.java#L91)

**Type:** `abstract` `T`

Get the next value about to be drawn, without setting 
the current value to it. 





|Parameter Name|Description|
|-----|-----|
|start|The time at which the animation started, in milliseconds.|
|duration|The duration, in milliseconds, that the animation should take.|


**Returned Value:**  The next value.  








## [getTarget](https://github.com/fennifith/SlideActionView/blob/master/slideactionview/src/main/java/me/jfenn/slideactionview/utils/anim/AnimatedValue.java#L103)

**Type:** `public` `T`

Get the target value that is currently being animated to. 






**Returned Value:**  The target value.  








## [getDefault](https://github.com/fennifith/SlideActionView/blob/master/slideactionview/src/main/java/me/jfenn/slideactionview/utils/anim/AnimatedValue.java#L112)

**Type:** `public` `T`

Get the default value that the animation should return to. 






**Returned Value:**  The default value.  








## [isTarget](https://github.com/fennifith/SlideActionView/blob/master/slideactionview/src/main/java/me/jfenn/slideactionview/utils/anim/AnimatedValue.java#L121)

**Type:** `public` `boolean`

Determine if the target value has been drawn (implying that 
the animation is complete). 






**Returned Value:**  True if the target value has supposedly been drawn.  








## [isDefault](https://github.com/fennifith/SlideActionView/blob/master/slideactionview/src/main/java/me/jfenn/slideactionview/utils/anim/AnimatedValue.java#L132)

**Type:** `public` `boolean`

Determine if the default value has been drawn. 






**Returned Value:**  True if the default value has supposedly been drawn.  








## [isTargetDefault](https://github.com/fennifith/SlideActionView/blob/master/slideactionview/src/main/java/me/jfenn/slideactionview/utils/anim/AnimatedValue.java#L142)

**Type:** `public` `boolean`

Determine if the default value has been set AND is the current 
target. 






**Returned Value:**  True if the default value is the current target.  








## [toDefault](https://github.com/fennifith/SlideActionView/blob/master/slideactionview/src/main/java/me/jfenn/slideactionview/utils/anim/AnimatedValue.java#L153)

**Type:** `public` `void`

Animate to the default value. 












## [to](https://github.com/fennifith/SlideActionView/blob/master/slideactionview/src/main/java/me/jfenn/slideactionview/utils/anim/AnimatedValue.java#L161)

**Type:** `public` `void`

Set the value to be animated towards. 





|Parameter Name|Description|
|-----|-----|
|value|The target value.  |








## [next](https://github.com/fennifith/SlideActionView/blob/master/slideactionview/src/main/java/me/jfenn/slideactionview/utils/anim/AnimatedValue.java#L171)

**Type:** `public` `void`

Update the current value. 





|Parameter Name|Description|
|-----|-----|
|animate|Whether to animate the change.  |








## [next](https://github.com/fennifith/SlideActionView/blob/master/slideactionview/src/main/java/me/jfenn/slideactionview/utils/anim/AnimatedValue.java#L180)

**Type:** `public` `void`

Update the current value. 





|Parameter Name|Description|
|-----|-----|
|animate|Whether to animate the change.|
|duration|The duration, in milliseconds, to animate across.  |








