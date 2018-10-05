---
layout: docs
---
#### [.](./../../../../../../../../../index) > [android](./../../../../../../../../index) > [app](./../../../../../../../index) > [src](./../../../../../../index) > [main](./../../../../../index) > [java](./../../../../index) > [com](./../../../index) > [darin](./../../index) > [mysterious](./../index) > [utils](./index) > **PathUtils.java**

## [createPathFromPathData](https://github.com/TheAndroidMaster/Mysterious/blob/master/android/app/src/main/java/com/darin/mysterious/utils/PathUtils.java#L33)

**Type:** `public` `static` `Path`





|Parameter Name|Description|
|-----|-----|
|pathData|The string representing a path, the same as "d" string in svg file.|


**Returned Value:** the generated Path object.  








## [PathDataNode](https://github.com/TheAndroidMaster/Mysterious/blob/master/android/app/src/main/java/com/darin/mysterious/utils/PathUtils.java#L47)

**Type:** `public` `static`





|Parameter Name|Description|
|-----|-----|
|pathData|The string representing a path, the same as "d" string in svg file.|


**Returned Value:** an array of the PathDataNode.  








## [float](https://github.com/TheAndroidMaster/Mysterious/blob/master/android/app/src/main/java/com/darin/mysterious/utils/PathUtils.java#L85)

**Type:** `private` `static`

Parse the floats in the string. 
This is an optimized version of parseFloat(s.split(",|\\s")); 





|Parameter Name|Description|
|-----|-----|
|s|the string containing a command and list of floats|


**Returned Value:** array of floats  








## [extract](https://github.com/TheAndroidMaster/Mysterious/blob/master/android/app/src/main/java/com/darin/mysterious/utils/PathUtils.java#L116)

**Type:** `private` `static` `int`

Calculate the position of the next comma or space 





|Parameter Name|Description|
|-----|-----|
|s|the string to search|
|start|the position to start searching|


**Returned Value:** the position of the next comma or space or -1 if none found  








## [arcToBezier](https://github.com/TheAndroidMaster/Mysterious/blob/master/android/app/src/main/java/com/darin/mysterious/utils/PathUtils.java#L444)

**Type:** `private` `static` `void`

Converts an arc to cubic Bezier segments and records them in p. 





|Parameter Name|Description|
|-----|-----|
|p|The target for the cubic Bezier segments|
|cx|The x coordinate center of the ellipse|
|cy|The y coordinate center of the ellipse|
|a|The radius of the ellipse in the horizontal direction|
|b|The radius of the ellipse in the vertical direction|
|e1x|E(eta1) x coordinate of the starting point of the arc|
|e1y|E(eta2) y coordinate of the starting point of the arc|
|theta|The angle that the ellipse bounding rectangle makes with horizontal plane|
|start|The start angle of the arc on the ellipse|
|sweep|The angle (positive or negative) of the sweep of the arc on the ellipse  |








