import type { PropsWithChildren } from "preact/compat";
import style from "./TitleSection.module.scss";

export function TitleSection(props: PropsWithChildren) {
	return (
		<section class={style.section}>
			{props.children}
		</section>
	);
}
