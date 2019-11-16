//COMMON HEADER------------------------//
class CustomHeader extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <header class="common-header">
      <nav class="navbar navbar-expand-lg ">
        <ion-icon name="beer" size="large" style="color:white;"></ion-icon>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <ion-icon name="funnel" size="large" style="color:white"></ion-icon>
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
              <a class="nav-link bubble" href="#" data-toggle="modal" data-target="#loginyrg">
                <ion-icon name="person" size="large"></ion-icon>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link bubble" href="#" data-pushbar-target="pushbar-carrito">
                <ion-icon name="cart" size="large"></ion-icon>
              </a>
              <p class="item-count bubble">0</p>
            </li>
          </ul>
        </div>

      </nav>

      <!-- CONTENIDO DE PUSHBAR CARRITO ----------------------------------------------->
      <div data-pushbar-id="pushbar-carrito" class="pushbar from_right pushbar-carrito">
        <div class="btn-cerrar derecha">
          <button data-pushbar-close> <ion-icon name="close"></ion-icon></button>
        </div>

        <h4 class="tituloCarrito">Carrito de Compras</h4>

        <div class="lista-carrito" id="lista-carrito">

        </div>

        <div class="total">
          <span class="precio-total">Total: $</span>
          <span>0</span>
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
      <div class="container-fluid row contact">
        <div class="container-fluid col-12 col-md-6 col-lg-6 d-flex flex-column contact">
          <h5>MENDOZA</h5>
          <p >
            Argentina
          </p>
        </div>
        <div class="container-fluid col-12 col-md-6 col-lg-6 d-flex flex-column contact">
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
      </div>

      <div class="container-fluid copyright">
        <p >
          Copyright Your Website 2019
        </p>
      </div>
    </footer>
    `
  }
};

window.customElements.define('custom-footer', CustomFooter);
