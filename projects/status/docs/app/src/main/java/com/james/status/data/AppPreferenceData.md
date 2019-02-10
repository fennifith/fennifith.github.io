---
layout: docs
title: AppPreferenceData Documentation
---
#### [.](./../../../../../../../../index) > [app](./../../../../../../../index) > [src](./../../../../../../index) > [main](./../../../../../index) > [java](./../../../../index) > [com](./../../../index) > [james](./../../index) > [status](./../index) > [data](./index) > **AppPreferenceData.java**

## [getComponentName](https://github.com/fennifith/Status/blob/master/app/src/main/java/com/james/status/data/AppPreferenceData.java#L47)

**Type:** `public` `String`

Obtain the component name of the preference; "package.name/package.name.Component" if 
the preference is for a specific activity, just "package.name" if not. 






**Returned Value:** A string containing the entire component name of the app.  








## [getPackageName](https://github.com/fennifith/Status/blob/master/app/src/main/java/com/james/status/data/AppPreferenceData.java#L58)

**Type:** `public` `String`

Obtain the package name of the preference. 






**Returned Value:** A string containing the package name of the app.  








## [getName](https://github.com/fennifith/Status/blob/master/app/src/main/java/com/james/status/data/AppPreferenceData.java#L67)

**Type:** `@Nullable` `public` `String`

Get the component name of the preference. If the preference is not an activity, 
this will be null. 






**Returned Value:** A string containing the component name of the app.  








## [getActivities](https://github.com/fennifith/Status/blob/master/app/src/main/java/com/james/status/data/AppPreferenceData.java#L81)

**Type:** `@Nullable` `public` `List<AppPreferenceData>`

Get all of the activities declared by the application. If the preference is not an 
application, this will be null. 






**Returned Value:** A list of data classes representing activities declared by the application.  








## [getActivityName](https://github.com/fennifith/Status/blob/master/app/src/main/java/com/james/status/data/AppPreferenceData.java#L93)

**Type:** `@Nullable` `public` `String`

Get the name of the activity. If the preference is not an activity, this will be null. 






**Returned Value:** The name of the activity.  








## [isActivity](https://github.com/fennifith/Status/blob/master/app/src/main/java/com/james/status/data/AppPreferenceData.java#L106)

**Type:** `public` `boolean`

Determine whether the preference is for an activity. 






**Returned Value:** True if the preference is for a specific activity.  








## [getLabel](https://github.com/fennifith/Status/blob/master/app/src/main/java/com/james/status/data/AppPreferenceData.java#L115)

**Type:** `@Nullable` `public` `String`

Obtain the label of the activity / application. 





|Parameter Name|Description|
|-----|-----|
|context|The current app context.|


**Returned Value:** The string label declared by the application or component that this preference is for.  








