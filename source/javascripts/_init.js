
$(document).ready(function () {
  // initialization of carousel
  $.HSCore.components.HSCarousel.init('.js-carousel');

  // initialization of masonry
  $('.masonry-grid').imagesLoaded().then(function () {
    $('.masonry-grid').masonry({
      columnWidth: '.masonry-grid-sizer',
      itemSelector: '.masonry-grid-item',
      percentPosition: true
    });
  });

  // initialization of scroll animation
  $.HSCore.components.HSOnScrollAnimation.init('[data-animation]');

  // initialization of go to
  $.HSCore.components.HSGoTo.init('.js-go-to');

  // initialization of header's height equal offset
  $.HSCore.helpers.HSHeightCalc.init();
  $.HSCore.components.HSDatepicker.init('#datepickerDefault');

});



$(window).on('load', function () {
  // initialization of header
  $.HSCore.components.HSHeader.init($('#js-header'));
  $.HSCore.helpers.HSHamburgers.init('.hamburger');

  // initialization of cubeportfolio
  $.HSCore.components.HSCubeportfolio.init('.cbp');
});
