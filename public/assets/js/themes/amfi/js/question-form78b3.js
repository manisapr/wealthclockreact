jQuery(function($) {
  function get_ga_UID() {
    try {
      var cookie = document.cookie.match(new RegExp('_ga=([^;]+)'))[1].split('.');
      return cookie[2] + '.' + cookie[3];
    } catch (e) {
      return '';
    }
  }
  var lang = document.documentElement.lang.toLowerCase();
  var thnk_msg=Drupal.t('Thank you for sending us your question!');
  $('#edit-message-0-value').attr('placeholder', Drupal.t('Your Question'));
  $('#edit-field-name-0-value').attr('placeholder', Drupal.t('Name'));
  $('#edit-field-email-0-value').attr('placeholder', Drupal.t('Email'));
  $('#edit-submit--3').attr('value', Drupal.t('Submit'));
  /*if (lang === 'hi') {
    $('#edit-message-0-value').attr('placeholder', 'आपका प्रश्न');
  } else {
    $('#edit-message-0-value').attr('placeholder', 'Your Question');
  }
  if (lang === 'hi') {
    $('#edit-field-name-0-value').attr('placeholder', 'नाम');
  } else {
    $('#edit-field-name-0-value').attr('placeholder', 'Name');
  }
  if (lang === 'hi') {
    $('#edit-field-email-0-value').attr('placeholder', 'ईमेल');
  } else {
    $('#edit-field-email-0-value').attr('placeholder', 'Email');
  }
  if (lang === 'hi') {
    $('#edit-submit--3').attr('value', 'सबमिट');
  } else {
    $('#edit-submit--3').attr('value', 'Submit');
  }*/


  function getParameterByName(name, url) {
    if (!url) {
      url = window.location.href;
    }
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  }

  function getSearchTerm() {
    //var urlParams = new URLSearchParams(window.location.search);
    var searchTerm = getParameterByName('keys');
	/* Remove OR from search terms */
	searchTerm = searchTerm.replace(/OR/g, "");
	searchTerm = searchTerm.replace(/ +(?= )/g,'');
    return searchTerm;
  }
  var lang = document.documentElement.lang.toLowerCase();

  $.validator.addMethod('lettersandspaceonly',
    function(value, element) {
      return this.optional(element) || (/^[a-zA-Z\s]+$/.test(value));
    },
    'Name can contain only alphabets and space.'
  );

  var msg=Drupal.t('Please enter a valid email address.');
  $.validator.addMethod('emailwithdot',
    function(value, element) {
      return this.optional(element) || (/^[a-z0-9]+([-._][a-z0-9]+)*@([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,4}$/.test(value) && /^(?=.{1,64}@.{4,64}$)(?=.{6,100}$).*/.test(value));
    },
    msg
  );

  $('#contact-message-question-form-form').validate({
    rules: {
      'field_name[0][value]': {
        lettersandspaceonly: true
      },
      'field_email[0][value]': {
        emailwithdot: true
      }
    },
    submitHandler: function(form, e) {
      e.preventDefault();
      var actionUrl = $(this).attr('action');

      var userId = get_ga_UID();
      $('#edit-field-user-id-0-value').val(userId);

      //var searchTerm = getSearchTerm();
	  if (jQuery('body').hasClass('path-search')){
		var searchTerm = getSearchTerm();
	  }
	  else{
		var searchTerm = "Contact Us"; 
	  }
      $('#edit-field-search-term-0-value').val(searchTerm);

      $.post(actionUrl, $('#contact-message-question-form-form').serialize())
        .done(function(data) {
          $(form).each(function() {
            this.reset();
          });
          var lang = document.documentElement.lang.toLowerCase();
		  $('.thank').remove();
		  $('#contact-message-question-form-form').append('<p class="thank">'+thnk_msg+'</p>');
		  jQuery( ".thank" ).fadeOut(2000);
          /*if (lang === 'hi') {
            $('#contact-message-question-form-form').append('<p class="thank">हमें आपका प्रश्न भेजने के लिए धन्यवाद</p>');
          } else {
            $('#contact-message-question-form-form').append('<p class="thank">Thank you for sending us your question!</p>');
          }*/
        });
    }
  });

  $('#contact-message-amfi-question-received-hindi-form').validate({
    rules: {
      'field_email[0][value]': {
        emailwithdot: true
      }
    },
    submitHandler: function(form, e) {
      e.preventDefault();
      var actionUrl = $(this).attr('action');

      var userId = get_ga_UID();
      $('#edit-field-user-id-0-value').val(userId);

      //var searchTerm = getSearchTerm();
	  if (jQuery('body').hasClass('path-search')){
		var searchTerm = getSearchTerm();
	  }
	  else{
		var searchTerm = "Contact Us"; 
	  }
      $('#edit-field-search-term-0-value').val(searchTerm);


      $.post(actionUrl, $('#contact-message-amfi-question-received-hindi-form').serialize())
        .done(function(data) {
          $(form).each(function() {
            this.reset();
          });
          var lang = document.documentElement.lang.toLowerCase();
		  $('.thank').remove();
		  $('#contact-message-amfi-question-received-hindi-form').append('<p class="thank">'+thnk_msg+'</p>');
		  jQuery( ".thank" ).fadeOut(2000);
          /*if (lang === 'hi') {
            $('#contact-message-amfi-question-received-hindi-form').append('<p class="thank">हमें आपका प्रश्न भेजने के लिए धन्यवाद</p>');
          } else {
            $('#contact-message-amfi-question-received-hindi-form').append('<p class="thank">Thank you for sending us your question!</p>');
          }*/
        });
    }
  });
});
