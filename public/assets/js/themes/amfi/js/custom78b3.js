(function ($, Drupal, drupalSettings) {
	Drupal.behaviors.CustomBehavior = {
	  attach: function (context, settings) {
		// can access setting from 'drupalSettings';
		console.log(drupalSettings);
		if(typeof(drupalSettings.customJS)!='undefined' && typeof(drupalSettings.customJS.glossary_keyword)!='undefined' && drupalSettings.customJS.glossary_keyword.length){
		var glossry_keyword = drupalSettings.customJS.glossary_keyword;
		if(glossry_keyword!=''){
			$('.view-glossary-words .view-content .view-row-cusom:first').prepend("<div class=glossry_keyword>"+glossry_keyword+"</div>");
			$(".view-glossary-keywords .views-field-name a:contains('"+glossry_keyword+"')").addClass("active-keyword");
		}
		}
	  }
	};
})(jQuery, Drupal, drupalSettings);
//Check if utm are present at right side
var urlB = window.location.href;
urlB = urlB.replace("##", "#");
var tagListB = urlB.split('#');
if(tagListB.length > 1){
	var toCheck = tagListB[1];
	var checkArray = toCheck.split("?utm");	
	if(checkArray.length > 1){
		var tagB = urlB.substring(urlB.lastIndexOf("#")+1,urlB.lastIndexOf("?"));
		var newUrl = urlB.replace("##", "#");
		newUrl = newUrl.replace("#" + tagB, "");
		newUrl= newUrl + "#" + tagB;
		window.location.href = newUrl;
	}
}
//No utm tag at incorect position.

jQuery(window).click(function(e) {
	var container = jQuery("#block-languageswitcher .links");

	if (!container.is(e.target) && container.has(e.target).length === 0) 
	{
	jQuery('#block-languageswitcher .links').removeClass('open');
	}
});

jQuery('#block-languageswitcher .links').click(function() {
	jQuery('#block-languageswitcher .links').addClass('open');
});

jQuery('#block-languageswitcher .links a').click(function() {
	jQuery('#block-languageswitcher .links').removeClass('open');
});



jQuery( document ).ready(function() {
  /*if(jQuery("li.hi").hasClass("is-active")){
    jQuery('#block-homepagetitleblock img').attr('src', '/themes/amfi/images/header-banner-hi.png')
  }else{
    jQuery('#block-homepagetitleblock img').attr('src', '/themes/amfi/images/header-banner.png') 
  }*/
  jQuery(".page-node-type-article .home-tags").prependTo(".home-top-sec-wrap");

  /*language switcher code is-active code*/
  if (jQuery('body').hasClass('lang-hi')){
    jQuery('#block-languageswitcher li.hi').addClass('is-active');
  }
  else if (jQuery('body').hasClass('lang-en')) {
    jQuery('#block-languageswitcher li.en').addClass('is-active'); 
  }

  //404 page margin top set
  if ( jQuery('.system-page').length ) {
    var parentElement = jQuery('.system-page').parents('.home-top-sec-wrap');
    parentElement.css('margin-top', '50px');
  }
  
  if (jQuery('body').hasClass('page-node-type-article')){ 
    jQuery('.custom-search-block input#edit-criteria-or').attr("placeholder", Drupal.t('Have a specific question? Type here'));
	
	// Read More Functionality
	var s = jQuery(".article-content .field--name-body").html();
	var charcount=0;
	if(jQuery('#block-languageswitcher .links li.is-active').attr('hreflang')=="ta"){
		charcount=70;
	}
	else{
		charcount=130;
	}

	if (s.split(' ').length > charcount) { 
		jQuery(".article-content .field--name-body").html(s.split(' ').slice(0,charcount).join(' '));
		jQuery( ".article-content .field--name-body" ).append('<a href="#" class="read-more">'+Drupal.t("Read more")+'</a>');		
	}

	jQuery(document).on('click', 'a.read-more', function(){ 
		jQuery(".article-content .field--name-body").html(s);
		jQuery( ".article-content .field--name-body" ).append('<a href="#" class="read-less">'+Drupal.t("Read less")+'</a>');
	});
	jQuery(document).on('click', 'a.read-less', function(){ 
		var s = jQuery(".article-content .field--name-body").html();
		jQuery(".article-content .field--name-body").html(s.split(' ').slice(0,charcount).join(' '));
		jQuery( ".article-content .field--name-body" ).append('<a href="#" class="read-more">'+Drupal.t("Read more")+'</a>');
	});
  }     
});

jQuery('.home-tags').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  centerMode: false,
  variableWidth: true
});

jQuery(document).ready(function(){
  window.selectedTags = [
  ];

  var getParam = 0;
    if(jQuery("#bucket-name").length == 0){
      setTimeout(function(){
         var url = window.location.href;
          url = url.replace("##", "#");
          var tagList = url.split('#');
          if (tagList.length > 1) {
            var tag = tagList[1];
            var hashtag = "#" + tagList[1];
            var matchFound = 0;
            jQuery('.vocabulary-main-bucket a').each(function () {
              if (jQuery(this).html().trim() == decodeURIComponent(tag) || jQuery(this).html().trim() == decodeURIComponent(hashtag)) {
                jQuery(this).parent().parent().addClass('active');
                getParam = jQuery(this).parent().attr('data-id');
                matchFound = 1;
              }
            });

            if(matchFound == 0){
            	if(jQuery(".vocabulary-main-bucket[data-id=282]").length > 0){
	              getParam = 282;
	            }else{
	              getParam = 283;
	            }
            }
          }else{
            
			if(jQuery(".vocabulary-main-bucket[data-id=282]").length > 0){
              getParam = 282;
            }else if (jQuery(".vocabulary-main-bucket[data-id=327]").length > 0) {
			  getParam = 327;	
			}else if (jQuery(".vocabulary-main-bucket[data-id=344]").length > 0) {
			  getParam = 344;	
			}else if (jQuery(".vocabulary-main-bucket[data-id=407]").length > 0) {
			  getParam = 407;	
			}else if (jQuery(".vocabulary-main-bucket[data-id=415]").length > 0) {
			  getParam = 415;	
			}else{
              getParam = 283;
            }
          }
          
        var termId = getParam;
        jQuery(".vocabulary-main-bucket[data-id=" + termId + "]").parent().addClass('active');
       
        window.selectedTags.push(termId);

        jQuery('.view-display-id-page_1 .views-row').fadeOut("500");
        jQuery('.bucket-mapping[data-attr-bucket=' + termId + ']').each(function(){
          var article = jQuery(this).attr("data-attr-article");
          jQuery('article[data-history-node-id = ' + article + ']').slice(0,6).parent().fadeIn(500);
        });

        jQuery('.vocabulary-main-bucket a').click(function () {
          window.selectedTags = [
          ];
          var termId = jQuery(this).parent().attr('data-id');
          if(jQuery("#bucket-name").length < 1){
            jQuery('.vocabulary-main-bucket').parent().removeClass('active');     
            jQuery(this).parent().parent().addClass('active');
            window.selectedTags.push(termId);

            jQuery('.view-display-id-page_1 .views-row').fadeOut("500");
            jQuery('.bucket-mapping[data-attr-bucket=' + termId + ']').each(function(){
              var article = jQuery(this).attr("data-attr-article");
              jQuery('article[data-history-node-id = ' + article + ']').slice(0,6).parent().fadeIn(500);
            });
          }
        });

        jQuery('.close-tag').click(function () {
          var termId = jQuery(this).parent().attr('data-id');
          if(jQuery("#bucket-name").length < 1){
            window.selectedTags.splice(window.selectedTags.indexOf(termId), 1);
            jQuery(this).parent().parent().removeClass('active');
            jQuery('.view-display-id-page_1 .views-row').fadeOut("500");
            
            for(var i = 0; i < window.selectedTags.length; i++){
                jQuery('.bucket-mapping[data-attr-bucket=' + window.selectedTags[i] + ']').each(function(){
                  var article = jQuery(this).attr("data-attr-article");
                  jQuery('article[data-history-node-id = ' + article + ']').slice(0,6).parent().fadeIn(500);
                });
            }
            if(window.selectedTags.length == 0){
              jQuery('.view-display-id-page_1 .views-row').slice(0,6).fadeIn(500);
            }
          }
        });

      }, 100);
    }else{
      setTimeout(function(){
          jQuery(".field--name-field-main-bucket").hide();
          jQuery('.vocabulary-main-bucket a').click(function () {
            window.selectedTags = [];
            var termId = jQuery(this).parent().attr('data-id');
            var path = jQuery("#home-path").html() + "#" + jQuery(this).html().trim();
            window.location = path;
          });

          jQuery('.close-tag').click(function () {
            var termId = jQuery(this).parent().attr('data-id');
            var path = jQuery("#home-path").html() + "?bucket=" + termId;
            window.location = path;
          });

          jQuery('.bucket-mapping').each(function(){
            var bucket = jQuery(this).attr("data-attr-bucket");
            jQuery('.vocabulary-main-bucket[data-id=' + bucket + ']').parent().addClass("active");
          });
      }, 100);
    }

  jQuery(".play-thumb").click(function(){
    window.location.href = "http://" + window.location.host + jQuery(this).parent().parent().attr("about");
  });
  
  jQuery('#block-languageswitcher .links li a').click(function(e) { 
		if (jQuery('body').hasClass('path-search')){ 
		 var lang=jQuery(this).attr("hreflang");
		 var str=window.location.href;
		 var res = str.split("language");
		 res[1]="language%3A"+lang;
		 var url=res[0]+res[1];
		 url = url.split("/");
		 url[3]=lang;
		 url=url[0]+"//"+url[1]+"/"+url[2]+"/"+url[3]+"/"+url[4]+"/"+url[5];
		 window.location = url;
		 return false;
		}
   });
   
   if(window.navigator.userAgent.indexOf('Trident/') > 0)
		{
			jQuery(function(){
				var div = jQuery('#header');

				var divPosTop = div.offset().top;
				var win = jQuery(window);
				win.scroll(function(e){
				var scrollTop = win.scrollTop();
				if(scrollTop >= divPosTop){
				div.css({position:'fixed'});
				}else if(div.css('position') === 'fixed'){
				div.css({position:''});}
				if (divPosTop >= jQuery('#header').offset().top){
					div.css({position:''});
				}
				});
				});
		}
		
	
	/* Code for tracking of calculator Clicks Start here*/
	jQuery('#inflation-calculator').click(function(){if (jQuery('#only-one .accordion-inflation').hasClass('open-calculator')){dataLayer.push({ 'event': 'Calculator',' CalculatorName': 'Inflation Calculator' });}});
	jQuery('#sip-calculator').click(function(){if (jQuery('#only-one .accordion-sip').hasClass('open-calculator')){dataLayer.push({ 'event': 'Calculator',' CalculatorName': 'SIP Calculator' });}});
	jQuery('#goal-sip-calculator').click(function(){if (jQuery('#only-one .accordion-goal').hasClass('open-calculator')){dataLayer.push({ 'event': 'Calculator',' CalculatorName': 'Goal SIP Calculator' });}});
	/* Code for tracking of calculator Clicks End here*/

});
