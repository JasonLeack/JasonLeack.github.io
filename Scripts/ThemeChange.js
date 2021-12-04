window.addEventListener("load", function(){
    loadThemeSelection();
});

function loadThemeSelection()
{
	if (typeof(Storage) !== "undefined") 
	{
		if (sessionStorage.darkTheme) 
		{ 
			if (Number(sessionStorage.darkTheme) == 1) 
			{
				switchTheme();
				sessionStorage.darkTheme = 1;
				
				document.getElementById("themeCheckbox").checked = false;
			}
		}
	}
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
	var colors = ['backgroundColor', 'middlegroundColor', 'foregroundColor', 'headerBackgroundColor', 'regularTextColor', 'faintTextColor', 'navLinksColor', 'themeColor', 'homeBackground'];
	
	for (let i = 0; i < colors.length; i++) 
	{
		setColors('--' + colors[i], '--' + colors[i] + '_dark');
	}
	
	if (typeof(Storage) !== "undefined") 
	{
		if (sessionStorage.darkTheme) 
		{ 
			sessionStorage.darkTheme = 1-(Number(sessionStorage.darkTheme));
		} 
		else 
		{
			sessionStorage.darkTheme = 1;
		}
		
		var name = getComputedStyle(document.querySelector(':root')).getPropertyValue('--homeBackground');

		document.getElementById("home").style.backgroundImage = name;
	}
}

