---
layout: "wiki"
title: "Contributors Wedge"
languages: 
  - "Kotlin"
  - "Java"
  - "Shell"
---

A `ContributorsWedge` displays a list of child [`ContributorWedge`](ContributorWedge)s under a title, sorted by their `position` attributes. If the `repo` attribute is specified, this list will be merged with contributors from the API. If the `showDefaults` attribute is unspecified or `true`, it will also merge it with contributors to this repository. 

If a user with the login "github:fennifith" is both in the contributor list and the configuration file, its attributes will be merged so that any attributes beginning with a "^" character will override the information from GitHub, and any attributes not beginning with a "^" character will be used while the GitHub information is loading, or if the information from GitHub is not present or unavailable. See ["Overriding Resources and Providing Translations"](Overriding-Resources-and-Providing-Translations) for more information on how merges work.

## Example

```xml
<me.jfenn.attribouter.wedges.ContributorsWedge
        repo="github:fennifith/Attribouter"
        title="Library Developers"
        overflow="-1" >
        
    <!-- contributors -->
        
</me.jfenn.attribouter.wedges.ContributorsWedge>
```

## Attributes

|Attribute|Type|Description|
|-----|-----|-----|
|repo|String (name/repository)|The repository URI to fetch contributors from.|
|title|String / String Resource|The title to show above the contributors (defaults to @string/title_attribouter_contributors / "Contributors").|
|overflow|Integer (>= -1)|The maximum number of contributors to display in the list. Additional contributors are displayed in a dialog. If the number is 0, the entire list is replaced with a button titled "View %s" ('%s' being the title attribute). If the number is -1, all of the contributors are displayed.|
|showDefaults|Boolean|Whether or not to show the "default" contributors in this list (all of the contributors in this repository).|