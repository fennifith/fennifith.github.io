---
layout: post
title: Client-Side JavaScript
description: "Why I rewrote my site with Jekyll, rather than running a ton of client-side JavaScript that doesn't really work all of the time."
project: "fennifith/fennifith.github.io"
links:
  - name: Website
    url: /
tags:
  - web
  - javascript
categories:
  - blog
---

My main project today has been rewriting most of my personal site in Jekyll and making a script using the GitHub API to update the relevant collections & push to git instead of making the site use the API to fetch data in client-side js like it was before.

## Q/A

### Why was I using the GitHub API client-side? 

I have a lot of projects. I wanted to have a portfolio site, but writing the entire thing myself and manually updating it each time I started a new one would have been a nightmare. Since I was (and still am) using GitHub pages, I obviously couldn't have it fetch this information on the server, so the only obvious choice was to do it on the client instead.

### Why was this bad?

Here are a few reasons.

- after the page loads, it has to make another request, making the user wait longer
- information won't show up in link previews / scrapers / search results
- authenticated requests cannot be made as that would require giving the client the auth key to make them with
- GitHub's request limit could easily be passed by simple browsing, causing data to stop loading
- the site would use up the user's unauthenticated requests, which they might find useful (testing/debugging)
- browser compatibility, while not bad, is... not perfect, either

## Crappy Hackery

So, I rewrote my site to use Jekyll and do away with all of the client-side JavaScript. Up until this point I'd added test files to all of the collections ("/_types" for types of projects, and "/_projects" for the actual projects) while I was writing my fancy [liquid extensions](https://jekyllrb.com/docs/templates/). 

The plan was that I was going to make a script to get repository info and create the files in "/_projects". I decided that since the GitHub API uses JSON, it would be easiest to write the data-fetching script in NodeJS. While I was at it, I'd also write a basic shell script for the purpose of deleting all the previous files, running the NodeJS script to create new ones, and pushing the result to GitHub all in one command. This ended up being a little more complicated, though, as you will soon find out.

To organize the projects into sections as you see on the [projects](https://jfenn.me/?projects) page, I was planning on adding what GitHub calls "topics"  to each of my repositories that would be defined in the "/_types" collection, along with the type names and order. The [API endpoint](https://developer.github.com/v3/repos/#list-all-topics-for-a-repository) to fetch a repo's types was in beta, but all it would need to work is an extra header. I'd then add a "type" attribute to each of the "/_projects" and have Jekyll use that to decide which section it belongs in. However, when I was writing the script, I discovered a flaw in this plan: if I have an array of multiple topics for a repository, how do I know which one should be set as the "type" attribute? I could hardcode an array of the possible types in the script, but that would be a pain if I wanted to change them later. I could scan through each file in the /_topics folder and attempt to parse its front matter, but that could break easily. Or...

**I could add a front matter to the .js file and run Jekyll locally to create a hardcoded array for me before running the script.**

With a little help from [Heinrich Reimer](https://github.com/heinrichreimer) to get the commas to go in the right places (as well as some rubber duck debugging when I had apparently forgotten how to assign a value to a variable), I was able to get [this](/redirects/?t=github&d=${}.github.io/blob/3cb10b7b4ecc49262bad306cfc11196897cbc615/scripts/update.js) to work pretty nicely. However, this made things a little confusing for the shell script I was planning to make. Instead of just running the js script, I would have to run "jekyll serve" in a separate process, locate the script in the output files, reinstall its dependencies (they refused to behave otherwise, and would throw errors), THEN run the script, and finally kill the jekyll process so that I don't have an endless instance of Jekyll running on my laptop until I reboot. After all that, my once simple 3-line shell script ended up being a little closer to [this](/redirects/?t=github&d=${}.github.io/blob/3cb10b7b4ecc49262bad306cfc11196897cbc615/scripts/update.sh).

Aaaaaand that's what I did today. I've finished messing around with it. The changes are live now. I won't steal your unauthenticated requests anymore. Bye.
