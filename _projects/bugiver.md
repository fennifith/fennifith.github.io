---
layout: "project"
type: "website"
title: "Bugiver"
description: "A small website that gives you an issue to fix when there is nothing to do."
repo: "fennifith/bugiver"
git: "git://github.com/fennifith/bugiver.git"
links: 
  - name: "GitHub"
    url: "https://github.com/fennifith/bugiver"
    icon: "https://github.com/favicon.ico"
  - name: "Issues"
    url: "https://github.com/fennifith/bugiver/issues"
    icon: "/images/ic/bug.svg"
  - name: "Apache License 2.0"
    url: "https://choosealicense.com/licenses/apache-2.0/"
    icon: "/images/ic/copyright.svg"
  - name: "Website"
    url: "https://jfenn.me/bugiver/"
    icon: "https://jfenn.me/images/favicon-32.ico"
contributors: 
  - login: "fennifith"
    avatar: "https://avatars1.githubusercontent.com/u/13000407?v=4"
    url: "https://github.com/fennifith"
languages: 
  - "HTML"
isDocs: "false"
isWiki: "false"
pushed: "2019-01-15T15:36:13Z"
---

Bugiver is a simple website that iterates through everyone that you are following on GitHub and selects a random issue in a completely random repository in a language of your choice. I have designed it as my personal "I have nothing to do" button that gives me something to do in a possibly futile attempt to encourage myself to contribute to more repositories than I create.

## Stuff

1. Upon pressing the "Sign In" button, users are redirected to [/auth](./auth/index.html) where the authentication happens.
2. The application's private API key is stored in a heroku application running [HenrikJoreteg/github-secret-keeper](https://github.com/HenrikJoreteg/github-secret-keeper).
3. Upon getting a result, users are redirected to the main page, where a lot of stuff happens.
4. Potential issue candidates are added to a map, and a separate map of languages and labels are formed to allow users to filter them.
5. An issue is selected at random, one more API request is sent, and the resulting issue data is displayed.

## Contributing

Contributions are accepted. See [CONTRIBUTING.md](https://github.com/fennifith/bugiver/blob/master/./.github/CONTRIBUTING.md) for more information.
