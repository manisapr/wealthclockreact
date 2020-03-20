jQuery(function ($) {
  $.fn.shuffleChildren = function () {
    var parent = this[0];
    for (var index = parent.children.length; index >= 0; index--) {
      parent.appendChild(parent.children[Math.random() * index | 0]);
    }
  };

  $('.mutual-fund-icons').shuffleChildren();
});
