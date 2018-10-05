---
layout: docs
title: ResourceUtils Documentation
---
#### [.](./../../../../../../../index) > [library](./../../../../../../index) > [src](./../../../../../index) > [main](./../../../../index) > [java](./../../../index) > [james](./../../index) > [adaptiveicon](./../index) > [utils](./index) > **ResourceUtils.java**

## [setFakeConfig](https://github.com/TheAndroidMaster/AdaptiveIconView/blob/master/library/src/main/java/james/adaptiveicon/utils/ResourceUtils.java#L14)

**Type:** `public` `static` `void`

Sets a fake configuration to the passed Resources to allow access to resources 
accessible to a sdk level. Used to backport adaptive icon support to different 
devices. 





|Parameter Name|Description|
|-----|-----|
|resources|the resources to set the configuration to|
|sdk|the sdk level to become accessible|




|Exception|Description|
|-----|-----|
|NoSuchMethodException|if something is wrong|
|IllegalAccessException|if something is very wrong|
|InvocationTargetException|if something is really very extremely wrong  |





