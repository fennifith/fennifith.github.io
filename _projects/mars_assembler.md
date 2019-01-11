---
layout: project
type: undefined
title: "JarrettBillingsley/MARS_Assembler"
description: "Fork of Jarrett's \"MARS\" mirror adding theming options and my own personal tweaks."
repo: fennifith/MARS_Assembler
git: git://github.com/fennifith/MARS_Assembler.git
links:
  - name: GitHub
    url: https://github.com/fennifith/MARS_Assembler
    icon: https://github.com/favicon.ico
  - name: Issues
    url: https://github.com/fennifith/MARS_Assembler/issues
    icon: /images/ic/bug.svg
  - name: Other
    url: https://choosealicense.com/licenses/other/
    icon: /images/ic/copyright.svg
  - name: Mars.jar (james-4.5.1 unstable)
    url: https://github.com/fennifith/MARS_Assembler/releases/download/james-4.5.1/Mars.jar
    icon: /images/ic/download.svg
contributors:
  - login: JarrettBillingsley
    avatar: https://avatars0.githubusercontent.com/u/452240?v=4
    url: https://github.com/JarrettBillingsley
  - login: fennifith
    avatar: https://avatars1.githubusercontent.com/u/13000407?v=4
    url: https://github.com/fennifith
  - login: captainepoch
    avatar: https://avatars2.githubusercontent.com/u/1268590?v=4
    url: https://github.com/captainepoch
isDocs: false
isWiki: false
languages:
  - Java
  - HTML
  - Shell
  - Batchfile
pushed: 2019-01-11T05:41:11Z
---

[MARS](http://courses.missouristate.edu/KenVollmar/MARS/index.htm) is a lightweight interactive development environment (IDE) for programming in MIPS assembly language, intended for educational-level use with Patterson and Hennessy's Computer Organization and Design.

MARS has been jointly developed by [Pete Sanderson](http://faculty.otterbein.edu/PSanderson/) (programming) and [Ken Vollmar](http://courses.missouristate.edu/KenVollmar/) (details and paperwork).

## Purpose of this repo

This is a fork of Jarrett's mirror of the MARS Assembler source code, mainly for personal use (though I am not averse to contributions) / adding more theming options. I am currently working on it across two branches:

- `clean`, which stays as close as possible to the original source code and only contains the "features" that I add
- `master`, which contains all of my changes, including a "dark theme" as the default settings.

[![Build Status](https://travis-ci.com/fennifith/MARS_Assembler.svg)](https://travis-ci.com/fennifith/MARS_Assembler)
[![Discord](https://img.shields.io/discord/514625116706177035.svg)](https://discord.gg/s5Se8vU)

If for some reason you would like to obtain a copy of this version of MARS without compiling it from source, you can find a .jar file [here](https://github.com/fennifith/MARS_Assembler/blob/master/../../releases/).

Huge thanks to Jarrett for maintaining the [original fork](https://github.com/JarrettBillingsley/MARS_Assembler) of MARS.

## Documentation

[Here](http://courses.missouristate.edu/KenVollmar/MARS/Help/MarsHelpIntro.html).

## How to compile (Linux)

1. Install dependencies: Java 8, JavaFX (it is not included in newer versions of OpenJDK).
2. Run `javac @java_files.txt`.
3. Execute `CreateMarsJar.sh` to uhh... create the jar.
4. `java -jar ./Mars.jar`

## License

[MIT](http://www.opensource.org/licenses/mit-license.html). Check the [LICENSE](https://github.com/adolphenom/MARS_Assembler/blob/master/LICENSE) file. All the credits go to the original developers.
