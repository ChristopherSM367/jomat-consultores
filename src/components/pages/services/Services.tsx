import { Helmet, HelmetProvider } from "react-helmet-async"
import { Navbar } from "../../includes/Navbar"
import { Footer } from "../../includes/Footer"

const Services = () => {


  return (
    <>
      <HelmetProvider>
        <Helmet>
          <link rel="stylesheet" href="https://unpkg.com/aos@2.3.1/dist/aos.css"></link>
        </Helmet>
      </HelmetProvider>
      <Navbar></Navbar>
      <section className="nosotros_banner">
        <div className="slider-item" style={{ backgroundImage: "url('/assets/img/servicios/fondo.jpg')", backgroundPosition: '50% 16%' }}>
          <div style={{ background: '#0000009c' }}>
            <div className="container">
              <div className="row slider-text align-items-center justify-content-start ">
                <div className="col-md-12 col-sm-12 element-animate  sinpadinglados">
                  <p className="titulos font_title_bold centrar fs-60">Servicios Integrales</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="nosotros">
        <div className="container pt-100 pb-100">
          <div className="row pt-0 pb-100 align-items-center justify-content-start">
            <div className="col-lg-6 ">
              <p className="font_title_bold fs-70 color_negro lh-1_1">Páginas Web</p>
              <p className="fs-35 fnt_title lh-1_1 mb-0 pb-10">
                Tu marca o negocio en la nube
              </p>
              <p className="fs-18">Desarrollamos tu sitio web resposivo, que sea rápido y tenga una buena experiencia de usuario. </p>
            </div>
            <div className="col-lg-6 ">
              <div data-aos="flip-left" data-aos-duration="2000">
                <img src="/assets/img/servicios/sitioweb.png" alt="" className="img-fluid mx-auto"></img>
              </div>
            </div>
          </div>
          <div className="row pt-100 pb-100 align-items-center justify-content-start">
            <div className="col-lg-6 order-lg-2">
              <p className="font_title_bold fs-70 color_negro lh-1_1">Diseño Gráfico</p>
              <p className="fs-35 fnt_title lh-1_1 mb-0 pb-10">
                Refresca tu imagen para llamar más la atencion.
              </p>
              <p className="fs-18">Diseño de identidad, folletos, manuales y montajes.</p>
            </div>
            <div className="col-lg-6 order-lg-1">
              <div data-aos="flip-left" data-aos-duration="2000">
                <img src="/assets/img/servicios/diseno.png" alt="diseno" className="img-fluid mx-auto"></img>
              </div>
            </div>
          </div>
          <div className="row pt-100 pb-100 align-items-center justify-content-start">
            <div className="col-lg-6 ">
              <p className="font_title_bold fs-70 color_negro lh-1_1">Marketing Digital</p>
              <p className="fs-35 fnt_title lh-1_1 mb-0 pb-10">
                Los resultados que esperas
              </p>
              <p className="fs-18">Trabaja con tu propio presupuesto e impulsamos tu marca para llegar más lejos.</p>
            </div>
            <div className="col-lg-6 ">
              <div data-aos="flip-left" data-aos-duration="2000">
                <img src="/assets/img/servicios/marketing.png" alt="marketing" className="img-fluid mx-auto"></img>
              </div>
            </div>
          </div>
          <div className="row pt-100 pb-100 align-items-center justify-content-start">
            <div className="col-lg-6 order-lg-2">
              <p className="font_title_bold fs-70 color_negro lh-1_1">Software</p>
              <p className="fs-35 fnt_title lh-1_1 mb-0 pb-10">
                Sistema personalizado
              </p>
              <p className="fs-18">Herramientas diseñadas a la medida según tus necesidades. Hacemos lo que tu necesitas.</p>
            </div>
            <div className="col-lg-6 order-lg-1">
              <div data-aos="flip-left" data-aos-duration="2000">
                <img src="/assets/img/servicios/software.png" alt="software" className="img-fluid mx-auto"></img>
              </div>
            </div>
          </div>
          <div className="row pt-100 pb-100 align-items-center justify-content-start">
            <div className="col-lg-6 ">
              <p className="font_title_bold fs-70 color_negro lh-1_1">Selección Personal</p>
              <p className="fs-35 fnt_title lh-1_1 mb-0 pb-10">
                Personal calificado para la organización
              </p>
              <p className="fs-18">Contamos con un equipo de psicólogos laborales especialistas en desarrollo
                organizacional y reclutamiento.</p>
            </div>
            <div className="col-lg-6 ">
              <div data-aos="flip-left" data-aos-duration="2000">
                <img src="/assets/img/servicios/personal.png" alt="seleccion-personal" className="img-fluid mx-auto"></img>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>

      <script src="/assets/js/jCircle.js"></script>
      <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
      <script>
        AOS.init();
      </script>
    </>
  )
}

export default Services

// eslint-disable-next-line no-lone-blocks
{/* <div id="loader" className="show fullscreen">
  <svg className="circular" width="48px" height="48px">
    <circle className="path-bg" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke="#eeeeee" />
    <circle className="path" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke-miterlimit="10" stroke="#00B398" />
  </svg>
</div> */}