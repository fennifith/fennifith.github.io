---
layout: docs
title: ParticleData Documentation
---
#### [.](./../../../../../../../index) > [app](./../../../../../../index) > [src](./../../../../../index) > [main](./../../../../index) > [java](./../../../index) > [james](./../../index) > [asteroid](./../index) > [data](./index) > **ParticleData.java**

## [next](https://github.com/fennifith/Asteroid/blob/master/app/src/main/java/james/asteroid/data/ParticleData.java#L33)

**Type:** `public` `Rect`

Calculates the next Rect to draw the particle in for the 
next frame. 





|Parameter Name|Description|
|-----|-----|
|speed|The speed of the particle.|
|width|The width of the drawing canvas.|
|height|The height of the drawing canvas.|


**Returned Value:**  The Rect to draw the particle in for the next frame - equals null if it can no longer be drawn within the given width/height.  








## [draw](https://github.com/fennifith/Asteroid/blob/master/app/src/main/java/james/asteroid/data/ParticleData.java#L64)

**Type:** `@Override` `public` `boolean`

Draws the particle on the given canvas. 





|Parameter Name|Description|
|-----|-----|
|canvas|The canvas to draw the particle on.|
|speed|The speed of the particle.|


**Returned Value:**  Whether the particle was drawn; false if it can no longer be drawn within the visible area of the canvas.  








