$(document).ready(function() {

  $(document).foundation();
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

  // collapse responsive-menu after clicking link when on responsive mode - http://stackoverflow.com/questions/18516696/how-can-i-close-the-foundation-topbar-menu-when-a-link-is-clicked
  $('#responsive-menu li a, .top-bar-title a').click(function() {
    var width = Foundation.MediaQuery.current;

    if( width == 'small' || width == 'medium'){
        $('#responsive-menu').css('display', 'none');
    }
  });


  // Anchor smooth scroll
  $('a.scroll, .menu a, #navbar a, .misc a').click(function(e) {
    e.preventDefault();
    $('body, html').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 750);
  });

});
