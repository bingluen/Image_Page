$(document).ready(function() {
    // boots scrollIt
    $.scrollIt()

    //updateContainerSize

    //$('#driverTaipei').modal('show')

    $('[data-collection]').click(function() {
      $("#" + $(this).data('collection')).modal('show');
      var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        loop: true
      });
    });

});
