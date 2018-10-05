---
layout: docs
---
#### [.](./../../../../../../../index) > [library](./../../../../../../index) > [src](./../../../../../index) > [main](./../../../../index) > [java](./../../../index) > [me](./../../index) > [jfenn](./../index) > [radiallayout](./index) > **BaseRadialItem.java**

# [BaseRadialItem](https://github.com/TheAndroidMaster/RadialLayout/blob/master/library/src/main/java/me/jfenn/radiallayout/BaseRadialItem.java#L12)

**Type:** `public` `abstract` `class`

A view container specifying info such as the size to scale the image 
relative to the rest of the items and the distance that the view should be 
from the center of the layout. 












## [BaseRadialItem](https://github.com/TheAndroidMaster/RadialLayout/blob/master/library/src/main/java/me/jfenn/radiallayout/BaseRadialItem.java#L44)

**Type:** `public`

Creates a new container specifying info such as the size to scale the image 
relative to the rest of the content and the distance the item should be 
from the center. 





|Parameter Name|Description|
|-----|-----|
|id|some arbitrary identifier|
|image|the bitmap to be displayed|
|size|the size to scale the image relative to other items|
|distance|the distance from the center to position the image at relative to other items  |








## [copy](https://github.com/TheAndroidMaster/RadialLayout/blob/master/library/src/main/java/me/jfenn/radiallayout/BaseRadialItem.java#L74)

**Type:** `abstract` `BaseRadialItem`

Creates a copy of the BaseRadialItem by calling the constructor with itself as an argument. 






**Returned Value:** a new instance of the BaseRadialItem with the same construction parameters  








## [setRadius](https://github.com/TheAndroidMaster/RadialLayout/blob/master/library/src/main/java/me/jfenn/radiallayout/BaseRadialItem.java#L93)

**Type:** `abstract` `void`

Sets the radius of this BaseRadialItem and creates a new scaled bitmap if the current one does not match 
the required dimensions. 





|Parameter Name|Description|
|-----|-----|
|radius|the required radius of the circle  |








## [getCircleImage](https://github.com/TheAndroidMaster/RadialLayout/blob/master/library/src/main/java/me/jfenn/radiallayout/BaseRadialItem.java#L109)

**Type:** `abstract` `Bitmap`

Creates a new circular bitmap if the current one does not match the required dimensions, and returns it. 





|Parameter Name|Description|
|-----|-----|
|layout|the current radial layout|


**Returned Value:** a circular image bitmap  








## [getMatrix](https://github.com/TheAndroidMaster/RadialLayout/blob/master/library/src/main/java/me/jfenn/radiallayout/BaseRadialItem.java#L117)

**Type:** `Matrix`

Creates a Matrix to scale the image to the correct dimensions on a Canvas. 












## [needsFrame](https://github.com/TheAndroidMaster/RadialLayout/blob/master/library/src/main/java/me/jfenn/radiallayout/BaseRadialItem.java#L140)

**Type:** `boolean`

Determines whether calling nextFrame() will result in any different values or not. 






**Returned Value:** whether calling nextFrame() will result in any different values  








## [nextFrame](https://github.com/TheAndroidMaster/RadialLayout/blob/master/library/src/main/java/me/jfenn/radiallayout/BaseRadialItem.java#L152)

**Type:** `void`

Updates values to display the next frame of the item. 





|Parameter Name|Description|
|-----|-----|
|layout|the view that the item is to be displayed in  |








## [animateTo](https://github.com/TheAndroidMaster/RadialLayout/blob/master/library/src/main/java/me/jfenn/radiallayout/BaseRadialItem.java#L172)

**Type:** `void`

Animates this BaseRadialItem to the dimensions and position of the parameter. 





|Parameter Name|Description|
|-----|-----|
|item|the item to animate to the position of|
|layout|the layout to be animated in|
|shadowRadius|the radius (in dp) of the shadow to be drawn  |








## [clickDown](https://github.com/TheAndroidMaster/RadialLayout/blob/master/library/src/main/java/me/jfenn/radiallayout/BaseRadialItem.java#L198)

**Type:** `void`

Creates a bouncy scale animation intended for touch feedback. 





|Parameter Name|Description|
|-----|-----|
|layout|the view that the item is to be displayed in  |








## [clickUp](https://github.com/TheAndroidMaster/RadialLayout/blob/master/library/src/main/java/me/jfenn/radiallayout/BaseRadialItem.java#L210)

**Type:** `void`

Creates a bouncy scale animation intended for touch feedback. 





|Parameter Name|Description|
|-----|-----|
|layout|the view that the item is to be displayed in  |








## [clickBack](https://github.com/TheAndroidMaster/RadialLayout/blob/master/library/src/main/java/me/jfenn/radiallayout/BaseRadialItem.java#L222)

**Type:** `void`

Creates a bouncy scale animation intended for touch feedback. 





|Parameter Name|Description|
|-----|-----|
|layout|the view that the item is to be displayed in  |








## [removeFrom](https://github.com/TheAndroidMaster/RadialLayout/blob/master/library/src/main/java/me/jfenn/radiallayout/BaseRadialItem.java#L235)

**Type:** `void`

Removes the item from the layout. 





|Parameter Name|Description|
|-----|-----|
|layout|the layout to be removed from  |








