'use strict';

(function ($) {
	$(document).ready(function () {
		// Slick Slider
		$('.slider').slick({
			arrow: true,
			infinite: true,
			speed: 300,
			slidesToShow: 3,
			slidesToScroll: 2,
			appendArrows: $('.slider__arrows'),
			prevArrow: '<div class="slider-prev icon-arrow"></div>',
			nextArrow: '<div class="slider-next icon-arrow"></div>',
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						arrow: true,
						infinite: true,
						slidesToShow: 2,
						slidesToScroll: 2,

					}
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
			]
		});

		$('.carousel').slick({
			arrow: true,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1,
			appendArrows: $('.carousel__arrows'),
			prevArrow: '<div class="carousel-prev icon-arrow"></div>',
			nextArrow: '<div class="carousel-next icon-arrow"></div>',
			autoplay: true,
			autoplaySpeed: 3500,
			fade: true,
			responsive: [
				{
					breakpoint: 768,
					settings: {

						arrow: false,
					}
				}
			]
		});

		$(window).on('scroll', function () {
			var scrollfromtop = $(this).scrollTop();
			if (scrollfromtop == 0) {
				$('.menu').removeClass('scrolled');
			} else {
				$('.menu').addClass('scrolled');
			}
		});

	});
})(jQuery);
