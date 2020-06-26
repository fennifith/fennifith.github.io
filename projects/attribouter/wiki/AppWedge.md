---
layout: "wiki"
title: "App Wedge"
languages: 
  - "Kotlin"
  - "Java"
  - "Shell"
---

The `AppWedge` displays the app icon, name, version, and links to the project sites in a centered layout. By default, the icon and app name are fetched from your app's `AndroidManifest.xml`, and all other information is fetched from the repo API if the `repo` attribute has been specified.

## Example

```xml
<me.jfenn.attribouter.wedges.AppWedge
    repo="github:fennifith/Attribouter"
    icon="@mipmap/ic_launcher"
    title="Attribouter"
    description="Attribouter is a library that does things."
    websiteUrl="https://jfenn.me/Attribouter/" />
```

## Attributes

|Attribute|Type|Description|
|-----|-----|-----|
|repo|String (name/repository)|The repository URI to fetch data from.|
|icon|String (URL) / Drawable Resource|The app icon to display.|
|title|String|The app title to show (defaults to the application label if unspecified).|
|description|String / String Resource|A short description of the app/project.|
|playStoreUrl|String / String Resource (URL)|The URL of the app on the Play Store (generated from the package name by default).|
|websiteUrl|String / String Resource (URL)| The website of the project.|
|repoUrl|String / String Resource (URL)|The URL for the open source GitHub project. You do not need to define this unless the URL inferred from the `repo` attribute is incorrect.|

## Auto-generated Links

The links that are automatically created by this wedge are as follows. See [`LinkWedge`](LinkWedge) for more information.

|ID|Description|Required Attributes|
|-----|-----|-----|
|git|The git repository of the project.|`repo` or `repoUrl`|
|website|The website of the project.|`repo` (if the repo has a website assigned) or `websiteUrl`|
|playStore|A 'rate' button that opens the app in the play store.|`playStoreUrl` or `repo` (if the repository url is the play store url)|