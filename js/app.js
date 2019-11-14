$( window ).on( "load", function() {
  
  //PRODUCTOS------------------------//
  //SEARCH AND FILTER
  $(document).ready(function(){
    var $btns = $(document).on("click", ".filters li a", function(){
      if (this.id == 'todos') {
        $('#grid > .grid-item').fadeIn(500);
      } else {
        var $el = $('.' + this.id).fadeIn(500);
        $('#grid > .grid-item').not($el).hide();
      }
      $btns.removeClass('active');
      $(this).addClass('active');
    })

    var $search = $(document).on("input", "#search", function(){
      $btns.removeClass('active');
      var matcher = new RegExp($(this).val(), 'gi');
      $('#grid > .grid-item').show().not(function(){
          return matcher.test($(this).find('.card-title').text())
      }).hide();
    })
  });

  //CARGAR PUSHBAR CARRITO
  var pushbar = new Pushbar({
    blur:true,
    overlay:true
  });

});
