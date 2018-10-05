---
layout: docs
---
#### [.](./../../../../../../../../../index) > [BaseGameUtils](./../../../../../../../../index) > [src](./../../../../../../../index) > [main](./../../../../../../index) > [java](./../../../../../index) > [com](./../../../../index) > [google](./../../../index) > [example](./../../index) > [games](./../index) > [basegameutils](./index) > **BaseGameActivity.java**

# [implements](https://github.com/TheAndroidMaster/Rocket/blob/master/BaseGameUtils/src/main/java/com/google/example/games/basegameutils/BaseGameActivity.java#L27)

**Type:** `public` `abstract` `class` `BaseGameActivity` `extends` `FragmentActivity`

Example base class for games. This implementation takes care of setting up 
the API client object and managing its lifecycle. Subclasses only need to 
override the @link{#onSignInSucceeded} and @link{#onSignInFailed} abstract 
methods. To initiate the sign-in flow when the user clicks the sign-in 
button, subclasses should call @link{#beginUserInitiatedSignIn}. By default, 
this class only instantiates the GoogleApiClient object. If the PlusClient 
is also wanted, call the BaseGameActivity(int) 
constructor and specify the requested clients. For example, to request 
PlusClient and GamesClient, use BaseGameActivity(CLIENT_GAMES | CLIENT_PLUS). 
To request all available clients, use BaseGameActivity(CLIENT_ALL). 
Alternatively, you can also specify the requested clients via 
gets called, otherwise the call will have no effect. 



**Name:** Bruno Oliveira (Google) 











## [BaseGameActivity](https://github.com/TheAndroidMaster/Rocket/blob/master/BaseGameUtils/src/main/java/com/google/example/games/basegameutils/BaseGameActivity.java#L61)

**Type:** `protected`

Constructs a BaseGameActivity with default client (GamesClient). 











## [BaseGameActivity](https://github.com/TheAndroidMaster/Rocket/blob/master/BaseGameUtils/src/main/java/com/google/example/games/basegameutils/BaseGameActivity.java#L67)

**Type:** `protected`

Constructs a BaseGameActivity with the requested clients. 




|Parameter Name|Description|
|-----|-----|
|requestedClients|The requested clients (a combination of CLIENT_GAMES, CLIENT_PLUS).  |








## [setRequestedClients](https://github.com/TheAndroidMaster/Rocket/blob/master/BaseGameUtils/src/main/java/com/google/example/games/basegameutils/BaseGameActivity.java#L77)

**Type:** `protected` `void`

Sets the requested clients. The preferred way to set the requested clients is 
via the constructor, but this method is available if for some reason your code 
cannot do this in the constructor. This must be called before onCreate or getGameHelper() 
in order to have any effect. If called after onCreate()/getGameHelper(), this method 
is a no-op. 





|Parameter Name|Description|
|-----|-----|
|requestedClients|A combination of the flags CLIENT_GAMES, CLIENT_PLUS or CLIENT_ALL to request all available clients.  |








