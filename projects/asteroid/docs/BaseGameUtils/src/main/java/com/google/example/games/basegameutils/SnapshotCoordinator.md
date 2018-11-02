---
layout: docs
title: SnapshotCoordinator Documentation
---
#### [.](./../../../../../../../../../index) > [BaseGameUtils](./../../../../../../../../index) > [src](./../../../../../../../index) > [main](./../../../../../../index) > [java](./../../../../../index) > [com](./../../../../index) > [google](./../../../index) > [example](./../../index) > [games](./../index) > [basegameutils](./index) > **SnapshotCoordinator.java**

# [Snapshots](https://github.com/fennifith/Asteroid/blob/master/BaseGameUtils/src/main/java/com/google/example/games/basegameutils/SnapshotCoordinator.java#L43)

**Type:** `public` `class` `SnapshotCoordinator` `implements`

The SnapshotCoordinator is used to overcome some dangerous behavior when using Saved Game API 
(aka Snapshots). The problem is caused by the not having way to prevent having the same file 
opened multiple overlapping times. Also there is no way to stop the incorrect reusing of 
the Snapshot contained in the OpenSnapshotResult object. It should be used once to write or be 
closed. Multiple commits using the same snapshot will result in unrecoverable conflicts. 
<p/> 
This class is used to encapsulate the access to the Snapshots API and enforce these semantics of 
exclusive file access and one-time committing of metadata. 
<p/> 
How to use this class 
<p/> 
This class can be used as a drop-in replacement for Games.Snapshots. If the usage of the API 
is inconsistent with enforced rules (any file can be open only once before closing it, and 
snapshot data can only be committed once per open), then an IllegalStateException is thrown. 
<p/> 
NOTE:The one exception to the drop-in replacement is that each call that returns a 
PendingResult, that PendingResult MUST be processed by setting the ResultCallback 
or bycalling await(). 
This is important to make sure the open/closed book-keeping is accurate. 
<p/> 
To make it easier to use Snapshots correctly, you should call SnapshotCoordinator.waitForClosed() 
to obtain a PendingResult which will be resolved when the file is ready to be opened again. 












## [getInstance](https://github.com/fennifith/Asteroid/blob/master/BaseGameUtils/src/main/java/com/google/example/games/basegameutils/SnapshotCoordinator.java#L73)

**Type:** `public` `static` `SnapshotCoordinator`

Singleton for coordinating the Snapshots API. This is important since 
we need to coordinate all operations through the same instance in order to 
detect usages that would cause data corruption. 






**Returned Value:** the singleton  








## [isAlreadyOpen](https://github.com/fennifith/Asteroid/blob/master/BaseGameUtils/src/main/java/com/google/example/games/basegameutils/SnapshotCoordinator.java#L93)

**Type:** `public` `synchronized` `boolean`

Returns true if the named file is already opened. This is a synchronized 
operation since it is highly likely that multiple threads are involved via AsyncTasks. 





|Parameter Name|Description|
|-----|-----|
|filename|- the filename to check|


**Returned Value:** true if opened.  








## [isAlreadyClosing](https://github.com/fennifith/Asteroid/blob/master/BaseGameUtils/src/main/java/com/google/example/games/basegameutils/SnapshotCoordinator.java#L104)

**Type:** `public` `synchronized` `boolean`

Returns true if the named file is in the process of closing. This is a synchronized 
operation since it is highly likely that multiple threads are involved via AsyncTasks. 





|Parameter Name|Description|
|-----|-----|
|filename|- the filename to check|


**Returned Value:** true if closing.  








## [setIsClosing](https://github.com/fennifith/Asteroid/blob/master/BaseGameUtils/src/main/java/com/google/example/games/basegameutils/SnapshotCoordinator.java#L115)

**Type:** `private` `synchronized` `void`

Records the fact that the named file is closing (which also includes committing the data). 
This is a synchronized operation since it is highly likely that multiple threads 
are involved via AsyncTasks. 





|Parameter Name|Description|
|-----|-----|
|filename|- the filename of interest.  |








## [setClosed](https://github.com/fennifith/Asteroid/blob/master/BaseGameUtils/src/main/java/com/google/example/games/basegameutils/SnapshotCoordinator.java#L126)

**Type:** `private` `synchronized` `void`

Records the fact that the named file is closed. 
This is a synchronized operation since it is highly likely that multiple threads 
are involved via AsyncTasks. 





|Parameter Name|Description|
|-----|-----|
|filename|- the filename of interest.  |








## [setIsOpening](https://github.com/fennifith/Asteroid/blob/master/BaseGameUtils/src/main/java/com/google/example/games/basegameutils/SnapshotCoordinator.java#L141)

**Type:** `private` `synchronized` `void`

Records the fact that the named file is opening. 
This is a synchronized operation since it is highly likely that multiple threads 
are involved via AsyncTasks. 





|Parameter Name|Description|
|-----|-----|
|filename|- the filename of interest.  |








## [waitForClosed](https://github.com/fennifith/Asteroid/blob/master/BaseGameUtils/src/main/java/com/google/example/games/basegameutils/SnapshotCoordinator.java#L153)

**Type:** `public` `PendingResult<Result>`

Blocking wait for the given file to be closed. Returns immediately if the 
file is not open. 





|Parameter Name|Description|
|-----|-----|
|filename|- the file name in question.  |








## [ResultListener](https://github.com/fennifith/Asteroid/blob/master/BaseGameUtils/src/main/java/com/google/example/games/basegameutils/SnapshotCoordinator.java#L446)

**Type:** `private` `interface`

Interface to be triggered when a PendingResult is completed. 












# [PendingResult<T>](https://github.com/fennifith/Asteroid/blob/master/BaseGameUtils/src/main/java/com/google/example/games/basegameutils/SnapshotCoordinator.java#L453)

**Type:** `private` `class` `CoordinatedPendingResult<T` `extends` `Result>` `extends`

Wrapper of PendingResult so the coordinator class is notified when an operation completes. 





|Parameter Name|Description|
|-----|-----|
|<T>| |








## [doInBackground](https://github.com/fennifith/Asteroid/blob/master/BaseGameUtils/src/main/java/com/google/example/games/basegameutils/SnapshotCoordinator.java#L610)

**Type:** `@Override` `protected` `Void`

Override this method to perform a computation on a background thread. The 
specified parameters are the parameters passed to 
by the caller of this task. 
<p/> 
This method can call to publish updates 
on the UI thread. 





|Parameter Name|Description|
|-----|-----|
|params|The parameters of the task.|


**Returned Value:** A result, defined by the subclass of this task.





**Reference:** #onPreExecute()

#onPostExecute

#publishProgress  





## [doInBackground](https://github.com/fennifith/Asteroid/blob/master/BaseGameUtils/src/main/java/com/google/example/games/basegameutils/SnapshotCoordinator.java#L662)

**Type:** `@Override` `protected` `Void`

Override this method to perform a computation on a background thread. The 
specified parameters are the parameters passed to 
by the caller of this task. 
<p/> 
This method can call to publish updates 
on the UI thread. 





|Parameter Name|Description|
|-----|-----|
|params|The parameters of the task.|


**Returned Value:** A result, defined by the subclass of this task.





**Reference:** #onPreExecute()

#onPostExecute

#publishProgress  





