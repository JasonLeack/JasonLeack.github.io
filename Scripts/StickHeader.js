var $window = $(window);

/*Checks if the navigation menu should be sticky or not based on page position*/
$(document).on("scroll", stickNavigation);

/*Sticks navigation on top of the page when scrolling or when the navigation menu is open*/
function stickNavigation()
{
	var $header = document.getElementById('navigation');
	var $menuToggle = $('.menuToggle');
		
	$header.classList.toggle('sticky', $window.scrollTop()>0 || $menuToggle.hasClass('active'));
}

/*Toggles the navigation menu*/
function toggleMenu()
{
	var menuToggle=document.querySelector('.menuToggle');
	var menu=document.querySelector('.navMenu');
	
	menuToggle.classList.toggle('active');
	menu.classList.toggle('active');
	
	stickNavigation();
}