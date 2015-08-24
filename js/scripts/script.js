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

  // ACCORDION
  // ==========
  (function() {
    var duration = 300;

    // close accordion section
    function closeAccordion(e) {
      $(".accordion-drop.active").not($(e.target).parent().parents(".accordion-drop.active")).removeClass("active");
      $(".accordion-drop ul").not($(e.target).parents(".accordion ul")).slideUp(duration);
    }

    // add classes and sub-menu trigger
    $(".accordion li:has(ul)").addClass("accordion-drop")
      .children("a").addClass("accordion-title")
      .siblings("ul").before("<span class=\"btn-sub-menu-trigger\">sub menu open</span>");

    // open accordion section
    $(".accordion .btn-sub-menu-trigger").on("click", function(e) {
      if ($(e.target).parent().is(".active")) {
        closeAccordion(e);
      } else {
        closeAccordion(e);

        $(this).parent().addClass("active");
        $(this).next("ul").slideDown(duration);
      }
    });
  }());

  // SCROLLED
  // =========
  (function() {
    var offset = 73,
        duration = 600;

    $(window).on("scroll", function() {
      var fromTop = $(this).scrollTop();
      $("body").toggleClass("scrolled", (fromTop >= offset));
    });

    // animated scroll to top
    $(".btn-scroll-to-top").on("click", function(e) {
      $("html, body").animate({scrollTop: 0}, duration);
      e.preventDefault();
    });
  }());
});