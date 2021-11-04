var $window = $(window);

$(document).on("scroll", 
	function () 
	{
		var $header = document.getElementById('navigation');
		$header.classList.toggle('sticky', $window.scrollTop()>0);
	}
);

function toggleMenu()
{
	var menuToggle=document.querySelector('.menuToggle');
	var menu=document.querySelector('.navMenu');
	menuToggle.classList.toggle('active');
	menu.classList.toggle('active');
}