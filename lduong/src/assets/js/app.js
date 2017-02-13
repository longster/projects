$(document).ready(function() {

  $(document).foundation();
	// grab the initial top offset of the navigation
   	var stickyNavTop = $('#navbar').offset().top;

   	// our function that decides weather the navigation bar should have "fixed" css position or not.
   	var stickyNav = function(){
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


});
