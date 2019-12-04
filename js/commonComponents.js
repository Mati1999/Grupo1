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
              <div class="dropdown-menu animated fadeIn" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="products.html">Bebidas</a>
                <a class="dropdown-item" href="boliches.html">Boliches</a>
                <a class="dropdown-item" href="promociones.html">Promociones</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                CONTACTO
              </a>
              <div class="dropdown-menu animated fadeIn" aria-labelledby="navbarDropdown">
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
      <div class="modal-body animated slideInDown" style="padding: 0;">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content decoracionBodyLogIn1">
            <div class="modal-header decoracionHeaderLogIn decoracionHeaderLogIn1">
              <ul class="nav nav-tabs card-header-tabs" role="tablist">
                <li class="nav-item"><a class="nav-link active botonHeader" href="#signin-tab" data-toggle="tab" role="tab" aria-selected="false"><i class="czi-unlocked mr-2 mt-n1"></i>Log in</a></li>
                <li class="nav-item"><a class="nav-link botonHeader" href="#signup-tab" data-toggle="tab" role="tab" aria-selected="true"><i class="czi-user mr-2 mt-n1"></i>Registráte</a></li>
              </ul>
              <button class="close" type="button" data-dismiss="modal" aria-label="Close">
              <span class="botonDeCierre" aria-hidden="true">×</span></button>
            </div>

               <!-- LOGIN -->

            <div class="modal-body tab-content decoracionBodyLogIn">
              <form class="needs-validation tab-pane fade active show" autocomplete="off" novalidate="" id="signin-tab">
                <div class="form-group">
                  <label class="colorFuente" for="si-email">Correo electrónico</label>
                  <div class="colorDeImput d-flex">
                  <div class="iconos"><img src="../img/iconmonstr-user-5-32.png" width="80%" height="80%" alt="..."></div>
                  <input class="colorDeImput1 form-control placeHolder" type="email" id="si-email" placeholder="tuCorreo@ejemplo.com" required="">
                  <div class="invalid-feedback">Profavor, ingrese un correo válido</div>
                  </div>
                </div>
                <div class="form-group">
                  <label class="colorFuente" for="si-password">Contraseña</label>
                  <div class="colorDeImput password-toggle d-flex">
                  <div class=" iconos"><img src="../img/iconmonstr-email-12-32.png" width="80%" height="80%" alt="..."></div>
                    <input class="colorDeImput1 form-control placeHolder" type="password" id="si-password" required="" placeholder="********">
                    <label class="password-toggle-btn">
                      <input class="custom-control-input" type="checkbox"><i class="czi-eye password-toggle-indicator"></i><span class="sr-only">Show password</span>
                    </label>
                  </div>
                </div>
                <div class="form-group d-flex flex-wrap justify-content-between">
                  <div class="custom-control custom-checkbox mb-2">
                    <input class="custom-control-input" type="checkbox" id="si-remember">
                    <label class="custom-control-label colorFuente" for="si-remember">Recordarme</label>
                  </div><a class="font-size-sm colorFuente" href="#">Olvidaste tu contraseña?</a>
                </div>
                <div class="text-center p-2">
                  <button class="botonLogSign btn-lg" type="submit">Log in</button>
                </div>
              </form>

               <!-- SIGNUP -->

              <form class="needs-validation tab-pane fade" autocomplete="off" novalidate="" id="signup-tab">
              <div class="form-row">
                <div class="form-group col-lg-6 col-12 pr-0 pl-0">
                  <label class="colorFuente" for="su-name">Nombre</label>
                  <input class="form-control colorDeImput2" type="text" id="su-name" placeholder="Nombre" required="">
                  <div class="invalid-feedback">Porfavor, ingrese su nombre.</div>
                </div>
                <div class="form-group col-lg-6 col-12 pl-1">
                  <label class="colorFuente" for="su-last_name">Apellido</label>
                  <input class="form-control colorDeImput2" type="text" id="su-name" placeholder="Apellido" required="">
                  <div class="invalid-feedback">Porfavor, ingrese su apellido.</div>
                </div>
                </div>
                <div class="form-group">
                  <label class="colorFuente" for="su-email">Fecha de nacimiento</label>
                  <input class="form-control colorDeImput2" type="email" id="su-email" placeholder="AAAA/MM/DD" required="">
                  <div class="invalid-feedback">Porfavor, ingrese una fecha válida.</div>
                </div>
                <div class="form-group">
                  <label class="colorFuente" for="su-email">Correo electrónico</label>
                  <input class="form-control colorDeImput2" type="email" id="su-email" placeholder="tuCorreo@ejemplo.com" required="">
                  <div class="invalid-feedback">Porfavor, ingrese un correo válido.</div>
                </div>
                <div class="form-group contra">
                  <label class="colorFuente" for="su-password">Contraseña</label>
                  <div class="password-toggle">
                    <input class="form-control colorDeImput2" type="password" id="su-password" required="" placeholder="********">
                    <!-- <label class="password-toggle-btn">
                      <input class="custom-control-input" type="checkbox"><i class="czi-eye password-toggle-indicator"></i><span class="sr-only">Show password</span>
                    </label> -->
                  </div>
                </div>
                <div class="form-group">
                  <label class="colorFuente" for="su-password-confirm">Confirmar contraseña</label>
                  <div class="password-toggle">
                    <input class="form-control colorDeImput2" type="password" id="su-password-confirm" required="" placeholder="********">
                  </div>
                </div>
                <div class="form-row">
                <div class="form-group col-lg-4 col-12 pl-2">
                  <label class="colorFuente" for="su-name">País</label>
                  <input class="form-control colorDeImput2" type="text" id="su-name" placeholder="País" required="">
                </div>
                <div class="form-group col-lg-4 col-12 pl-2">
                  <label class="colorFuente" for="su-name">Ciudad</label>
                  <input class="form-control colorDeImput2" type="text" id="su-name" placeholder="Ciudad" required="">
                </div>
                <div class="form-group col-lg-4 col-12 pl-2">
                  <label class="colorFuente" for="su-name">Provincia</label>
                  <input class="form-control colorDeImput2" type="text" id="su-name" placeholder="Provincia" required="">
                </div>
                </div>
                <div class="form-group col-lg-12 col-12 pl-0 pr-0">
                  <label class="colorFuente" for="su-name">Direccion</label>
                  <input class="form-control colorDeImput2" type="text" id="su-name" placeholder="Direccion" required="">
                  <div class="invalid-feedback">Porfavor, ingrese una dirección válida.</div>
                </div>
                <div class="text-center p-2">
                  <button class="botonLogSign btn-lg" type="submit">Registráte</button>
                </div>
              </form>
          </div>
        </div>
       </div>
      </div>
    </div>

    <!-- CONTACTO -->

    <div class="modal fade" id="contacto" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-body animated slideInDown">
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
      <div class="container-fluid">
        <div class="container text-md-left text-center col-12 col-md-12 col-lg-8 p-0">
  ​
          <!-- Grid row -->
          <div class="row">
            <!-- columna titulo -->
            <div class="col-12 col-md-6 col-lg-6 mx-auto">
              <h5 class="titulo mt-3 mb-4 text-center">HOY SE SALE!</h5>
              <p class="text-center">
                <ion-icon name="pin"></ion-icon>
                Av. Arístides Villanueva 711, Mendoza, Argentina.
              </p>
            </div>
  ​
            <!-- Links -->
            <div class="col-12 col-md-6 col-lg-6 mx-auto text-center">
              <ul class="list-unstyled m-4">
                <li>
                  <a href="#" data-toggle="modal" data-target="#contacto">CONTACTO</a>
                </li>
                <li>
                  <a href="preg_frecuentes.html">PREGUNTAS FRECUENTES</a>
                </li>
                <li>
                  <a href="#about-us">SOBRE NOSOTROS</a>
                </li>
              </ul>
            </div>
          </div>

        </div>
  ​
        <!-- Redes Sociales Iconos -->
        <p class="social-networks text-center">
          <a href="#"><ion-icon name="logo-facebook"></ion-icon></a>
          <a href="#"><ion-icon name="logo-instagram"></ion-icon></a>
          <a href="#"><ion-icon name="logo-twitter" ></ion-icon></a>
          <a href="#"><ion-icon name="logo-linkedin"></ion-icon></a>
        </p>
  ​
        <!-- Copyright -->
        <div class="copyright text-center p-3 col-12">© 2019 Copyright:
          <a href="#">HOY SE SALE!</a>
        </div>

      </div>
  ​
    </footer>
    `
  }
};

window.customElements.define('custom-footer', CustomFooter);
