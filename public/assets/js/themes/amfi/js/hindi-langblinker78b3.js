jQuery(function($) {
  setInterval(function() {
    $('.hi a')
      .animate({
        color: '#FFFFFF'
      }, 500)
      .animate({
        color: '#FFFF00'
      }, 600)
      .animate({
        color: '#FFFFFF'
      }, 600)
      .animate({
        color: 'transparent'
      }, 400);
  }, 1000);

});
