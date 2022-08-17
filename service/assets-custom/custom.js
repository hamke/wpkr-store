// function preloaderFadeOutInit(){
//   $('.preloader').fadeOut('slow');
//   $('body').attr('id','');
// }
// jQuery(window).on('load', function () {
//   (function ($) {
//   preloaderFadeOutInit();
//   })(jQuery);
// });

$(document).ready(function() {
  "use strict";

  /* Select2 */
  $('select').select2();

  /* Tooltip */
  $('[data-toggle="tooltip"]').tooltip();

  /* index */
  $('.recent-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    fade: false,
    responsive: [{
        breakpoint: 1099,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      }

    ]
  });

  $('.freelance-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    fade: false,
    responsive: [{
        breakpoint: 1099,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      }

    ]
  });
  $('.service-slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    fade: false,
    responsive: [{
        breakpoint: 1099,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        }
      }

    ]
  });

  /* web design */
  $(function() {
    // $('#animated-thumbnials').lightGallery({
    // 	thumbnail: true,
    // });

    $('.slider-for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      adaptiveHeight: true,
      asNavFor: '.slider-nav'
    });

    $('.recommend').slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows: true,
      fade: false,
    });


    $('.slider-nav').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      asNavFor: '.slider-for',
      dots: false,
      arrows: true,
      focusOnSelect: true,
      variableWidth: true,
      responsive: [{
          breakpoint: 1099,
          settings: {
            slidesToShow: 4,
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
          }
        }

      ]
    });
  });
  /* profile */

  /* wireframe */
  // $('#aniimated-thumbnials').lightGallery({
  // 	thumbnail: true,
  // });

  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    adaptiveHeight: true,
    asNavFor: '.slider-nav'

  });

  $('.recommend').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    fade: false,
    responsive: [{
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        }
      }

    ]
  });

  $(".view").not('.slick-initialized').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    fade: false,
    responsive: [{
        breakpoint: 1099,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      }

    ]
  });

  $('.slider-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    arrows: true,
    focusOnSelect: true,
    variableWidth: true,
    responsive: [{
        breakpoint: 1099,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      }

    ]
  });

	jQuery(window).scroll(function () {

     if ( jQuery(this).scrollTop() > 50 ) {

       jQuery('#footer-fixed-cta').fadeIn();

     } else {

       jQuery('#footer-fixed-cta').fadeOut();
     }

     if (jQuery(this).scrollTop() > 500) {

       if ( jQuery('.main-page .title').hasClass('sticky-applied') ) {

         jQuery('.main-page .title').addClass('sticky-applied');
       }

     } else {

       jQuery('.main-page .title').removeClass('sticky-applied');
     }
   });

  if( window.outerWidth < 480 ) {

    var observer = new IntersectionObserver(function(entries) {

      // console.log(entries[0].intersectionRatio);
      if(entries[0].intersectionRatio < 1) {

        document.querySelector(".main-page .title").classList.add("sticky-applied");

      } else {

        // if ( jQuery(".main-page .title").hasClass("sticky-applied") ) {

          document.querySelector(".main-page .title").classList.remove("sticky-applied");
        // }
      }
    }, { threshold: [0,1] });

    observer.observe(document.querySelector(".main-page .title"));

  }

});
