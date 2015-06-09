$(document).ready(function() {
  // OWL CAROUSEL
  // =============
  $('.owl-carousel').owlCarousel({
    margin: 29,
    dragEndSpeed: 300,
    loop: true,
    responsive: {
      0: {
        items: 1
      },
      520: {
        items: 2
      },
      769: {
        items: 3
      }
    }
  });

// MOBILE LANGUAGE BLOCK
// ======================
  $('.mob-lang > li > span').on('click', function() {
    $('.mob-lang').toggleClass('mob-lang-active');
  });

  // MOBILE-MENU
  // ============
  $('.mob-menu-trigger, .overlay').on('click', function() {
    $('body').toggleClass('mob-menu-active');

    if (!Modernizr.csstransforms) {
      var $mobMenu = $('.mob-menu');

      $mobMenu.css('left') < '0' ?
      $mobMenu.css({'transform': 'translate(0,0)', 'left': '0'}) :
      $mobMenu.removeAttr('style');
    }
    return false;
  });

  $('.sub-menu-trigger').on('click', function() {
    $(this).toggleClass('active').next().slideToggle(300);
  });
});