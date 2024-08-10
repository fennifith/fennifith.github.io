import { createRef, type ComponentChild } from "preact";
import style from "./ToggleButton.module.scss";
import { useCallback } from "preact/hooks";

interface Props {
	value: boolean;
	onChange: (value: boolean) => void;
	ariaLabel: string;

	checked: ComponentChild;
	unchecked: ComponentChild;
}

export function ToggleButton(props: Props) {
	const inputRef = createRef<HTMLInputElement>();
	const handleChange = useCallback(() => {
		const value = Boolean(inputRef.current?.checked);
		console.log("changed", value);
		props.onChange(value);
	}, [inputRef.current, props.onChange])

	return <>
		<label class={style.toggle}>
			<input ref={inputRef} class="visually-hidden" aria-label={props.ariaLabel} type="checkbox" checked={props.value} onChange={handleChange} />
			<span aria-hidden={!!props.value} class={style.toggle__checked}>
				{props.checked}
			</span>
			<span aria-hidden={!props.value} class={style.toggle__unchecked}>
				{props.unchecked}
			</span>
		</label>
	</>;
}