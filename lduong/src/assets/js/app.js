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
        $('#navbar').addClass('tacky');
        $('.tackster').addClass('tacky-hack');
    } else {
        $('#navbar').removeClass('tacky');
        $('.tackster').removeClass('tacky-hack');
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
    
  });


  // Anchor smooth scroll
  $('a.scroll, #navbar a, .misc a').click(function(e) {
    e.preventDefault();
    $('body, html').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 750);
  });



});
