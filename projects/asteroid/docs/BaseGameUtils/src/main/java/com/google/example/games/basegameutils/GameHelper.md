---
layout: docs
title: GameHelper Documentation
---
#### [.](./../../../../../../../../../index) > [BaseGameUtils](./../../../../../../../../index) > [src](./../../../../../../../index) > [main](./../../../../../../index) > [java](./../../../../../index) > [com](./../../../../index) > [google](./../../../index) > [example](./../../index) > [games](./../index) > [basegameutils](./index) > **GameHelper.java**

## [GameHelperListener](https://github.com/fennifith/Asteroid/blob/master/BaseGameUtils/src/main/java/com/google/example/games/basegameutils/GameHelper.java#L52)

**Type:** `public` `interface`

Listener for sign-in success or failure events. 












## [onSignInFailed](https://github.com/fennifith/Asteroid/blob/master/BaseGameUtils/src/main/java/com/google/example/games/basegameutils/GameHelper.java#L56)

**Type:** `void`

Called when sign-in fails. As a result, a "Sign-In" button can be 
shown to the user; when that button is clicked, call 

to this method mean an 
error; it may be a result 
of the fact that automatic 
sign-in could not proceed 
because user interaction 
was required (consent 
dialogs). So 
implementations of this 
method should NOT display 
an error message unless a 
call to @link{GamesHelper# 
hasSignInError} indicates 
that an error indeed 
occurred. 












## [onSignInSucceeded](https://github.com/fennifith/Asteroid/blob/master/BaseGameUtils/src/main/java/com/google/example/games/basegameutils/GameHelper.java#L78)

**Type:** `void`

Called when sign-in succeeds. 












## [mActivity](https://github.com/fennifith/Asteroid/blob/master/BaseGameUtils/src/main/java/com/google/example/games/basegameutils/GameHelper.java#L97)

**Type:** `Activity`

The Activity we are bound to. We need to keep a reference to the Activity 
because some games methods require an Activity (a Context won't do). We 
are careful not to leak these references: we release them on onStop(). 












## [GameHelper](https://github.com/fennifith/Asteroid/blob/master/BaseGameUtils/src/main/java/com/google/example/games/basegameutils/GameHelper.java#L189)

**Type:** `public`

Construct a GameHelper object, initially tied to the given Activity. 
After constructing this object, call @link{setup} from the onCreate() 
method of your Activity. 





|Parameter Name|Description|
|-----|-----|
|clientsToUse|the API clients to use (a combination of the CLIENT_flags, or CLIENT_ALL to mean all clients).  |








## [setMaxAutoSignInAttempts](https://github.com/fennifith/Asteroid/blob/master/BaseGameUtils/src/main/java/com/google/example/games/basegameutils/GameHelper.java#L204)

**Type:** `public` `void`

Sets the maximum number of automatic sign-in attempts to be made on 
application startup. This maximum is over the lifetime of the application 
(it is stored in a SharedPreferences file). So, for example, if you 
specify 2, then it means that the user will be prompted to sign in on app 
startup the first time and, if they cancel, a second time the next time 
the app starts, and, if they cancel that one, never again. Set to 0 if 
you do not want the user to be prompted to sign in on application 
startup. 












## [setGamesApiOptions](https://github.com/fennifith/Asteroid/blob/master/BaseGameUtils/src/main/java/com/google/example/games/basegameutils/GameHelper.java#L238)

**Type:** `public` `void`

Sets the options to pass when setting up the Games API. Call before 
setup(). 












## [setPlusApiOptions](https://github.com/fennifith/Asteroid/blob/master/BaseGameUtils/src/main/java/com/google/example/games/basegameutils/GameHelper.java#L247)

**Type:** `public` `void`

Sets the options to pass when setting up the Plus API. Call before 
setup(). 












## [createApiClientBuilder](https://github.com/fennifith/Asteroid/blob/master/BaseGameUtils/src/main/java/com/google/example/games/basegameutils/GameHelper.java#L256)

**Type:** `public` `GoogleApiClient.Builder`

Creates a GoogleApiClient.Builder for use with @link{#setup}. Normally, 
you do not have to do this; use this method only if you need to make 
nonstandard setup (e.g. adding extra scopes for other APIs) on the 
GoogleApiClient.Builder before calling @link{#setup}. 












## [setup](https://github.com/fennifith/Asteroid/blob/master/BaseGameUtils/src/main/java/com/google/example/games/basegameutils/GameHelper.java#L292)

**Type:** `public` `void`

Performs setup on this GameHelper object. Call this from the onCreate() 
method of your Activity. This will create the clients and do a few other 
initialization tasks. Next, call @link{#onStart} from the onStart() 
method of your Activity. 





|Parameter Name|Description|
|-----|-----|
|listener|The listener to be notified of sign-in events.  |








## [getApiClient](https://github.com/fennifith/Asteroid/blob/master/BaseGameUtils/src/main/java/com/google/example/games/basegameutils/GameHelper.java#L319)

**Type:** `public` `GoogleApiClient`

Returns the GoogleApiClient object. In order to call this method, you 
must have called @link{setup}. 












## [isSignedIn](https://github.com/fennifith/Asteroid/blob/master/BaseGameUtils/src/main/java/com/google/example/games/basegameutils/GameHelper.java#L331)

**Type:** `public` `boolean`

Returns whether or not the user is signed in. 












## [isConnecting](https://github.com/fennifith/Asteroid/blob/master/BaseGameUtils/src/main/java/com/google/example/games/basegameutils/GameHelper.java#L338)

**Type:** `public` `boolean`

Returns whether or not we are currently connecting 












## [hasSignInError](https://github.com/fennifith/Asteroid/blob/master/BaseGameUtils/src/main/java/com/google/example/games/basegameutils/GameHelper.java#L345)

**Type:** `public` `boolean`

Returns whether or not there was a (non-recoverable) error during the 
sign-in process. 












## [getSignInError](https://github.com/fennifith/Asteroid/blob/master/BaseGameUtils/src/main/java/com/google/example/games/basegameutils/GameHelper.java#L353)

**Type:** `public` `SignInFailureReason`

Returns the error that happened during the sign-in process, null if no 
error occurred. 












## [onStart](https://github.com/fennifith/Asteroid/blob/master/BaseGameUtils/src/main/java/com/google/example/games/basegameutils/GameHelper.java#L366)

**Type:** `public` `void`

Call this method from your Activity's onStart(). 












## [onStop](https://github.com/fennifith/Asteroid/blob/master/BaseGameUtils/src/main/java/com/google/example/games/basegameutils/GameHelper.java#L397)

**Type:** `public` `void`

Call this method from your Activity's onStop(). 












## [getInvitationId](https://github.com/fennifith/Asteroid/blob/master/BaseGameUtils/src/main/java/com/google/example/games/basegameutils/GameHelper.java#L416)

**Type:** `public` `String`

Returns the invitation ID received through an invitation notification. 
This should be called from your GameHelperListener's 

invitation available. In that 
case, accept the invitation. 






**Returned Value:** The id of the invitation, or null if none was received.








## [getInvitation](https://github.com/fennifith/Asteroid/blob/master/BaseGameUtils/src/main/java/com/google/example/games/basegameutils/GameHelper.java#L434)

**Type:** `public` `Invitation`

Returns the invitation received through an invitation notification. This 
should be called from your GameHelperListener's 

invitation available. In that 
case, accept the invitation. 






**Returned Value:** The invitation, or null if none was received.








## [getTurnBasedMatch](https://github.com/fennifith/Asteroid/blob/master/BaseGameUtils/src/main/java/com/google/example/games/basegameutils/GameHelper.java#L476)

**Type:** `public` `TurnBasedMatch`

Returns the tbmp match received through an invitation notification. This 
should be called from your GameHelperListener's 

match available. 






**Returned Value:** The match, or null if none was received.








## [getRequests](https://github.com/fennifith/Asteroid/blob/master/BaseGameUtils/src/main/java/com/google/example/games/basegameutils/GameHelper.java#L493)

**Type:** `public` `ArrayList<GameRequest>`

Returns the requests received through the onConnected bundle. This should 
be called from your GameHelperListener's 

incoming requests that must be 
handled. 






**Returned Value:** The requests, or null if none were received.








## [enableDebugLog](https://github.com/fennifith/Asteroid/blob/master/BaseGameUtils/src/main/java/com/google/example/games/basegameutils/GameHelper.java#L511)

**Type:** `public` `void`

Enables debug logging 












## [signOut](https://github.com/fennifith/Asteroid/blob/master/BaseGameUtils/src/main/java/com/google/example/games/basegameutils/GameHelper.java#L528)

**Type:** `public` `void`

Sign out and disconnect from the APIs. 












## [onActivityResult](https://github.com/fennifith/Asteroid/blob/master/BaseGameUtils/src/main/java/com/google/example/games/basegameutils/GameHelper.java#L559)

**Type:** `public` `void`

Handle activity result. Call this method from your Activity's 
onActivityResult callback. If the activity result pertains to the sign-in 
process, processes it appropriately. 












## [beginUserInitiatedSignIn](https://github.com/fennifith/Asteroid/blob/master/BaseGameUtils/src/main/java/com/google/example/games/basegameutils/GameHelper.java#L635)

**Type:** `public` `void`

Starts a user-initiated sign-in flow. This should be called when the user 
clicks on a "Sign In" button. As a result, authentication/consent dialogs 
may show up. At the end of the process, the GameHelperListener's 
onSignInSucceeded() or onSignInFailed() methods will be called. 












## [reconnectClient](https://github.com/fennifith/Asteroid/blob/master/BaseGameUtils/src/main/java/com/google/example/games/basegameutils/GameHelper.java#L697)

**Type:** `public` `void`

Disconnects the API client, then connects again. 












## [onConnected](https://github.com/fennifith/Asteroid/blob/master/BaseGameUtils/src/main/java/com/google/example/games/basegameutils/GameHelper.java#L711)

**Type:** `@Override` `public` `void`

Called when we successfully obtain a connection to a client. 












## [onConnectionFailed](https://github.com/fennifith/Asteroid/blob/master/BaseGameUtils/src/main/java/com/google/example/games/basegameutils/GameHelper.java#L788)

**Type:** `@Override` `public` `void`

Handles a connection failure. 












## [resolveConnectionResult](https://github.com/fennifith/Asteroid/blob/master/BaseGameUtils/src/main/java/com/google/example/games/basegameutils/GameHelper.java#L846)

**Type:** `void`

Attempts to resolve a connection failure. This will usually involve 
starting a UI flow that lets the user give the appropriate consents 
necessary for sign-in to work. 












## [giveUp](https://github.com/fennifith/Asteroid/blob/master/BaseGameUtils/src/main/java/com/google/example/games/basegameutils/GameHelper.java#L899)

**Type:** `void`

Give up on signing in due to an error. Shows the appropriate error 
message to the user, using a standard error dialog as appropriate to the 
cause of the error. That dialog will indicate to the user how the problem 
can be solved (for example, re-enable Google Play Services, upgrade to a 
new version, etc). 












## [onConnectionSuspended](https://github.com/fennifith/Asteroid/blob/master/BaseGameUtils/src/main/java/com/google/example/games/basegameutils/GameHelper.java#L921)

**Type:** `@Override` `public` `void`

Called when we are disconnected from the Google API client. 












## [showFailureDialog](https://github.com/fennifith/Asteroid/blob/master/BaseGameUtils/src/main/java/com/google/example/games/basegameutils/GameHelper.java#L948)

**Type:** `public` `static` `void`

Shows an error dialog that's appropriate for the failure reason. 












