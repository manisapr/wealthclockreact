jQuery(function($) {
  if ($('#sahi-hai-meter').length) {
    // Add padding to bottom footer
    $('.site-footer').addClass('bigger-site-footer');

    $('#sahi-hai-meter form').hide();
    $('#sahi-hai-meter').append('<div class="sahi-hai-images clearfix"><div class="no"></div><div class="meter"></div><div class="yes"></div></div>');

    $('#sahi-hai-meter .no').click(function() {
      submitForm(0);
      // alert($('#sahi-hai-meter .no').val());
    });
    $('#sahi-hai-meter .yes').click(function() {
      submitForm(1);
      // alert($('#sahi-hai-meter .yes').val());
    });

    function get_ga_UID() {
      try {
        var cookie = document.cookie.match(new RegExp('_ga=([^;]+)'))[1].split('.');
        return cookie[2] + '.' + cookie[3];
      } catch (e) {
        return '';
      }
    }

    function submitForm(value) {
      var articleUrl = window.location.href;
      $('#edit-field-article-0-value').val(articleUrl);

      var userId = get_ga_UID();
      $('#edit-field-user-id-0-value').val(userId);

      switch (value) {
        case 0:
          $('.meter').addClass('meter-yes');
          $('#edit-field-like-value').prop('checked', false);
          $('#sahi-hai-meter form').submit();
          break;
        case 1:
          $('.meter').addClass('meter-no');
          $('#edit-field-like-value').prop('checked', true);
          $('#sahi-hai-meter form').submit();
          break;
        default:
          break;
      }
    }

    $('#sahi-hai-meter form').submit(function(event) {

      /* stop form from submitting normally */
      event.preventDefault();

      /* get the action attribute from the <form action=""> element */
      var actionUrl = $(this).attr('action');

      /* Send the data using post with element id name and name2*/
      $.post(actionUrl, $('#contact-message-sahi-hai-meter-form').serialize());

      $('#sahi-hai-meter .sahi-hai-images').remove();
      $('#sahi-hai-meter h2').remove();

      var lang = document.documentElement.lang.toLowerCase();
	  var msg=Drupal.t('Thank you very much! Your opinion matters.');
	  $('#sahi-hai-meter').append('<p>'+msg+'</p>');
      /*if (lang === 'hi') {
        $('#sahi-hai-meter').append('<p>बहुत-बहुत धन्यवाद।! आपकी राय मायने रखती है।</p>');
      } else {
        $('#sahi-hai-meter').append('<p>Thank you very much! Your opinion matters.</p>');
      }*/
    });
  }
});
