---
layout: post
title: "Open Source Software"
description: "Explaining what the fediverse is, how to join it, and why."
date: "2019-07-21"
links:
  - name: "Open Source Initiative"
    url: "https://opensource.org/"
  - name: "Open Source Guides"
    url: "https://opensource.guide/"
  - name: "Choose A License"
    url: "https://choosealicense.com/"
  - name: "Reproducible Builds"
    url: "https://reproducible-builds.org/"
  - name: "Public Code"
    url: "https://publiccode.eu/"
tags:
  - meta
categories:
  - blog
---

Today, the end users of most software don't see the direct effects of open
source, no matter how much they're influenced by it. Open source is
everywhere - I mean literally, almost every major consumer technology has some
kind of open source involvement, whether it's advertised or not. However, some
people still don't quite understand it. What does "open" mean, anyway? Aren't
they just giving this stuff away? What do they gain from it?

> It just doesn't make sense in a capitalist society. Code is a thing - you pay
> people, and you get it in return. It costs a lot of money; software teams are
> expensive. Thus, code should be kept a secret. There's no way that you'd give
> it away for free, right?

Well, if you think that, then why do we have public libraries? Why are public
schools funded by the government? Why do collegiate researchers share their work
during peer reviews? Why do companies sponsor free workshops and events for
people to learn and experience their technology? This doesn't yield profit. It's
practically giving away free "business secrets" that could benefit a competitor!

The reason for this is simple: in a capitalist society, competition is good. It
might not be good for a prominent business worried about losing its place, but
it pushes companies to drive down prices and push up value, preventing a
monopoly and benefitting the consumer.

## Free vs. Libre

One common misconception of open source software is that it has to be "free"
(able to be used at no cost). While this is true for some varieties of open
source, the most basic requirement for open source code is only that it is made
available to the user; this doesn't mean that they can automatically use your
service without paying. A lot of modern software presents their product to users
_as a service_ - for example, most video streaming platforms provide their
technology to users at a monthly cost. However, a streaming service's software
is practically useless to a customer if they don't have access to the videos
hosted by them. The software isn't the product that is being sold to users; the
videos are. To exemplify this point, the video streaming platform Netflix
actually maintains a great deal of [open source technology](https://netflix.github.io/)
that they use in their products - though the Netflix app itself is not open
source.

A handful of other companies that invest in similar practices are:
- [Square](https://square.github.io/) (the payment processor)
- [Google](https://opensource.google.com/)
- [Adobe](https://github.com/adobe)
- [Cloudflare](https://github.com/cloudflare)
- [Twitter](https://twitter.github.io/)
- [Canonical](https://canonical.com/products) (the company behind Ubuntu)
- [Facebook](https://opensource.facebook.com/)

So, in theory and in practice, these companies can and have provided their
critical source code to users without losing any profitable advantage - allowing
anyone to publicly contribute to their development and change the way that they
use their service. That said, there are still a multitude of reasons that many
other companies likely avoid this, including:

### 1. Open Source takes effort.

No no, I'm serious. Employees would need training on the difference types of
open source licenses, how to maintain their public documentation, and interact
with people contributing to their work outside of the company. While most
companies would likely benefit more from this process than the time it takes,
this requires dedication and trust in your customers to not abuse the system.
There is no _absolute guarantee_ that any positive result would come from such
an action, so most traditional management would probably be hesitant to approve
it.

### 2. Enforcing copyright is harder than preventing it.

Companies are usually held accountable for their actions; they're required to
abide by licenses and legal constraints, and try to limit their liability as
much as possible. Individuals, on the other hand, aren't always limited to such
constraints. In today's world, people can operate anonymously, creating services
and repositories that illegally infringe copyright and harm businesses with no
simple way of tracking them down.

### 3. Sometimes people's code isn't actually secure.

People are human, and humans often make mistakes (I know from personal
experience - I myself have made many). Most companies are scared of mistakes,
though, as they can harm their reputation. If someone finds a mistake in their
software, then obviously they aren't doing their jobs right.

This is backwards thinking. If someone doesn't find a vulnerability, it's still
there, it just hasn't been found by anyone that would want to publicize it.
Malicious parties abusing the functionality wouldn't want anyone to know - and
would probably be extremely happy to find that others agree with their opinions.

## Security by Obscurity

Recently, one of the major arguments against open source code - or technical
knowledge in general - has been that a lack of information about certain
technologies will somehow make them more secure.

As many cybersecurity experts have stressed, if your code becomes insecure by
simply sharing knowledge about it, then it
_probably wasn't secure in the first place_. Many large institutions and
companies have
[presented their views against this](https://www.nytimes.com/2019/04/06/opinion/sunday/right-to-repair-elizabeth-warren-antitrust.html),
and I would urge anyone supporting them to consider the alternate motives that a
profitable company might have for spreading this message. Many open source
advocates fear that companies could be using security as an excuse to prevent
the spread of technical knowledge about their services and reduce the ability
for people to discover alternatives or create competition.

An interesting reference is
[YouTube's ban on "instructional hacking videos"](https://www.theregister.co.uk/2019/07/03/youtube_bans_hacking_videos/)
and the community's response to some of the affected content being removed. In
short, my belief is that hiding instructional content will not "fix the
internet" or prevent the existence of malware. Any malicious actors looking for
information will just find it elsewhere. What it _will_ do is prevent people
from learning about security, discovering potential flaws, and having the
ability to prevent them.

Throw away that "never been hacked" medallion; it doesn't mean anything.
Instead, create a policy of transparency and let people tell you what's wrong
with your product - before someone else doesn't. Many reputable companies have
begun providing "bug bounties" to security researchers that discover problems in
their apps, which incentivizes people to find and report issues before they can
be abused.

## Right to Repair

I've already explained my support of
[the Right to Repair movement](https://jfenn.me/papers/2019-04-14-Right-to-Repair/),
but I'll go over how the same principles can relate to software.

As humans, we have specific needs that no utopian model can satisfy. Our
individuality, the differences in our goals in life and view of the world, is
what makes us human. That is why there is such a big argument for Open
Source - not just for practicality, but it seems correct on a fundamental level.

No person that uses a piece of software should be told that it cannot be
changed. No piece of software can satisfy all of its possible uses. It can be
designed to meet as many as possible - which many companies have put a vast
amount of effort into doing - but nothing will ever be perfect. Perfection is
subjective; it depends on the view of the person, and how they think things
should be. Software can be designed to anticipate most of their users' needs,
but computers aren't all-knowing, and they can't read people's minds (well, most
of them can't, anyway).

Back in the "good old days" when computers were just becoming available to the
everyday consumer, software used to be sold as a piece of
information - customers were given the same source code used to develop the
tool; packaging and selling software binaries for specific systems was not yet
feasible, as every computer could have a different use or implementation for it.
People using the software would write small additions to it and send them to
others in the form of "patches" - files that can be used to modify the source
code of a program, but don't contain a copy of it. Users would change the
software they bought to do things they liked, such as including a timestamp in
the email signature, or drawing fancy colors on the screen.

With the presence of digital rights management (DRM) in today's software, this
is no longer possible. Companies want to ensure that their software does only
what it was written for to prevent misuse or confusion. Executables are signed
and verified, code is obfuscated, and documentation is placed somewhere out of
reach.

## Writing the Future

Programming isn't what it used to be. Sometimes open source doesn't work with a
sustainable business model, but that shouldn't mean the end users have to
suffer. Open source communities still thrive, and
[people are making good use of them](https://opensource.guide/).

On the topic of security, [Reproducible Builds](https://reproducible-builds.org/)
is a project trying to ensure that critical software can be verified and
recreated to prevent malicious attacks and promote openness and transparency.

Many open source advocates are petitioning the European Union to implement a
practice of [open-sourcing their code](https://publiccode.eu/)
so that people can learn and take advantage of it as a resource - and help
ensure that it remains secure. Hopefully, if the project is acknowledged, more
government entities will follow suit.
