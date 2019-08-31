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
		if($(this).scrollTop() > 200) { 
			$('.navbar').addClass('solid');
		} else {
			$('.navbar').removeClass('solid');
		}
	});
});
