---
layout: docs
---
#### [.](./../../../../../../../../../index) > [BaseGameUtils](./../../../../../../../../index) > [src](./../../../../../../../index) > [main](./../../../../../../index) > [java](./../../../../../index) > [com](./../../../../index) > [google](./../../../index) > [example](./../../index) > [games](./../index) > [basegameutils](./index) > **BaseGameUtils.java**

## [showAlert](https://github.com/TheAndroidMaster/Rocket/blob/master/BaseGameUtils/src/main/java/com/google/example/games/basegameutils/BaseGameUtils.java#L17)

**Type:** `public` `static` `void`

Show an with an 'OK' button and a message. 





|Parameter Name|Description|
|-----|-----|
|activity|the Activity in which the Dialog should be displayed.|
|message|the message to display in the Dialog.  |








## [resolveConnectionFailure](https://github.com/TheAndroidMaster/Rocket/blob/master/BaseGameUtils/src/main/java/com/google/example/games/basegameutils/BaseGameUtils.java#L28)

**Type:** `public` `static` `boolean`

Resolve a connection failure from 






|Parameter Name|Description|
|-----|-----|
|activity|the Activity trying to resolve the connection failure.|
|client|the GoogleAPIClient instance of the Activity.|
|result|the ConnectionResult received by the Activity.|
|requestCode|a request code which the calling Activity can use to identify the result of this resolution in onActivityResult.|
|fallbackErrorMessage|a generic error message to display if the failure cannot be resolved.|


**Returned Value:** true if the connection failure is resolved, false otherwise.  








## [verifySampleSetup](https://github.com/TheAndroidMaster/Rocket/blob/master/BaseGameUtils/src/main/java/com/google/example/games/basegameutils/BaseGameUtils.java#L69)

**Type:** `public` `static` `boolean`

For use in sample code only. Checks if the sample was set up correctly, 
including changing the package name to a non-Google package name and 
replacing the placeholder IDs. Shows alert dialogs to notify about problems. 
DO NOT call this method from a production app, it's meant only for samples! 




|Parameter Name|Description|
|-----|-----|
|resIds|the resource IDs to check for placeholders|


**Returned Value:** true if sample is set up correctly; false otherwise.  








## [showActivityResultError](https://github.com/TheAndroidMaster/Rocket/blob/master/BaseGameUtils/src/main/java/com/google/example/games/basegameutils/BaseGameUtils.java#L107)

**Type:** `public` `static` `void`

Show a with the correct message for a connection error. 




|Parameter Name|Description|
|-----|-----|
|activity|the Activity in which the Dialog should be displayed.|
|requestCode|the request code from onActivityResult.|
|actResp|the response code from onActivityResult.|
|errorDescription|the resource id of a String for a generic error message.  |








## [makeSimpleDialog](https://github.com/TheAndroidMaster/Rocket/blob/master/BaseGameUtils/src/main/java/com/google/example/games/basegameutils/BaseGameUtils.java#L151)

**Type:** `public` `static` `Dialog`

Create a simple with an 'OK' button and a message. 





|Parameter Name|Description|
|-----|-----|
|activity|the Activity in which the Dialog should be displayed.|
|text|the message to display on the Dialog.|


**Returned Value:** an instance of   








## [makeSimpleDialog](https://github.com/TheAndroidMaster/Rocket/blob/master/BaseGameUtils/src/main/java/com/google/example/games/basegameutils/BaseGameUtils.java#L163)

**Type:** `public` `static` `Dialog`

Create a simple with an 'OK' button, a title, and a message. 





|Parameter Name|Description|
|-----|-----|
|activity|the Activity in which the Dialog should be displayed.|
|title|the title to display on the dialog.|
|text|the message to display on the Dialog.|


**Returned Value:** an instance of   








