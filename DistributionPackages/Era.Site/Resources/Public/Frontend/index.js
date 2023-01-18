(function () {
	'use strict';

	console.log('your code here');

	const swiper = new Swiper(".swiper", {
		loop: true,
		pagination: {
		  el: ".swiper-pagination",
		  type: "bullets",
		  clickable: true
		},
		keyboard: true,
		mousewheel: false
	  
		// effect: 'creative',
		// creativeEffect: {
		//  prev: {
		//    // will set `translateZ(-400px)` on previous slides
		//    translate: [0, 0, -400],
		//  },
		//  next: {
		//    // will set `translateX(100%)` on next slides
		//    translate: ['100%', 0, 0],
		//  },
		// },
		// effect: 'coverflow',
	  });
	  
	  const swiper2 = new Swiper(".swiper2", {
		loop: true,
		slidesPerView: 2,
		spaceBetween: 20,
		pagination: {
		  el: ".swiper-pagination",
		  clickable: true,
		},
	  });
}());
