---
layout: project
type: nodejs
title: "Passerator"
description: "A simple password generator made in my free time. It's probably safe to use. I think."
repo: TheAndroidMaster/Passerator
git: git://github.com/TheAndroidMaster/Passerator.git
links:
  - name: GitHub
    url: https://github.com/TheAndroidMaster/Passerator
    icon: https://github.com/favicon.ico
  - name: Issues
    url: https://github.com/TheAndroidMaster/Passerator/issues
    icon: /images/ic/bug.svg
  - name: Apache License 2.0
    url: https://choosealicense.com/licenses/apache-2.0/
    icon: /images/ic/copyright.svg
  - name: npm
    url: https://npmjs.com/package/passerator
    icon: https://npmjs.com/favicon.ico
contributors:
  - login: TheAndroidMaster
    avatar: https://avatars1.githubusercontent.com/u/13000407?v=4
    url: https://github.com/TheAndroidMaster
---

Passerator is simple password generator that I made in my free time. To be perfectly clear, I do not reccomend its use at all. If someone gets their hands on your password and they know that you use this program, it would be entirely possible for them to reverse engineer it to brute force their way into your other accounts much faster than they would under normal conditions. That said, it would still take a lot of effort to replicate the "master file" used by this program to generate passwords, and you can customize the keys used to generate passwords to further increase the difficulty of replicating them (for example, generating all of you passwords using "https://example.com/?somethingconfusing" as the key instead of just "https://example.com").

## Installation

Assuming that you have already installed [npm](https://www.npmjs.com/), in the command line, type either one of the following:

### NPM

```bash
npm install -g passerator
```

### From Source

```bash
git clone https://github.com/TheAndroidMaster/Passerator
cd Passerator
npm install
```

## Usage

```
passerator <key>
```

### The Master File

On passerator's first run, it will ask if you want to generate a "master file" and how many lines you want it to be. This file, along with the key and password you give the program, is one of the things that passerator bases its "random" generation on. If you copy the file to another computer, or run the program more than once, passerator will generate the same string for any combination of key and password you input.

You can generate a new file whenever you want by running `passerator --regen .`, and unless you happen to have it backed up you will be nearly incapable of recovering any passwords that you have previously generated with the tool.

The "master file" is stored in `~/.config/passerator/master.gen`.

### Generating A Password

When you generate a password, by default, passerator will copy it to your clipboard and then delete it after 30 seconds provided that you don't kill it before then. You can change the duration of this interval by passing the argument `--time [seconds]` along with the amount of seconds. Or, you can just tell passerator to print the resulting string in the console using the `--output` argument.

### Other Stuff

I'm too lazy to write any specific documentation about all the other things that you can do with the program, so here's a copy-paste of the output of `passerator --help`:

```
  Usage: passerator [options] <key>

  Options:

    -V, --version             output the version number
    -l --length [characters]  How many characters long the password should be (default: 20)
    -s --specialchars         Don't use special characters in the resulting string.
    -n --numchars             Don't use numbers in the resulting string.'
    -c --chars                Don't use regular characters from the resulting string.
    -o --output               Output the password string in the console instead of copying it to the clipboard.
    -t --time [seconds]       The amount of time (in seconds) to wait before overwriting the clipboard data with rick astley lyrics.
    --customchars [string]    A custom set of characters to use.
    --regen                   Re-generate the master file. YOU WILL LOSE ALL OF YOUR PASSWORDS IF YOU DO THIS.
    -h, --help                output usage information

  Examples:

    $ passerator https://example.com/
    $ passerator --output https://example.com/
    $ passerator --regen .

```
