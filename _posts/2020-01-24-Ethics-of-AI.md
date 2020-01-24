---
layout: blog
title: Ethics of Artificial Intelligence
description: An overview of the discourse surrounding "ethical AI" and its use in the Big Tech industry.
date: 2020-01-24
last_updated_at: 2019-01-24
links:
  - name: Algorithmic Accountability Act of 2019
    url: https://www.congress.gov/bill/116th-congress/house-bill/2231/text
  - name: Responsible Data Movement
    url: https://responsibledata.io/
sources:
  - id: Cardoso
    name: "Sidewalk Labs Document Reveals Company's Early Vision for Data Collection, Tax Powers, Criminal Justice"
    author: "Tom Cardoso and Josh O'Kane"
    url: https://www.theglobeandmail.com/business/article-sidewalk-labs-document-reveals-companys-early-plans-for-data/
  - id: Hansson
    name: "About the Apple Card"
    author: "Jamie Heinemeier Hansson"
    url: https://dhh.dk/2019/about-the-apple-card.html
  - id: Helbing
    name: "Will Democracy Survive Big Data and Artificial Intelligence?"
    author: "Dirk Helbing, Bruno S. Frey, Gerd Gigerenzer, Ernst Hafen, Michael Hagner, Yvonne Hofstetter, Jeroen van den Hoven, Roberto V. Zicari, Andrej Zwitter"
    url: https://doi.org/10.1007/978-3-319-90869-4_7
  - id: Sidewalk
    name: "Introduction to the IDEA District"
    author: "Sidewalk Toronto"
    url: https://www.sidewalktoronto.ca/plans/introduction-to-the-idea-district/
  - id: Kaplan
    name: "Siri, Siri, in My Hand: Who's the Fairest in the Land? On the Interpretations, Illustrations, and Implications of Artificial Intelligence"
    author: "Andreas Kaplan and Michael Haenlein"
    url: https://doi.org/10.1016/j.bushor.2018.08.004
  - id: Kumar
    name: "Please Read These If You're \"Doing\" \"Explainable\" \"AI\""
    author: "Lizzie Kumar"
    url: https://iekumar.com/2019/11/06/please-read-these-if-youre-doing-explainable-ai/
  - id: McLeod
    name: "Sidewalk Labs Digital Update Brings New Details, but Many Questions Remain"
    author: "James McLeod"
    url: https://business.financialpost.com/technology/sidewalk-labs-digital-update-brings-new-details-but-many-questions-remain
  - id: Rollet
    name: "Hikvision Markets Uyghur Ethnicity Analytics, Now Covers Up"
    author: "Charles Rollet"
    url: https://ipvm.com/reports/hikvision-uyghur
  - id: Smith
    name: "The Intelligence Is Artificial. The Bias Isn't"
    author: "Nareissa Smith"
    url: http://www.lawandai.com/2019/05/28/the-intelligence-is-artificial-the-bias-isnt/
categories:
  - papers
---

The field of "artificial intelligence" is gaining increasingly noticeable
relevance in the software industry. Frequently used in headlines and marketing,
"AI" is widely regarded as an inaccurate buzzword, especially due to the many
abstract and vague arguments derived from its prevalence in science fiction. The
cultural definition is often confused with its technical meaning: "a system's
ability to correctly interpret external data, to learn from such data, and to
use those learnings to achieve specific goals and tasks through flexible
adaptation" [(5)](#Kaplan). Meanwhile, the seemingly invasive approach of this
technology to take over more parts of human life has brought many ethical
concerns to light. Critics argue that the spread of artificial intelligence
poses risks to human dignity, accountability, transparency, and algorithmic
bias. As this technology spreads, it is important to ensure that its decisions
can be justified when being applied to the large scales afforded by modern
computing.

The main defining feature in what is recognized as "artificial intelligence" is
how it makes decisions. Most traditional computer programs, regardless of scale,
are only capable of doing exactly what their users tell them to do. Conditions
must be strictly defined, and all output is traceable; any responsibility for
the program lies with its creator, since all behavior is explicitly specified.
AI programs, on the other hand, have the capability to learn and inference from
vast quantities of data in order to determine the best action to take. A naive
approach to creating an AI might involve the construction of a large decision
tree that updates on each execution, correcting itself and effectively learning
from its mistakes. Practical applications of this often require huge amounts of
data collection and processing power. As a result, tracing the specific cause of
an output is difficult if not impossible to achieve given the amount of
information used in this process.

## Background of Practical Use

In recent years, the dependence on AI in widely used systems has vastly
increased as a result of new innovation and a realization of useful
applications. It has seen a wide range of uses, including interactive video
games, automotive systems, and social moderation. This presence has provided a
noticeable boost to the "data economy", creating an incentive for companies to
collect more information about their customers to benefit their business
[(3)](#Helbing). Sidewalk Labs, a Google-affiliated company focused on urban
infrastructure, is a prime example of the influence that this data can have. In
2017, Sidewalk Labs entered negotiations with a Canadian government agency,
Waterfront Toronto, to redevelop a part of the city's waterfront area as a
testbed for emerging technologies. The initiative claims to target issues such
as the sustainability, accessibility, and prosperity of urban communities while
improving the quality of life for all [(4)](#Sidewalk). A planning document
created by the company prior to this arrangement involved the use of tax and
financing authority, local policing powers, location tracking, and an absurd
amount of individual data collection from inhabitants [(1)](#Cardoso). This data
would be used to project accountability and reward good behavior, involving the
establishment of a social credit system and becoming integrated with the economy
in the area. The idea would effectively call for a complete algorithmic
governance with no visible human involvement; a dystopian sci-fi writer's dream.

Sidewalk Labs is still operating today, although its plans have been
significantly reformed following heavy criticism. Shoshana Zuboff, the author of
The Age Of Surveillance Capitalism, denounced the initiative as a "for-profit
China" that would "use digital infrastructure to modify and direct social and
political behavior". Other critics have cited privacy concerns and worries that
the proposal grants too much governing power for a vaguely defined purpose. This
is largely representative of the general discourse around artificial
intelligence, plagued with issues of transparency and accountability that are
largely ignored by its users. The most significant problems of AI are not
technical or philosophical, but fundamental in how it is used in the real world.
As the scale and influence of technology increases, so does the threat it
presents. Companies grow, technology becomes more relevant - "the trend goes
from programming computers to programming people" [(3)](#Helbing).

## Issues and Discourse

A computer - even an AI - cannot understand purpose, and only does exactly what
its implementation tells it to. If this implementation is vague or obscured,
lacking accountability or understanding, it just opens the door to
vulnerabilities and failures in society. Artificial intelligence is only a means
to an end, and even when it is used within its definition, it is just one
component of the systems that are built around it. Replacing jobs and
undermining human dignity is not something that is specific to artificially
intelligent systems, but the furthered demand and influence of technology as a
whole. The implementers of these systems need to have an understanding of the
problems caused by disregarding ethical context.

Examples of racial and sexist bias in AI are plentiful. The Apple Card, a credit
card system launched in August 2019, has been the subject of a wide amount of
discourse after many discovered seemingly sexist determinations of credit limits
given to them [(2)](#Hansson). Facial recognition programs have failed to
recognize people with darker skin tones, and word embedding technologies have
shown bias towards European names [(9)](#Smith). Meanwhile, surveillance
companies in China are using AI to create "Uyghur analytics", an example of
racial profiling that specifically targets a minority group with the intent of
persecution [(8)](#Rollet). However, these are not problems that can be
prevented with a better algorithm or more experience, nor can they be solved by
theorizing about a future utopia in which technology rules us all. These are
social and political issues that affect how any technology is built and used
today. It is the decisions about the design and use of this software that are
made by its creators, either without enough consideration or with the wrong
consideration, that have led to this injustice.

Many experts in the field believe that a lot of these problems are caused by a
general lack of diversity in the workforce. Nareissa Smith, a journalist with
experience in law and technology, shares these concerns: "it's unsurprising that
companies staffed primarily by white men would fail to recognize the ways that
their software cause problems for women, people of color, and other groups"
[(9)](#Smith). Excluding certain groups from the development process of these
technologies, whether intentional or not, has clear effects on the industry. The
institutional bias that still governs much of society is not exclusive to
software, and companies need to have a better representation of these groups.

## Evaluation

Recently, US lawmakers have introduced the Algorithmic Accountability Act, a
bill that would require companies to audit large-scale automated systems for
potential bias. The current legislation only directs companies to find a
solution, but it marks a notable start to enforcing that technology must remain
accountable in today's world [(9)](#Smith). Regulating the influence of this
software is important because of its ability to facilitate discrimination at a
large scale, and a clear review of this technology should be mandatory to
prevent carelessness and protect human rights in an industry where they are
often ignored.

Many supporters of the bill also call for "explainable AI", the idea that
algorithms should always present justification for their decisions. This offers
significant potential to increase the transparency of these systems, improving
both understanding and trust. However, some worry that this concept could be
misconstrued. Lizzie Kumar, a data scientist and graduate student at the
University of Utah, explains that the justifications provided by these
algorithms could be "far removed from what humans actually desire from an
explanation" [(6)](#Kumar). Machine learning models can be both inscrutable and
non-intuitive, making it difficult to determine if a decision was justified from
a legal or ethical standpoint, and legislating to solve this issue might not
necessarily improve that aspect.

## Conclusion

With the many ways that technology is becoming more integrated in everyday life,
an understanding of the ways that it can affect its users is crucial in
establishing a clear standard for its use. In the large automated systems that
are enabled by AI, the injustices of discrimination and bias are easier to hide
and have the potential for a much larger effect on humanity. Allowing companies
to create opaque and unaudited systems with no human oversight is a significant
cause for concern, and their increasing influence presents a considerable risk.
However, it is important to consider cases where the technology is not the main
culprit, and acknowledge the external factors that influence its use. While AI
has the potential to provide clear and unbiased results, the biased and
political motivation behind it is what shapes how it interacts with the real
world.
