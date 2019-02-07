---
layout: docs
title: DelayedInstantiation Documentation
---
#### [.](./../../../../../../../../index) > [base](./../../../../../../../index) > [src](./../../../../../../index) > [main](./../../../../../index) > [java](./../../../../index) > [me](./../../../index) > [jfenn](./../../index) > [colorpickerdialog](./../index) > [utils](./index) > **DelayedInstantiation.java**

## [from](https://github.com/fennifith/ColorPickerDialog/blob/master/base/src/main/java/me/jfenn/colorpickerdialog/utils/DelayedInstantiation.java#L18)

**Type:** `@Nullable` `public` `static` `<X>` `DelayedInstantiation<X>`

Create a new delayed instantiation to instantiate a class using reflection. 





|Parameter Name|Description|
|-----|-----|
|tClass|The class to instantiate.|
|args|Class types of the arguments in the class's constructor.|
|<X>|The class to be instantiated.|


**Returned Value:**  The created `DelayedInstantiation` object.  








## [withInstantiator](https://github.com/fennifith/ColorPickerDialog/blob/master/base/src/main/java/me/jfenn/colorpickerdialog/utils/DelayedInstantiation.java#L35)

**Type:** `public` `DelayedInstantiation<T>`

Specify a custom `Instantiator` instance to create the class. 





|Parameter Name|Description|
|-----|-----|
|instantiator|The interface to use to instantiate the class.|


**Returned Value:**  "This" instantiation instance, for method chaining.  








## [instantiate](https://github.com/fennifith/ColorPickerDialog/blob/master/base/src/main/java/me/jfenn/colorpickerdialog/utils/DelayedInstantiation.java#L46)

**Type:** `@Nullable` `public` `T`

Instantiate the class, using reflection. 





|Parameter Name|Description|
|-----|-----|
|args|Arguments to pass to the constructor.|


**Returned Value:**  The instantiated class, or null if the instantiation failed.  








## [gettClass](https://github.com/fennifith/ColorPickerDialog/blob/master/base/src/main/java/me/jfenn/colorpickerdialog/utils/DelayedInstantiation.java#L58)

**Type:** `public` `Class<T>`

Get the type class of the delayed instantiation. 






**Returned Value:**  The class to be instantiated.  








## [gettClassName](https://github.com/fennifith/ColorPickerDialog/blob/master/base/src/main/java/me/jfenn/colorpickerdialog/utils/DelayedInstantiation.java#L67)

**Type:** `public` `String`

Get the name of the type class for the delayed instantiation. 






**Returned Value:**  The (string) name of the class to be instantiated.  








