---
layout: "project"
type: "website"
title: "Photos"
description: "A collection of my photography, published under the Creative Commons License."
repo: "fennifith/photos"
git: "git://github.com/fennifith/photos.git"
links: 
  - name: "GitHub"
    url: "https://github.com/fennifith/photos"
    icon: "https://github.com/favicon.ico"
  - name: "Issues"
    url: "https://github.com/fennifith/photos/issues"
    icon: "/images/ic/bug.svg"
  - name: "Creative Commons Attribution Share Alike 4.0 International"
    url: "https://choosealicense.com/licenses/cc-by-sa-4.0/"
    icon: "/images/ic/copyright.svg"
  - name: "Website"
    url: "https://jfenn.me/photos/"
    icon: "https://jfenn.me/images/favicon-32.ico"
contributors: 
  - login: "fennifith"
    avatar: "https://avatars1.githubusercontent.com/u/13000407?v=4"
    url: "https://github.com/fennifith"
languages: 
  - "HTML"
  - "JavaScript"
  - "Shell"
isDocs: "false"
isWiki: "false"
pushed: "2020-04-17T00:54:28Z"
---

This website is a collection of a few of the pictures that I have taken over the past few years. All images are published under the [Creative Commons Attribution Share Alike 4.0](https://choosealicense.com/licenses/cc-by-sa-4.0/) license. In other words, they can be used for (mostly) whatever you want, provided you give me credit and don't try to claim ownership of them.

## Setup

This website is appropriately built with Jekyll. Photo data is obviously stored in `/_photos`, and image data in `/_images`. I use a script stored in `/.scripts` that updates all of the photo and image data with information from the [Flickr API](https://www.flickr.com/services/api/). 

### The Magical Script of Wizardry

The script has two parts: [`update.sh`](https://github.com/fennifith/photos/blob/master/./.scripts/update.sh) (responsible for pulling changes, installing NPM packages, running the NodeJS script, and pushing the modifications to GitHub when it is complete) and [`update.js`](https://github.com/fennifith/photos/blob/master/./.scripts/update.js) (handles authentication and fetches/parses data from the API). The [`_uid`](./scripts/update.js#L5) variable specifies the Flickr user id to fetch albums from.

#### Authentication

The script currently looks for an application key and secret in the `~/keys/imgur/` directory of the user that is running it. In order to obtain a key/secret, you must register an application [here](https://www.flickr.com/services/apps/create/). Upon the first successful run of the script, it will prompt you to authorize it to fetch information from your Flickr account. Once complete, the returned API token and token secret are also stored in this directory.

#### Dependencies

- [get-rgba-palette](https://www.npmjs.com/package/get-rgba-palette)
- [jpeg-js](https://www.npmjs.com/package/jpeg-js)
- [opn](https://www.npmjs.com/package/opn)
- [sync-request](https://www.npmjs.com/package/sync-request)
