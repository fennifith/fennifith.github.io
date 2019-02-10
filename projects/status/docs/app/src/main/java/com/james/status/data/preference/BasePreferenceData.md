---
layout: docs
title: BasePreferenceData Documentation
---
#### [.](./../../../../../../../../../index) > [app](./../../../../../../../../index) > [src](./../../../../../../../index) > [main](./../../../../../../index) > [java](./../../../../../index) > [com](./../../../../index) > [james](./../../../index) > [status](./../../index) > [data](./../index) > [preference](./index) > **BasePreferenceData.java**

## [withVisibility](https://github.com/fennifith/Status/blob/master/app/src/main/java/com/james/status/data/preference/BasePreferenceData.java#L56)

**Type:** `public` `BasePreferenceData`

Specifies an interface to use to determine whether the preference should 
be visible in the settings or not. 





|Parameter Name|Description|
|-----|-----|
|visibility|An interface invoked to determine whether the preference should be visible under a set of conditions.|


**Returned Value:** "this", for method chaining.  








## [isVisible](https://github.com/fennifith/Status/blob/master/app/src/main/java/com/james/status/data/preference/BasePreferenceData.java#L70)

**Type:** `public` `boolean`

Determine whether the preference should be visible. 






**Returned Value:** True if the preference is visible in the settings.  








## [getVisibilityDependent](https://github.com/fennifith/Status/blob/master/app/src/main/java/com/james/status/data/preference/BasePreferenceData.java#L82)

**Type:** `@Nullable` `public` `PreferenceData`

Obtain the "preference" that this setting is dependent on, assuming that 
this preference's visibility is based on the value of another setting. 

If this preference doesn't have a "visibility" interface, this will return 
null. It might return null anyway, who knows. 






**Returned Value:** A PreferenceData that this setting is dependent on. Or null.  








## [withNullable](https://github.com/fennifith/Status/blob/master/app/src/main/java/com/james/status/data/preference/BasePreferenceData.java#L96)

**Type:** `public` `BasePreferenceData`

Set whether this preference could use "null" as a value. In other words, if 
a nonexistent preference should be interpreted differently from simply 
returning the default value. 





|Parameter Name|Description|
|-----|-----|
|isNullable|Whether the preference's value can be null.|


**Returned Value:**  "this", for method chaining.  








## [withNullValue](https://github.com/fennifith/Status/blob/master/app/src/main/java/com/james/status/data/preference/BasePreferenceData.java#L114)

**Type:** `public` `BasePreferenceData`

Set a value of the preference that is equivalent to "null". For example, 
an invalid integer value may be treated separately from the actual preference. 
Ex: the height of an object, or "0" to disable the object entirely. 





|Parameter Name|Description|
|-----|-----|
|nullValue|The value that should be treated as "null".|


**Returned Value:**  "this", for method chaining.  








## [isNullable](https://github.com/fennifith/Status/blob/master/app/src/main/java/com/james/status/data/preference/BasePreferenceData.java#L128)

**Type:** `public` `boolean`

Determine whether the preference can contain a null value. 






**Returned Value:** True if the preference can contain a null value.  








## [getNullValue](https://github.com/fennifith/Status/blob/master/app/src/main/java/com/james/status/data/preference/BasePreferenceData.java#L137)

**Type:** `@Nullable` `public` `T`

Obtain the value of the preference to be interpreted as "null". If a value 
has not been set, this just returns null. Fair enough. 






**Returned Value:** The value of the preference to be interpreted as "null" Might just be null.  








## [getContext](https://github.com/fennifith/Status/blob/master/app/src/main/java/com/james/status/data/preference/BasePreferenceData.java#L149)

**Type:** `public` `Context`

Get the current application context. 






**Returned Value:** The current application context.  








## [getIdentifier](https://github.com/fennifith/Status/blob/master/app/src/main/java/com/james/status/data/preference/BasePreferenceData.java#L158)

**Type:** `public` `Identifier<T>`

Get the identifier of the preference. I'm not sure why this 
is a separate class, it's mostly for search indexing and stuff. 
I think I was intending to separate it from the PreferenceData 
classes to index things other than settings as well, but never 
got around to it. 






**Returned Value:** A redundant Identifier class containing... an identifier.  








## [onPreferenceChange](https://github.com/fennifith/Status/blob/master/app/src/main/java/com/james/status/data/preference/BasePreferenceData.java#L225)

**Type:** `public` `void`

Notify all observers that the preference has been changed. 





|Parameter Name|Description|
|-----|-----|
|preference|The new value of the preference.  |








