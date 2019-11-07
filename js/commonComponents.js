//COMMON HEADER------------------------//
class CustomHeader extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <header class="main-header">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">ICON</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link" href="index.html">HOME <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="products.html">PRODUCTOS </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="boliches.html">BOLICHES </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="promociones.html">PROMOCIONES </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" data-toggle="modal" data-target="#loginyrg">LOGIN </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="registrate.html">REGISTRATE </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>

    <!-- Modal -->
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
    <!-- FINAL DEL MODAL -->


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
