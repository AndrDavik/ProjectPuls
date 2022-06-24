$(document).ready(function(){
	$('.carousel__inner').slick({
		speed: 1200,
		// adaptiveHeight: true,
		prevArrow: '<button type="button" class="slick-prev"><img scr="icons/left.svg" alt="prev"></button>',
		nextArrow: '<button type="button" class="slick-next"><img scr="icons/right.svg" alt="next"></button>',
		dotsClass: 'slick-dots',
		responsive: [
			{
				breakpoint: 992,
				settings: {
					dots: true,
					arrows: false
				}
			}
		]
	  });
  });