This is a website that displays all of my current projects and applications. As [client-side JavaScript is bad](https://jfenn.me/blog/2018-08-19-Client-Side-JavaScript/), it is now written mostly in [Jekyll](https://jekyllrb.com/). It does not update its content automatically, but there is [this Node.js script](./scripts/update.js) and [a shell script](./scripts/update.sh) that may be used to update it periodically.

## Building

After cloning the project, run `git submodule init` and `git submodule update` in the root directory to fetch the project's [CSS styles](https://jfenn.me/redirects/?t=github&d=styles), which are stored in a separate repository to simplify versioning (different parts of my site use different versions of the css, so I don't have to worry about things breaking immediately if I change something).

Once this is done, you can run `jekyll build` to generate the HTML (storing it in "_site/"), or `jekyll serve` to start a server so that you can view the site in a browser.

## License

As this is **my** personal site, I have some issues with placing it under a license for public use. However, I am trying to separate parts of it so that I can open-source projects such as [bugiver](https://jfenn.me/projects/bugiver) and [photos](https://jfenn.me/projects/photos) separately. To clarify, I have no problem with borrowing small snippets from this repository for use in other projects, I am only trying to prevent people from just changing the text and claiming this entire project as their own.

## Contributing

Pull requests / issue reports are welcome. Feel free to contact me before working on any significant changes (in fact, please do; I would prefer not to have to turn down a contribution because I don't agree with it - that would just be a waste of time and effort on the contributor's side).
