import Head from "../../includes/Head"
import { Navbar } from "../../includes/Navbar"
import { Footer } from "../../includes/Footer"

const Contact = () => {


  return (
    <>
      <Head></Head>
      <Navbar></Navbar>
      <section className="nosotros_banner">
        <div className="slider-item" style={{ backgroundImage: "url('/assets/img/contacto/fondo.jpg')", backgroundPosition: '10% 38%' }}>
          <div style={{ background: '#000000a3' }}>
            <div className="container">
              <div className="row slider-text align-items-center justify-content-start ">
                <div className="col-md-12 col-sm-12 element-animate  sinpadinglados">
                  <p className="titulos centrar font_title_bold">CONTACTO</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container pt-100">
        <p className="fs-40 fnt_title lh-1_1 color_negro">
          Más Información
        </p>
        <div className="row  pb-0 ">
          <div className="col-lg-6 ">
            <div className=" pt-30 pb-10 mb-10">
              <div>
                <div className="col-12">
                  <div className="row pt-20 align-items-center justify-content-start">
                    <div className="col-2 col-lg-2 mx-auto ">
                      <div className=" row align-items-center  color_blanco mx-auto text-center img-circle" style={{ width: '40px', height: '40px', textAlign: 'center' }}>
                        <i className="color_negro icon ion-ios-telephone-outline fs-40 mx-auto text-center"></i>
                      </div>
                    </div>
                    <div className="col-10 col-lg-10 pl-0 pr-0">
                      <a href="tel:3347376654;708" rel="noreferrer" className="color_negro" target="_blank">
                        <p className="fs-20 color_gris mb-0"> 33 4737 6654 ext;708</p>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="row align-items-center justify-content-start pt-20">
                    <div className="col-2 col-lg-2 mx-auto ">
                      <div className=" row align-items-center  color_blanco mx-auto text-center img-circle" style={{ width: '40px', height: '40px', textAlign: 'center' }}>
                        <i className="color_negro icon ion-social-whatsapp-outline fs-35 mx-auto text-center"></i>
                      </div>
                    </div>
                    <div className="col-10 col-lg-10 pl-0 pr-0">
                      <a href="https://api.whatsapp.com/send?phone=+5213311226564&amp;text=Me comunico del sitio JomatConsultores.com" rel="noreferrer" target="_blank" className="color_negro">
                        <p className="fs-20 color_gris mb-0">+52 1 33 1122 6564</p>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="row align-items-center justify-content-start pt-20">
                    <div className="col-2 col-lg-2 mx-auto ">
                      <div className=" row align-items-center  color_blanco mx-auto text-center img-circle" style={{ width: '40px', height: '40px', textAlign: 'center' }}>
                        <i className="color_negro icon ion-ios-email-outline fs-40 mx-auto text-center"></i>
                      </div>
                    </div>
                    <div className="col-10 col-lg-10 pl-0 pr-0">
                      <a href="mailto:contacto@jomatconsultores.com<" rel="noreferrer" className="color_negro" target="_blank">
                        <p className="fs-20 color_gris mb-0">contacto@jomatconsultores.com</p>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="row align-items-center justify-content-start pt-20">
                    <div className="col-2 col-lg-2 mx-auto ">
                      <div className=" row align-items-center  color_blanco mx-auto text-center img-circle" style={{ width: '40px', height: '40px', textAlign: 'center' }}>
                        <i className="color_negro icon ion-ios-location-outline fs-40 mx-auto text-center"></i>
                      </div>
                    </div>
                    <div className="col-10 col-lg-10 pl-0 pr-0">
                      <a href="/contacto" className="color_negro" target="_blank">
                        <p className="fs-20 color_gris mb-0"> Calle Kabah 1592, Jardines del Sol <br></br>
                          45050 Zapopan, Jalisco. México</p>
                      </a>
                    </div>
                  </div>
                </div>
                <span id="contratar"></span>
              </div>
            </div>
          </div>
          <div className="col-lg-6 div-custom2 pl-0 pr-0">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3733.458137160559!2d-103.41654528524343!3d20.65093218620421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428ac2fbaa7fe11%3A0xb4a2e856a1e1367a!2sKabah%201592%2C%20Jardines%20del%20Sol%2C%2045050%20Zapopan%2C%20Jal.!5e0!3m2!1ses!2smx!4v1636220139822!5m2!1ses!2smx" width="100%" height="450" style={{ border: '0' }} allowFullScreen loading="lazy" title="iframe"></iframe>
          </div>
        </div>
        <div className="row pt-80 pb-100  align-items-center justify-content-start">
          <div className="col-lg-6 order-lg-2 text-center">
            <img src="/assets/img/contacto/email.png" className="img-fluid mx-auto" alt="mail" style={{ maxWidth: '200px' }}></img>
          </div>
          <div className="col-12 col-lg-6 pl-0 pr-0 order-lg-1 div-custom2">
            <form id="signupForm1" className="form-horizontal col-12 col-lg-11 mx-auto pt-30 pb-30">
              <div className="row">
                <div className="col-lg-12">
                  <div className="form-group  ">
                    <div className="validation">
                      <input type="text" className="form-control2 input-lg" id="nombre" name="nombre" placeholder=" Nombre Completo" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group  ">
                    <div className="validation">
                      <input type="text" className="form-control2 input-lg" id="email" name="email" placeholder="Email" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group  ">
                    <div className="validation ">
                      <input type="tel" className="form-control2 input-lg" id="tel" name="tel" placeholder="Móvil" pattern="[0-9]{10}" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group ">
                    <div className="validation ">
                      <textarea name="comentarios" required id="comentarios" className="form-control2 " rows={5} cols={25} placeholder="Deje sus dudas o comentarios"></textarea>
                    </div>
                  </div>
                </div>
                <div className="col-12 ">
                  <div className="captcha">
                    <div className="g-recaptcha" data-sitekey="6Lev_28UAAAAAIDXSY4sao-XRJz-hrKOwZJaQzPo"></div>
                  </div><br></br>
                </div>
                <div id="success" style={{ display: 'inline !important', float: 'left', marginLeft: '0px !important' }}></div>
                <div className="col-12 mx-auto text-center">
                  <button type="submit" className="up buttonn color_blanco  fondo_negro" id="btn_contact" name="btn_contact"> Enviar mis datos</button><br></br>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div id='toTop'><img src="/assets/img/inicio/up.png" className="img-fluid mx-auto" alt=""></img></div>
      <Footer></Footer>

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
      <script src="/assets/js/validation/contact_validation.js"></script>
      <script src="/assets/js/main.js"></script>
      <script type="text/javascript" src="/assets/js/scroll_logo.js"></script>
    </>
  )
}

export default Contact

// eslint-disable-next-line no-lone-blocks
{/* <div id="loader" className="show fullscreen">
  <svg className="circular" width="48px" height="48px">
    <circle className="path-bg" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke="#eeeeee" />
    <circle className="path" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke-miterlimit="10" stroke="#00B398" />
  </svg>
</div> */}