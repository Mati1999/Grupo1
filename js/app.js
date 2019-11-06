//PRODUCTOS------------------------//
// Init Isotope
var $grid = $('.grid').isotope({
  itemSelector: '.card',
  masonry: {
    gutter: 15,
  }
});

// filter items on button click
$(document).on("click", ".filters li a", function(){
  var selector = $(this).attr('data-filter');
  $grid.isotope({ filter: selector });
  return false;
});
