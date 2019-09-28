---
layout: docs
title: BasePreferenceData Documentation
---
#### [.](./../../../../../../../../../index) > [app](./../../../../../../../../index) > [src](./../../../../../../../index) > [main](./../../../../../../index) > [java](./../../../../../index) > [me](./../../../../index) > [jfenn](./../../../index) > [alarmio](./../../index) > [data](./../index) > [preference](./index) > **BasePreferenceData.kt**

# [BasePreferenceData<V](https://github.com/fennifith/Alarmio/blob/master/app/src/main/java/me/jfenn/alarmio/data/preference/BasePreferenceData.kt#L12)

**Type:** `abstract` `class`

A preference item to display and bind values 
of preferences as a settings item. 












## [getViewHolder](https://github.com/fennifith/Alarmio/blob/master/app/src/main/java/me/jfenn/alarmio/data/preference/BasePreferenceData.kt#L18)

**Type:** `abstract` `fun`

Create a ViewHolder instance for the item to use. 





|Parameter Name|Description|
|-----|-----|
|inflater|The LayoutInflater to inflate the layout from.|
|parent|The parent view to be inflated into.|


**Returned Value:** A non-null instance of a ViewHolder.  








## [bindViewHolder](https://github.com/fennifith/Alarmio/blob/master/app/src/main/java/me/jfenn/alarmio/data/preference/BasePreferenceData.kt#L27)

**Type:** `abstract` `fun`

Bind the item data to its viewholder. 





|Parameter Name|Description|
|-----|-----|
|holder|The ViewHolder to bind the item's data to.  |








# [ViewHolder](https://github.com/fennifith/Alarmio/blob/master/app/src/main/java/me/jfenn/alarmio/data/preference/BasePreferenceData.kt#L34)

**Type:** `open` `class`

Holds child views of the current item. 












