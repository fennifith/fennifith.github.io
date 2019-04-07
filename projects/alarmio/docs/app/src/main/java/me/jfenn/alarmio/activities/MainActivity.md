---
layout: docs
title: MainActivity Documentation
---
#### [.](./../../../../../../../../index) > [app](./../../../../../../../index) > [src](./../../../../../../index) > [main](./../../../../../index) > [java](./../../../../index) > [me](./../../../index) > [jfenn](./../../index) > [alarmio](./../index) > [activities](./index) > **MainActivity.java**

## [createFragmentFor](https://github.com/fennifith/Alarmio/blob/master/app/src/main/java/me/jfenn/alarmio/activities/MainActivity.java#L94)

**Type:** `@Nullable` `private` `BaseFragment`

Return a fragment to display the content provided by 
the passed intent. 





|Parameter Name|Description|
|-----|-----|
|intent|The intent passed to the activity.|


**Returned Value:**  An instantiated fragment corresponding to the passed intent.  








## [isActionableIntent](https://github.com/fennifith/Alarmio/blob/master/app/src/main/java/me/jfenn/alarmio/activities/MainActivity.java#L141)

**Type:** `private` `boolean`

Determine if something needs to be done as a result 
of the intent being sent to the activity - which has 
a higher priority than any fragment that is currently 
open. 





|Parameter Name|Description|
|-----|-----|
|intent|The intent passed to the activity.|


**Returned Value:**  True if a fragment should be replaced with the action that this intent entails.  








