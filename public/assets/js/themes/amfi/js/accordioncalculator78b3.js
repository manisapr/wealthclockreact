jQuery(function($) {
  $(".accordion-inflation").addClass("close-calculator");
  $(".accordion-sip").addClass("close-calculator");
  $(".accordion-goal").addClass("close-calculator");
  $(".open-calculator [data-content]").show();
  $(".close-calculator [data-content]").hide();
  $(".open-calculator .calculator-article").show();
  $(".close-calculator .calculator-article").hide();

  $("#inflation-calculator [data-control]").click(function() {
    if ($(".accordion-inflation").hasClass("close-calculator")) {
      $(".accordion-inflation").removeClass("close-calculator");
      $(".accordion-inflation").addClass("open-calculator");
      $(".accordion-sip").removeClass("open-calculator");
      $(".accordion-sip").addClass("close-calculator");
      $(".accordion-goal").removeClass("open-calculator");
      $(".accordion-goal").addClass("close-calculator");
      $(".open-calculator [data-content]").show();
      $(".close-calculator [data-content]").hide();
      $(".open-calculator .calculator-article").show();
      $(".close-calculator .calculator-article").hide();
    } else {
      $(".accordion-inflation").removeClass("open-calculator");
      $(".accordion-inflation").addClass("close-calculator");
      $(".accordion-sip").removeClass("open-calculator");
      $(".accordion-sip").addClass("close-calculator");
      $(".accordion-goal").removeClass("open-calculator");
      $(".accordion-goal").addClass("close-calculator");
      $(".open-calculator [data-content]").show();
      $(".close-calculator [data-content]").hide();
      $(".open-calculator .calculator-article").show();
      $(".close-calculator .calculator-article").hide();
    }
  });

  $("#sip-calculator [data-control]").click(function() {
    if ($(".accordion-sip").hasClass("close-calculator")) {
      $(".accordion-sip").removeClass("close-calculator");
      $(".accordion-sip").addClass("open-calculator");
      $(".accordion-inflation").removeClass("open-calculator");
      $(".accordion-inflation").addClass("close-calculator");
      $(".accordion-goal").removeClass("open-calculator");
      $(".accordion-goal").addClass("close-calculator");
      $(".open-calculator [data-content]").show();
      $(".close-calculator [data-content]").hide();
      $(".open-calculator .calculator-article").show();
      $(".close-calculator .calculator-article").hide();
    } else {
      $(".accordion-sip").removeClass("open-calculator");
      $(".accordion-sip").addClass("close-calculator");
      $(".accordion-inflation").removeClass("open-calculator");
      $(".accordion-inflation").addClass("close-calculator");
      $(".accordion-goal").removeClass("open-calculator");
      $(".accordion-goal").addClass("close-calculator");
      $(".open-calculator [data-content]").show();
      $(".close-calculator [data-content]").hide();
      $(".open-calculator .calculator-article").show();
      $(".close-calculator .calculator-article").hide();
    }
  });

  $("#goal-sip-calculator [data-control]").click(function() {
    if ($(".accordion-goal").hasClass("close-calculator")) {
      $(".accordion-goal").removeClass("close-calculator");
      $(".accordion-goal").addClass("open-calculator");
      $(".accordion-sip").removeClass("open-calculator");
      $(".accordion-sip").addClass("close-calculator");
      $(".accordion-inflation").removeClass("open-calculator");
      $(".accordion-inflation").addClass("close-calculator");
      $(".open-calculator [data-content]").show();
      $(".close-calculator [data-content]").hide();
      $(".open-calculator .calculator-article").show();
      $(".close-calculator .calculator-article").hide();
    } else {
      $(".accordion-goal").removeClass("open-calculator");
      $(".accordion-goal").addClass("close-calculator");
      $(".accordion-sip").removeClass("open-calculator");
      $(".accordion-sip").addClass("close-calculator");
      $(".accordion-inflation").removeClass("open-calculator");
      $(".accordion-inflation").addClass("close-calculator");
      $(".open-calculator [data-content]").show();
      $(".close-calculator [data-content]").hide();
      $(".open-calculator .calculator-article").show();
      $(".close-calculator .calculator-article").hide();
    }
  });
});
