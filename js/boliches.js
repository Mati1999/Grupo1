//CARD PRODUCTO------------------------//
class CardBoliche extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <div class="boliche p-2">
        <div class="boliches card  m-auto p-3">
            <div class="row no-gutters">
                <!--imagen-->
                <div class="imagen col-md-4">
                  <img src="" class="boliche card-img" alt="...">
                </div>
                <!--texto-->
              <div class="col-md-8">
                <div class="boliche card-body">
                  <h5 class="boliche card-title"></h5>
                  <p class="boliche card-text"></p>
                  <p class="boliche location"> <ion-icon name="pin"></ion-icon> Ubicación </p>
                </div>
                <div class="boliche boton">
                  <p class="text-right align-b"><button type="button" class="btn-primary col-lg-4 col-md-3 p-2"> AGREGAR AL CARRITO</button></p>
                </div>
              </div>

            </div>
      </div>
    </div>
    `
  }
};

window.customElements.define('card-boliche', CardBoliche);

//ITEM CARRITO-------------------------//
class ItemCarrito extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <li class="list-group-item">
      <button class="btn quitar-item-carrito" style="position: absolute; right: 0">
        <ion-icon name="close"></ion-icon>
      </button>
      <h5 class="item-title"></h5>
      <p class="item-description"></p>
      <p class="item-price"></p>
      <input class="form-control item-amount" type="number" value=1 placeholder="cantidad">
    </li>
    `
  }
};

window.customElements.define('item-carrito', ItemCarrito);


$( window ).on( "load", function() {

  //GET BOLICHES ------------------------------------------------------------
  const requestBoliches = new XMLHttpRequest();

  requestBoliches.open('GET', 'http://localhost:8081/boliches/getBoliches', true);
  requestBoliches.send();
  requestBoliches.onreadystatechange = function () {
    if(this.readyState == 4 && this.status == 200) {

      var bolichesJson = JSON.parse(this.response);
      var boliches = document.getElementById("bolichesList");

      //Create component for each product in the repsonse
      for(var i=0; i < bolichesJson.length; i++) {
        //Create a new boliche
        let boliche = document.createElement("card-boliche");

        boliche.setAttribute("id", bolichesJson[i].id_boliche);
        boliches.appendChild(boliche);

        boliche.getElementsByClassName("card-img")[0].setAttribute('src', '../img/' + bolichesJson[i].imagen);
        boliche.getElementsByClassName("card-title")[0].innerText = bolichesJson[i].nombre;
        boliche.getElementsByClassName("card-text")[0].innerText = bolichesJson[i].domicilio;
      }

    }
  }

  var carritoArray = [];

  //CALCULAR TOTAL E ITEMS COUNT----------------------------------------------
  function calcularItemCountYTotal() {
    let items = document.querySelectorAll('.lista-carrito item-carrito');
    let count = document.querySelectorAll('.lista-carrito item-carrito').length;
    document.querySelector('.item-count').innerHTML = count;

    let total = 0;
    for (var i = 0; i < count; i++) {
      let price =  $(items[i]).find('.item-price').text();
      price = price.replace('$', "");
      let amount = $(items[i]).find('.item-amount').val();
      let totalItem = Number(price) * Number(amount);
      total = total + totalItem;
    }

    document.querySelector('.precio-total').innerText = "Total $" + total;
  };

  //QUITAR PRODUCTO DEL CARRITO----------------------------------------------
  $(document).on("click", ".quitar-item-carrito", function(){
    let removeItem = this.closest('item-carrito');
    let removeItemId = removeItem.getAttribute('iditemcarrito');
    document.querySelector('.lista-carrito ul').removeChild(removeItem);

    let enableAddButton = $("card-producto#"+removeItemId).find(".agregar");
    console.log(enableAddButton);
    enableAddButton.text("Agregar al carro");
    enableAddButton.removeClass("disabled");

    calcularItemCountYTotal();
  });

  //AGREGAR PRODUCTO AL CARRITO----------------------------------------------
  $(document).on("click", ".card .agregar", function(){
    let card = this.closest('card-producto');
    let item = document.createElement("item-carrito");
    item.setAttribute("idItemCarrito", card.getAttribute("id"));

    document.querySelector('.lista-carrito ul').appendChild(item);
    item.getElementsByClassName("item-title")[0].innerText = $(card).find(".card-title").text();
    item.getElementsByClassName("item-price")[0].innerText = $(card).find(".card-price").text();
    this.innerHTML = "Agregado";
    this.classList.add('disabled');

    calcularItemCountYTotal();
  });

  //CALCULAR TOTAL CUANDO SE CAMBIA LA CANTIDAD -----------------------------
  $(document).on("keyup", ".item-amount", function(){
    calcularItemCountYTotal();
  });
});
