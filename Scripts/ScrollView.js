var $window = $(window);

function isScrolledIntoView($element, $window) 
{
	var viewTop = $window.scrollTop();
	var viewBottom = viewTop + $window.height();

	var elementTop = $element.offset().top;
	var elementBottom = elementTop + $element.height();

	return ((elementBottom <= viewBottom) && (elementTop >= viewTop));
}

function percentageOnScreen($element, $window)
{
		var viewTop = $window.scrollTop();
		var viewBottom = viewTop + $window.height();
		
		var elementTop = $element.offset().top;
		var elementBottom = elementTop + $element.height();
		
		var percentage = 0;
		
		return Math.min(100, Math.max((0, (viewTop + viewBottom - elementTop) / elementBottom)));
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
		
		/*
		var $home = $(".home");
		
		$home.setAttribute("opacity", percentageOnScreen($home, $window));
		
		/*window.alert(percentageOnScreen($home, $window));*/
	}
);
