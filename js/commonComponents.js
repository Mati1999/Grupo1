//COMMON HEADER------------------------//
class CustomHeader extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <header class="main-header">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <img src="../img/favicon.png" style="width: 32px; height:32px;" alt="">
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
                <a class="dropdown-item" href="preg_frequentes.html">Preguntas Frecuentes</a>
                <a class="dropdown-item" href="contact_us.html">Contactános</a>
            </li>
          </ul>
        </div>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link" href="login.html">LOGIN </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
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
