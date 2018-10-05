---
layout: project
type: nodejs
title: "Asciimg"
description: "A command line tool to display images in ASCII."
repo: TheAndroidMaster/Asciimg
git: git://github.com/TheAndroidMaster/Asciimg.git
links:
  - name: GitHub
    url: https://github.com/TheAndroidMaster/Asciimg
    icon: https://github.com/favicon.ico
  - name: Issues
    url: https://github.com/TheAndroidMaster/Asciimg/issues
    icon: /images/ic/bug.svg
  - name: Apache License 2.0
    url: https://choosealicense.com/licenses/apache-2.0/
    icon: /images/ic/copyright.svg
  - name: npm
    url: https://npmjs.com/package/asciimg
    icon: https://npmjs.com/favicon.ico
contributors:
  - login: TheAndroidMaster
    avatar: https://avatars1.githubusercontent.com/u/13000407?v=4
    url: https://github.com/TheAndroidMaster
isDocs: false
isWiki: false
---

Asciimg (pronounced _ask-ee-em_) is a command line tool that displays images in ASCII.

## Installation

Assuming that you have already installed [npm](https://www.npmjs.com/), in the command line, type either one of the following:

### NPM

```bash
npm install -g asciimg
```

### From Source

```bash
git clone https://github.com/TheAndroidMaster/Asciimg
cd Asciimg
npm install
```

## Usage

```
asciimg <image>
```

Or, to change the dimensions:

```
asciimg <image> -h [height] -w [width]
```

If either the height or width is not specified, asciimg will pick the value that maintains the correct aspect ratio.

If your command line supports rgb color values:

```
asciimg <image> --usergb
```

## Sample Images

The 'test.png' included in the repository is over 4000000 pixels in size, so it will take a while for the tool to convert it. Here are screenshots of the result of that and a few other images:

### My Profile Picture
![img](https://raw.githubusercontent.com/TheAndroidMaster/TheAndroidMaster.github.io/master/images/screenshots/Asciimg-Me.png)

### A Fidget Spinner
Why not.

![img](https://raw.githubusercontent.com/TheAndroidMaster/TheAndroidMaster.github.io/master/images/screenshots/Asciimg-FidgetSpinner.png)

### The Top Half of a Samsung Galaxy S2
![img](https://raw.githubusercontent.com/TheAndroidMaster/TheAndroidMaster.github.io/master/images/screenshots/Asciimg-GalaxyS2.png)
