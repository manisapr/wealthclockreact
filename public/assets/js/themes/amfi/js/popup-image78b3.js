jQuery(function ($) {
  var popupInstance = $('#popup-image').Chocolat().data('chocolat');

  $('.has-popup-image .field--name-field-image').click(function (event) {
    event.preventDefault();
    popupInstance.api().open();
  });
});
