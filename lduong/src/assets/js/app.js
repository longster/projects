$(document).ready(function() {

  $(document).foundation();

  /*
  // Config
  // =================================================

  var $root          = $('html'),
      $nav_header    = $('.banner'),
      $navicon       = $('[data-navicon="button"]'),
      header_height  = $('.banner').height(),
      hero_height    = $('.hero').height(),
      offset_val     = hero_height - header_height,
      eventType      = ((document.ontouchstart !== null) ? 'click' : 'touchstart');


  // Methods
  // =================================================

  function navSlide() {
    var scroll_top = $(window).scrollTop();

    if (scroll_top >= offset_val) {
      $nav_header.addClass('is-sticky');
    } else {
      $nav_header.removeClass('is-sticky');
    }
  }

  function menuToggle() {
    if($nav_header.hasClass('is-open')) {
      $root.removeClass('pinned');
      $nav_header.removeClass('is-open');
      $navicon.removeClass('is--closed');
    } else {
      $root.addClass('pinned');
      $nav_header.addClass('is-open');
      $navicon.addClass('is--closed')
    }
  }

  function openNav() {
    if ($nav_header.hasClass('is-open')) {
      $nav_header.removeClass('is-open');
      $root.removeClass('pinned');
      $navicon.removeClass('is--closed');
    }
  }

  function anchorScroll(event) {
    var id     = $(this).attr('href'),
        offset = header_height,
        target = $(id).offset().top - offset;

    $('html, body').animate({
      scrollTop: target
    }, 500);

    event.preventDefault();
  }


  // Handlers
  // =================================================

  $('.scrollto').on(eventType, function() {
    anchorScroll.call(this, event);
  });

  $navicon.on(eventType, menuToggle);

  $('.banner a').on(eventType, openNav);

  $(window).scroll(navSlide);

  */

























	// grab the initial top offset of the navigation
 	var stickyNavTop = $('#navbar').offset().top;

 	// function that decides wether the navigation bar should have "fixed" css position or not.
 	var stickyNav = function()  {
    var scrollTop = $(window).scrollTop(); // our current vertical position from the top

    // if we've scrolled more than the navigation, change its position to fixed to stick to top,
    // otherwise change it back to relative
    if (scrollTop > stickyNavTop) {
        $('#navbar').addClass('sticky');
        $('.sticksters').addClass('sticky-hack');
    } else {
        $('#navbar').removeClass('sticky');
        $('.sticksters').removeClass('sticky-hack');
    }
	};

	stickyNav();
	// and run it again every time you scroll
	$(window).scroll(function() {
		stickyNav();
	});

  // Collapse responsive-menu after clicking link when on responsive mode:
  // http://stackoverflow.com/questions/18516696/how-can-i-close-the-foundation-topbar-menu-when-a-link-is-clicked
  // http://foundation.zurb.com/sites/docs/media-queries.html
  $('#responsive-menu li a, .top-bar-title a').click(function() {

    if (Foundation.MediaQuery.atLeast('large')) {
      // True if large
      $('#responsive-menu').css('display', 'inline');
    }
    else {
      $('#responsive-menu').css('display', 'none');
    }

    //if($(window).width() < 1024) {
      //$('#responsive-menu').css('display', 'none');
    //}


  });


  // Anchor smooth scroll
  $('a.scroll, #navbar a, .misc a').click(function(e) {
    e.preventDefault();
    $('body, html').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 750);
  });


  
});
