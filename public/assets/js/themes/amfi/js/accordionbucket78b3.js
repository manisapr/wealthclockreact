jQuery(function($) {
  $(".accordionbucket .bucket-title").addClass("close-bucket");
  $(".accordionbucket").addClass("close-bucket");
  // $(".accordionbucket:first-child").addClass("open-bucket");
  // $(".accordionbucket:first-child").removeClass("close-bucket");

  $(".open-bucket .node--view-mode-your-questions").show();
  $(".close-bucket .node--view-mode-your-questions").hide();

  $(".accordionbucket .bucket-title").click(function() {
    if ($(this).hasClass("close-bucket")) {
      $(".accordionbucket .bucket-title").removeClass("open-bucket");
      $(".accordionbucket .bucket-title").addClass("close-bucket");
      $(this).parent().removeClass("close-bucket");
      $(this).parent().addClass("open-bucket");
      $(this).removeClass("close-bucket");
      $(this).addClass("open-bucket");
      $(".open-bucket .node--view-mode-your-questions").show();
      $(".close-bucket .node--view-mode-your-questions").hide();
      $(".accordionbucket").addClass("close-bucket");
    } else {
      $(this).removeClass("open-bucket");
      $(this).addClass("close-bucket");
      $(this).parent().removeClass("open-bucket");
      $(this).parent().addClass("close-bucket");
      $(".open-bucket .node--view-mode-your-questions").show();
      $(".close-bucket .node--view-mode-your-questions").hide();
    }
  });
});
