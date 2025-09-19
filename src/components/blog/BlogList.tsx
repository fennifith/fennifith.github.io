import type { CollectionEntry } from "astro:content";
import style from "./BlogList.module.scss";
import dayjs from "dayjs";
import { getHrefContainerProps } from "src/utils/href-container-script";

interface Props {
	blog: CollectionEntry<"blog">;
}

export function BlogListItem({ blog }: Props) {
	const date = dayjs(blog.slug.substring(0, 10)).format("MMMM D");
	const words = blog.body?.split(" ")?.length ?? 0;
	const href = blog.data.redirect || `/blog/${blog.slug}/`;

	const props = getHrefContainerProps(href);

	return (
		<div class={style.blog} {...props}>
			<h3 class={style.blog__title}>
				<a href={href}>{blog.data.title}</a>
			</h3>
			<p class={style.blog__desc}>{blog.data.description}</p>
			<p class={style.blog__meta}>
				{date}
				{words ? (
					<> &middot; {words.toLocaleString()} words</>
				) : undefined}
			</p>
		</div>
	);
}

interface BlogListProps {
	blogs: Array<CollectionEntry<"blog">>;
	withYears?: boolean;
}

export function BlogList({ blogs, withYears }: BlogListProps) {
	const sortedBlogs = [...blogs].sort((a, b) => b.slug.localeCompare(a.slug));

	return (
		<ul class={style.list}>
			{sortedBlogs.map((blog, i) => {
				const year = blog.slug.substring(0, 4);
				const yearIndex = sortedBlogs.findIndex(
					({ slug }) => slug.substring(0, 4) == year,
				);
				return (
					<li key={blog.id}>
						{withYears && i === yearIndex ? <h2 class={style.list__year}>{year}</h2> : undefined}
						<BlogListItem blog={blog} key={blog.id} />
					</li>
				);
			})}
		</ul>
	);
}
