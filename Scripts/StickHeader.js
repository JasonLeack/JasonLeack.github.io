var $window = $(window);

$(document).on("scroll", 
	function () 
	{
		var $header = document.getElementById('navigation');
		$header.classList.toggle('sticky', $window.scrollTop()>0);
	}
);