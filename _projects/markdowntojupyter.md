---
layout: project
type: nodejs
title: "Markdown To Jupyter"
description: "NodeJS script to execute & convert code blocks in markdown files to a JupyterLab Notebook."
repo: TheAndroidMaster/MarkdownToJupyter
git: git://github.com/TheAndroidMaster/MarkdownToJupyter.git
links:
  - name: GitHub
    url: https://github.com/TheAndroidMaster/MarkdownToJupyter
    icon: https://github.com/favicon.ico
  - name: Issues
    url: https://github.com/TheAndroidMaster/MarkdownToJupyter/issues
    icon: /images/ic/bug.svg
  - name: MIT License
    url: https://choosealicense.com/licenses/mit/
    icon: /images/ic/copyright.svg
  - name: npm
    url: https://www.npmjs.com/package/mtjc
    icon: https://www.npmjs.com/favicon.ico
contributors:
  - login: TheAndroidMaster
    avatar: https://avatars1.githubusercontent.com/u/13000407?v=4
    url: https://github.com/TheAndroidMaster
isDocs: false
isWiki: false
languages:
  - JavaScript
  - Jupyter Notebook
---

The Markdown to Jupyter Conversion tool (MTJC) is a fairly simple script that converts a markdown file with code blocks to the JSON format used by [Jupyter](https://jupyter.org/) to create [Notebooks](https://jupyter-notebook.readthedocs.io/en/stable/).

MTJC separates the provided markdown file into "cells", looking for headers and code blocks to split the content at. Each header and any following text, list, or whatever will be placed in the same block until either another header or a code block ("```") is encountered.

When a code block is encountered, it writes the code to a file in .temp (relative to the folder it is run in), passes it to the relevant program to run, and stores the result.

For demonstration purposes, here is a sample [markdown file](./test-python.md) and the [notebook](./test-python.ipynb) output from the program as a result.

## Limitations

- Currently, this script can only process Python. I plan to change this, but as I have no use for any of the other possible languages myself, it is not high on my agenda.
- This script assumes that all output from a Python script will be sent to stdout. It is not currently capable of processing image data such as the charts and graphs that Jupyter Notebooks are capable of displaying.
- Code blocks are run individually. A variable set in one will not carry over to another. See issue [#3](https://jfenn.me/redirects/?t=github&d=MarkdownToJupyter/issues/3) for progress.

## Installation

Assuming that you have already installed [npm](https://www.npmjs.com/), in the command line, type either one of the following:

### NPM

```bash
npm install -g mtjc
```

### From Source

```bash
git clone https://github.com/TheAndroidMaster/MarkdownToJupyter
cd MarkdownToJupyter
npm install
```

## Usage

```
mtjc <file.md>
```

Or, to specify a path for the output file...

```
mtjc <file.md> <output.ipynb>
```
