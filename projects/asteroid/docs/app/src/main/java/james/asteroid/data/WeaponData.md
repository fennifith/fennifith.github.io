---
layout: docs
title: WeaponData Documentation
---
#### [.](./../../../../../../../index) > [app](./../../../../../../index) > [src](./../../../../../index) > [main](./../../../../index) > [java](./../../../index) > [james](./../../index) > [asteroid](./../index) > [data](./index) > **WeaponData.java**

## [getName](https://github.com/fennifith/Asteroid/blob/master/app/src/main/java/james/asteroid/data/WeaponData.java#L52)

**Type:** `public` `String`

Gets the user-facing name of the weapon. 





|Parameter Name|Description|
|-----|-----|
|context|An active context instance.|


**Returned Value:**  The name of the weapon; a String.  








## [getBitmap](https://github.com/fennifith/Asteroid/blob/master/app/src/main/java/james/asteroid/data/WeaponData.java#L62)

**Type:** `public` `Bitmap`

Get the Bitmap image of the weapon. 





|Parameter Name|Description|
|-----|-----|
|context|An active context instance.|


**Returned Value:**  The Bitmap image of the weapon.  








## [fire](https://github.com/fennifith/Asteroid/blob/master/app/src/main/java/james/asteroid/data/WeaponData.java#L75)

**Type:** `public` `void`

Fire the weapon; generate an amount of ProjectileDatas at the given 
x/y coordinates and add them to the passed List instance. 





|Parameter Name|Description|
|-----|-----|
|projectiles|The current list of projectiles being drawn.|
|x|The current x coordinate of the player.|
|y|The current y coordinate of the player.  |








## [loadSounds](https://github.com/fennifith/Asteroid/blob/master/app/src/main/java/james/asteroid/data/WeaponData.java#L96)

**Type:** `public` `static` `void`

Load the weapon sounds to be played when they are fired. 





|Parameter Name|Description|
|-----|-----|
|context|An active context instance.|
|soundPool|The SoundPool to load the sounds into.  |








