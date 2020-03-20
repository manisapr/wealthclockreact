jQuery(window).scroll(function() {
  var fromTopPx = 50; // distance to trigger
  var scrolledFromtop = jQuery(window).scrollTop();
  if (scrolledFromtop > fromTopPx) {
    jQuery('.path-frontpage .site-branding__logo>img').addClass('scrolled');
  } else {
    jQuery('.path-frontpage .site-branding__logo>img').removeClass('scrolled');
  }
});
