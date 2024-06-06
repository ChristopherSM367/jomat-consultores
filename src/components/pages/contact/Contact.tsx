import { Navbar } from "../../includes/Navbar"
import Footer from "../../includes/Footer"
import ContactSection2 from "./ContactSection2"

const Contact = () => (
  <>
    <Navbar></Navbar>
    <section className="nosotros_banner">
      <div className="slider-item" style={{ backgroundImage: "url('/assets/img/contacto/fondo.jpg')", backgroundPosition: '10% 38%' }}>
        <div style={{ background: '#000000a3' }}>
          <div className="container">
            <div className="row slider-text align-items-center justify-content-start">
              <div className="col-md-12 col-sm-12 element-animate sinpadinglados">
                <p className="titulos centrar font_title_bold"> CONTACTO </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <ContactSection2></ContactSection2>
    <Footer></Footer>

    <script src="/assets/js/validation/contact_validation.js"></script>
  </>
)

export default Contact

// eslint-disable-next-line no-lone-blocks
{/* <div id="loader" className="show fullscreen">
  <svg className="circular" width="48px" height="48px">
    <circle className="path-bg" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke="#eeeeee" />
    <circle className="path" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke-miterlimit="10" stroke="#00B398" />
  </svg>
</div> */}