{ // handle dark mode toggle behavior
	const darkModeToggle = document.getElementById("darkMode");

	darkModeToggle.parentElement.removeAttribute("hidden");

	const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
	const isDarkStored = localStorage.getItem("darkMode");
	darkModeToggle.checked = isDarkStored
		? isDarkStored === "true"
		: isDark;
}

{ // prevent install prompt display
	window.addEventListener('beforeinstallprompt', function(e) {
		return e.preventDefault();
	});

	if ('serviceWorker' in navigator) {
		navigator.serviceWorker.register('/sw.js', {scope: '/'})
			.then(function() {
				console.log("Service Worker Registered");
			});
	}
}
