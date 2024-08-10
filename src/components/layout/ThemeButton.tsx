import { useCallback, useEffect, useState } from "preact/hooks";
import { ToggleButton } from "../base/ToggleButton";
import style from "./ThemeButton.module.scss";
import WeatherSunnyIcon from "mdi-preact/WeatherSunnyIcon";
import WeatherNightIcon from "mdi-preact/WeatherNightIcon";

function useDarkMode() {
	const [isDark, setIsDark] = useState(false);

	useEffect(() => {
		setIsDark(document.documentElement.dataset.isDark === "true");
	}, []);

	const changeDarkMode = useCallback((value: boolean) => {
		document.documentElement.dataset.isDark = value.toString();
		console.log(document.documentElement.dataset.isDark);
		localStorage.setItem("isDarkMode", value.toString());
		setIsDark(value);
	}, [setIsDark]);

	return [isDark, changeDarkMode] as const;
}

export function ThemeButton() {
	const [isDark, setIsDark] = useDarkMode();

	return (
		<ToggleButton
			value={isDark}
			onChange={v => setIsDark(v)}
			ariaLabel="Dark Mode"
			checked={
				<span class={style.button}>
					<WeatherNightIcon />
					Dark Mode
				</span>
			}
			unchecked={
				<span class={style.button}>
					<WeatherSunnyIcon />
					Light Mode
				</span>
			}
		/>
	);
}