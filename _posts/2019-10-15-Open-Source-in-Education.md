---
layout: blog
title: Open Source in Education
description: A discussion of the open source model as a solution to many issues in higher education.
date: 2019-10-15
last_updated_at: 2019-10-15
links:
  - name: Open Source Institute
    url: https://opensource.org/
  - name: Free Software Foundation
    url: https://www.fsf.org/
sources:
  - id: Bonaccorsi
    name: "Comparing Motivations of Individual Programmers and Firms to Take Part in the Open Source Movement: From Community to Business"
    author: "Andrea Bonaccorsi and Cristina Rossi"
    url: https://doi.org/10.1007/s12130-006-1003-9
  - id: Farough
    name: "International Day Against DRM (IDAD): Defending the Right to Read on Oct. 12"
    author: "Greg Farough, Free Software Foundation"
    url: https://www.fsf.org/news/international-day-against-drm-idad-defending-the-right-to-read-on-oct-12
  - id: Gershenson
    name: "When Paywall Goes AWOL: The Demand for Open Access Education Research"
    author: "Seth Gershenson"
    url: https://www.iza.org/publications/dp/12158/when-paywall-goes-awol-the-demand-for-open-access-education-research
  - id: Glassman
    name: "Teaching and Learning through Open Source Educative Processes"
    author: "Michael Glassman and Min Ju Kang"
    url: https://doi.org/10.1016/j.tate.2016.09.002
  - id: Heron
    name: "Open Source and Accessibility: Advantages and Limitations"
    author: "Michael Heron"
    url: https://doi.org/10.1186/2194-0827-1-2
  - id: Ibrahim
    name: "Utilizing Open Source Information and Communication Technology (ICT) in Tertiary Institutions in Nigeria"
    author: "Abdu Ibrahim"
    url: https://ijrp.org/paper-detail/493
  - id: Kramer
    name: "Digital Rights Management: Pitfalls and Possibilities for People with Disabilities"
    author: "Elsa F. Kramer"
    url: https://doi.org/10.3998/3336451.0010.106
  - id: Rooij
    name: "Perceptions of Open Source Versus Commercial Software"
    author: "Shahron Williams van Rooij"
    url: https://doi.org/10.1080/15391523.2007.10782491
  - id: Stallman
    name: "Why Open Source Misses the Point of Free Software"
    author: "Richard Stallman"
    url: https://www.gnu.org/philosophy/open-source-misses-the-point.en.html
categories:
  - papers
---

The free software movement is well known in computer science for its belief in
open or visible software as a crucial right. The movement heavily opposes common
practices such as Digital Restrictions Management (DRM), which place
restrictions on users' ability to control the software that they use
[(2)](#Farough). This is particularly relevant in the context of higher
education, where many publishers employ DRM to place important papers and
resources behind a paywall. Publishing companies charge for access to certain
resources, which has been shown to poorly reflect how much a paper is actually
valued, having a measurable effect on researchers often stymied by paywalls
[(3)](#Gershenson). Many software tools that are necessary to complete
coursework also contain such DRM, meaning that they cannot be used outside of
the licensed environment provided by the institution they are sold to. The
validity of free software as a solution is often debated, as many argue that
these freedoms hinder the ability of businesses to make a profit and control
their intellectual property. However, these arguments fail to take into account
the context in which this software is used. Imposing such restrictions upon
students and researchers has had clear implications for academia,
unintentionally creating discriminatory practices that can gatekeep information
and exclude certain groups from participating. While the arguments against the
free software movement are clear, the presence of restrictive and exclusionary
practices in higher education has much higher stakes for the academic community.

As an aside, there is considerable debate on the usage of the terms "open
source" and "free software." The term "free software" does not necessarily refer
to the price of the software, but the freedom given to its users in terms of how
the software can be used - specifically, "the freedom to run it, to study and
change it, and to redistribute copies with or without changes" [(9)](#Stallman).
Similarly, "open source" can be loosely used to describe software which is
distributed under a permissive license, allowing the user to modify and
redistribute it under certain terms. However, "free software" refers to software
that fully abides by the values of the movement, which may restrict its use in
applications that do not maintain the same principles [(1)](#Bonaccorsi). Free
software licenses always contain a "copyleft" clause, designating that the
software can only be distributed under the same license that it originated from,
preventing its use in closed-source commercial applications. As such, free
software is implicitly open source, but reflects the full values of the movement
as opposed to solely maintaining an open distribution of the product
[(9)](#Stallman).

Digital Rights Management has significant implications for the ways in which a
student can access a particular material. It often implies that the material can
only be accessed through a specific software or system that cannot be modified.
In the publishing industry, this means that people with print disabilities might
not have fair access to particular material. In situations where purchasing a
product does not provide effective access to it, the material can only be used
by modifying or creating a copy of the content. According to Elsa Kramer, "any
DRM technology that monitors or restricts access to digital content also may
interfere with the user's lawful use of a copyrighted work, such as when
synthetic-voice software is blocked from reading an e-book" [(7)](#Kramer). A
similar problem expands across many proprietary software tools that use
licensing restrictions to ensure their validity, preventing them from being used
on particular systems or being adapted for specific tasks. The core issue is not
a poor implementation of a service, but that implementing such services - or
adapting a material to better suit a task - is effectively prevented by DRM even
when it may be within the legal freedom of a user. Publishers argue that access
to a material is only provided in a specific format in order to prevent illegal
copying and redistribution. However, as Kramer points out, DRM is ineffective in
this case; it often restricts law-abiding users more than it prevents illegal
use - "just a speed bump in the path of those who would steal intellectual
property." Furthermore, these restrictions can drastically hinder academic
research. If a program cannot reliably be manipulated by a user, how can it be
guaranteed to operate consistently during a study? Or, if used in an experiment,
how can the results be reproduced by an audience if the tooling is only
available under a commercial license? In addition to harming legitimate
research, this can create a barrier that prevents people from entering the field
if they do not have the same access to many of the resources available in more
privileged institutions, which actively detracts from the performance of the
academic community.

The solution provided by open source software is that, while the purpose of an
application may remain the same, the functionality is at the control of the
user. Open source is a collaborative movement at its core, and many communities
around it enable anyone to contribute meaningful discussion, which allows a vast
and diverse set of opinions to influence the project. By releasing material to
the general public, it increases the amount of interested parties and can
improve the functionality of the software to a greater extent. In a paper
discussing the impact of open source on accessibility software, the authors
state that "each party may be acting in their own self-interest by contributing,
but all benefit exponentially from the process" [(5)](#Heron). This kind of
"open governance" for software shows particular promise as a solution to these
problems. The interests of the party developing a software are no different from
the interests of the people that use it - under open source, these groups become
one. Even if the majority of the community has a different opinion than that of
a particular user group, a distinct benefit of open source is that most licenses
allow derivatives or 'forks' of a software to freely exist [(5)](#Heron).
Provided that someone has the time and experience needed to do so, they can
maintain a different version of the software to fulfill those needs. However,
there is rarely a need to continually do this due to the inherent community
nature of open source; it is in everyone's interest to satisfy all uses so that
their software becomes the most accepted, creating a shared dependency on the
project and an obligation for all members to keep it running.

A common argument against the use of open source software in education is that,
while it may be available for free, the actual cost of maintaining such a
software is unknown and may be greater than the fixed price that their
commercial counterparts are sold for. A significant cause of skepticism among
universities considering such software is that "the need to hire programmers to
supplement their IT staff would raise the total cost of ownership (TCO) of open
source to levels that would probably exceed what they are currently paying to
their commercial vendors" [(8)](#Rooij). However, one supporting factor of an
open source model in education software is the ability for parties to determine
specifically where their costs are spent. Rather than paying a licensing fee,
that money is directly put into the software community, giving stakeholders a
visible influence over the product. In a study concerning the perception of open
source software in education, the author quotes a comment: "We don't see open
source as a cost savings. It just means that the costs that we put in can be
directed to things that we need to see done with the applications"
[(8)](#Rooij). This brings into question whether having control of the software
is worth the potential costs that this argument describes. Commercially licensed
software offers an existing product with no guarantee that it will continue to
be maintained beyond a limited support contract, while an open source model
implies a continued investment in the development of the software. Even though
the higher overall cost may be greater, the value received from such a program
may be exponentially improved. In certain situations, these costs could even
work out to be lower, as Abdu Ibrahim describes: "the cost of Open Source
Software, when managed carefully, can be considerably lower than alternative
commercial packages; this is especially true where largely identical packages
are used in multiple sites as is the case with educational organizations"
[(6)](#Ibrahim).

Moreover, if students are more able to take advantage of a particular software
because it is open source, it could benefit their education to become involved
in supporting the tools that they rely on. A technology called "Open Courseware"
provides an example of this, in which users are encouraged to make additions,
corrections, and improvements to the course content as they take a class
[(6)](#Ibrahim). Systems like this often receive criticism for the amount of
freedom they provide to students and the amount of trust they imply - much like
peer tutoring or class feedback models. However, what these systems rely on -
and what has led to their success - is that students are often the ones that
care the most about their education. A further argument explores a more
fundamental integration with the student curriculum, using an open source
process in a classroom community to facilitate discussion between peers. Michael
Glassman and Min Ju Kang cover this approach in great detail, arguing that -
even for non-technical students - integrating open source in an educational
context can help students to embrace the new types of thinking and intelligence
made possible by the internet. This involves somewhat of a transfer of course
ownership from the instructor's pre-defined expectations to the students'
current interests. This idea has often resulted in controversy due to the
thought that giving students too much freedom in their own education may create
a biased result in their own interest. However - the paper argues - there is a
difference in freedom offered to students as part of an open source approach, in
that the class relies on swarm intelligence to create a discussion that students
choose to follow. In this approach, the teacher "takes a back seat and becomes a
learner like everyone else, enabling people to become learners as well as to
find solutions or, even, pose questions" [(4)](#Glassman). This approach has an
interesting correlation with open source values that exemplifies the importance
of applying it in an educational context.

The ability of open source to open up software and information for uses and
groups that are often rejected by society is what makes it a crucial tool in
education. Making critical research, information, and tools available for anyone
to take advantage of is a goal that many have strived to achieve. However, there
are still many factors that must be addressed before it can be effectively
implemented at a large scale. For instance, while free software is arguably more
accessible in certain contexts, the open source community often fails to
understand the needs of non-technical users and the advantages can remain out of
their reach. Many users might find terms like "open source" intimidating, or not
have the need or incentive to learn what they mean. Other proponents of such
practices understand this caveat: "There can be a considerable mismatch between
the language used as a matter of course within an open source forum, and the
language used by those seeking assistance" [(5)](#Heron). Conscious shaping of
community norms to alleviate these issues can somewhat improve the situation,
but this remains a common problem in open source. Going forward, it is important
to discuss these issues and how they relate to the use of free software in an
educational context, as they have significant implications for the parties
involved.
