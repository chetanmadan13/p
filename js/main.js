 AOS.init({
 	duration: 800,
 	easing: 'slide'
 });

$(document).ready(function($) {

	"use strict";

	$(window).stellar({
    responsive: false,
    parallaxBackgrounds: true,
    parallaxElements: true,
    horizontalScrolling: false,
    hideDistantElements: false,
    scrollProperty: 'scroll'
  });

	// Scrollax
  $.Scrollax();


	// loader
	var loader = function() {
		setTimeout(function() {
			if($('#ftco-loader').length > 0) {
				$('#ftco-loader').removeClass('show');
			}
		}, 1);
	};
	loader();

	var carousel = function() {
		$('.home-slider').owlCarousel({
	    loop:true,
	    autoplay: true,
	    margin:0,
	    animateOut: 'fadeOut',
	    animateIn: 'fadeIn',
	    nav:false,
	    dots: false,
	    autoplayHoverPause: false,
	    items: 1,
	    navText : ["<span class='ion-md-arrow-back'></span>","<span class='ion-chevron-right'></span>"],
	    responsive:{
	      0:{
	        items:1,
	        nav:false
	      },
	      600:{
	        items:1,
	        nav:false
	      },
	      1000:{
	        items:1,
	        nav:false
	      }
	    }
	   });
	};
	carousel();

	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	var burgerMenu = function() {

		$('.js-colorlib-nav-toggle').on('click', function(event) {
			event.preventDefault();
			var $this = $(this);
			if( $('body').hasClass('menu-show') ) {
				$('body').removeClass('menu-show');
				$('#colorlib-main-nav > .js-colorlib-nav-toggle').removeClass('show');
			} else {
				$('body').addClass('menu-show');
				setTimeout(function(){
					$('#colorlib-main-nav > .js-colorlib-nav-toggle').addClass('show');
				}, 900);
			}
		})
	};
	burgerMenu();

	var counter = function() {

		$('#section-counter').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {

				var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
				$('.number').each(function(){
					var $this = $(this),
						num = $this.data('number');
						console.log(num);
					$this.animateNumber(
					  {
					    number: num,
					    numberStep: comma_separator_number_step
					  }, 7000
					);
				});

			}

		} , { offset: '95%' } );

	}
	counter();

	var contentWayPoint = function() {
		var i = 0;
		$('.ftco-animate').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {

				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .ftco-animate.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn ftco-animated');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft ftco-animated');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight ftco-animated');
							} else {
								el.addClass('fadeInUp ftco-animated');
							}
							el.removeClass('item-animate');
						},  k * 50, 'easeInOutExpo' );
					});

				}, 100);

			}

		} , { offset: '95%' } );
	};
	contentWayPoint();


  // container foot
  var loop = true;
var easing = 'linear';
var direction = 'alternate';

anime({
  targets: '.ball',
  translateX: 470,
  translateY: 100,
  easing,
  loop,
  direction,
  background: [
    { value: '#573796' },
    { value: '#FB89FB' },
    { value: '#FBF38C' },
    { value: '#18FF92' },
    { value: '#5A87FF' }
  ]
})
var ballTimeline = anime.timeline({
  loop,
  direction
})
var bar2Timeline = anime.timeline({
  loop,
  direction
})
var bar1Timeline = anime.timeline({
  loop,
  direction
})
ballTimeline
.add({
  targets: '.ball',
  translateY: 100,
  translateX: 1070,
  easing
}).add({
  targets: '.ball',
  translateY: 0,
  translateX: 0,
  easing
}).add({
  targets: '.ball',
  translateY: '-80',
  translateX: 1070,
  easing
})
bar2Timeline
.add({
  targets: '.bar2',
  translateY: 100,
  easing,
  background: '#573796'
}).add({
  targets: '.bar2',
  translateY: 0,
  easing,
  background: '#FB89FB'
}).add({
  targets: '.bar2',
  translateY: '-100',
  easing,
  background: '#FBF38C'
})
bar1Timeline
.add({
  targets: '.bar1',
  translateY: '-80',
  easing,
  background: '#18FF92'
}).add({
  targets: '.bar1',
  translateY: 10,
  easing,
  background: '#5A87FF'
}).add({
  targets: '.bar1',
  translateY: 60,
  easing,
  background: '#FF1461'
})



const wrapperEl = document.querySelector('.wrapper');
   const numberOfEls = 90;
   const duration = 6000;
   const delay = duration / numberOfEls;

   let tl = anime.timeline({
     duration: delay,
     complete: function() { tl.restart(); }
   });

   function createEl(i) {
     let el = document.createElement('div');
     const rotate = (360 / numberOfEls) * i;
     const translateY = -50;
     const hue = Math.round(360 / numberOfEls * i);
     el.classList.add('el');
     el.style.backgroundColor = 'hsl(' + hue + ', 40%, 60%)';
     el.style.transform = 'rotate(' + rotate + 'deg) translateY(' + translateY + '%)';
     tl.add({
       begin: function() {
         anime({
           targets: el,
           backgroundColor: ['hsl(' + hue + ', 40%, 60%)', 'hsl(' + hue + ', 60%, 80%)'],
           rotate: [rotate + 'deg', rotate + 10 +'deg'],
           translateY: [translateY + '%', translateY + 10 + '%'],
           scale: [1, 1.25],
           easing: 'easeInOutSine',
           direction: 'alternate',
           duration: duration * .1
         });
       }
     });
     wrapperEl.appendChild(el);
   };

   for (let i = 0; i < numberOfEls; i++) createEl(i);


	// magnific popup
	$('.image-popup').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
     gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      verticalFit: true
    },
    zoom: {
      enabled: true,
      duration: 300 // don't foget to change the duration also in CSS
    }
  });

  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
  });


   $('#appointment_date').datepicker({
	  'format': 'm/d/yyyy',
	  'autoclose': true
	});
	$('#appointment_time').timepicker();

	var pageProgress = function() {
		$(window).scroll(function() {
	    var wintop = $(window).scrollTop(), docheight = $('.page').height(), winheight = $(window).height();
	    // console.log(wintop);
	    var totalScroll = (wintop/(docheight-winheight))*100;
	    // console.log("total scroll" + totalScroll);
	    $(".KW_progressBar").css("width",totalScroll+"%");
	  });

	};
	pageProgress();


});
