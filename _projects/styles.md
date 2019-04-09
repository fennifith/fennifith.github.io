---
layout: "project"
type: "website"
title: "Styles"
description: "A collection of all my CSS styles, organized and documented."
repo: "fennifith/styles"
git: "git://github.com/fennifith/styles.git"
links: 
  - name: "GitHub"
    url: "https://github.com/fennifith/styles"
    icon: "https://github.com/favicon.ico"
  - name: "Issues"
    url: "https://github.com/fennifith/styles/issues"
    icon: "/images/ic/bug.svg"
  - name: "Website"
    url: "https://jfenn.me/styles/"
    icon: "https://jfenn.me/images/favicon-32.ico"
contributors: 
  - login: "fennifith"
    avatar: "https://avatars1.githubusercontent.com/u/13000407?v=4"
    url: "https://github.com/fennifith"
languages: 
  - "HTML"
isDocs: "false"
isWiki: "false"
pushed: "2019-04-09T19:37:23Z"
---

This repository contains all of the CSS styles used throughout [my site](https://jfenn.me/). I generally use a [submodule](https://git-scm.com/book/en/v2/Git-Tools-Submodules) that pulls from the `css` branch of this repository in each of my projects. This ensures that simply updating the css in this repository cannot break anything; I must update the submodule in each repository before the changes are applied.

## Conventions

At the suggestion of a friend, I have decided to adopt the [Block Element Modifier](http://getbem.com/naming/) naming convention in order to help organize my css more efficiently. In order to prevent this from becoming a cluttered mess, I am also using [SCSS](https://sass-lang.com/) (Sassy CSS) to split sets of styles into individual files for each element.

## Documentation

I am currently working on documenting all of the existing styles, as well as enforcing some kind of consistency between class names. The current documentation (and examples) are available at [jfenn.me/styles](https://jfenn.me/styles/). As I am generally lazy at documenting things, some of the text and explanations are crude and not very well written. I hope to improve on this in the future, but until then it serves its general purpose.
