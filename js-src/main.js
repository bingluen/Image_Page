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

    // boots scrollIt
    if ($(window).width() > 320) {
      $.scrollIt({
        topOffset: -60
      })
    } else {
      $.scrollIt({
        topOffset: -40
      })
    }

    // boots sidebar
    $('#sidebar-menu').click(function() {
      $('.ui.sidebar.vertical.menu')
        .sidebar('setting', 'transition', 'overlay')
        .sidebar('toggle')
      ;
    })

    $('body').on('click','.ui.sidebar.vertical.menu > [data-scroll-nav]', function( e ) {
      $('.ui.sidebar.vertical.menu').sidebar('toggle')
    })
});
