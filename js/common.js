$(document).ready(function() {
	$("a.f").fancybox({
		padding: 0,

		openEffect : 'elastic',
		openSpeed  : 150,

		closeEffect : 'elastic',
		closeSpeed  : 150,

		closeClick : true
	});

	$('.slider').scrollable({
		next:'.slider__next',
		prev:'.slider__prev',
		circular:true
	})
});