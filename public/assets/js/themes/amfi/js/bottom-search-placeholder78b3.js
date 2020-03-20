jQuery(function($) {
  var lang = document.documentElement.lang.toLowerCase();

  var qstrans= Drupal.t('Have a specific question? Type here');
  $('#block-bottomsearch #edit-keys--2').attr('placeholder', qstrans);
  $('#block-contentsearchblock #edit-keys').attr('placeholder', qstrans);
  
  /*if (lang === 'hi') {
    $('#block-bottomsearch #edit-keys--2').attr('placeholder', 'कोई विशेष सवाल है? यहां टाइप करें');
  } else {
    $('#block-bottomsearch #edit-keys--2').attr('placeholder', 'Have a specific question? Type here');
  }
  if (lang === 'hi') {
    $('#block-contentsearchblock #edit-keys').attr('placeholder', 'कोई विशेष सवाल है? यहां टाइप करें');
  } else {
    $('#block-contentsearchblock #edit-keys').attr('placeholder', 'Have a specific question? Type here');
  }*/
});
