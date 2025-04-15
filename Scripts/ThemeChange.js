function toggleTheme(checkbox){
	document.body.classList.toggle("darkTheme", !checkbox.checked);

	localStorage.setItem("theme", !checkbox.checked ? "dark" : "light");
}

window.addEventListener("DOMContentLoaded", () => {
	const savedTheme = localStorage.getItem("theme");
	const checkbox = document.getElementById("themeCheckbox");
  
	if (savedTheme == "dark") {
		document.body.classList.add("darkTheme");
		checkbox.checked = false;
	}
});