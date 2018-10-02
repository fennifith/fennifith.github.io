---
layout: project
type: undefined
title: "AAH"
description: "A basic cmdline program for Linux to help me do basic things I should already know. Ex&#58; \"AAH drive mount\""
repo: TheAndroidMaster/AAH
git: git://github.com/TheAndroidMaster/AAH.git
links:
  - name: GitHub
    url: https://github.com/TheAndroidMaster/AAH
    icon: https://github.com/favicon.ico
  - name: Issues
    url: https://github.com/TheAndroidMaster/AAH/issues
    icon: /images/ic/bug.svg
  - name: MIT License
    url: https://choosealicense.com/licenses/mit/
    icon: /images/ic/copyright.svg
  - name: AAH-linux-386 (v1.0.1 stable)
    url: https://github.com/TheAndroidMaster/AAH/releases/download/v1.0.1/AAH-linux-386
    icon: /images/ic/download.svg
  - name: AAH-linux-amd64 (v1.0.1 stable)
    url: https://github.com/TheAndroidMaster/AAH/releases/download/v1.0.1/AAH-linux-amd64
    icon: /images/ic/download.svg
contributors:
  - login: TheAndroidMaster
    avatar: https://avatars1.githubusercontent.com/u/13000407?v=4
    url: https://github.com/TheAndroidMaster
  - login: codekidX
    avatar: https://avatars1.githubusercontent.com/u/3619949?v=4
    url: https://github.com/codekidX
---

AAH, or the Annoyingly Advanced Helper, is a basic command-line program to help me do basic things I should already know.

For example:

```
~$ AAH drive mount
mount: 		mkdir /mnt/disk && mount <device> /mnt/disk
~$
```

## Installation

Installation is fairly simple. You can either install from source or use the prebuilt binary. Both are fairly simple.

### Prebuilt Binary

Downloading a prebuilt binary is fairly simple. Simply choose a file from the [releases](https://github.com/TheAndroidMaster/AAH/blob/master/../../releases) page and run the commands below, replacing the information in brackets with their respective values.

```shell
wget https://github.com/TheAndroidMaster/AAH/releases/download/{version}/AAH-{platform}
mv AAH-{platform} AAH
chmod +x AAH
```

You can now run `./AAH` to check that the it works. If you would like to run the program without having to remember the directory that it is stored in, you can either add its directory to the `$PATH` environment variable or move the file to somewhere that is in your `$PATH`.

#### Moving to Somewhere in `$PATH`

```shell
sudo su
mv AAH /bin/AAH
```

Yep.

#### Adding Directory to `$PATH`

This assumes that you have downloaded the binary to a folder titled `~/bin`. Feel free to change the directory as you wish.

Add the following line to the bottom of `~/.bashrc`:

```shell
export PATH="$PATH:~/bin"
```

Then run `source ~/.bashrc`. Finally, run `AAH` to check that it works.

### Source

#### Prerequisites

- [git](https://git-scm.org/downloads)
- [go](https://golang.org/dl/)

#### Setup

If you have `go` set up already, you can skip this. It is basically just a simplified version of the instructions on golang's website.

Follow the link above for instructions to download and install the go binary. After installing go, you can either keep following these instructions or follow the installation instructions linked on the download page. Either way, you will end up with a similar result.

Next, you will want to create a "workspace" for your go projects. In this instructions, I will be creating the workspace at `~/go`, but feel free to change this directory to your liking.

```shell
mkdir go && cd go
mkdir {bin,src,pkg}
```

Now that go's fancy "workspace" directory has been created, it needs to be added as an environment variable. Go ahead and add the following to the end of `~/.bashrc`...

```shell
export GOPATH="/home/<you sir>/go"
export PATH="$PATH:$GOPATH/bin"
```

After saving the file, run `source ~/.bashrc` and you're good to go.

#### Installing

This bit is fairly simple.

```shell
go get github.com/TheAndroidMaster/AAH
cd ~/go/src/github.com/TheAndroidMaster/AAH
go get && go build && go install
```

After this, you can try running `AAH` to check that it has installed properly.

## Configuration

Configuration is fairly basic. The program will use the [`aahelp.yaml`](https://github.com/TheAndroidMaster/AAH/blob/master/./aahelp.yaml) file in the repository by default. You can override the values in this file or add your own by creating another located at `~/.aahelp.yaml`.

The file uses basic YAML syntax (which can be easily learnt by just taking a glance at the default file in the repository), though it should be noted that there is no support for arrays as they do not make much sense in this context.

The program takes any number of arguments, allowing you to create as many nested maps as you would like and type either some or all of the keys as arguments when running the command to access their values.

For example, with the following file:

```yaml
thing:
    something:
        yes:
            stuff: this is a thing
```

You could type `AAH thing something yes stuff` to get the value `this is a thing`. Alternatively, you could just type `AAH thing something yes` to get a list of everything below the key `yes` in the YAML hierarchy. And if you are very lazy, you can even shorten some of the names provided they are still differentiable from the other keys, ex: `AAH th some y`.

## Contributing

See this project's [CONTRIBUTING.md](https://github.com/TheAndroidMaster/AAH/blob/master/./.github/CONTRIBUTING.md) for instructions on how to contribute to this project.
