import logoVR from "../assets/imgs/logoVR.png"

const Home = {
  render: () => {
    return `<div class"black">
    
      <!-- NAVBAR -->
<div class="fixed-top">
<nav class="navbar navbar-dark fixed-top" style="background-color: black;">
  <div class="container-fluid">
    <a class="navbar-brand" href="home.html">
      <img src=${logoVR} alt="Logo" width="30" height="30" class="d-inline-block align-text-top">
      Grupo Supremo
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel" style="background-color: black;">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel" style="color: #79F2E6;">Menu</h5>
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="home.html">Inicio</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="carrito.html">Carrito</a>
          </li>
        </ul>
        <form class="d-flex mt-3" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-success" type="submit">Buscar</button>
        </form>
      </div>
    </div>
  </div>
  </div>
</nav>
</div>

<!-- FIN NAVBAR -->
<!-- CAROUSEL -->
<div id="carouselExample" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="imagenes/slide1.jpg" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="imagenes/slide2.jpg" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item" >
      <a href="obra_dos.html">
      <img src="imagenes/slide3.jpg"  class="d-block w-100" alt="...">
      </a>
      
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Anterio</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Siguiente</span>
  </button>
</div>         
<!-- FIN CAROUSEL -->
<!-- PRODUCTOS -->
<div  class="container text-center">
  <div class="row">
  <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
    <h2 class="sr-only">Productos</h2>
    <div>
      <h6 class="row" style="margin-left: 20px; font-size: 40; padding-bottom: 50px;">Con mayor venta</h6>
      </div>
    <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
      <div class="col" style="padding-bottom: 100px;">
      <a href="obra_uno.html" class="group">
        <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
          <img src=${logoVR} alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." class="h-full w-full object-cover object-center group-hover:opacity-75">
        </div>
        <h3 class="mt-4 text-sm text-gray-700">"Imersion"</h3>
        <h3>VR1</h3>
        <p class="mt-1 text-lg font-medium text-gray-900">$380.000 clp.</p>
      </a>
      </div>
      
      <div class="col" style="padding-bottom: 100px;">
      <a href="obra_dos.html" class="group">
        <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
          <img src=${logoVR} alt="Olive drab green insulated bottle with flared screw lid and flat top." class="h-full w-full object-cover object-center group-hover:opacity-75">
        </div>
        <h3 class="mt-4 text-sm text-gray-700">"top en ventas"</h3>
        <h3>VR2</h3>
        <p class="mt-1 text-lg font-medium text-gray-900">$400.000 clp.</p>
      </a>
      </div>

      <div class="col" style="padding-bottom: 100px;">
      <a href="obra_tres.html" class="group">
        <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
          <img src=${logoVR}>
        </div>
        <h3 class="mt-4 text-sm text-gray-700">"Primera calidad"</h3>
        <h3>VR3</h3>
        <p class="mt-1 text-lg font-medium text-gray-900">$600.000 clp.</p>
      </a>
      </div>

      <div class="col" style="padding-bottom: 100px;">
      <a href="obra_cuatro.html" class="group">
        <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
          <img src=${logoVR} alt="Hand holding black machined steel mechanical pencil with brass tip and top." class="h-full w-full object-cover object-center group-hover:opacity-75">
        </div>
        <h3 class="mt-4 text-sm text-gray-700">"segunda calidad"</h3>
        <h3>VR4</h3>
        <p class="mt-1 text-lg font-medium text-gray-900">$600.000 clp.</p>
      </a>
      </div>
    </div>
  </div>
  </div>
</div>
<!-- FIN PRODUCTOS -->
<!-- FOOTER -->
<footer class="footer-section">
  <div class="container">
      <div class="footer-cta pt-5 pb-5">
          <div class="row">
              <div class="col-xl-4 col-md-4 mb-30">
                  <div class="single-cta">
                      <i class="fas fa-map-marker-alt"></i>
                      <div class="cta-text">
                          <h4>Ubicacion</h4>
                          <span>Duoc Providencia, Chile</span>
                      </div>
                  </div>
              </div>
              <div class="col-xl-4 col-md-4 mb-30">
                  <div class="single-cta">
                      <i class="fas fa-phone"></i>
                      <div class="cta-text">
                          <h4>LLamame al</h4>
                          <span>9876543210 0</span>
                      </div>
                  </div>
              </div>
              <div class="col-xl-4 col-md-4 mb-30">
                  <div class="single-cta">
                      <i class="far fa-envelope-open"></i>
                      <div class="cta-text">
                          <h4>Nuestro correo</h4>
                          <span>mail@duoc.com</span>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div class="footer-content pt-5 pb-5">
          <div class="row">
              <div class="col-xl-4 col-lg-4 mb-50">
                  <div class="footer-widget">
                      <div class="footer-logo">
                          <a href="index.html"><img src="logo/vr.png" class="img-fluid" alt="logo"></a>
                      </div>
                      <div class="footer-text">
                          <p>Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do eiusmod tempor incididuntut consec tetur adipisicing
                          elit,Lorem ipsum dolor sit amet.</p>
                      </div>
                      <div class="footer-social-icon">
                          <span>siganos en</span>
                          <a href="#"><i class="fab fa-facebook-f facebook-bg"></i></a>
                          <a href="#"><i class="fab fa-twitter twitter-bg"></i></a>
                          <a href="#"><i class="fab fa-google-plus-g google-bg"></i></a>
                      </div>
                  </div>
              </div>
              <div class="col-xl-4 col-lg-4 col-md-6 mb-30">
                  <div class="footer-widget">
                      <div class="footer-widget-heading">
                          <h3>Nuestros Link</h3>
                      </div>
                      <ul>
                          <li><a href="#">Home</a></li>
                          <li><a href="#">about</a></li>
                          <li><a href="#">services</a></li>
                          <li><a href="#">portfolio</a></li>
                          <li><a href="#">Contact</a></li>
                          <li><a href="#">About us</a></li>
                          <li><a href="#">Our Services</a></li>
                          <li><a href="#">Expert Team</a></li>
                          <li><a href="#">Contact us</a></li>
                          <li><a href="#">Latest News</a></li>
                      </ul>
                  </div>
              </div>
              <div class="col-xl-4 col-lg-4 col-md-6 mb-50">
                  <div class="footer-widget">
                      <div class="footer-widget-heading">
                          <h3>Subscribirse</h3>
                      </div>
                      <div class="footer-text mb-25">
                          <p>para recibir boletin de ofertas</p>
                      </div>
                      <div class="subscribe-form">
                          <form action="#">
                              <input type="text" placeholder="Email Address">
                              <button><i class="fab fa-telegram-plane"></i></button>
                          </form>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
  <div class="copyright-area">
      <div class="container">
          <div class="row">
              <div class="col-xl-6 col-lg-6 text-center text-lg-left">
                  <div class="copyright-text">
                      <p>Copyright &copy; 2023, All Right Reserved </p>
                  </div>
              </div>
              <div class="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                  <div class="footer-menu">
                      <ul>
                          <li><a href="#">Home</a></li>
                          <li><a href="#">Terms</a></li>
                          <li><a href="#">Privacy</a></li>
                          <li><a href="#">Policy</a></li>
                          <li><a href="#">Contact</a></li>
                      </ul>
                  </div>
              </div>
          </div>
      </div>
  </div>
</footer>
<!-- FIN FOOTER-->
    </div>`
  },
  after_render: () => {},
}
export default Home
