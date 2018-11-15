---
layout: project
type: undefined
title: "wyager/MicroMechBoard"
description: "An attempt at making an affordable, DIY scientific calculator that offers better performance and more productivity than the current standard."
repo: fennifith/Raspi-Calcuberry
git: git://github.com/fennifith/Raspi-Calcuberry.git
links:
  - name: GitHub
    url: https://github.com/fennifith/Raspi-Calcuberry
    icon: https://github.com/favicon.ico
  - name: Issues
    url: https://github.com/fennifith/Raspi-Calcuberry/issues
    icon: /images/ic/bug.svg
contributors:
  - login: wyager
    avatar: https://avatars0.githubusercontent.com/u/780134?v=4
    url: https://github.com/wyager
  - login: CaitSith2
    avatar: https://avatars0.githubusercontent.com/u/79097?v=4
    url: https://github.com/CaitSith2
  - login: spatil47
    avatar: https://avatars3.githubusercontent.com/u/8443096?v=4
    url: https://github.com/spatil47
  - login: fennifith
    avatar: https://avatars1.githubusercontent.com/u/13000407?v=4
    url: https://github.com/fennifith
isDocs: false
isWiki: false
languages:
  - C
  - C++
  - Makefile
pushed: 2018-02-13T14:52:50Z
---

# The Scientific Raspbian Calcuberry Pi

This project is an attempt at making an affordable, DIY scientific calculator that
offers better performance and results in more productivity than the (IMO) overpriced
TI calculators that many students are forced to use.

The main components of this repository are listed below:

## Parts (incomplete)

- Raspberry Pi model B
- 2.8" 320x240 touchscreen display
- 10,000 mAh battery
- Keyboard PCB
- Kailh Burnt Orange box switches
- PBT key caps
- Teensy 2.0 microcontroller
- 3 150 Ohm resistors
- 2 5000 Ohm resistors
- screws/threaded cylinders
- 2 small USB -> micro cables
- 1 nice toggle switch

## Assembly

This project has not been completed yet, and parts of it are still being designed, but the
assembly will mainly consist of screws, threaded cylinders, and a somewhat complex 3d printed
case with a sliding panel for "maintenance".

## Keyboard

### Design

The keyboard for this project is based on [Will Yager's custom mechanical keyboard](https://github.com/wyager/MicroMechBoard)
project ([blog post](http://yager.io/keyboard/keyboard.html)) for a full split keyboard with
two halves. We will only use one half per calculator, which is close to the ideal size for a scientific
calculator.

### Firmware

Incomplete, but will be made for a Teensy 2.0, the same as the original project by Will Yager.

### Key Bindings

As stated, the project is not complete, so these plans may change. A regular scientific calculator
has 50 keys, however this one will have 33, so we will need to make a few compromises. The "2nd",
"Alpha", and "Power" keys will be mapped to the three backlit keys on the keyboard and will light up
when active, however the "power" button will actually put the device to sleep (and light up when in
sleep mode - there will be a physical switch to turn it completely off and on). To save room, the
letter keys will still be accessible in alpha mode, but will consist of a T9 layout on the number
keys, not across the entire board like is common for most TI-86 calculators.

## Software

As of now, I am not sure what software I plan on using, but I will attempt to make the keyboard
settings work universally - and not for any specific piece of software - as much as possible
(for example, the sin/cos/tan buttons will print out the characters "sin(", but not the end
parentheses, as some software will insert them automatically.
