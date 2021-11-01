var $window = $(window);
var $backEndBar = $(".backEndBar")
var $frontEndBar = $(".frontEndBar")
var $gameDesignBar = $(".gameDesignBar")
var $shadersBar = $(".shadersBar")


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
	}
);
