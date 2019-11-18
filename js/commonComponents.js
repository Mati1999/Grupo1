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
                <a class="dropdown-item" href="#" data-toggle="modal" data-target="#contacto">Contactános</a>
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
          <button class="btn btn-outline-dark" style="border-radius: 10px;" data-pushbar-close> <ion-icon name="close"></ion-icon></button>
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
                <li class="nav-item"><a class="nav-link" href="#signup-tab" data-toggle="tab" role="tab" aria-selected="true"><i class="czi-user mr-2 mt-n1"></i>Registráte</a></li>
              </ul>
              <button class="close" type="button" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
            </div>
               <!-- LOGIN -->
            <div class="modal-body tab-content">
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
                <div class="text-center p-2">
                  <button class="btn btn-outline-dark btn-lg" type="submit">Log in</button>
                </div>
              </form>
               <!-- SIGNUP -->
              <form class="needs-validation tab-pane fade" autocomplete="off" novalidate="" id="signup-tab">
              <div class="form-row">
                <div class="form-group col-lg-6 col-12 pr-0 pl-0">
                  <label for="su-name">Nombre</label>
                  <input class="form-control" type="text" id="su-name" placeholder="Nombre" required="">
                  <div class="invalid-feedback">Porfavor, ingrese su nombre.</div>
                </div>
                <div class="form-group col-lg-6 col-12 pr-0">
                  <label for="su-last_name">Apellido</label>
                  <input class="form-control" type="text" id="su-name" placeholder="Apellido" required="">
                  <div class="invalid-feedback">Porfavor, ingrese su apellido.</div>
                </div>
                </div>
                <div class="form-group">
                  <label for="su-email">Fecha de nacimiento</label>
                  <input class="form-control" type="email" id="su-email" placeholder="AAAA/MM/DD" required="">
                  <div class="invalid-feedback">Porfavor, ingrese una fecha válida.</div>
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
                    <!-- <label class="password-toggle-btn">
                      <input class="custom-control-input" type="checkbox"><i class="czi-eye password-toggle-indicator"></i><span class="sr-only">Show password</span>
                    </label> -->
                  </div>
                </div>
                <div class="form-group">
                  <label for="su-password-confirm">Confirmar contraseña</label>
                  <div class="password-toggle">
                    <input class="form-control" type="password" id="su-password-confirm" required="" placeholder="********">
                  </div>
                </div>
                <div class="form-row">
                <div class="form-group col-lg-4 col-12 pl-2">
                  <label for="su-name">País</label>
                  <input class="form-control" type="text" id="su-name" placeholder="País" required="">
                </div>
                <div class="form-group col-lg-4 col-12 pl-2">
                  <label for="su-name">Ciudad</label>
                  <input class="form-control" type="text" id="su-name" placeholder="Ciudad" required="">
                </div>
                <div class="form-group col-lg-4 col-12 pl-2">
                  <label for="su-name">Provincia</label>
                  <input class="form-control" type="text" id="su-name" placeholder="Provincia" required="">
                </div>
                </div>
                <div class="form-group col-lg-12 col-12">
                  <label for="su-name">Direccion</label>
                  <input class="form-control" type="text" id="su-name" placeholder="Direccion" required="">
                  <div class="invalid-feedback">Porfavor, ingrese una dirección válida.</div>
                </div>
                <div class="text-center p-2">
                  <button class="btn btn-outline-dark btn-lg" type="submit">Registráte</button>
                </div>
              </form>
          </div>
        </div>
       </div>
      </div>
    </div>

    <!-- CONTACTO -->
    <div class="modal fade" id="contacto" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-body">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5>Envianos tu pregunta</h5>
              <button class="close" type="button" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
            </div>
               <!-- LOGIN -->
            <div class="modal-body tab-content">
              <form class="needs-validation tab-pane fade active show" autocomplete="off" novalidate="" id="signin-tab">
                <div class="form-groupalign-center ">
                  <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-user bigicon"></i></span>
                  <div class="m-auto">
                      <input id="name" name="name" type="text" placeholder="Nombre" class="form-control">
                  </div>
                </div>
                <div class="form-group align-center ">
                  <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-envelope-o bigicon"></i></span>
                  <div class="m-auto">
                      <input id="email" name="email" type="text" placeholder="Email" class="form-control">
                  </div>
                </div>
                <div class="form-group align-center ">
                  <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-pencil-square-o bigicon"></i></span>
                  <div class="m-auto">
                      <textarea class="form-control" id="message" name="message" placeholder="Dejanos tu pregunta y te responderemos en breve." rows="7"></textarea>
                  </div>
                </div>
                <div class="form-group align-center ">
                  <div class="text-center p-2">
                      <button type="submit" class="btn btn-outline-dark btn-lg">ENVIAR</button>
                  </div>
                </div>
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
        <div class="container-fluid col-12 col-md-4 col-lg-4 d-flex flex-column contact">
          <h5>ARGENTINA</h5>
          <p >
            Av. Arístides Villanueva 711, Mendoza.
          </p>
        </div>
        <div class="container-fluid col-12 col-md-4 col-lg-4 d-flex flex-column contact">
        <h5>
        Descargá la APP móvil
        </h5>
        <div class="d-flex .flex-wrap justify-content-center">

        <a href="#">
        <img class="pl-2" width=150px height=45px src="../img/google-play.png" alt="">
        </a>

        <a href="#">
        <img class="pl-2" width=150px height=45px src="../img/app-store.png" alt="">
        </a>

        </div>
        </div>
        <div class="container-fluid col-12 col-md-4 col-lg-4 d-flex flex-column contact">
          <h5>SEGUÍNOS EN NUETRAS REDES SOCIALES</h5>
          <div class="d-flex .flex-wrap justify-content-center">
            <a href="https://www.facebook.com/Hoy-Se-Sale-103355724469349/?modal=admin_todo_tour">
              <ion-icon name="logo-facebook" size="large"></ion-icon>
            </a>
            <a href="https://www.instagram.com/hoysesale1.9/?hl=es-la">
              <ion-icon name="logo-instagram" size="large"></ion-icon>
              </a>
            <a href="https://twitter.com/HoySeSale3">
              <ion-icon name="logo-twitter" size="large"></ion-icon>
            </a>
            <a href="https://www.linkedin.com/in/hoy-sesale-35b45b198/">
              <ion-icon name="logo-linkedin" size="large"></ion-icon>
            </a>
          </div>
        </div>
      </div>

      <div class="container-fluid copyright">
        <p >
          Copyright Hoy Se Sale 2019
        </p>
      </div>
    </footer>
    `
  }
};

window.customElements.define('custom-footer', CustomFooter);
