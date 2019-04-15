---
layout: blog
title: Attribouter
description: "A short breakdown of a really really big library I wrote to credit contributors and libraries used in my Android projects."
project: "fennifith/Attribouter"
tags:
  - android
  - java
categories:
  - blog
---

A few months ago, I got tired of building about screens into all of my projects. I like building projects, and I find it very rewarding when others contribute to them and find them useful, but when the amount of work I force myself to do in order to give credit to the people that have helped me is greater than the work they have done to help me in the first place, it gets a little annoying.

## Prologue

I had found two potential solutions to this problem: the [About Libraries](https://github.com/mikepenz/AboutLibraries) library by Mike Penz, and [Material About Library](https://github.com/daniel-stoneuk/material-about-library) by Daniel Stone, however neither really gave me what I was looking for. 

#### About Libraries

About Libraries is visibly aging and has a bit of an imperfect design by today's standards, not to mention that it only solves half of my problem - while it gives credit to the libraries I'm using perfectly well, it doesn't help with other contributors or translators, which kind of misses the point.

#### Material About Library

Material About Library has quite a bit more functionality, and is much newer. It has a fairly modular design where the about screen consists of multiple "cards", each with a title and a set of actions that a user can perform. Its API is quite simple and easy to get your head around quickly, and allows you to do pretty much anything short of adding your own custom views to the layout. However, as I was implementing it, I realized that the amount that I would have to write to add or remove a contributor was still around 3/4 of what I would be doing without the library. Additionally, if the project grew any larger than a few contributors and translators, I would have to make my own dialog to list them or the about screen would become cluttered and unusable, at which point I might as well just make my own.

It was then that I had a thought: all of my projects are hosted on GitHub, so why don't I just make an about screen using GitHub's API that fetches all of my project's contributors? Then I don't have to modify the about screen at all - I don't even have to update the app for them to appear. I could configure it so that I only have to specify the repository for my project and the repositories of the licenses it uses, and I would never have to touch it again. 

...and so began my quest to build a better about screen.

## Items

From the start, I decided that using an XML configuration file would be my best option. While configuring all of the sections of the screen in Java, similarly to Material About Library, would allow more functionality, an XML file would require less typing and let me order the sections in the way I want them to be displayed, like a layout file does. I would create a RecyclerView in a fragment that is created inside of an activity, then parse the XML file to add items to its adapter.

This required creating some type of data class. I decided that, for the sake of modularity, I would create an abstract base class that allows me to specify the layout file, create the ViewHolder, and bind the views within the data classes that are passed to the adapter. Because of the idiot that is me, I gave the base class the ambiguous name of `InfoData`, naming all of the data classes things like `ContributorsInfoData` or `LicensesInfoData`. This was not okay, but it worked.

## Information

Instead of parsing the entire XML file then passing the information to the data classes, I decided to parse only enough to decide which data class to create, then pass the parser to their constructors, as the data that needs to be obtained will differ in each class.

As well as the repository names for obtaining contributor and library information, I ended up creating attributes in the XML file to define just about all of the information it can obtain from GitHub in order to allow things like adding contributors that aren't listed on GitHub or giving credit to libraries that are hosted somewhere else - GitLab, for example. They would also be used if the network requests to GitHub didn't go through. When the information from GitHub was returned, all duplicate information from the XML file would be overwritten.

## Requests

At first, I wasn't quite sure how I was going to handle network transactions with the GitHub API. I knew that the information would have to start and end in the `InfoData` classes, and that I would have to notify the RecyclerView of the changes once they had been made, but I didn't know where I was going to make the actual request. I considered placing the methods to perform the request in the `InfoData` base class, but that seemed crude - it would clutter a class intended for a different purpose, and there would be no way to prevent duplicate requests from being created if two classes want information from the same endpoint.

I ended up creating a separate set of classes for API requests - a superclass that accepts a URL and contains methods for creating the request (as well as listener interfaces/methods for when it is completed), and several subclasses which, because of [GSON](https://github.com/google/gson) and its beautiful reflection, only need to define fields with the same name as the data provided by the API in order for them to be instantiated ([example](/redirects/?t=github&d=Attribouter/blob/28aaca214fefc7b4716107375834aa7195b019b8/attribouter/src/main/java/me/jfenn/attribouter/data/github/LicenseData.java)). I did have to make some small changes to the implementation of GSON to get it to work, including creating a subclass that was amusingly titled [`MootInstanceCreator`](https://github.com/TheAndroidMaster/Attribouter/blob/28aaca214fefc7b4716107375834aa7195b019b8/attribouter/src/main/java/me/jfenn/attribouter/data/github/GitHubData.java#L139), but this was fairly trivial. 

These 'request' classes are created by the InfoDatas when they want to get information. They then pass it to a method defined in their superclass: [addRequest()](/redirects/?t=github&d=TheAndroidMaster/Attribouter/blob/28aaca214fefc7b4716107375834aa7195b019b8/attribouter/src/main/java/me/jfenn/attribouter/wedges/Wedge.java#L99), which adds the request to a list stored in the InfoData then passes it through an interface to [the fragment](/redirects/?t=github&d=Attribouter/blob/28aaca214fefc7b4716107375834aa7195b019b8/attribouter/src/main/java/me/jfenn/attribouter/fragments/AboutFragment.java#L172). The fragment then compares the request to a list of requests that have already been started, combining the listeners of similar requests to prevent duplicates. When the request is complete, all of its listeners are called, passing the information back to the InfoData(s) that made the request and finally returning to the fragment once more, where it determines which InfoData made the request and what position it holds in the RecyclerView so that it can be notified of any changes.

## Finale

Overall, this library has been very fun to make, and has become far better organized than I thought it would be. In the latest version, I have renamed the "InfoData" classes to "Wedges" and modified the format of the XML file to specify the full class name of the "Wedge" class they create, but the general structure of the project has otherwise remained unchanged. For one of my projects to be this successful at accomplishing its task is rare, so I am very proud of my beautiful child. If you haven't already, you can check it and its beautiful documentation out [here](/redirects/?t=github&d=Attribouter).
