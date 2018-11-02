---
layout: docs
title: TravelingSalesPerson Documentation
---
#### [.](./index) > **TravelingSalesPerson.java**

## [run](https://github.com/fennifith/ExceptionalTraveler/blob/master//TravelingSalesPerson.java#L16)

**Type:** `public` `static` `void`

Runs the traveling sales person algorithm and prints the results in the console. 





|Parameter Name|Description|
|-----|-----|
|points|The points to calculate the order of.  |








## [getPath](https://github.com/fennifith/ExceptionalTraveler/blob/master//TravelingSalesPerson.java#L127)

**Type:** `private` `static` `void`

Applies the double neighbor heuristic and adds the closest points to the path. The first 
two points should be calculated first before calling this method. 





|Parameter Name|Description|
|-----|-----|
|p1|The "right" point.|
|p2|The "left" point.  |








## [getNearest](https://github.com/fennifith/ExceptionalTraveler/blob/master//TravelingSalesPerson.java#L244)

**Type:** `private` `static` `void`

Finds the point nearest to a given parameter... 





|Parameter Name|Description|
|-----|-----|
|p|The point to compare other points to.|
|i|The current (or start) index of the iteration.  |








## [printPath](https://github.com/fennifith/ExceptionalTraveler/blob/master//TravelingSalesPerson.java#L384)

**Type:** `private` `static` `void`

Prints all of the "path" points in the console. 





|Parameter Name|Description|
|-----|-----|
|i|The index of the current iteration.  |








