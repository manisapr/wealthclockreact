jQuery(function($) {
  $.ajax({
    'type':'GET',
    'url':'https://s3.ap-south-1.amazonaws.com/mutualfundsahihaiprod/live_analytics.json',
    'dataType':'json',
    'success':function(msg) {
      if ($('body').hasClass('path-frontpage'))  {
        var totalvisitor = msg.Sessions;
        var totalvisitor_num = totalvisitor.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,");
        $('#visitor-number').html(totalvisitor_num);
      }
      else {
        var pgview = msg.Pageviews ;
        var pgview_num = pgview.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,");
        $('.totalNum').html(pgview_num);
        var cal_count  = msg.Calculators;
        var cal_count_view = cal_count.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,");
        $('.calculatedNum').html(cal_count_view);
        var totalnumberoffolios = $('#folio').html();
        $('.folio').html(totalnumberoffolios);
      }
    },
    'error':function(msg) {
      // alert("Error retriving in function");
    }
});

});
