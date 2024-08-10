import { ButtonLink } from "../base/Button";
import style from "./Header.module.scss";
import HomeIcon from "mdi-preact/HomeIcon";
import PostIcon from "mdi-preact/PostIcon";
import CodeBlockTagsIcon from "mdi-preact/CodeBlockTagsIcon";
import CalendarRangeIcon from "mdi-preact/CalendarRangeIcon";
import { ThemeButton } from "./ThemeButton";

export function Header() {
	return (
		<header>
			<div class={style.header}>
				<nav class={style.nav}>
					<ul>
						<li>
							<ButtonLink href="/">
								<HomeIcon size={18} />
								Home
							</ButtonLink>
						</li>
						<li>
							<ButtonLink href="/blog/">
								<PostIcon size={18} />
								Blog
							</ButtonLink>
						</li>
						<li>
							<ButtonLink href="/projects/">
								<CodeBlockTagsIcon size={18} />
								Projects
							</ButtonLink>
						</li>
						<li>
							<ButtonLink href="/now/">
								<CalendarRangeIcon size={18} />
								Now
							</ButtonLink>
						</li>
					</ul>
				</nav>

				<ThemeButton />
			</div>
		</header>
	);
}