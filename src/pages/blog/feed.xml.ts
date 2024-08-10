import { Feed } from "feed";
import { getCollection } from 'astro:content';

const allBlogPosts = await getCollection('blog');

export const GET = () => {
	const siteUrl = "https://jfenn.me"

	const feed = new Feed({
		title: "James Fenn",
		description:
			"Writer of bad puns and slightly better software. This website contains information about my adventures in programming, current projects, and me.",
		id: siteUrl + "/",
		link: siteUrl + "/",
		language: "en",
		image: `${siteUrl}/images/headers/snowytrees.jpg`,
		favicon: `${siteUrl}/favicon.ico`,
		copyright: `James Fenn`,
		author: {
			name: "James Fenn",
			link: siteUrl + "/"
		},
		feedLinks: {
			rss: `${siteUrl}/blog/feed.xml`,
		},
	});

	allBlogPosts.forEach((post) => {
		const nodeUrl = `${siteUrl}/blog/${post.slug}`;

		feed.addItem({
			title: post.data.title,
			guid: nodeUrl,
			link: nodeUrl,
			description: post.data.description,
			content: post.data.description,
			date: new Date(post.slug.substring(0, 10)),
			extensions: [],
		});
	});

	return new Response(feed.rss2());
};
