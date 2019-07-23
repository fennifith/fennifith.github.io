---
layout: blog
title: "Distributed Social Networks"
description: "Explaining what the fediverse is, how to join it, and why."
date: "2019-07-21"
links:
  - name: "Fediverse.Party"
    url: "https://fediverse.party/en/fediverse/"
  - name: "Wikipedia: Fediverse"
    url: "https://en.wikipedia.org/wiki/Fediverse"
tags:
  - meta
categories:
  - blog
---

The Fediverse is best explained as an interconnected web of services that
communicate with each other with a shared protocol. Imagine that you had an
account on one social website from which you could send, receive, and reply to
posts from people that use different websites with a different interface and
behavior. This is a vague explanation of how federation works that skips over a
lot of the technical details, but think of replying to a blog post from your
Instagram account, or seeing your friends Instagram posts in your Twitter feed.

This interoperability of common actions such as "likes", "replies", and
"follows" is what unifies the majority of federated networks; nobody loses
access to friends or connections because they use a different website. The
communication protocols used by these servers implement
[open standards](https://en.wikipedia.org/wiki/Open_standard), which means that
they can be freely adopted, implemented, and extended by everyone. In effect,
anyone can create and own a fediverse server with the ability to interact with
any other server using this protocol.

## Technicalities

Because of the "open" nature of the fediverse, nearly all networks are developed
by a community of people independent from any corporation or official
institution. Most software related to the fediverse is open source, so anyone
can participate in their growth and development. What is important to note,
though, is that the fediverse isn't one singular thing. It consists of a huge
amount of different projects, groups, discussions, and ideas.

### Servers, Networks, Protocols

Fediverse servers are the smallest part of the fediverse, and what you'll see
the most of. Because the majority of the fediverse is open source, anyone can
create their own server by just choosing a domain and paying for hosting. Some
people create servers publicly available for anyone to use, others only allow
access for a small group, and some individuals have one just for themselves. For
a short list of some of the public servers you can join, jump to the bottom of
this page.

Most federated servers can be categorized by the software, or "network", that
they use. While they all accomplish the same goal of _being a social network_,
there are many different interfaces or implementations of the federated
protocols that people have written. Some of the more popular examples include
[Mastodon](https://joinmastodon.org/), [Pleroma](https://pleroma.social/),
[Friendica](https://friendi.ca/), [Pixelfed](https://pixelfed.org/), and
[Socialhome](https://socialhome.network/). To clarify, while I use "network"
here to refer to the software behind it, a network can also mean "a combination
of servers that can communicate with each other" in a more general sense. I will
try to make it obvious when I switch between these two meanings, but I apologise
in advance for any confusion due to my misuse of the term.

Protocols are the communication standards that these federated networks can use
to communicate with themselves. The dominant protocol is currently
[ActivityPub](https://activitypub.rocks/), but
[OStatus](https://www.w3.org/community/ostatus/) and
[DFRN](https://github.com/friendica/friendica/wiki/Protocol) exist as well.
To provide features that aren't a part of the protocol, certain networks can
deviate from the protocol(s) they support to provide endpoints and functionality
that other software won't know how to use. For example, one fictional project
called "Hands" could provide a "poke" button to send useless notifications to
people. As far as I know, the ActivityPub protocol doesn't specify a "poke"
button, so users would only be able to poke people on the "Hands" network
(someone on a Mastodon server would be out of reach).

### Distributed v.s. Decentralized

![A diagram illustrating the differences between a decentralized and distributed network.](/images/blogs/Centralised-decentralised-distributed.png)
_Image: [https://commons.wikimedia.org/wiki/File:Decentralization_diagram.svg](https://commons.wikimedia.org/wiki/File:Decentralization_diagram.svg)_

One notable point about the fediverse's construction is that it does not 

## Implications on Privacy

### GDPR Legitimacy

### Data Mining

## Deplatforming, Moderation, and Social Echo Chambers

Because fediverse instances are managed individually, moderation is largely left
to the owner of the server you're using. When you use someone's network, the
owner is granting you access to share your thoughts on their network - it isn't
an inherent right, and it can be taken away. However, this largely depends on
the views of the owner, and most will try to contact users to come to an
agreement before enforcing an outright ban.

[XKCD: #1357](https://xkcd.com/1357/)

This is a very political topic, perhaps the most opinionated that my blog will
get (I try to restrict this to technical content), but arguments for free speech
are generally not arguing for free speech. They're arguing to restrict the power
of people who own social instances to control the content that their network
shares and promotes. When you join a fediverse instance - or rather, any social
network - you submit yourself to the judgement of its owner for whose content
you can see and which instances you can interact with. It's okay for people to
share their opinions, but it's also well within the right of social instances to
refuse to accept them. Disallowing this would mean creating a social network
without a "block" button - it would mean creating a law to prevent people from
covering their ears while you scream about conspiracy theories over corn
subsidies.

> FLOSS levels the “free speech” playing field because the code - speech - can
> be modified and redistributed freely with no special benefits or harms for the
> originating developer nor for the forking developer. In this context, the
> cries of “violating free speech” are laughably lazy; an unhappy user can fork
> it and have their speech - code - compete fairly. It isn’t censorship of the
> user, because once more the user - who has developer-like capabilities in the
> FLOSS world - can fork and compete on a level playing field.
>
> \- @cj@mastodon.technology, [cjslep.com](https://cjslep.com/c/blog/on-tusky-rickrolling)

This point is relevant because of issues that much of the fediverse community
had with [Gab](https://gab.ai/) creating their own Mastodon instance and
beginning to federate with other servers. I won't go over all of the
controversy, but the gist is that many Mastodon instances and other developers
refused to federate with Gab because of their political association, sparking
massive backlash from Gab's community complaining that Mastodon was
["Deplatforming"](https://en.wikipedia.org/wiki/Deplatforming) them and
"infringing on their right to free speech". Most of these arguments were based
on the idea that the Mastodon project
[shouldn't be allowed to assert their political standing](https://blog.joinmastodon.org/2019/07/statement-on-gabs-fork-of-mastodon/),
and that social networks are some kind of public-domain service that everyone
deserves an equal share in. To people that think this, I respond: your right to
free speech is not a right to free audience. You decide what comes out of your
mouth, and I decide whether or not I have to listen to it. Being banned from one
social network doesn't duct tape your mouth shut, won't prevent you from using
the internet, and certainly isn't a human rights violation. But I digress...

### Interests, not Opinions

The problems that many users of the fediverse have with networks like Gab is
that they exist as an embodiment of political ideology, attracting "far-right
and alt-right users who have been banned from other social networks" 
([Wikipedia](https://en.wikipedia.org/wiki/Gab_(social_network))). Many critics
of Gab and similar websites have expressed concerns that it can create a social
["echo chamber"](https://en.wikipedia.org/wiki/Echo_chamber_(media)) effect -
allowing for advocates of extremist views to congregate without the threat of
censorship - which cannot easily be breached by those with other views.

The best thing I can take away from this is that networks which are inherently
centered on a specific viewpoint of a political issue will often only propogate
that idea, often creating an unhealthy environment for actual conversation about
it. Many of the more successful social instances on the fediverse are based on
vague topics or interests, but not details concerning them. For example:

- [Digital Preservation (digipres.club)](https://patchbay.tech/2018/02/22/mastodon-and-the-digipres-club/)
- [Web Development and Caffeine (toot.cafe)](https://toot.cafe/about/more)
- [Artwork (mastodon.art)](https://mastodon.art/about/more)
- [Cyberpunk Aesthetic (cybre.space)](https://cybre.space/about)
- [PHP Programming (phpc.social)](https://phpc.social/)

### Broken Federation is Okay

One of the reasons that some people argue against federated social networks is
that this federation can be broken by instance-level blocks like those which
many Mastodon communities created to prevent Gab from federating with them. An
issue that John Henry
[points out](https://hackernoon.com/mastodon-is-dead-in-the-water-888c10e8abb1)
is that the federated model implicitly couples moderation with identity. If
another network is deemed inappropriate by your federated instance, then no
interactions with users on that network will be visible to you unless you
specifically follow them.

However, as Robert Sharp explains, this problem doesn't have to be as big as it
seems.

> In the case of Mastodon, the limits of the federation model might be a
> strength. A semi-permeable social network, which restricts access to certain
> instances, might be perfect for children and schools, for example. And of
> course there will be iterations to the software that improve on the current
> solution and perhaps give more control to individual users.
>
> \- Robert Sharp, [robertsharp.co.uk](https://www.robertsharp.co.uk/2017/04/06/free-speech-identity-and-mastodon/)

Yes, if you join a social network, you're subject to the views and judgement of
its owner - but that's nothing new. Twitter, YouTube, and almost all social
websites in existence all have their own terms of use and moderation teams that
review what you say. Nobody should be in charge of moderating their own posts,
and treating all people differently in a federated model would create far too
much work for the network's moderators. A fully distributed social network is
unrelealistic, and centralized networks give too much trust to a single party;
decentralization is a compromise, not an ideal.

## The Actual Thing

### A Couple Networks

### Servers to Join

### Local Slang
