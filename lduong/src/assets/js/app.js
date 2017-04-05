$(document).ready(function() {

  $(document).foundation();

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
