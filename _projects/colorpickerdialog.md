---
layout: project
type: android-library
title: "Color Picker Dialog"
description: "A simple dialog making it quick and easy to add color picking functionality to any app."
repo: TheAndroidMaster/ColorPickerDialog
git: git://github.com/TheAndroidMaster/ColorPickerDialog.git
links:
  - name: GitHub
    url: https://github.com/TheAndroidMaster/ColorPickerDialog
    icon: https://github.com/favicon.ico
  - name: Issues
    url: https://github.com/TheAndroidMaster/ColorPickerDialog/issues
    icon: /images/ic/bug.svg
  - name: Apache License 2.0
    url: https://choosealicense.com/licenses/apache-2.0/
    icon: /images/ic/copyright.svg
  - name: Bintray
    url: https://bintray.com/18jafenn90/maven/colorpickerdialog
    icon: https://bintray.com/favicon.ico
  - name: app-debug.apk (v0.0.4 stable)
    url: https://github.com/TheAndroidMaster/ColorPickerDialog/releases/download/v0.0.4/app-debug.apk
    icon: /images/ic/download.svg
contributors:
  - login: TheAndroidMaster
    avatar: https://avatars1.githubusercontent.com/u/13000407?v=4
    url: https://github.com/TheAndroidMaster
  - login: jahirfiquitiva
    avatar: https://avatars0.githubusercontent.com/u/10360816?v=4
    url: https://github.com/jahirfiquitiva
---

ColorPickerDialog is a simple dialog making it quick and easy to add a color picker functionality to any app.

For testing and experimentation purposes, a sample apk can be downloaded [here](https://theandroidmaster.github.io/about/releases/#TheAndroidMaster/ColorPickerDialog).

|Color Picker|Image Color Picker|
|--------|--------|
|![img](https://theandroidmaster.github.io/images/screenshots/ColorPickerDialog-Color.png)|![img](https://theandroidmaster.github.io/images/screenshots/ColorPickerDialog-Image.png)|

## Usage

### Setup

The Gradle dependency is available through jCenter, which is used by default in Android Studio. To add the module to your project, copy this line into the dependencies section of your build.gradle file.
``` gradle
compile 'james.colorpickerdialog:colorpickerdialog:0.0.4'
```

### Creating a Dialog

The basic requirements for the dialog are a context, color, and listener. You must handle storage of the color yourself, as the library will not do it for you.

``` java
new ColorPickerDialog(this) //context
  .setPreference(color) //the current stored color value
  .setListener(new PreferenceDialog.OnPreferenceListener<Integer>() {
    @Override
    public void onPreference(PreferenceDialog dialog, Integer preference) {
      //called when a color is chosen - this is where you would update a stored value
    }

    @Override
    public void onCancel(PreferenceDialog dialog) {
      //called if the dialog is dismissed
    }
  })
  .show();
```

### Image Picker

By default, the dialog will allow the user to pick a color from an image. To enable or disable this feature, use the `ColorPickerDialog.setImagePickerEnabled(boolean)` method.

### Default Colors

To add a default color, use the `ColorPickerDialog.setDefaultPreference(Integer)` method. This will cause a reset button to display when the current preference isn't equal to the default one. If a current preference isn't specified, the dialog will use the default one, but if neither are specified it will cause a `NullPointerException`.

### Using The Image Picker Dialog Separately

The image picker function included in this library is currently limited to getting images from the gallery on the device. To use the dialog with a different image, you can create the dialog manually like below.

``` java
new ImageColorPickerDialog(getContext(), bitmap) //context, image
  .setDefaultPreference(Color.BLACK) //default color in case the user doesn't pick a value
  .setListener(new PreferenceDialog.OnPreferenceListener<Integer>() {
    @Override
    public void onPreference(PreferenceDialog dialog, Integer preference) {
      //called when a color is chosen
    }

    @Override
    public void onCancel(PreferenceDialog dialog) {
      //called if the dialog is dismissed
    }
  })
  .show();
```
