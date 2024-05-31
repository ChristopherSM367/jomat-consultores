import { Helmet, HelmetProvider } from "react-helmet-async"
import { Navbar } from "../../includes/Navbar"
import { Footer } from "../../includes/Footer"

const AboutUs = () => {


  return (
    <>
      <HelmetProvider>
        <Helmet>
          <link rel="stylesheet" href="/assets/css/jCircle.css"></link>
        </Helmet>
      </HelmetProvider>
      <Navbar></Navbar>
      <section className="nosotros_banner">
        <div className="slider-item" style={{ backgroundImage: "url('/assets/img/nosotros/fondo.jpg')", backgroundPosition: '50% 60%' }}>
          <div style={{ background: "#0000009c" }}>
            <div className="container">
              <div className="row slider-text align-items-center justify-content-start">
                <div className="col-md-12 col-sm-12 element-animate sinpadinglados">
                  <p className="titulos font_title_bold centrar fs-60">Acerca de Jomat</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="nosotros">
        <div className="container pt-100 pb-80">
          <div className="row pt-0 pb-10 align-items-center justify-content-start">
            <div className="col-lg-6 order-lg-2">
              <p className="fs-40 fnt_title lh-1_1 color_negro">
                Nuestros Inicios
              </p>
              <p className="pt-20">
                Nacio con el próposito de utilizar la tecnologia y actualizaciones constantes que existen en el mercado para espcializarnos en el desarrollo de software, haciendo sinergia con las diversas áreas administrativas para alcanzar la meta deseada.
              </p>
              <p className="fs-40 pt-40 fnt_title lh-1_1 color_negro">
                Nuestros Valores
              </p>
              <div className="row">
                <div className="col-6">
                  <div>
                    <span className="color_azul"><i className="fs-20 vineta fas fa-star"></i></span>
                    <p className="pointer d-inline-block" data-toggle="modal" data-target="#comunicacion">
                      Comunicación
                    </p>
                  </div>
                  <div>
                    <span className="color_azul"><i className="fs-20 vineta fas fa-star"></i></span>
                    <p className="pointer d-inline-block" data-toggle="modal" data-target="#compromiso">
                      Compromiso
                    </p>
                  </div>
                  <div>
                    <span className="color_azul"><i className="fs-20 vineta fas fa-star"></i></span>
                    <p className="pointer d-inline-block" data-toggle="modal" data-target="#excelencia">
                      Excelencia
                    </p>
                  </div>
                </div>
                <div className="col-6">
                  <div>
                    <span className="color_azul"><i className="fs-20 vineta fas fa-star"></i></span>
                    <p className="pointer d-inline-block" data-toggle="modal" data-target="#transparencia">
                      Transparencia
                    </p>
                  </div>
                  <div>
                    <span className="color_azul"><i className="fs-20 vineta fas fa-star"></i></span>
                    <p className="pointer d-inline-block" data-toggle="modal" data-target="#amabilidad">
                      Amabilidad
                    </p>
                  </div>
                  <div>
                    <span className="color_azul"><i className="fs-20 vineta fas fa-star"></i></span>
                    <p className="pointer d-inline-block" data-toggle="modal" data-target="#companerismo">
                      Compañerismo
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 order-lg-1">
              <img src="/assets/img/nosotros/about.jpg" alt="" className="img-fluid mx-auto"></img>
            </div>
          </div>
          <div className="pt-50">
            <p>
              Nuestra misión es hacer que con tu equipo de trabajo logres alcanzar los resultados deseados,
              actualizándote y capacitándote desde el trato humano hasta las últimas actualizaciones
              tecnológicas en el mercado.
            </p>
            <p className="pt-20">
              JOMAT Consultores es una empresa socialmente responsable ya que se encarga de adquirir
              equipos de tecnología como computadoras, tabletas, celulares entre otros, para restaurarlos y
              entregárselos a niños de bajos recursos, con el único objetivo de que tengan el acceso a los
              medios digitales y puedan continuar sus estudios.
            </p>
          </div>
        </div>
      </section>
      <section className="fondo_gris2 pt-30 pb-80">
        <div className="container">
          <p className="fs-40 fnt_title lh-1_1 color_negro">
            Opiniones de Clientes
          </p>
          <div className="major-caousel js-carousel-1a owl-carousel">
            <div className="testimonial">
              <h4 className="font_title_bold fs-25 mt-4">Turismar</h4>
              <p className="font-weight-normal fs-14"><i className="fas fa-quote-left pr-2"></i>
                Excelente servicio y atención, la asesoría para cuestiones de mkt digital y tradicional es muy buena, se actualizan constantemente y van de la mano con la tecnología.
                <br></br>
                En cuestión administrativa el asesoramiento ha sido impecable ya que trabajamos en base a neustas metas y objetivos planeados anualmente.
                <i className="fas fa-quote-right pr-2"></i>
              </p>
              <div className="grey-text">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
            </div>
            <div className="testimonial">
              <h4 className="font_title_bold fs-25 mt-4">Zapatería y Más Yoshira</h4>
              <p className="font-weight-normal fs-14"><i className="fas fa-quote-left pr-2"></i>
                Excelente asesoría de mercadotecnia y administración para que mi negocio crezca y tenga prpescencia en los medios digitales.
                <br></br>
                <i className="fas fa-quote-right pr-2"></i>
              </p>
              <div className="grey-text">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
            </div>
            <div className="testimonial">
              <h4 className="font_title_bold fs-25 mt-4">Emmanuel estetica</h4>
              <p className="font-weight-normal fs-14"><i className="fas fa-quote-left pr-2"></i>
                Llegaron a estética Emmanuel en una epoca muy difícil, gracias al trabajo que se realizó muchas amigas y clientes existentes me llamaron y pues se ha dado a conocer cada día más.
                <br></br>
                Me gustó mucho mi logo, le dio un plus que necesitaba para marcar la diferencia, ustedes son una empresa muy dedicada a sus clientes, así como están pendientes de sus expectativas y mas q nada tienen la paciencia en la exigencia de sus clientes, les dan tips y sugerencias para mejorar durante todo el camino.
                <i className="fas fa-quote-right pr-2"></i>
              </p>
              <div className="grey-text">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
            </div>
            <div className="testimonial">
              <h4 className="font_title_bold fs-25 mt-4">Cortes el Perla Negra</h4>
              <p className="font-weight-normal fs-14"><i className="fas fa-quote-left pr-2"></i>
                Buenos diseños para publicidad mediante redes sociales y medios tradicionales, nos apoyaron mucho en la aportación de ideas para promociones y descuentos.
                <br></br>
                Así como nos brindaron un excelente servicio en la parte administrativa, así como en la capacitación que nos brindaron para que nuestros equipo esté preparado con las herramientas tecnológicas.<i className="fas fa-quote-right pr-2"></i>
              </p>
              <div className="grey-text">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="modal fade" id="comunicacion" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title fnt_title fs-30" id="exampleModalLongTitle">Comunicación</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <p className="fs-20">Página responsiva, Galeria e Informacion de contacto </p>
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade" id="compromiso" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title fnt_title fs-30" id="exampleModalLongTitle">Compromiso</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <p className="fs-20">Nos comprometemos a ofrecer cada servicio con pasión. </p>
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade" id="excelencia" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title fnt_title fs-30" id="exampleModalLongTitle">Excelencia</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <p className="fs-20">Llevamos al máximo la calidad de nuestros servicios.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade" id="transparencia" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title fnt_title fs-30" id="exampleModalLongTitle">Transparencia</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <p className="fs-20">Todo el equipo esta plenamente comprometido a demostrar honestidad con los
                servicios que se les esté brindando.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade" id="amabilidad" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title fnt_title fs-30" id="exampleModalLongTitle">Amabilidad</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <p className="fs-20">Todo el equipo esta plenamente comprometido a demostrar honestidad con los
                servicios que se les esté brindando.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade" id="companerismo" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title fnt_title fs-30" id="exampleModalLongTitle">Compañerismo</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <p className="fs-20">Apoyo mutuo es para JOMAT Consultores una de las claves fundamentales para
                que todo el equipo funcione, por eso, una buena convivencia marca la diferencia. </p>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
      
      <script src="/assets/js/jCircle.js"></script>
    </>
  )
}

export default AboutUs

// eslint-disable-next-line no-lone-blocks
{/* <div id="loader" className="show fullscreen">
  <svg className="circular" width="48px" height="48px">
    <circle className="path-bg" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke="#eeeeee" />
    <circle className="path" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke-miterlimit="10" stroke="#00B398" />
  </svg>
</div> */}