---
layout: post
title: "Thoughts About Aptoide's 'Play Fair' Campaign"
description: "Sharing my opinions about Aptoide's 'play fair' campaign and some of the claims made in their argument."
date: "2019-06-13"
links:
  - name: "Google, Play Fair! (Aptoide)"
    url: "https://googleplayfair.com/"
  - name: "Security management of third-party Android marketplaces"
    url: https://dl.acm.org/citation.cfm?id=3121267
  - name: "Aptoide VirusTotal Scan"
    url: https://www.virustotal.com/gui/file/2fd8d9f1d96e24383db3b270dcb4b43ac1383d78c5beeb0aa1a603daaeb3c510/detection
  - name: "Is Android Open? (Wired)"
    url: https://www.wired.com/2010/10/is-android-open/
tags:
  - android
  - meta
categories:
  - blog
---

About a week ago, Aptoide created the website ["GooglePlayFair.com"](https://googleplayfair.com) as part of what
[several news outlets](https://techcrunch.com/2019/06/04/aptoide-a-play-store-rival-cries-antitrust-foul-over-google-hiding-its-app/)
are calling a public campaign against Google's allegedly "anti-competitive behavior". Upon my initial skim through
the site, I was in favor of Aptoide's argument against the monopolistic practices that they describe. To be fair,
I still am. However, I have recently done a bit of a double-take over some parts of this page during a discussion,
and thought I would share some of my thoughts...

It is definitely true that Google's monopolistic practices were unfair, and Aptoide was right to take action against
them. However, as many others have pointed out, these things happen "all the time". It is unfortunately common for
companies to try to butt each other out of business in order to maintain a prominent position in consumers' lives.
This is not a situation unique to Aptoide, and there was no reason for them to put effort into publicizing it other
than attracting new users. Don't get me wrong, this is fine - they disclose what should be public information and
gain popularity in exchange. However, this seems to offer them no other benefit than publicity - however much I would
like to believe otherwise, appealing to the public will not make a multinational corporation like Google change their
ways.

What began to irk me a little was Aptoide's claim that "consumers' freedom of choice is at stake". This is true, but
Aptoide's motives don't seem to reflect that. They don't talk about how consumers are impacted by Google's decisions,
only how they have affected Aptoide. This is a PR stunt to acquire publicity, not something that benefits the
individual, and it marks the beginning of a series of claims on this page that are only half-true.

Let me break down some of their claims...

### "An independent study affirms Aptoide's content is the safest"

[The study they reference](https://dl.acm.org/citation.cfm?id=3121267) is actually paywalled. Thanks for that. I was
able to obtain a copy through my university, though, and it is possible to acquire it from other sources.

I believe that the part of the study they got this information from was on page 3, a graph that lists 27 different
app stores ranked by the percentage of malware that [VirusTotal](https://www.virustotal.com/), a popular malware
detection service, has found. In this graph, [F-Droid](https://f-droid.org/) is actually given first place. Aptoide
is 5th, and Google Play is 8th. So, sure, Aptoide's content is the safest _out of two of the 27 stores mentioned_.

It doesn't stop there, however. The research doesn't quite "affirm that Aptoide is the marketplace with the lowest
rate of malware" as Aptoide claims. Rather, the actual text of the study barely mentions Aptoide at all, and instead
uses the graph to prove a completely unrelated point. The graph isn't a summary of all apps being distributed on each
market, but rather an analysis of the apps _that haven't been scanned by VirusTotal before_. This is used to support
the finding that apps published in marketplaces not studied in the research communities have not been exposed to the
"dragnet" of virus checkers such as VirusTotal. Given this information, it's even possible that Aptoide's ranking in
relation to Google Play on this graph might be a total coincedence. Of course, it doesn't _not_ support the argument
that Aptoide tries to make with it, but it is incredibly misleading.

The findings of this study are entirely unrelated to what Aptoide used it to support. They can even be used in favor
of an argument against third-party marketplaces like Aptoide, which supports Google's decision to mark it as harmful.
More on that [later...](#security)

### "All major antivirus prove Aptoide is a safe app"

Aptoide links to a [VirusTotal report](https://www.virustotal.com/gui/file/2fd8d9f1d96e24383db3b270dcb4b43ac1383d78c5beeb0aa1a603daaeb3c510/detection)
of their own APK, which states that no malware has been found.

This is a preposterous argument. VirusTotal flags apps only if they contain signs of malware - in other words,
Aptoide's own application would have to literally contain malware in itself to be flagged by this scan. It says
nothing about the security of Aptoide's internal systems, let alone its validity as a safe marketplace.

Aptoide is using this to argue that their application is safe for users, but this report only skims the surface
of the risks that it can present.

### "Developers's position is compromised"

This is probably the most truthful claim that Aptoide has made. Aptoide does indeed charge a smaller commision than
Google, though there are a few reasons why this doesn't make much of a difference to the Android ecosystem. The
reason that Aptoide points to is Google's failure to accommodate alternative marketplaces, and this is certainly a
significant barrier.

However, there is another reason that this difference in commission would likely have no effect, even if Google was
"playing fair" with Aptoide: piracy. As several sources have demonstrated, Aptoide is a breeding ground for bad actors
to publish pirated apps from other sites, as it requires barely any knowledge to upload and distribute an APK. While
Aptoide actively prevents pirated applications from entering their officially maintained "store", anyone can create their
own repository and immediately start hosting apps on Aptoide with no opt-in process for the user. This is a clear
difference from [F-Droid](https://f-droid.org/), a similar store, which allows unofficial repositories but 
[_does not host them from their official website_](https://mastodon.technology/@IzzyOnDroid/102254777218915178)
and requires [a clear opt-in process](https://f-droid.org/en/tutorials/add-repo/) to integrate them with the app.

Overall, while I am hesitant to compare the two risks in terms of harmfulness, I would say that Aptoide's use as a
breeding ground for piracy and malware poses more of a risk to the Android community than Google's questionable
business tactics. I would prefer to earn a fair amount of income from all of my users than a slightly fairer amount
from none of them.

## Arguments Against Aptoide as a Marketplace

> It's the lack of community-based development that Android's critics say makes it no more "open" than Apple's
> locked-down, decidedly not-open iOS model. [...] While Android may have the legal licensing to qualify as
> open source, it utterly fails on the equally important issues of transparency and community.
>
> \- Scott Gilbertson, [Wired](https://www.wired.com/2010/10/is-android-open/)

The Android open-source ecosystem has become way too dependent on Google, and many developers have criticized
the project for not being "real open source", so I am very excited to see companies making progress developing third
party tools for Android which do not depend on Google's permission to operate. However, writing this blog has really
made me question if I want to personally support Aptoide or not.

I am inevitably left hesitant to reccommend Aptoide to an end user if they cannot keep their
[long history of serving malware and piracy](https://www.reddit.com/r/androiddev/comments/2u3aav/apparently_my_app_is_available_for_free_at_aptoide/)
at bay. With this in mind, it makes Google's "unfair" treatment of Aptoide seem a lot more justifiable. Don't get
me wrong, Aptoide was right to file an antitrust complaint against them, but I can almost emphasize with Google's
decision given the complete lack of moderation that Aptoide seems to have over the repositories hosted on their site.

### Security

As a developer, anyone with an Aptoide account can upload one of your APKs without your knowledge. Several app
developers have reported that
[scammy or pirated version of their apps are being hosted on Aptoide](https://www.reddit.com/r/androiddev/comments/6pjyn1/malware_we_found_malware_impersonating_our_app_on/),
which they can do nothing about short of issuing a DMCA Takedown notice (at [abuse.report@aptoide.com](mailto:abuse.report@aptoide.com),
if you're curious) that they may or may not respond to.

> Aptoide is not a "single area for apps" like Google Play or the Amazon App Store. It's rather comparable to
> what [Launchpad](https://launchpad.net/) is for Ubuntu: everyone can open their own repository here, which is
> presented as a "store" separated from the others. There's a global search (for apps and stores), though.
>
> [...] So my conclusion is in fact it is pretty safe to use _this repository_.
> However, I've also taken a look at several of the other repositories - where you indeed can find lots of
> obviously "pirated apps".
>
> \- Izzy, [Stack Exchange](https://android.stackexchange.com/a/97377)

What troubles me is the lack of separation between these different "stores" on Aptoide. According to Izzy, the
central store maintained by Aptoide themselves is fairly trustworthy, but other repositories contain many obviously
"pirated apps". It is difficult to give a general answer to the security of Aptoide as a whole, but the central
site-wide search does not differ between repositories and can frequently offer the unsafe or suspicious packages
that Izzy warns about.

Furthermore, the study that Aptoide links to in their argument suggests that apps which are hosted from multiple
marketplaces - something that Aptoide seems to support - may pose a significant risk to the security of the ecosystem.
The authors advise developers to verify that applications they've developed have not been multi-released without
their knowledge.

### Personal Experience

On a personal note, I've recently discovered several of my own apps being hosted on Aptoide without my knowledge,
which also potentially infringe on the open source [Apache License](http://www.apache.org/licenses/LICENSE-2.0) that
they are published under:

- [Adware-infused Status clone](https://statusbar-leeway-applab.en.aptoide.com/) (Also in the [Wayback Machine](https://web.archive.org/web/20190613023540/https://statusbar-leeway-applab.en.aptoide.com/), in case Aptoide removes it as I have asked them to)
- [Alarmio](https://alarmio.en.aptoide.com/)
- [Metronome](https://metronome-james-fenn.en.aptoide.com/)
- [Media Notification](https://media-notification.en.aptoide.com/)
- [Bagels](https://bagels.en.aptoide.com/)
- [Charge Screen (really?)](https://charge-screen.en.aptoide.com/)
- [Paper Tales](https://paper-tales.en.aptoide.com/)

This all depends on your individual view of what constitutes "piracy" and whether this is okay, but I am not comfortable
with my work being hosted here without my knowledge, especially when the publishers give little to no attribution and
fail to specify the license / copyright notice that the Apache License requires. Sure, despite the license infringements,
it isn't _totally required_ that someone notify me whenever they wish to use my work elsewhere - moreso when I have explicitly
published it under an open source license for that purpose. However, it is a courtesy, and the absence of any notice
whatsoever has caused me to lose all of my initial respect for this platform.

Furthermore, the first listing (which I have already submitted a
[DMCA takedown request](https://en.wikipedia.org/wiki/Digital_Millennium_Copyright_Act) for) is a perfect example of the
point that the previously mentioned study suggests to Android developers: be aware of your surroundings. Even if you haven't
released the source code of your apps like I have, it is often trivial for another developer to manipulate a published APK,
remove any license verification, and inject their own tracking and adware. Aptoide is only one of the many online services
that can facilitate the distribution of these broken apps.

## Moving on...

To summarize some of the points I've brought up here, there are a few things that I think Aptoide (or any third-party app store)
should do in order to remain "secure" and be able to compete with F-Droid and Google Play...

- I acknowledge that Aptoide has clearly put work into their anti-malware solutions, including
  [displaying the "trusted badge"](https://blog.aptoide.com/number-one-reason-why-aptoide-is-safe/) on apps for which they are
  sure it's "100% safe". However, their checks seem to have failed to detect the Status clone I mentioned earlier, despite the
  four users that have apparently flagged it as a virus, so it seems that it needs some work.
- Aptoide needs to clearly outline what is done to prevent insecure apps from being hosted, not just explain how users can
  check the security for themselves. If an app outside of the main repository fails the security checks that Aptoide has in place,
  then it currently seems that the app will continue to be hosted until it is removed by the store owner.
- The previous point would not be as much of an issue if all of the individually managed "stores" were not immediately accessible
  to a new user of Aptoide, but that isn't how Aptoide works. All user-maintained stores are just as accessible to new (and perhaps
  more importantly, inexperienced) users, which significantly increases the chance that someone could download and install a known
  malicious application entirely by accident.
- Aptoide should make an effort to contact the original developer if their app is uploaded to the store, and try to prevent apps
  from being uploaded without the original developers' knowledge. Unfortunately, there is no easy way to do this, but there are a
  few ways that I think it could be achieved:
  - Enforcing that the package name is consistent with a registered domain (mine are usually `me.jfenn.*`) - similar to how
    [JitPack](https://jitpack.io/) operates, and verifying that a user account has control of that domain before allowing them to
    upload anything.
  - Checking the APK signature for any information about the developer and ensuring that it matches the person that is trying to
    upload it. Java's [`keytool`](https://docs.oracle.com/javase/8/docs/technotes/tools/unix/keytool.html#keytool_option_printcert)
    will give you the bare minimum information about the developer of an app. Unfortunately, it doesn't seem that there is an "email"
    or "contact" field that one can specify here, so this might be a lost cause.
  - Looking on other app stores (such as Google Play) for apps using the same package name and scraping information about their
    developers.
- Aptoide should allow both users and developers the ability to unconditionally remove all of their published content from the
  service. Whether the removal of published software is required by GDPR is questionable, but user accounts definitely are, and
  several users [seem to have had trouble](https://social.jlelse.me/objects/29950d77-8d77-4c7c-884f-45f9df2fabcd) removing their
  information in the past.

For users and developers, I would reccommend against using Aptoide for now, mainly because of the reasons above. A better alternative
might be [F-Droid](https://f-droid.org/), a catalogue of free ([free as in libre](https://en.wikipedia.org/wiki/Gratis_versus_libre))
software in which submissions to the main repository are each manually reviewed and curated by a group of contributors. F-Droid
does also allow third-party repositories to operate, but does so in the same way that any open source software can be modified and
redistributed; as mentioned earlier, third-party repositories are not hosted by f-droid.org, and will not show up in the F-Droid app
unless a specific opt-in process is followed. Being an open source software itself, F-Droid discloses a great deal of information about
the project - including [security audits](https://f-droid.org/en/2018/09/04/second-security-audit-results.html) - and allows anyone to
participate in discussions about its future goals.

F-Droid's official repository does limit itself to free/open-source software, which means that a lot of the apps available from stores
like Google Play and Aptoide cannot be hosted there - this is clearly laid out in their [Inclusion Policy](https://f-droid.org/en/docs/Inclusion_Policy/),
something that Aptoide does not seem to have. However, free software brings a significant advantage in that it allows moderators
to review an app's source code and verify that there are no proprietary dependencies and that no abusive, malicious, or tracking code
is present in the application before allowing it to be submitted. In addition, the final APK served by F-Droid is not built by the
developer, but by F-Droid's servers.
