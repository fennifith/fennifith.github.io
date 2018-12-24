---
layout: docs
title: AsteroidDrawer Documentation
---
#### [.](./../../../../../../../../index) > [app](./../../../../../../../index) > [src](./../../../../../../index) > [main](./../../../../../index) > [java](./../../../../index) > [james](./../../../index) > [asteroid](./../../index) > [data](./../index) > [drawer](./index) > **AsteroidDrawer.java**

## [setMakeAsteroids](https://github.com/fennifith/Asteroid/blob/master/app/src/main/java/james/asteroid/data/drawer/AsteroidDrawer.java#L40)

**Type:** `public` `void`

Set whether the drawer should generate its own asteroids at 
a set interval. 





|Parameter Name|Description|
|-----|-----|
|shouldMakeAsteroids|Whether the drawer should generate its own asteroids.  |








## [makeNew](https://github.com/fennifith/Asteroid/blob/master/app/src/main/java/james/asteroid/data/drawer/AsteroidDrawer.java#L54)

**Type:** `public` `void`

Make a new asteroid. Like magic. 












## [size](https://github.com/fennifith/Asteroid/blob/master/app/src/main/java/james/asteroid/data/drawer/AsteroidDrawer.java#L62)

**Type:** `public` `int`






**Returned Value:** The amount of asteroids currently visible on the screen.  








## [asteroidAt](https://github.com/fennifith/Asteroid/blob/master/app/src/main/java/james/asteroid/data/drawer/AsteroidDrawer.java#L69)

**Type:** `public` `AsteroidData`

Determine if there is an asteroid intersecting the given position 
on the canvas; if so, return it. 





|Parameter Name|Description|
|-----|-----|
|position|The position Rect to check if an asteroid intersects.|


**Returned Value:**  The AsteroidData if it intersects the given position; null if there is nothing there.  








## [destroy](https://github.com/fennifith/Asteroid/blob/master/app/src/main/java/james/asteroid/data/drawer/AsteroidDrawer.java#L86)

**Type:** `public` `void`

Destroy a given asteroid; generate an explosion of particles in its place. 





|Parameter Name|Description|
|-----|-----|
|asteroid|The asteroid to obliterate. Kaboom! Kablowie! Kapow! Badabadoosh!  |








