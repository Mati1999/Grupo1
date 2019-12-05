$( window ).on( "load", function() {

  //CREATE CARDS AND LOAD SCREEN---------------------------------
  const request = new XMLHttpRequest();

  //Para poder servir los Jsons:
  //1Descargar la extension "Moesif Orign & CORS Changer" de Chrome
  request.open('GET', 'http://localhost:8080/mockdata/productos.json', true);
  request.send();

  request.onreadystatechange = function () {
    if(this.readyState == 4 && this.status == 200) {

      

    }
  }

  //SEARCH AND FILTER--------------------------------------------
  $(document).ready(function(){
    $(document).on("click", ".list-group-item", function(){

      if (this.id == 'todos') {
        $('#grid > .grid-item').fadeIn(500);
      } else {
        var $el = $('.' + this.id).fadeIn(500);
        $('#grid > .grid-item').not($el).hide();
      }
      $(".list-group-item").removeClass('active');
      $(this).addClass('active');
    });

    var search = document.getElementById('search');
    search.addEventListener('keyup', function() {
      // Declare variables
      var input, filter, grid, gridItems, title, i, txtValue;
      input = document.getElementById('search');
      filter = input.value.toUpperCase();
      grid = document.getElementById('grid');
      gridItems = grid.getElementsByClassName('grid-item');

      // Loop through all list items, and hide those who don't match the search query
      for (i = 0; i < gridItems.length; i++) {
        title = gridItems[i].getElementsByClassName('card-title')[0];
        txtValue = title.textContent || title.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          gridItems[i].style.display = "";
        } else {
          gridItems[i].style.display = "none";
        }
      }
    });

  });

  //AGREGAR Y QUITAR PRODUCTOS DEL CARRITO
  //CALCULAR ITEMS COUNT
  function calcularItemCunt() {
    var count = document.querySelectorAll('.lista-carrito .card').length;
    document.querySelector('.item-count').innerHTML = count;
  }

  //QUITAR PRODUCTO DEL CARRITO
  function quitarProducto() {

    var listaCarrito = document.querySelector('.lista-carrito');
    var removeProductButtons = document.querySelectorAll('.lista-carrito .card .agregar');

    for (var i=0; i < removeProductButtons.length; i++) {

      removeProductButtons[i].innerHTML = "Quitar"
      removeProductButtons[i].classList.remove("agregar");
      removeProductButtons[i].classList.add("quitar");

      removeProductButtons[i].addEventListener('click', function(){
        listaCarrito.removeChild(this.closest('.card'));
        calcularItemCunt();
      });
    };
  };

  //SUSCRIBE BOTONES AL EVENTO ADD
  var addProductButtons = document.querySelectorAll('.card .agregar');

  for (var i = 0; i < addProductButtons.length; i++) {

    addProductButtons[i].addEventListener('click', function() {
      item = this.closest('.card');
      var cartItem = item.cloneNode(true);

      //Agregar Item al carrito
      document.getElementById('lista-carrito').appendChild(cartItem);
      this.innerHTML = "Agregado";
      this.classList.add('disabled');

      calcularItemCunt();
      quitarProducto();

    });
  };
});
