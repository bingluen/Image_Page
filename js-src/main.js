$(document).ready(function() {
  // fix menu when passed
  $('#MainBlock')
    .visibility({
      once: false,
      onBottomPassed: function() {
        $('.fixed.menu').transition('fade in');
      },
      onBottomPassedReverse: function() {
        $('.fixed.menu').transition('fade out');
      },
      offset: 60
    });

});
