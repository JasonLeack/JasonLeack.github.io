var $window = $(window);

function isScrolledIntoView($element, $window) 
{
	var viewTop = $window.scrollTop();
	var viewBottom = viewTop + $window.height();

	var elementTop = $element.offset().top;
	var elementBottom = elementTop + $element.height();

	return ((elementBottom <= viewBottom) && (elementTop >= viewTop));
}


$(document).on("scroll", 
	function () 
	{
		var $backEndBar = $(".backEndBar");
		var $frontEndBar = $(".frontEndBar");
		var $gameDesignBar = $(".gameDesignBar");
		var $shadersBar = $(".shadersBar");

		if (isScrolledIntoView($backEndBar, $window)) 
		{
			$backEndBar.addClass("animate");
		}
		if (isScrolledIntoView($frontEndBar, $window)) 
		{
			$frontEndBar.addClass("animate");
		}
		if (isScrolledIntoView($gameDesignBar, $window)) 
		{
			$gameDesignBar.addClass("animate");
		}
		if (isScrolledIntoView($shadersBar, $window)) 
		{
			$shadersBar.addClass("animate");
		}
		
		
		document.querySelector('.homeButton').classList.toggle('currentSelection', isScrolledIntoView($(".home"), $window));
		document.querySelector('.aboutMeButton').classList.toggle('currentSelection', isScrolledIntoView($(".aboutMe"), $window));
		document.querySelector('.projectsButton').classList.toggle('currentSelection', isScrolledIntoView($(".projects"), $window));
		document.querySelector('.contactButton').classList.toggle('currentSelection', isScrolledIntoView($(".contact"), $window));
	
	}
);
