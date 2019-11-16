$( window ).on( "load", function() {

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

  //CARRITO-----------------------//
  //PUSHBAR
  class Pushbar {
    constructor(config = { overlay: true, blur: false }) {
      this.activeBar = null;
      this.overlay = false;

      if (config.overlay) {
        this.overlay = document.createElement('div');
        this.overlay.classList.add('pushbar_overlay');
        document.querySelector('body').appendChild(this.overlay);
      }

      if (config.blur) {
        const mainContent = document.querySelector('.pushbar_main_content');
        if (mainContent) {
          mainContent.classList.add('pushbar_blur');
        }
      }

      this.bindEvents();
    }

    get opened() {
      const { activeBar } = this;
      return Boolean(activeBar instanceof HTMLElement && activeBar.classList.contains('opened'));
    }

    get activeBarId() {
      const { activeBar } = this;
      return activeBar instanceof HTMLElement && activeBar.getAttribute('data-pushbar-id');
    }

    static dispatchOpen(pushbar) {
      const event = new CustomEvent('pushbar_opening', { bubbles: true, detail: { pushbar } });
      pushbar.dispatchEvent(event);
    }

    static dispatchClose(pushbar) {
      const event = new CustomEvent('pushbar_closing', { bubbles: true, detail: { pushbar } });
      pushbar.dispatchEvent(event);
    }

    static findElementById(pushbarId) {
      return document.querySelector(`[data-pushbar-id="${pushbarId}"]`);
    }

    handleOpenEvent(e) {
      e.preventDefault();
      const pushbarId = e.currentTarget.getAttribute('data-pushbar-target');
      if (pushbarId) {
        this.open(pushbarId);
      }
    }

    handleCloseEvent(e) {
      e.preventDefault();
      this.close();
    }

    handleKeyEvent(e) {
      if (this.opened && e.keyCode === 27) {
        this.close();
      }
    }

    bindEvents() {
      const triggers = document.querySelectorAll('[data-pushbar-target]');
      const closers = document.querySelectorAll('[data-pushbar-close]');

      triggers.forEach(trigger => trigger.addEventListener('click', e => this.handleOpenEvent(e), false));
      closers.forEach(closer => closer.addEventListener('click', e => this.handleCloseEvent(e), false));

      if (this.overlay) {
        this.overlay.addEventListener('click', e => this.handleCloseEvent(e), false);
      }
      document.addEventListener('keyup', e => this.handleKeyEvent(e));
    }

    open(pushbarId) {
      // Current bar is already opened
      if (String(pushbarId) === this.activeBarId && this.opened) {
        return;
      }

      // Get new pushbar target
      const pushbar = Pushbar.findElementById(pushbarId);

      if (!pushbar) return;

      // Close active bar (if exists)
      if (this.opened) {
        this.close();
      }

      Pushbar.dispatchOpen(pushbar);
      pushbar.classList.add('opened');

      const Root = document.querySelector('html');
      Root.classList.add('pushbar_locked');
      Root.setAttribute('pushbar', pushbarId);
      this.activeBar = pushbar;
    }

    close() {
      const { activeBar } = this;
      if (!activeBar) return;

      Pushbar.dispatchClose(activeBar);
      activeBar.classList.remove('opened');

      const Root = document.querySelector('html');
      Root.classList.remove('pushbar_locked');
      Root.removeAttribute('pushbar');

      this.activeBar = null;
    }
  };

  var pushbar = new Pushbar({
    blur:true,
    overlay:true
  });

  //QUITAR PRODUCTO DEL CARRITO
  function quitarProducto() {

    var listaCarrito = document.querySelector('.lista-carrito');
    var removeProductButtons = document.querySelectorAll('.lista-carrito .card .agregar');


    for (var i=0; i < removeProductButtons.length; i++) {

      removeProductButtons[i].innerHTML = "Quitar"
      removeProductButtons[i].classList.remove("agregar");
      removeProductButtons[i].classList.add("quitar");

      removeProductButtons[i].addEventListener('click', function(){
        console.log(this);
        console.log(this.closest('.card'));
        listaCarrito.removeChild(this.closest('.card'));

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

      quitarProducto();

    });
  };
});

/*TO DO -----------------------------------------
1- Agregar la burbuja con la cantidad de items en el cart.
2- Habilitar en la lista de productos cuando se quita un elemento.
*/
