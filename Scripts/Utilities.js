function copyToClipboard(text)
{
	navigator.clipboard.writeText(text);
	alert("Copied the text: " + text);
}

function setColors(firstName, secondName)
{
	var root = document.querySelector(':root');
	
	var t = getComputedStyle(root).getPropertyValue(firstName);
	
	root.style.setProperty(firstName, getComputedStyle(root).getPropertyValue(secondName));
	root.style.setProperty(secondName, t);
}

function switchTheme()
{
	var colors = ['backgroundColor', 'middlegroundColor', 'foregroundColor', 'headerBackgroundColor', 'regularTextColor', 'faintTextColor', 'navLinksColor', 'themeColor'];
	
	for (let i = 0; i < colors.length; i++) 
	{
		setColors('--' + colors[i], '--' + colors[i] + '_dark');
	}
}

