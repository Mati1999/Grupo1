//COMMON HEADER------------------------//
class CustomHeader extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <header class="common-header">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <ion-icon name="beer" size="large" style="color:gray;"></ion-icon>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <a class="nav-link" href="index.html">HOME <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                PRODUCTOS
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="products.html">Bebidas</a>
                <a class="dropdown-item" href="boliches.html">Boliches</a>
                <a class="dropdown-item" href="promociones.html">Promociones</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                CONTACTO
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="preg_frecuentes.html">Preguntas Frecuentes</a>
                <a class="dropdown-item" href="contact_us.html">Contactános</a>
            </li>
          </ul>
        </div>

        <div class="navbar-collapse navbar-user">
          <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <a class="nav-link" href="#" data-pushbar-target="pushbar-carrito">
                  <ion-icon name="cart" size="large"></ion-icon>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#" data-toggle="modal" data-target="#loginyrg">
                  <ion-icon name="person" size="large"></ion-icon>
                </a>
              </li>
          </ul>
        </div>

      </nav>

      <!-- CONTENIDO DE PUSHBAR CARRITO ----------------------------------------------->
      <div data-pushbar-id="pushbar-carrito" class="pushbar from_right pushbar-carrito">
        <div class="btn-cerrar derecha">
          <button data-pushbar-close> <ion-icon name="close"></ion-icon></button>
        </div>

        <p class="tituloCarrito">Carrito de Compras</p>

        <div class="item">
          <img src="../img/bebida-1.jpeg" class="card-img-top" alt="...">
          <div class="textos">
            <p class="nombre-item">Combo N°1</p>
            <p>$300</p>
          </div>
        </div>

        <div class="item">
          <img src="../img/bebida-2.jpg" class="card-img-top" alt="...">
          <div class="textos">
            <p class="nombre-item">Combo N°2</p>
            <p>$600</p>
          </div>
        </div>

        <div class="total">
          <p class="precio-total">Total:</p>
          <p>$900</p>
        </div>

      </div>
      <!------------------------------------------------------------------------------->

    </header>

    <!-- LOGIN AND SIGNUP -->
    <div class="modal fade" id="loginyrg" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-body">

                  <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <ul class="nav nav-tabs card-header-tabs" role="tablist">
                          <li class="nav-item"><a class="nav-link active" href="#signin-tab" data-toggle="tab" role="tab" aria-selected="false"><i class="czi-unlocked mr-2 mt-n1"></i>Log in</a></li>
                          <li class="nav-item"><a class="nav-link" href="#signup-tab" data-toggle="tab" role="tab" aria-selected="true"><i class="czi-user mr-2 mt-n1"></i>Sign up</a></li>
                        </ul>
                        <button class="close" type="button" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                      </div>
                      <div class="modal-body tab-content py-4">
                         <!-- LOGIN -->
                        <form class="needs-validation tab-pane fade active show" autocomplete="off" novalidate="" id="signin-tab">
                          <div class="form-group">
                            <label for="si-email">Correo electrónico</label>
                            <input class="form-control" type="email" id="si-email" placeholder="tuCorreo@ejemplo.com" required="">
                            <div class="invalid-feedback">Profavor, ingrese un correo válido</div>
                          </div>
                          <div class="form-group">
                            <label for="si-password">Contraseña</label>
                            <div class="password-toggle">
                              <input class="form-control" type="password" id="si-password" required="" placeholder="********">
                              <label class="password-toggle-btn">
                                <input class="custom-control-input" type="checkbox"><i class="czi-eye password-toggle-indicator"></i><span class="sr-only">Show password</span>
                              </label>
                            </div>
                          </div>
                          <div class="form-group d-flex flex-wrap justify-content-between">
                            <div class="custom-control custom-checkbox mb-2">
                              <input class="custom-control-input" type="checkbox" id="si-remember">
                              <label class="custom-control-label" for="si-remember">Recordarme</label>
                            </div><a class="font-size-sm" href="#">Olvidaste tu contraseña?</a>
                          </div>
                          <button class="btn btn-primary btn-block btn-shadow" type="submit">Log in</button>
                        </form>
                         <!-- SIGNUP -->
                        <form class="needs-validation tab-pane fade" autocomplete="off" novalidate="" id="signup-tab">
                          <div class="form-group">
                            <label for="su-name">Nombre completo</label>
                            <input class="form-control" type="text" id="su-name" placeholder="Nombre y Apellido" required="">
                            <div class="invalid-feedback">Porfavor, ingrese su nombre completo.</div>
                          </div>
                          <div class="form-group">
                            <label for="su-email">Correo electrónico</label>
                            <input class="form-control" type="email" id="su-email" placeholder="tuCorreo@ejemplo.com" required="">
                            <div class="invalid-feedback">Porfavor, ingrese un correo válido.</div>
                          </div>
                          <div class="form-group contra">
                            <label for="su-password">Contraseña</label>
                            <div class="password-toggle">
                              <input class="form-control" type="password" id="su-password" required="" placeholder="********">
                              <label class="password-toggle-btn">
                                <input class="custom-control-input" type="checkbox"><i class="czi-eye password-toggle-indicator"></i><span class="sr-only">Show password</span>
                              </label>
                            </div>
                          </div>
                          <div class="form-group">
                            <label for="su-password-confirm">Confirmar contraseña</label>
                            <div class="password-toggle">
                              <input class="form-control" type="password" id="su-password-confirm" required="" placeholder="********">
                              <label class="password-toggle-btn">
                                <input class="custom-control-input" type="checkbox"><i class="czi-eye password-toggle-indicator"></i><span class="sr-only">Show password</span>
                              </label>
                            </div>
                          </div>
                          <button class="btn btn-primary btn-block btn-shadow" type="submit">Sign up</button>
                        </form>
                      </div>
                    </div>
                  </div>
          </div>
    </div>

    `

  }
};

window.customElements.define('custom-header', CustomHeader);

//COMMON FOOTER------------------------//
class CustomFooter extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <footer>
      <div class="container-fluid bg-dark row contact">
        <div class="container-fluid col-12 col-md-4 col-lg-4 d-flex flex-column contact">
          <h5>MENDOZA</h5>
          <p >
            2215 John Daniel Drive <br>
            Clark, MO 65243
          </p>
        </div>
        <div class="container-fluid col-12 col-md-4 col-lg-4 d-flex flex-column contact">
          <h5>SEGUÍNOS EN NUETRAS REDES SOCIALES</h5>
          <div class="d-flex .flex-wrap justify-content-center">
            <a href="#">
              <ion-icon name="logo-facebook" size="large"></ion-icon>
            </a>
            <a href="#">
              <ion-icon name="logo-googleplus" size="large"></ion-icon>
            </a>
            <a href="#">
              <ion-icon name="logo-twitter" size="large"></ion-icon>
            </a>
            <a href="#">
              <ion-icon name="logo-linkedin" size="large"></ion-icon>
            </a>
            <a href="#">
              <ion-icon name="basketball" size="large"></ion-icon>
            </a>
          </div>
        </div>
        <div class="container-fluid col-12 col-md-4 col-lg-4 d-flex flex-column contact">
          <h5>ABOUT PREVIA</h5>
          <p >
            Freelance is a free and opensource
            landing page theme created to
            <span style="color: #18BC9C">your free personal use</span>.
          </p>
        </div>
      </div>

      <div class="container-fluid bg-dark copyright">
        <p >
          Copyright Your Website 2019
        </p>
      </div>
    </footer>
    `
  }
};

window.customElements.define('custom-footer', CustomFooter);

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
