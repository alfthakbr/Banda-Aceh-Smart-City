$(document).ready(function() {

	var image = document.getElementsByClassName('isometric');
	new simpleParallax(image, {
		delay: 1.5,
		overflow: true
	});

	var smart = document.getElementsByClassName('smart-img');
	new simpleParallax(smart, {
		delay: .5,
		transition: 'cubic-bezier(0,0,0,1)',
		scale: 1.5,
		overflow: true
	});


	$(window).scroll(function() {
		if($(this).scrollTop() > 10) { 
			$('.navbar').addClass('solid');
			$('.nav-link').addClass('link-color-menu');
		} else {
			$('.nav-link').removeClass('link-color-menu');
			$('.navbar').removeClass('solid');
		}
	});
});
