$(document).ready(function() {
    // boots scrollIt
    $.scrollIt()

    var slideSwipe = new swipe({
      container: '.swipe-container',
      pagination: '.swipe-pagination',
      buttonPrev: '.swipe-button-prev',
      buttonNext: '.swipe-button-next'
    });

});
