---
layout: docs
title: GitHubData Documentation
---
#### [.](./../../../../../../../../../index) > [attribouter](./../../../../../../../../index) > [src](./../../../../../../../index) > [main](./../../../../../../index) > [java](./../../../../../index) > [me](./../../../../index) > [jfenn](./../../../index) > [attribouter](./../../index) > [data](./../index) > [github](./index) > **GitHubData.java**

## [init](https://github.com/TheAndroidMaster/Attribouter/blob/master/attribouter/src/main/java/me/jfenn/attribouter/data/github/GitHubData.java#L47)

**Type:** `private` `void`

Called once the request to github servers has been successfully completed. 





|Parameter Name|Description|
|-----|-----|
|json|the json response  |








## [initJson](https://github.com/TheAndroidMaster/Attribouter/blob/master/attribouter/src/main/java/me/jfenn/attribouter/data/github/GitHubData.java#L61)

**Type:** `protected` `void`

Initializes the values in the class from the json string. Exists only to be 
overridden if necessary. 




|Parameter Name|Description|
|-----|-----|
|gson|the gson object|
|json|the json string  |








## [onInit](https://github.com/TheAndroidMaster/Attribouter/blob/master/attribouter/src/main/java/me/jfenn/attribouter/data/github/GitHubData.java#L76)

**Type:** `protected` `void`

Called once the object has finished being initialized. Exists only to be overriden 
if necessary. 












## [startInit](https://github.com/TheAndroidMaster/Attribouter/blob/master/attribouter/src/main/java/me/jfenn/attribouter/data/github/GitHubData.java#L83)

**Type:** `public` `final` `void`

Starts the network request thread, should only be called once. 












## [merge](https://github.com/TheAndroidMaster/Attribouter/blob/master/attribouter/src/main/java/me/jfenn/attribouter/data/github/GitHubData.java#L95)

**Type:** `public` `final` `GitHubData`

Merge this data's listeners with another. Should only be called if the 
two are of the exact same class. 





|Parameter Name|Description|
|-----|-----|
|data|the data to merge with|


**Returned Value:** a somewhat pointless "this", only to make it blatantly obvious which GitHubData actually contains the end result  








