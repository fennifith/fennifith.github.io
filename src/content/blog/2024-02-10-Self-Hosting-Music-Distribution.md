---
title: "Self-Hosting Music Distribution"
description: "Considering alternatives to modern music distribution with small platforms and self-hosted sites!"
links: []
tags: blog
---

Recently, I've become interested in a number of projects seeking to create an alternative to modern music distribution and streaming platforms. I'm using [Faircamp](https://simonrepp.com/faircamp/) to generate [my own music site](https://music.jfenn.me), and there are plenty more about: [mirlo.space](https://mirlo.space), [jam.coop](https://jam.coop), [patrontape](https://patrontape.com), [Ampwall](https://ampwall.com), [minm](https://minm.co/about), [resonate.coop](https://resonate.coop), to name a few.

While most options on this list are centralized platforms, Faircamp is notably unique - as a static site generator that musicians are meant to host for themselves.

This approach presents a number of benefits! Being able to literally own and edit your entire platform as a musician is understandably considered a huge advantage by many of its users.

Considering recent developments such as [Bandcamp getting acquired by Songtradr and laying off half its staff](https://www.theguardian.com/music/2023/oct/17/bandcamp-lays-off-half-its-staff-after-buyout-by-songtradr) and [Spotify enforcing a minimum threshold before artists can earn royalties](https://www.theverge.com/2023/10/25/23932312/spotify-royalties-swift-deezer-universal-white-noise), it makes sense why this would be important to a lot of people - especially smaller creators.

However, both self-hosted music distribution and these new smaller platforms have a number of challenges compared to large streaming services:

- **Ease of use:** Musicians who are not tech-savvy will have a harder time using faircamp or configuring their own hosting.

- **Discoverability:** These sites need manual exposure for anyone to find them - there is no "recommendation algorithm" for independently hosted music.

- **Social interaction:** As a listener - creating playlists, leaving reviews, and interacting with other social features are important parts of larger streaming platforms that are either not present or not portable between sites.

- **Unlimited streaming:** Many listeners find the streaming subscription model invaluable for the convenience of not having to download their entire music library, and being able to seamlessly switch devices on the go.

- **Paywalls:** Faircamp does not currently support hard paywalls, likely because of limitations from being a static site.

In the remainder of this post, I'm hoping to present or possible future solutions to these issues, and some ideas that I've assembled about them.

## Ease of use

> Musicians who are not tech-savvy will have a harder time using faircamp or configuring their own hosting.

At present, most of the faircamp users I can find are also some form of software developer or otherwise tech-savvy individal. This is encouraged by the fact that faircamp itself [is a command-line tool](https://simonrepp.com/faircamp/manual/).

For the majority of musicians that _don't_ work with complex software as their daily job, the process of setting up their site - writing ".eno" configuration files, finding a hosting provider, setting up their own domain / DNS records, and so on - could be quite overwhelming.

While it might seem appealing for self-hosting to be the ideal solution, it still remains a luxury option for those with enough time and technical knowledge to configure all of the pieces involved.

### Rainfall.dev

Travis Briggs ([@audiodude@sfba.social](https://sfba.social/@audiodude)) has developed a pretty awesome solution to this: [rainfall.dev](https://rainfall.dev) - a frontend UI for faircamp!

Rainfall allows users to upload their music files and edit details through a website, which then sends their input to a server to generate a faircamp site. Travis also has plans to integrate with [Netlify](https://www.netlify.com) to provide a one-click deployment with their hosting service.

This is a huge advantage for artists that can't use the faircamp CLI! While it doesn't support every available config option in faircamp (yet), it still provides the same functionality and makes it very easy to use.

### Community platforms

As these individual sites scale, though, they could face a variety of other challenges - including bandwidth limitations and certain legal requirements that the majority of artists are just not equipped to handle.

At the same time, the centralized platforms present different issues - stability and longevity being a key concern - and the site itself needs some way to offset the costs of its maintenance, moderation, and labor.

Aside from constructing one centralized platform or requiring many self-hosted sites, it occurs to me that facilitating medium-sized community sites might be a better solution. Your local artist group or music label could maintain their own platform, dedicating one person with the technical know-how to run the site, and allow less technical artists to upload their work without being concerned with the administrative details.

In addition, supporting a smaller group of artists reduces the need that larger platforms would have for moderation - since you can establish more trust that members won't violate your rules or otherwise place the site at risk.

## Discoverability

> These sites need manual exposure for anyone to find them - there is no "recommendation algorithm" for independently hosted music.

From a listener's perspective, coming across new music on these self-hosted sites requires a lot of intentional exposure and interaction. You need to literally find music being written about in a blog post or shared on social media and then make a choice to listen to it. There is no "autoplay" or "home feed" equivalent to surface new music you might like.

### Radio Free Fedi

As much as this is a clear downside, it has also led to some benefits for artists that have embraced the idea of more "organic" discovery. [Radio Free Fedi](https://radiofreefedi.net) (RFF) is one example of this - a community radio that plays tracks submitted from independent musicians with the aim of surfacing and promoting their work.

According to the site's maintainer, despite the immense amount of work that goes into curation and maintenance, it has allowed for a healthier, less competitive, and more supportive social experience for artists.

<iframe src="https://musician.social/@radiofreefedi/111853482016407179/embed" class="mastodon-embed" style="max-width: 100%; border: 0" width="400" height="515" allowfullscreen="allowfullscreen"></iframe>

RFF currently has a [fundraiser to maintain their services through 2024](https://blog.radiofreefedi.net/rff-2024-staff-and-focus-fund).

### Faircamp Webring

Likewise, a few artists using faircamp have set up various community-sharing tools to make everyone's sites easier to browse. [@keefmarshall@mastodon.online](https://mastodon.online/@keefmarshall) created a [Faircamp Webring](https://faircamp.webr.ing), which can be browsed using the "previous" and "next" links on any participating site.

[@yonder@spacey.space](https://spacey.space/@yonder) also has a [feed aggregator](https://reverb10000.com/aggregator.html) that shows the latest releases from a bunch of musicians!

While not directly related, there's also [Fedivision](https://fedivision.party) - which is an annual contest for musicians on the fediverse.

One of the reasons I highlight these projects is because they all represent intentional collaboration between artists - not just an automated "upload" button with no interaction. This both requires and facilitates networking between artists in a way that larger streaming sites and music distributors have not been able to fulfill.

## Unlimited streaming

> As a listener - creating playlists, leaving reviews, and interacting with other social features are important parts of larger streaming platforms that are either not present or not portable between sites.
>
> Additionally, many listeners find the streaming subscription model invaluable for the convenience of not having to download their entire music library, and being able to seamlessly switch devices on the go.

While it is enticing for users, providing unlimited streaming on a self-hosted site at the scale of Spotify or Soundcloud is not remotely profitable for artists - who now handle their own hosting and bandwidth costs on top of everything else.

Some hosting providers have enticing low-cost plans for small/indie sites, but these have their limits: as of Feb. 2024, both [Vercel](https://vercel.com/pricing) and [Netlify](https://www.netlify.com/pricing/) have a 100GB bandwidth limit on their free plans. This (from a very rough estimate) limits you to around 2000 total streaming hours until your site stops working. For *one-time downloads* this could be more than enough, but on-demand streaming could easily exceed that!

Considering the costs of hosting, cloud storage, and content delivery services needed for a larger site - without seeing reliable continued revenue, this would not be sustainable at scale.

Another part of the issue is that - even if individual sites were able to implement a subscription model - it would not provide sufficient value to its users without encompassing a significant portion of the media they want to consume. It's a lot easier for users to think of a single subscription as their part in giving all artists a fair deal - without having to consider the specifics of who and what they're paying. Needing to break out of that for specific artists that aren't on their platform would be missing the point.

Overall, I can see that some form of aggregated streaming service could make these sites a lot easier to use. However, I'm less convinced that "ease of use" is even the best measurement here - even if it's less streamlined, users might *prefer* the intentional decision to support an artist over the immediate mass consumption pushed by other platforms.

This is a significant part of Bandcamp's design, which directs its users to *download* the tracks they purchase - while they do support streaming and playlists from their app, it clearly isn't an integral part of the platform.

## Paywalls

> Faircamp does not currently support hard paywalls, likely because of limitations from being a static site.
>
> Doing so would require integration with a payment processor, and keeping track of each purchase would involve authentication - which is not ideal if every artist site is its own platform.

This will be a short section - because the majority of opinions I've read from artists is that they *don't really mind* if someone doesn't pay for their music. In fact, many see the lack of a hard paywall as a feature!

These creators do not want their work locked behind a paywall to be exclusively available to those who can afford it - rather, they share the belief that people in financial hardship *also* deserve the enjoyment of art.

I have occasionally seen some strong opposition to these takes - and I think it should inevitably be up to the artist how to distribute their own work; that's the point of self-hosting in the first place! However, when it presents a significant technical hurdle to develop, and the desire for it from artists is unclear, I think it's okay that some projects are built without hard paywalls in mind. There are other options that can do this better - such as the massive amount of e-commerce site builders available!

Of note, Bandcamp also doesn't provide a full solution to this - as seen in their help center: ["I heard you can steal music on Bandcamp"](https://get.bandcamp.help/hc/en-us/articles/360007902173-I-heard-you-can-steal-music-on-Bandcamp-What-are-you-doing-about-this).

## Conclusion

Throughout this post, I've touched on the idea that multiple interoperable community platforms could be a promising solution.

I think that finding a method of interacting between sites and aggregating content is an important next step - which could allow for further development of unique platforms without inhibiting their growth. RSS feeds are a great start here, but don't have a good way to provide more specific information about a release.

For one specific example - it might be worth considering the use of [JSON Linked Data](https://json-ld.org) (JSON-LD), such as the schema.org [MusicRecording](https://schema.org/MusicRecording) type, to provide metadata and possibly even audio URLs for an artist's content. Notably, Google Search encourages [providing structured data in HTML markup](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data) - so this is an established approach.

I also think it's important to consider *data portability* between these platforms as they develop. Mastodon is one of the only significant social platforms I can think of to feature both a full account export and import tool - which could make it a lot easier for artists to try out and switch between the different options. ID3 and Vorbis comment metadata is a great way to start, but have similar difficulties with more specific information such as release descriptions or collaborating artists.

To provide some context for all this rambling: I'm at the very beginnings of starting my own addition to these self-hosting options - [audiopage](https://gitlab.com/audiopage)! I'm expecting its first version to be very similar to rainfall.dev, although I'll be taking a different approach from faircamp when it comes to the listener-facing site.

I've already been [collecting a bit of feedback](https://is.a.horrific.dev/@fennifith/111853230144348540) on this topic - but I'd love to hear more thoughts on this, from both listeners and musicians, if you're interested in where this is going!

