---
layout: project
type: android-library
title: Buttons
description: A library with a large amount of themable styled buttons.
repo: TheAndroidMaster/Buttons
links:
  - name: GitHub
    url: https://github.com/TheAndroidMaster/Buttons
    icon: https://github.com/favicon.ico
  - name: buttons
    url: https://bintray.com/18jafenn90/maven/buttons
    icon: https://bintray.com/favicon.ico
contributors:
  - login: TheAndroidMaster
    avatar: https://avatars1.githubusercontent.com/u/13000407?v=4
    url: https://github.com/TheAndroidMaster
---

Buttons is a library with a large amount of themable styled buttons.

For testing and experimentation purposes, a sample apk can be downloaded [here](https://jfenn.me/about/releases/?Buttons).

## Setup
The Gradle dependency is available through jCenter, which is used by default in Android Studio. To add the module to your project, copy this line into the dependencies section of your build.gradle file.

``` gradle
compile 'james.buttons:buttons:0.0.3'
```

## Usage

### Adding A Button In XML
To add a button to a layout file in XML, simply add a button like normal, except replace the tag with `james.buttons.Button` like below.

``` xml
<james.buttons.Button
    android:id="@+id/button"
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    android:text="I\`M SO FANCY, YOU ALREADY KNOW" />
```

### Changing The Background Color
When a `Button` is created, the default background color is solid black. To change this, add an `app:backgroundColor` attribute like below.

``` xml
<james.buttons.Button
    xmlns:app="http://schemas.android.com/apk/res-auto"
    android:id="@+id/button"
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    android:text="I\'M IN THE FAST LANE FROM L.A. TO TOKYO"
    app:backgroundColor="#FAFAFA"/>
```


You can also change the color programatically using the `Button.setBackgroundColor(int)` method like below.

``` java
Button button = (Button) findViewById(R.id.button);
button.setBackgroundColor(ContextCompat.getColor(this, R.color.colorAccent));
```

By default, the button will automatically assign a text color that contrasts the current background when a color is set. To disable that, simply call `Button.setBackgroundColor(int, boolean)` like below, or call `Button.setTextColor(int)` with the desired color after the background color has changed.

``` java
Button button = (Button) findViewById(R.id.button);
button.setTextColor(R.color.colorPrimary);
button.setBackgroundColor(ContextCompat.getColor(this, R.color.colorAccent), false);
```

### Changing The Text Color
The text color can be changed by using the `Button.setTextColor(int)` method. In XML, the `android:textColor` attribute will not work. You must use `app:textColor` instead.

### Changing The Button Style
To change the button type use the `app:backgroundType` attribute like below. There are currently four different styles: `solid`, `outline`, `round`, and `roundOutline`.

``` xml
<james.buttons.Button
    xmlns:app="http://schemas.android.com/apk/res-auto"
    android:id="@+id/button"
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    android:text="I LIKE TRAINS"
    app:backgroundStyle="outline"/>
```

The style can also be changed programatically by using the `Button.setBackgroundType(Button.Type)` or `Button.setBackgroundType(Button.Type, boolean)` method like below.

``` java
Button button = (Button) findViewById(R.id.button);
button.setBackgroundType(Button.Type.OUTLINE);
```

### Enabling/Disabling Ripples
Ripple animations will be visible by default (with the exception of outlined buttons - see issue [#6](https://github.com/TheAndroidMaster/Buttons/issues/6)). To disable them, use the `Button.setRippleEnabled(boolean)` method, or add `app:ripplesEnabled="false"` in the layout file. The ripple color is determined automatically based on the current text color and button style.
