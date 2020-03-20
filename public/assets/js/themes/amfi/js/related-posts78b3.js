if( /Android|webOS|iPhone|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) { 
	jQuery(window).on("orientationchange",function() {
		if(window.orientation == 0) {
			location.reload();
			jQuery(this).scrollTop(0);
		}
		else{
			location.reload();
			jQuery(this).scrollTop(0);			
		}
	});
	if(window.innerHeight > window.innerWidth){
		jQuery(function ($) {
			$('.slideshow').jCarouselLite({
				btnNext: '.next',
				btnPrev: '.prev',
				scroll: 1,
				visible: 1,
				autoWidth: true,
				responsive: true,
				circular: false
			});
		});
		jQuery(".calculator-main-sip").click(function(){
			jQuery(function ($) {
			  $('.slideshow-sip').jCarouselLite({
				btnNext: '.next',
				btnPrev: '.prev',
				scroll: 1,
				visible: 1,
				autoWidth: true,
				responsive: true,
				circular: false
			  });
			});
		});
		jQuery(".calculator-main-goal").click(function(){ 
			jQuery(function ($) {
			  $('.slideshow-goal').jCarouselLite({
				btnNext: '.next',
				btnPrev: '.prev',
				scroll: 1,
				visible: 1,
				autoWidth: true,
				responsive: true,
				circular: false
			  });
			});
		});
		jQuery(".calculator-main-inflation").click(function(){
			jQuery(function ($) {
			  $('.slideshow-inflation').jCarouselLite({
				btnNext: '.next',
				btnPrev: '.prev',
				scroll: 1,
				visible: 1,
				autoWidth: true,
				responsive: true,
				circular: false
			  });
			});
		});
	}
	else{
		jQuery(function ($) {
			$('.page-node-type-article .slideshow').jCarouselLite({
				btnNext: '.next',
				btnPrev: '.prev',
				scroll: 2,
				visible: 2,
				autoWidth: true,
				responsive: true,
				circular: false
			});
		});
	}
}
else{
	jQuery(function ($) {
		$('.page-node-type-article .slideshow').jCarouselLite({
			btnNext: '.next',
			btnPrev: '.prev',
			scroll: 2,
			visible: 2,
			autoWidth: true,
			responsive: true,
			circular: false
		});
	});
}