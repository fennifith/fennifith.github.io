---
layout: blog
title: CSS Submodules
description: "How I organize my site's CSS and why."
project: "fennifith/styles"
links:
  - name: Block Element Modifier
    url: http://getbem.com/naming/
    icon: http://getbem.com/assets/favicon.png
  - name: Git Submodules
    url: https://git-scm.com/book/en/v2/Git-Tools-Submodules
    icon: https://git-scm.com/favicon.ico
  - name: Submodules with GitHub
    url: https://blog.github.com/2016-02-01-working-with-submodules/
    icon: https://github.com/favicon.ico
---

One of my tasks this week has been reorganizing my website's CSS styles in order to make them easier for me to both use and maintain. It isn't like I have a ton of styles for my site - most of it is fairly text-based - but I have noticed it growing, and "debugging" style-related problems was becoming a pain.

The first thing that I decided to do in order to fix this was (as suggested by [Jackson Hayes](https://github.com/jacksonhvisuals)) to implement a class naming convention called [Block Element Modifier](http://getbem.com/naming/). Essentially, this splits class names into three parts, a block, an element, and (obviously) a [meringue](https://en.wikipedia.org/wiki/Meringue). N-no wait, a modifier. That's it.

Under the BEM, a styled "block", say, named "circle", would simply be given the class name `circle`. But let's say you want to make a smaller version of that circle that is less prominent - that would be named `circle--smaller`, a **modification** of `circle`. Inside of the small circle, say you have an icon. Any styles applied to that icon would then be given the name `circle__icon`, or `circle--smaller__icon` if that icon is in a `circle--smaller`. The icon is an **element** of the circle.

Now, when actually writing and applying these styles, `circle--smaller`, a modification of `circle`, wouldn't contain all of the styles that `circle` has as well as its own; you would actually have to write `<element class="circle circle--smaller">` in order to achieve the desired effect. However, as I soon discovered, it isn't easy to write these styles in a way that prevents them from being reused in multiple places. Let's say that I have two blocks, a `link` and an `item`. These both have different styles, and their child elements look and behave completely differently, but they have one thing in common: they both occasionally need to contain a moderately styled image. The images are different sizes, but apart from that the styles should be exactly the same. Now, I could make `img` a block of its own, but how would I apply the change in size? `img--smaller`? That seems odd, especially when the image is essentially an **element** of the `link` or `item` that contains it. If I only use `link__img` and `item__img`, though, quite a bit of CSS is being duplicated, meaning that if I want to change the image's appearance later on I'll have twice as many lines to modify. In the end, I decided to kind of mush these two ideas together, writing a somewhat unsatisfactory `<img class="img link__img">` and `<img class="img item__img">` instead. I am still not sure that this is the best way for it to be handled, but I do not have any better ideas, so I am leaving it as-is for now.

After re-naming nearly all of my CSS styles, I realized something: I can't possibly push this to my site right now. I haven't modified the HTML to use the new class names yet! Even once I finish working on the main repository, there are projects like [Bugiver](https://jfenn.me/projects/bugiver) and [Photos](https://jfenn.me/projects/photos) that would also break; I'd have to update them as well. "Huh", I thought. "I wonder if there is any way that I could use multiple versions of my CSS at once, without duplicating code, so that I can gradually move my projects over without breaking anything..." And then I remembered: I had been wanting to try using [Submodules](https://git-scm.com/book/en/v2/Git-Tools-Submodules) for a while, couldn't I use that? *I could, I would, and I did.* Essentially, all of my website-containing repositories now have a submodule, like a smaller cloned-repository-in-a-repository, inside of them which references a specific commit to pull files from. This requires me to specifically change the commit that the submodule points to for each project when I want to update it; simply changing the CSS will no longer break anything until I tell my projects to use it.

After all this, I was ready to have a cup of tea and be done for the night, but no. That was not enough to satisfy me. I needed to do **MORE**. So, in order to organize the one giant CSS file containing all of my styles a little better, I used [Sassy CSS](https://sass-lang.com/) to split it into individual files by block, with one `styles.scss` file containing references to all of them so that they are all combined when the page is built.

Finally, I decided to admire my hard work by (somewhat badly) documenting the styles that I have spent so long staring at with [jfenn.me/styles](/styles/), complete with vague descriptions, HTML examples, and links to the source of the CSS styles that apply to each element.
