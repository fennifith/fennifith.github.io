---
layout: "wiki"
title: "Custom Themes"
languages: 
  - "Kotlin"
  - "Java"
  - "Shell"
---

## Activity / Dialog Themes

By default, Attribouter uses an extension of `Theme.MaterialComponents.Light.NoActionBar` as its activity theme, with a `-night` override to provide a dark themed version for Android Q and above. The contributor and license dialogs use `ThemeOverlay.MaterialComponents.Dialog.Alert`, and fullscreen dialogs (overflow screens) use an extension of the activity theme with a different window animation.

There are multiple ways that you can change these themes, but I know that this one works, so I am going to do this. If you are using Attribouter as a fragment, you can skip the first part since it will use whatever theme you have set for the activity that the fragment is in.

### Overriding Resource Values

Attribouter constructs its day/night themes from a set of resource attributes that can be overridden in your app. These are fairly self-explanatory, so I'll just paste a list of them below.

```xml
<!-- Default Themed Colors -->
<color name="attribouter_colorPrimary">#3F51B5</color>
<color name="attribouter_colorPrimaryDark">#303F9F</color>
<color name="attribouter_colorAccent">#FF4081</color>
<color name="attribouter_textColorAccent">@color/attribouter_colorPrimary</color>
<color name="attribouter_cardColor">#FFFFFF</color>
<color name="attribouter_windowBackgroundColor">#F5F5F5</color>
<color name="attribouter_windowInsetColor">#E0E0E0</color>
<color name="attribouter_highlightColor">#1F000000</color>

<color name="attribouter_colorPrimary_night">#D9DEff</color>
<color name="attribouter_colorPrimaryDark_night">#BAC2F5</color>
<color name="attribouter_colorAccent_night">#FFABC7</color>
<color name="attribouter_textColorAccent_night">@color/attribouter_colorPrimary_night</color>
<color name="attribouter_cardColor_night">#303030</color>
<color name="attribouter_windowBackgroundColor_night">#000000</color>
<color name="attribouter_windowInsetColor_night">#212121</color>
<color name="attribouter_highlightColor_night">#33FFFFFF</color>

<color name="attribouter_textColorPrimary">#DE000000</color>
<color name="attribouter_textColorSecondary">#8A000000</color>
<color name="attribouter_textColorTertiary">#61000000</color>
<color name="attribouter_textColorPrimaryInverse">#FFFFFF</color>
<color name="attribouter_textColorSecondaryInverse">#B3FFFFFF</color>
<color name="attribouter_textColorTertiaryInverse">#80FFFFFF</color>

<!-- Default Dimension Attributes -->
<dimen name="attribouter_cardCornerRadius">8dp</dimen>
```

### Overriding the Activity Theme

First, add a new style resource to your `styles.xml` titled "AttribouterTheme". This will override the theme defined by Attribouter that it uses by default. The theme's parent should be "Theme.MaterialComponents.something", preferably ending with ".NoActionBar" since Attribouter's activity has one of its own. For example, if you wanted to use a dark theme, you would use `Theme.MaterialComponents.NoActionBar` as follows:

```xml
<resources>
  <style name="AttribouterTheme" parent="Theme.MaterialComponents.NoActionBar" />
</resources>
```

If you start Attribouter now, it should use a dark theme for the activity and all of its dialogs. What if you want to use a different theme for the dialogs than the activity, though?

### Changing Dialog Themes

There are three custom attributes that Attribouter looks for in the activity theme to tell it what themes to use for its dialogs: `attribouter_personDialogTheme`, `attribouter_overflowDialogTheme`, and `attribouter_licenseDialogTheme`. Let's try changing the contributor dialogs back to a light theme, keeping the rest of Attribouter dark.

```xml
<resources>
  <style name="AttribouterTheme" parent="Theme.AppCompat.NoActionBar" >
    <item name="personDialogTheme">@style/PersonDialogTheme</item>
  </style>
  
  <style name="PersonDialogTheme" parent="ThemeOverlay.AppCompat.Dialog" />
</resources>
```

Yep, that works.

## Overriding Layouts

While this is partially obsolete since [subwedging](Extending-a-Wedge) is a far cleaner and better solution, it is possible to override some of Attribouter's [layout files](https://jfenn.me/redirects/?t=github&d=Attribouter/tree/91ff71a11338cc501c332b82ba8ddd6fa042bd24/attribouter/src/main/res/layout) for small changes (ex: making the circular avatars square). Most of the custom views used in these layout files are only casted to their superclasses (me.jfenn.attribouter.views.CircleImageView is only referenced as an ImageView), so as long as the ids remain the same there should not be any problems.