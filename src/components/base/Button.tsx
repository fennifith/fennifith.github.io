import type { JSX, PropsWithChildren } from "preact/compat";
import style from "./Button.module.scss";

interface Props extends PropsWithChildren {
	as?: keyof JSX.IntrinsicElements;
	variant?: "primary" | "secondary";
	class?: string;
	onclick?: string;
}

export function Button({ as = "button", variant, children, ...props }: Props) {
	const Element = as;
	return (
		<Element {...props} class={`${style.button} ${style[`button--${variant}`]} ${props["class"] || ""}`}>
			<span class={style.button__inner}>
				{children}
			</span>
		</Element>
	);
}

export function ButtonLink(props: Props & { href: string }) {
	return <Button as="a" {...props} />
}
