---
layout: docs
title: CloudData Documentation
---
#### [.](./../../../../../../../index) > [app](./../../../../../../index) > [src](./../../../../../index) > [main](./../../../../index) > [java](./../../../index) > [james](./../../index) > [asteroid](./../index) > [data](./index) > **CloudData.java**

## [getStart](https://github.com/fennifith/Asteroid/blob/master/app/src/main/java/james/asteroid/data/CloudData.java#L19)

**Type:** `public` `float`

Get the position of start of the cloud, from 0-1, as a 
scale of the width of the canvas. 






**Returned Value:** The position of the start of the cloud, from 0-1, to be scaled by the width of the canvas.  








## [getEnd](https://github.com/fennifith/Asteroid/blob/master/app/src/main/java/james/asteroid/data/CloudData.java#L30)

**Type:** `public` `float`

Get the position of the end of the cloud, from 0-1, as a 
scale of the width of the canvas. 






**Returned Value:** The position of the end of the cloud, from 0-1, to be scaled by the width of the canvas.  








## [next](https://github.com/fennifith/Asteroid/blob/master/app/src/main/java/james/asteroid/data/CloudData.java#L41)

**Type:** `public` `Rect`

Calculates the next Rect area to draw the cloud in on the 
canvas. 





|Parameter Name|Description|
|-----|-----|
|speed|The speed of the cloud.|
|width|The width of the drawing canvas.|
|height|The height of the drawing canvas.|


**Returned Value:**  The Rect area to draw the cloud in for the next frame. Returns "null" if the cloud can no longer be drawn within the given width/height.  








## [draw](https://github.com/fennifith/Asteroid/blob/master/app/src/main/java/james/asteroid/data/CloudData.java#L61)

**Type:** `@Override` `public` `boolean`

Draws the cloud on the given canvas. 





|Parameter Name|Description|
|-----|-----|
|canvas|The canvas to draw the cloud on.|
|speed|The speed the cloud should travel at.|


**Returned Value:**  Whether the cloud was drawn on the canvas; false if the cloud can no longer be drawn within the visible area.  








