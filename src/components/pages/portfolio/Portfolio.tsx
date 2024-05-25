import { Helmet, HelmetProvider } from "react-helmet-async"
import Head from "../../includes/Head"
import { Navbar } from "../../includes/Navbar"
import { Footer } from "../../includes/Footer"

const Portfolio = () => {


  return (
    <>
      <Head></Head>
      <HelmetProvider>
        <Helmet>
          <link rel="stylesheet" href="/assets/css/jCircle.css"></link>
        </Helmet>
      </HelmetProvider>
      <Navbar></Navbar>
      <section className="nosotros_banner">
        <div className="slider-item" style={{ backgroundImage: "url('/assets/img/portafolio/fondo.jpg')", backgroundPosition: '50% 16%' }}>
          <div style={{ background: '#0000009c' }}>
            <div className="container">
              <div className="row slider-text align-items-center justify-content-start ">
                <div className="col-md-12 col-sm-12 element-animate  sinpadinglados">
                  <p className="titulos font_title_bold centrar fs-60">Nuestro Portafolio</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="potafolio">
        <div className="container pt-100 pb-100">
          <ul id="tabs" className="nav nav-tabs row">
            <li className="nav-item col-12 col-lg-3 d-inline-block"><a href="/portafolio" data-target="#home1" data-toggle="tab" className="fs-30 fnt_title nav-link small text-uppercase">Web</a></li>
            <li className="nav-item col-12 col-lg-3 d-inline-block"><a href="/portafolio" data-target="#diseno" data-toggle="tab" className="fs-30 fnt_title nav-link small text-uppercase active">Diseño</a></li>
            <li className="nav-item col-12 col-lg-3 d-inline-block"><a href="/portafolio" data-target="#marketing" data-toggle="tab" className="fs-30 fnt_title nav-link small text-uppercase">Marketing</a></li>
          </ul>
          <br></br>
          <div id="tabsContent" className="tab-content">
            <div id="home1" className="tab-pane fade">
              <div className="row">
                <div className="col-lg-4 pt-30 text-center">
                  <div className="div-custom2">
                    <img src="/assets/img/portafolio/reutvi.PNG" className="img-fluid mx-auto pointer" alt="retuvi" data-toggle="modal" data-target="#exampleModalCenter"></img>
                    <p className="text-center fs-25 pt-10 fnt_title color_negro">
                      Web Retuvi
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div id="diseno" className="tab-pane fade active show">
              <div className="row pb-2">
                <div className="col-md-4 text-center pt-10 pb-10">
                  <img src="/assets/img/portafolio/diseno/ANGEL%20ROYALTY.jpg" className="img-fluid mx-auto" alt="proyecto"></img>
                  <p></p>
                </div>
                <div className="col-md-4 text-center pt-10 pb-10">
                  <img src="/assets/img/portafolio/diseno/buenfin.jpeg" className="img-fluid mx-auto" alt="proyecto"></img>
                  <p> </p>
                </div>
                <div className="col-md-4 text-center pt-10 pb-10">
                  <img src="/assets/img/portafolio/diseno/cancelesymas.jpeg" className="img-fluid mx-auto" alt="proyecto"></img>
                  <p></p>
                </div>
                <div className="col-md-4 text-center pt-10 pb-10">
                  <img src="/assets/img/portafolio/diseno/disfruta.jpeg" className="img-fluid mx-auto" alt="proyecto"></img>
                  <p></p>
                </div>
                <div className="col-md-4 text-center pt-10 pb-10">
                  <img src="/assets/img/portafolio/diseno/dra-paulina.jpeg" className="img-fluid mx-auto" alt="proyecto"></img>
                  <p></p>
                </div>
                <div className="col-md-4 text-center pt-10 pb-10">
                  <img src="/assets/img/portafolio/diseno/dr-miguel-angel.jpeg" className="img-fluid mx-auto" alt="proyecto"></img>
                  <p></p>
                </div>
                <div className="col-md-4 text-center pt-10 pb-10">
                  <img src="/assets/img/portafolio/diseno/emmanuel.jpeg" className="img-fluid mx-auto" alt="proyecto"></img>
                  <p></p>
                </div>
                <div className="col-md-4 text-center pt-10 pb-10">
                  <img src="/assets/img/portafolio/diseno/emmanuel-corte.jpeg" className="img-fluid mx-auto" alt="proyecto"></img>
                  <p></p>
                </div>
                <div className="col-md-4 text-center pt-10 pb-10">
                  <img src="/assets/img/portafolio/diseno/EVENTOS-LA-CUPKERIA.png" className="img-fluid mx-auto" alt="proyecto"></img>
                  <p></p>
                </div>
                <div className="col-md-4 text-center pt-10 pb-10">
                  <img src="/assets/img/portafolio/diseno/fanpage.jpeg" className="img-fluid mx-auto" alt="proyecto"></img>
                  <p></p>
                </div>
                <div className="col-md-4 text-center pt-10 pb-10">
                  <img src="/assets/img/portafolio/diseno/lacupkqueria.jpeg" className="img-fluid mx-auto" alt="proyecto"></img>
                  <p></p>
                </div>
                <div className="col-md-4 text-center pt-10 pb-10">
                  <img src="/assets/img/portafolio/diseno/mi-revista.jpeg" className="img-fluid mx-auto" alt="proyecto"></img>
                  <p></p>
                </div>
                <div className="col-md-4 text-center pt-10 pb-10">
                  <img src="/assets/img/portafolio/diseno/nos-adaptamos.jpeg" className="img-fluid mx-auto" alt="proyecto"></img>
                  <p></p>
                </div>
                <div className="col-md-4 text-center pt-10 pb-10">
                  <img src="/assets/img/portafolio/diseno/paloma-covarrubias.jpeg" className="img-fluid mx-auto" alt="proyecto"></img>
                  <p></p>
                </div>
                <div className="col-md-4 text-center pt-10 pb-10">
                  <img src="/assets/img/portafolio/diseno/perla-negra.png" className="img-fluid mx-auto" alt="proyecto"></img>
                  <p></p>
                </div>
                <div className="col-md-4 text-center pt-10 pb-10">
                  <img src="/assets/img/portafolio/diseno/perlanegra2.jpeg" className="img-fluid mx-auto" alt="proyecto"></img>
                  <p></p>
                </div>
                <div className="col-md-4 text-center pt-10 pb-10">
                  <img src="/assets/img/portafolio/diseno/precios-especiales.jpeg" className="img-fluid mx-auto" alt="proyecto"></img>
                  <p></p>
                </div>
                <div className="col-md-4 text-center pt-10 pb-10">
                  <img src="/assets/img/portafolio/diseno/quesos.jpeg" className="img-fluid mx-auto" alt="proyecto"></img>
                  <p></p>
                </div>
                <div className="col-md-4 text-center pt-10 pb-10">
                  <img src="/assets/img/portafolio/diseno/retuvi.png" className="img-fluid mx-auto" alt="proyecto"></img>
                  <p></p>
                </div>
                <div className="col-md-4 text-center pt-10 pb-10">
                  <img src="/assets/img/portafolio/diseno/retuvi2.jpeg" className="img-fluid mx-auto" alt="proyecto"></img>
                  <p></p>
                </div>
                <div className="col-md-4 text-center pt-10 pb-10">
                  <img src="/assets/img/portafolio/diseno/servicio-de-calidad.jpeg" className="img-fluid mx-auto" alt="proyecto"></img>
                  <p></p>
                </div>
                <div className="col-md-4 text-center pt-10 pb-10">
                  <img src="/assets/img/portafolio/diseno/te-trasporto.jpeg" className="img-fluid mx-auto" alt="proyecto"></img>
                  <p></p>
                </div>
                <div className="col-md-4 text-center pt-10 pb-10">
                  <img src="/assets/img/portafolio/diseno/tuhogar.jpeg" className="img-fluid mx-auto" alt="proyecto"></img>
                  <p></p>
                </div>
                <div className="col-md-4 text-center pt-10 pb-10">
                  <img src="/assets/img/portafolio/diseno/usana.jpeg" className="img-fluid mx-auto" alt="proyecto"></img>
                  <p></p>
                </div>
                <div className="col-md-4 text-center pt-10 pb-10">
                  <img src="/assets/img/portafolio/diseno/yoshira.jpeg" className="img-fluid mx-auto" alt="proyecto"></img>
                  <p></p>
                </div>
                <div className="col-md-4 text-center pt-10 pb-10">
                  <img src="/assets/img/portafolio/diseno/turismar.jpg" className="img-fluid mx-auto" alt="proyecto"></img>
                  <p></p>
                </div>
                <div className="col-md-4 text-center pt-10 pb-10">
                  <img src="/assets/img/portafolio/diseno/travel.jpeg" className="img-fluid mx-auto" alt="proyecto"></img>
                  <p></p>
                </div>
                <div className="col-md-4 text-center pt-10 pb-10">
                  <img src="/assets/img/portafolio/diseno/vitavarpiediem.png" className="img-fluid mx-auto" alt="proyecto"></img>
                  <p></p>
                </div>
                <div className="col-md-4 text-center pt-10 pb-10">
                  <img src="/assets/img/portafolio/diseno/VYSNELOCAL.jpg" className="img-fluid mx-auto" alt="proyecto"></img>
                  <p></p>
                </div>
              </div>
            </div>
            <div id="marketing" className="tab-pane fade">
              <div className="card">
                <a href="/portafolio" className="btn fondo_gris3 fs-20  pointer text-left" data-toggle="collapse" data-target="#servicio1" aria-expanded="true" aria-controls="servicio1">
                  Plan Acción <i className="fas fa-chevron-down float-right"></i>
                </a>
                <div id="servicio1" className="collapse " aria-labelledby="headingOne" data-parent="#accordion">
                  <div className="card-body">
                    Consiste en realizar un análisis del estado actual en el que se encuentra el negocio, en base a los resultados hacemos un plan personalizado para posicionarse en el mercado, recuperar clientes y/o mantenerse en el mercado.
                  </div>
                </div>
              </div>
              <div className="card">
                <a href="/portafolio" className="btn fondo_gris3 fs-20  pointer text-left" data-toggle="collapse" data-target="#servicio2" aria-expanded="true" aria-controls="servicio1">
                  Equipo de Fuerza de trabajo <i className="fas fa-chevron-down float-right"></i>
                </a>
                <div id="servicio2" className="collapse " aria-labelledby="headingOne" data-parent="#accordion">
                  <div className="card-body">
                    Se capacita al equipo de trabajo con herramientas tecnologías, skills para la atención al cliente, actualizando y configurando sus medios digitales. </div>
                </div>
              </div>
              <div className="card">
                <a href="/portafolio" className="btn fondo_gris3 fs-20  pointer text-left" data-toggle="collapse" data-target="#servicio3" aria-expanded="true" aria-controls="servicio1">
                  Recuperación de clientes <i className="fas fa-chevron-down float-right"></i>
                </a>
                <div id="servicio3" className="collapse " aria-labelledby="headingOne" data-parent="#accordion">
                  <div className="card-body">
                    Actualizamos a tus clientes con servicios, datos e innovaciones que ofrezca tu negocio.
                  </div>
                </div>
              </div>
              <div className="card">
                <a href="/portafolio" className="btn fondo_gris3 fs-20  pointer text-left" data-toggle="collapse" data-target="#servicio4" aria-expanded="true" aria-controls="servicio1">
                  Presencia en el medio digital <i className="fas fa-chevron-down float-right"></i>
                </a>
                <div id="servicio4" className="collapse " aria-labelledby="headingOne" data-parent="#accordion">
                  <div className="card-body">
                    Se realiza un servicio totalmente personalizado de acuerdo a las metas y objetivos que se desean alcanzar, apegandonos a al presupuesto a invertir.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="modal fade" id="exampleModalCenter" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title fnt_title fs-30" id="exampleModalLongTitle">Retuvi Clínica Integral</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <img src="/assets/img/portafolio/reutvi2.PNG" className="img-fluid mx-auto" alt="retuvi"></img>
              <p className="fs-20">Página responsiva, Galeria e Informacion de contacto </p>
            </div>
          </div>
        </div>
      </div>
      <div id='toTop'><img src="/assets/img/inicio/up.png" className="img-fluid mx-auto" alt=""></img></div>
      <Footer></Footer>

      <script src="/assets/js/jCircle.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossOrigin="anonymous"></script>
      <script src="/assets/js/vendor/bootstrap.min.js"></script>
      <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBhOdIF3Y9382fqJYt5I_sswSrEw5eihAA"></script>
      <script src="/assets/js/easing.min.js"></script>
      <script src="/assets/js/hoverIntent.js"></script>
      <script src="/assets/js/superfish.min.js"></script>
      <script src="/assets/js/jquery.ajaxchimp.min.js"></script>
      <script src="/assets/js/jquery.nice-select.min.js"></script>
      <script src="/assets/js/jquery.magnific-popup.min.js"></script>
      <script src="/assets/js/owl.carousel.min.js"></script>
      <script src="/assets/js/jquery.sticky.js"></script>
      <script src="/assets/js/jquery.waypoints.min.js"></script>
      <script src="/assets/js/main.js"></script>
      <script type="text/javascript" src="/assets/js/scroll_logo.js"></script>
    </>
  )
}

export default Portfolio

// eslint-disable-next-line no-lone-blocks
{/* <div id="loader" className="show fullscreen">
  <svg className="circular" width="48px" height="48px">
    <circle className="path-bg" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke="#eeeeee" />
    <circle className="path" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke-miterlimit="10" stroke="#00B398" />
  </svg>
</div> */}