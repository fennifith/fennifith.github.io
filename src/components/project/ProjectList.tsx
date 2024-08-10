import type { CollectionEntry } from "astro:content";
import style from "./ProjectList.module.scss";
import { ButtonLink } from "../base/Button";
import { marked } from "marked";
import ChevronRightIcon from "mdi-preact/ChevronRightIcon";
import InformationOutlineIcon from "mdi-preact/InformationOutlineIcon";

interface Props {
	project: CollectionEntry<"projects">;
}

export function ProjectListItem({ project }: Props) {
	const screenshot = project.data.screenshots[0];
	const contentHtml = project.body && marked.parse(project.body) as string;

	return (
		<li class={style.project}>
			<div class={style.project__image} style={screenshot ? `background-image: url(${screenshot.src});` : undefined} />

			{project.data.icon && (
				<img class={style.project__icon} src={project.data.icon} alt="" width="80" height="80" loading="lazy" decoding="async" />
			)}

			<h3 class={style.project__title}>{project.data.title}</h3>

			<p class={style.project__desc}>{project.data.description}</p>

			<div class={style.project__links}>
				{project.data.links?.map((link, i) => (
					<ButtonLink href={link.url} variant={i === 0 ? "secondary" : "primary"}>
						{link.name}
						<ChevronRightIcon size={18} />
					</ButtonLink>
				))}
			</div>

			{project.body && (
				<div class={style.project__info}>
					<InformationOutlineIcon size={18} />
					<div class="text-content" dangerouslySetInnerHTML={{ __html: contentHtml }} />
				</div>
			)}
		</li>
	);
}

export function ProjectListItemSmall({ project }: Props) {
	return (
		<li class={`${style.project} ${style["project--small"]}`}>
			<h3 class={style.project__title}>{project.data.title}</h3>

			<p class={style.project__desc}>{project.data.description}</p>

			<div class={style.project__links}>
				{project.data.links?.map((link, i) => (
					<ButtonLink href={link.url} variant={i === 0 ? "secondary" : "primary"}>
						{link.name}
						<ChevronRightIcon size={18} />
					</ButtonLink>
				))}
			</div>
		</li>
	);
}

interface ProjectListProps {
	projects: Array<CollectionEntry<"projects">>;
}

export function ProjectList({ projects }: ProjectListProps) {
	const sortedProjects = projects.slice().sort((a, b) => a.slug.localeCompare(b.slug));

	return (
		<ul class={style.list}>
			{sortedProjects.map((project) => {
				if (project.data.icon) {
					return (
						<ProjectListItem project={project} key={project.id} />
					);
				} else {
					return (
						<ProjectListItemSmall project={project} key={project.id} />
					);
				}
			})}
		</ul>
	);
}
