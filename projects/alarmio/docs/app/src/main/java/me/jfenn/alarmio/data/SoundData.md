---
layout: docs
title: SoundData Documentation
---
#### [.](./../../../../../../../../index) > [app](./../../../../../../../index) > [src](./../../../../../../index) > [main](./../../../../../index) > [java](./../../../../index) > [me](./../../../index) > [jfenn](./../../index) > [alarmio](./../index) > [data](./index) > **SoundData.java**

## [play](https://github.com/fennifith/Alarmio/blob/master/app/src/main/java/me/jfenn/alarmio/data/SoundData.java#L51)

**Type:** `public` `void`

Plays the sound. This will pass the SoundData instance to the provided 
[Alarmio](../Alarmio) class, which will store the currently playing sound 
until it is stopped or cancelled. 





|Parameter Name|Description|
|-----|-----|
|alarmio|The active Application instance.  |








## [stop](https://github.com/fennifith/Alarmio/blob/master/app/src/main/java/me/jfenn/alarmio/data/SoundData.java#L78)

**Type:** `public` `void`

Stops the currently playing alarm. This only differentiates between sounds 
if the sound is a ringtone; if it is a stream, then all streams will be stopped, 
regardless of whether this sound is in fact the currently playing stream or not. 





|Parameter Name|Description|
|-----|-----|
|alarmio|The active Application instance.  |








## [preview](https://github.com/fennifith/Alarmio/blob/master/app/src/main/java/me/jfenn/alarmio/data/SoundData.java#L91)

**Type:** `public` `void`

Preview the sound on the "media" volume channel. 





|Parameter Name|Description|
|-----|-----|
|alarmio|The active Application instance.  |








## [isPlaying](https://github.com/fennifith/Alarmio/blob/master/app/src/main/java/me/jfenn/alarmio/data/SoundData.java#L116)

**Type:** `public` `boolean`

Decide whether the sound is currently playing or not. 





|Parameter Name|Description|
|-----|-----|
|alarmio|The active Application instance.|


**Returned Value:**  True if "this" sound is playing.  








## [setVolume](https://github.com/fennifith/Alarmio/blob/master/app/src/main/java/me/jfenn/alarmio/data/SoundData.java#L128)

**Type:** `public` `void`

Sets the player volume to the given float. 





|Parameter Name|Description|
|-----|-----|
|alarmio|The active Application instance.|
|volume|The volume between 0 and 1  |








## [isSetVolumeSupported](https://github.com/fennifith/Alarmio/blob/master/app/src/main/java/me/jfenn/alarmio/data/SoundData.java#L145)

**Type:** `public` `boolean`

Is the setVolume method supported on this version of Android 






**Returned Value:** true if supported  








## [toString](https://github.com/fennifith/Alarmio/blob/master/app/src/main/java/me/jfenn/alarmio/data/SoundData.java#L154)

**Type:** `@Override` `public` `String`

Returns an identifier string that can be used to recreate this 
SoundDate class. 






**Returned Value:**  A non-null identifier string.  








## [fromString](https://github.com/fennifith/Alarmio/blob/master/app/src/main/java/me/jfenn/alarmio/data/SoundData.java#L165)

**Type:** `@Nullable` `public` `static` `SoundData`

Construct a new instance of SoundData from an identifier string which was 
(hopefully) created by [toString](#tostring). 





|Parameter Name|Description|
|-----|-----|
|string|A non-null identifier string.|


**Returned Value:**  A recreated SoundData instance.  








## [equals](https://github.com/fennifith/Alarmio/blob/master/app/src/main/java/me/jfenn/alarmio/data/SoundData.java#L184)

**Type:** `@Override` `public` `boolean`

Decide if two SoundDatas are equal. 





|Parameter Name|Description|
|-----|-----|
|obj|The object to compare to.|


**Returned Value:**  True if the SoundDatas contain the same sound.  







