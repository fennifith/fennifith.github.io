---
layout: docs
title: RadialLayoutView Documentation
---
#### [.](./../../../../../../../index) > [library](./../../../../../../index) > [src](./../../../../../index) > [main](./../../../../index) > [java](./../../../index) > [me](./../../index) > [jfenn](./../index) > [radiallayout](./index) > **RadialLayoutView.java**

## [isFirstDrawn](https://github.com/fennifith/RadialLayout/blob/master/library/src/main/java/me/jfenn/radiallayout/RadialLayoutView.java#L89)

**Type:** `private` `boolean`

true once the view has been drawn - will invalidate continuously until then as an alternative to a ViewTreeObserver 












## [getPaint](https://github.com/fennifith/RadialLayout/blob/master/library/src/main/java/me/jfenn/radiallayout/RadialLayoutView.java#L126)

**Type:** `public` `Paint`






**Returned Value:** the Paint used to draw images of the items in the view  








## [getShadowPaint](https://github.com/fennifith/RadialLayout/blob/master/library/src/main/java/me/jfenn/radiallayout/RadialLayoutView.java#L133)

**Type:** `public` `Paint`






**Returned Value:** the Paint used to draw the shadows of items in the view  








## [setShadowColor](https://github.com/fennifith/RadialLayout/blob/master/library/src/main/java/me/jfenn/radiallayout/RadialLayoutView.java#L140)

**Type:** `public` `void`

Sets the color of the shadow of all items in the view 





|Parameter Name|Description|
|-----|-----|
|shadowColor|a color int  |








## [setCenterItem](https://github.com/fennifith/RadialLayout/blob/master/library/src/main/java/me/jfenn/radiallayout/RadialLayoutView.java#L159)

**Type:** `public` `void`

Set the item to be displayed in the center of the view. 





|Parameter Name|Description|
|-----|-----|
|item|the item to be displayed in the center of the view  |








## [setOnCenterClickListener](https://github.com/fennifith/RadialLayout/blob/master/library/src/main/java/me/jfenn/radiallayout/RadialLayoutView.java#L172)

**Type:** `public` `void`

Listen for the center item being pressed. 












## [setOnItemClickListener](https://github.com/fennifith/RadialLayout/blob/master/library/src/main/java/me/jfenn/radiallayout/RadialLayoutView.java#L179)

**Type:** `public` `void`

Listen for any other item being pressed. 












## [getItems](https://github.com/fennifith/RadialLayout/blob/master/library/src/main/java/me/jfenn/radiallayout/RadialLayoutView.java#L186)

**Type:** `public` `List<BaseRadialItem>`

Get all the items being displayed in the view. 






**Returned Value:** a list of the items being displayed in the view  








## [setItems](https://github.com/fennifith/RadialLayout/blob/master/library/src/main/java/me/jfenn/radiallayout/RadialLayoutView.java#L195)

**Type:** `public` `Builder`

This method returns a builder to help set up the necessary parameters 
for calculating item positions. 





|Parameter Name|Description|
|-----|-----|
|items|the new list of items to display|


**Returned Value:** a builder to help set up the necessary parameters for calculating item positions  








## [updateItems](https://github.com/fennifith/RadialLayout/blob/master/library/src/main/java/me/jfenn/radiallayout/RadialLayoutView.java#L214)

**Type:** `public` `Builder`

This method returns a builder to help set up the necessary parameters for calculating 
new item positions. 





|Parameter Name|Description|
|-----|-----|
|items|the modified list of items to display|


**Returned Value:** a builder to help set up the necessary parameters for calculating item positions  








