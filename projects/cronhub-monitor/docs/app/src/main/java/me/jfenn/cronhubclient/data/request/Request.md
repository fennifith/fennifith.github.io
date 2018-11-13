---
layout: docs
title: Request Documentation
---
#### [.](./../../../../../../../../../index) > [app](./../../../../../../../../index) > [src](./../../../../../../../index) > [main](./../../../../../../index) > [java](./../../../../../index) > [me](./../../../../index) > [jfenn](./../../../index) > [cronhubclient](./../../index) > [data](./../index) > [request](./index) > **Request.java**

## [init](https://github.com/fennifith/Cronhub-Monitor/blob/master/app/src/main/java/me/jfenn/cronhubclient/data/request/Request.java#L48)

**Type:** `private` `void`

Called once the request to github servers has been successfully completed. 





|Parameter Name|Description|
|-----|-----|
|json|the json response  |








## [failure](https://github.com/fennifith/Cronhub-Monitor/blob/master/app/src/main/java/me/jfenn/cronhubclient/data/request/Request.java#L63)

**Type:** `private` `void`

Called when there is a failure. 












## [initJson](https://github.com/fennifith/Cronhub-Monitor/blob/master/app/src/main/java/me/jfenn/cronhubclient/data/request/Request.java#L72)

**Type:** `protected` `boolean`

Initializes the values in the class from the json string. Exists only to be 
overridden if necessary. 




|Parameter Name|Description|
|-----|-----|
|gson|the gson object|
|json|the json string  |








## [onInit](https://github.com/fennifith/Cronhub-Monitor/blob/master/app/src/main/java/me/jfenn/cronhubclient/data/request/Request.java#L92)

**Type:** `protected` `void`

Called once the object has finished being initialized. Exists only to be overriden 
if necessary. 












## [startInit](https://github.com/fennifith/Cronhub-Monitor/blob/master/app/src/main/java/me/jfenn/cronhubclient/data/request/Request.java#L99)

**Type:** `public` `final` `void`

Starts the network request thread, should only be called once. 












## [merge](https://github.com/fennifith/Cronhub-Monitor/blob/master/app/src/main/java/me/jfenn/cronhubclient/data/request/Request.java#L113)

**Type:** `public` `final` `Request`

Merge this data's listeners with another. Should only be called if the 
two are of the exact same class. 





|Parameter Name|Description|
|-----|-----|
|data|the data to merge with|


**Returned Value:** a somewhat pointless "this", only to make it blatantly obvious which GitHubData actually contains the end result  








