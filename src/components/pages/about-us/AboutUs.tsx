import { Helmet, HelmetProvider } from "react-helmet-async"
import Navbar from "../../includes/Navbar"
import Footer from "../../includes/Footer"
import AboutSection2 from "./AboutSection2"
import AboutSlider from "./AboutSlider"
import AboutModals from "./AboutModals"

const AboutUs = () => (
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
                <p className="titulos font_title_bold centrar fs-60"> Acerca de Jomat </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <AboutSection2></AboutSection2>
    <AboutSlider></AboutSlider>
    <AboutModals></AboutModals>
    <Footer></Footer>
    
    <script src="/assets/js/jCircle.js"></script>
  </>
)

export default AboutUs

// eslint-disable-next-line no-lone-blocks
{/* <div id="loader" className="show fullscreen">
  <svg className="circular" width="48px" height="48px">
    <circle className="path-bg" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke="#eeeeee" />
    <circle className="path" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke-miterlimit="10" stroke="#00B398" />
  </svg>
</div> */}