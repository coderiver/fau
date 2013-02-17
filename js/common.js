$(document).ready(function() {
$('body').addClass('loaded');//animation

	  $(".oplata,.dostavka").click(function() {
				$.fancybox.open({
					// href : 'frame.html',
					type : 'iframe',
					padding : 0
				});
			});


	// $("a.fancybox").fancybox({
	// 	padding: 0,

	// 	openEffect : 'elastic',
	// 	openSpeed  : 150,

	// 	closeEffect : 'elastic',
	// 	closeSpeed  : 150,

	// 	closeClick : true
	// });

	$('.slider').scrollable({
		next:'.slider__next',
		prev:'.slider__prev',
		circular:true
	})
});