---
layout: "project"
type: "undefined"
title: "theonesean/AIGHT"
description: "AIGHT is a command-line tool for getting todo tasks quickly."
repo: "fennifith/AIGHT"
git: "git://github.com/fennifith/AIGHT.git"
links: 
  - name: "GitHub"
    url: "https://github.com/fennifith/AIGHT"
    icon: "https://github.com/favicon.ico"
  - name: "Issues"
    url: "https://github.com/fennifith/AIGHT/issues"
    icon: "/images/ic/bug.svg"
  - name: "GNU General Public License v3.0"
    url: "https://choosealicense.com/licenses/gpl-3.0/"
    icon: "/images/ic/copyright.svg"
contributors: 
  - login: "fennifith"
    avatar: "https://avatars1.githubusercontent.com/u/13000407?v=4"
    url: "https://github.com/fennifith"
  - login: "theonesean"
    avatar: "https://avatars2.githubusercontent.com/u/5413368?v=4"
    url: "https://github.com/theonesean"
languages: 
  - "D"
  - "Shell"
  - "Makefile"
isDocs: "false"
isWiki: "false"
pushed: "2019-09-11T20:45:14Z"
---

# AIGHT

AIGHT is a command-line tool for getting todo tasks quickly.

## Building

```bash
git clone https://github.com/theonesean/AIGHT.git
make && make install
```

## Configuration

The program looks for its config file in `~/.aight.conf`, `~/.config/aight.conf`, and `/etc/aight.conf`, in that order. It uses an [INI-like](https://github.com/FreeSlave/inilike) format, with each group representing a different project/task implementation (Trello, GitHub Projects, etc...).

There are two "predefined" groups that can only exist once. These should appear at the start of your file. `[settings]` refers to global settings that affect the entire program, such as the table width or separation characters. The `[defaults]` group specifies default values for all of the groups that follow it. For instance, if you are defining many Trello configurations for the same account, you may not want to repeat the API key/token each time.

```ini
[settings]
listWidth=40
borderCharHorizontal=-
borderCharVertical=|

[defaults]
trelloApiKey=a Trello API developer key
trelloApiToken=your Trello token
```

### Task Providers

Task providers are triggered based on a set of conditional attributes such as `matchDir` (to match the current working directory) or `matchRemote` (to match the upstream git URL). The first group to match the current conditions will be executed, and all others will be ignored. As an example, here is a group that will open a URL whenever `aight` is used in one of my repositories:

```ini
[exec]
matchRemote=git@github.com:theonesean/*
command=open https://youtu.be/dQw4w9WgXcQ
```

Here is a list of all implemented providers and their configuration values:

#### GitHub Issues

```ini
[github]
githubApiToken=a GitHub API token
githubRepo=the repository to fetch (optional, defaults to matched remote URL)
```

If the provider is matched by a remote URL of a GitHub repository (using `matchRemote`), the `githubRepo` value will default to its repository name if it is unset.

#### GitHub Projects

**Note:** because of various limitations, the GitHub Projects implementation is currently _very slow_. The API is also a developer preview, so it will likely change at some point in the future.

```ini
[github-projects]
githubApiToken=a GitHub API token
githubRepo=the repository to fetch (optional, defaults to matched remote URL)
githubProjectId=the project ID (optional, defaults to first project available)
```

#### Trello

See [trello.com/app-key](https://trello.com/app-key) to obtain an API key / token for this program to use.

```ini
[trello]
trelloApiKey=a Trello API developer key
trelloApiToken=your Trello token
trelloBoardId=the board to display
```

#### Shell Script

This just executes the given command.

```ini
[exec]
command=cat ./TODO.md
```

## Improvements

* Integration with GitHub Projects
* Ability to filter cards by tag / status
* Allow multiple providers to match the same repo
