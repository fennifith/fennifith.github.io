---
layout: docs
title: BoxData Documentation
---
#### [.](./../../../../../../../index) > [app](./../../../../../../index) > [src](./../../../../../index) > [main](./../../../../index) > [java](./../../../index) > [james](./../../index) > [asteroid](./../index) > [data](./index) > **BoxData.java**

## [open](https://github.com/fennifith/Asteroid/blob/master/app/src/main/java/james/asteroid/data/BoxData.java#L24)

**Type:** `public` `void`

Opens the box; gives the player whatever is inside it. 












## [next](https://github.com/fennifith/Asteroid/blob/master/app/src/main/java/james/asteroid/data/BoxData.java#L31)

**Type:** `public` `Matrix`

Calculates the position Matrix of the box to draw in the 
next frame. 





|Parameter Name|Description|
|-----|-----|
|speed|The speed of the box.|
|width|The width of the drawing canvas.|
|height|The height of the drawing canvas.|


**Returned Value:**  The position Matrix of the box. Equals null if the box can no longer be drawn within the given width/height.  








