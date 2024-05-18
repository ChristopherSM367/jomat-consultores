import { Navbar } from "./Navbar"
import { Footer } from "./Footer"
import { useEffect } from "react"

const Home = () => {
  useEffect(() => {
    const manejarScroll = () => {
      const alturaVentana = window.innerHeight;
      const posicionScroll = window.scrollY + alturaVentana / 3;
      const paneles = document.querySelectorAll('.panel');

      paneles.forEach(panel => {
        const panelTop = (panel as HTMLElement).offsetTop;
        const alturaPanel = (panel as HTMLElement).offsetHeight;

        if (panelTop <= posicionScroll && panelTop + alturaPanel > posicionScroll) {
          document.body.className = document.body.className.replace(/\bcolor-\S+/g, '');
          document.body.classList.add(`color-${(panel as HTMLElement).dataset.color}`);
        }
      });
    };

    window.addEventListener('scroll', manejarScroll);

    // Llamar al manejador de scroll una vez para establecer el estado inicial
    manejarScroll();

    // Limpiar el event listener cuando el componente se desmonte
    return () => {
      window.removeEventListener('scroll', manejarScroll);
    };
  }, []);

  return (
    <>
      <Navbar></Navbar>
      <div className="slider-item banner-home fondo-azul-base" style={{ backgroundImage: "url('/assets/img/slider_horizontal/base.jpg')" }}>
        <div className="degradado3"></div>
      </div>
      <section className="home-slider owl-carousel div-to-fondo">
        <div className="slider-item banner-home" style={{ backgroundImage: "url('/assets/img/slider_horizontal/transparente.png')" }}>
          <div className="container">
            <div className="row slider-text align-items-center justify-content-start">
              <div className="banner-content col-lg-10 mx-auto element-animate">
                <div className="text-center">
                  <h1 className="titulos titulobanner font_title_bold lh1 centrar"> Sitios Web </h1>
                  <span className="d-none d-lg-block"> Diseñamos tu página web a tu medida y al mejor precio </span>
                </div>
                <img src="/assets/img/slider_horizontal/pc-web.png" className="img-fluid mx-auto pt-30" alt=""></img>
              </div>
            </div>
          </div>
        </div>
        <div className="slider-item banner-home" style={{ backgroundImage: "url('/assets/img/slider_horizontal/transparente.png')" }}>
          <div className="container">
            <div className="row slider-text align-items-center justify-content-start">
              <div className="banner-content col-lg-10 mx-auto element-animate">
                <div className="text-center">
                  <h1 className="titulos titulobanner font_title_bold lh1 centrar"> Diseño Gráfico </h1>
                  <span className="d-none d-lg-block"> Diseñamos tu logo e identidad gráfica </span>
                </div>
                <img src="/assets/img/slider_horizontal/diseno.png" className="img-fluid mx-auto pt-30" alt=""></img>
              </div>
            </div>
          </div>
        </div>
        <div className="slider-item banner-home" style={{ backgroundImage: "url('/assets/img/slider_horizontal/transparente.png')" }}>
          <div className="container">
            <div className="row slider-text align-items-center justify-content-start">
              <div className="banner-content col-lg-10 mx-auto element-animate">
                <div className="text-center">
                  <h1 className="titulos titulobanner font_title_bold lh1 centrar"> Marketing Digital </h1>
                  <span className="d-none d-lg-block"> Planes a tu medida </span>
                </div>
                <img src="/assets/img/slider_horizontal/redes.png" className="img-fluid mx-auto pt-30" alt=""></img>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section pt-60 panel" data-color="white" style={{ backgroundImage: "url('/assets/img/inicio/fondo.png')", backgroundSize: 'cover' }}>
        <div className="container pt-40">
          <p className="font_title_bold fs-70 color_negro lh-1_1"> Agencia de Marketing </p>
          <p className="fs-30 fnt_title lh-1_1">
            Somo un grupo de profesionales multidiciplinario con más de 20 años de experiencia en el mercado
          </p>
          <div className="row pt-10">
            <div className="col-lg-4 pt-30 text-center">
              <img src="/assets/img/inicio/aumentar.png" className="img-fluid mx-auto tam-peq" alt="aumenta"></img>
              <p className="fnt_title fs-35 text-center">
                Impulsar tu Marca
              </p>
              <p className="text-center fs-18">
                Que tu marca sea vista por los demas y tengas clientes potenciales.
              </p>
            </div>
            <div className="col-lg-4 pt-30 text-center">
              <img src="/assets/img/inicio/guia.png" className="img-fluid mx-auto tam-peq" alt="guia"></img>
              <p className="fnt_title fs-35 text-center">
                Comunicación
              </p>
              <p className="text-center fs-18">
                Siempre en constante comunicación para darte el mejor servicio.
              </p>
            </div>
            <div className="col-lg-4 pt-30 text-center">
              <img src="/assets/img/inicio/resultados.png" className="img-fluid mx-auto tam-peq" alt="resultados"></img>
              <p className="fnt_title fs-35 text-center">
                Resultados
              </p>
              <p className="text-center fs-18">
                Nuestro objetivo es apoyarte en alcanzar las metas que te has fijado.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="panel pt-70 pb-70 mt-50 animate violeta" data-color="violet">
        <div className="container pb-60">
          <p className="font_title_bold fs-70 color_blanco lh-1_1 text-center"> Nuestros Servicios </p>
          <p className="fs-30 fnt_title lh-1_1 color_blanco text-center">
            Cálidad y entrega en todo momento
          </p>
          <div className="row pt-10">
            <div className="col-lg-4 pt-30 text-center">
              <img src="/assets/img/inicio/web-icon.png" className="img-fluid mx-auto tam-peq" alt="web"></img>
              <p className="fnt_title fs-35 text-center color_blanco">
                Sitios Web
              </p>
              <p className="text-center fs-18 color_blanco">
                Desarrollo o configuración de sitios web según tus necesidades.
              </p>
            </div>
            <div className="col-lg-4 pt-30 text-center">
              <img src="/assets/img/inicio/design.png" className="img-fluid mx-auto tam-peq" alt="web"></img>
              <p className="fnt_title fs-35 text-center color_blanco">
                Diseño
              </p>
              <p className="text-center fs-18 color_blanco">
                Refresca tu imagen, impacta a tus clientes, diseñamos tu identidad gráfica.
              </p>
            </div>
            <div className="col-lg-4 pt-30 text-center">
              <img src="/assets/img/inicio/venta-pc.png" className="img-fluid mx-auto tam-peq" alt="web"></img>
              <p className="fnt_title fs-35 text-center color_blanco">
                Venta Equipo
              </p>
              <p className="text-center fs-18 color_blanco">
                Equipo para oficinas, computadoras y accesorios.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="panel pt-70 pb-70" data-color="white">
        <div className="container">
          <div className="row align-items-center justify-content-start mt-40">
            <div className="col-lg-12">
              <p className="font_title_bold fs-70 color_negro lh-1_1"> Contáctanos </p>
              <p className="fs-30 fnt_title lh-1_1">
                Ponte en contacto con nosotros y cuentanos de tu proyecto
              </p>
            </div>
            <div className="col-lg-6">
              <form id="signupForm1" className="form-horizontal col-12 col-lg-11 mx-auto pt-30 pb-30">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group">
                      <div className="validation">
                        <input type="text" className="form-control2 input-lg" id="nombre" name="nombre" placeholder="Nombre Completo" />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <div className="validation">
                        <input type="text" className="form-control2 input-lg" id="email" name="email" placeholder="Email" />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <div className="validation">
                        <input type="tel" className="form-control2 input-lg" id="tel" name="tel" placeholder="Teléfono" pattern="[0-9]{10}" />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <div className="validation">
                        <textarea name="comentarios" required id="comentarios" className="form-control2" rows={ 5 } cols={ 25 } placeholder="Acerca de su proyecto"></textarea>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="captcha">
                      <div className="g-recaptcha" data-sitekey="6LeqEmEUAAAAADUQu6GVSONaaT-fVeZcmZ7bAWrE"></div>
                    </div>
                    <br></br>
                  </div>
                  <div id="success"></div>
                  <div className="col-12 mx-auto ">
                    <button type="submit" className="up buttonn color_blanco fondo_verde" id="btn_contact" name="btn_contact"> Contactar </button><br></br>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-lg-5 text-rigth centrar">
              <img src="/assets/img/inicio/audifonos.png" className="img-fluid mx-auto" alt="cel"></img>
            </div>
          </div>
        </div>
      </section>
      <div id='toTop'><img src="/assets/img/inicio/up.png" className="img-fluid mx-auto" alt=""></img></div>
      <Footer></Footer>
      <div id="loader" className="show fullscreen">
        <svg className="circular" width="48px" height="48px">
          <circle className="path-bg" cx="24" cy="24" r="22" fill="none" strokeWidth="4" stroke="#eeeeee" />
          <circle className="path" cx="24" cy="24" r="22" fill="none" strokeWidth="4" strokeMiterlimit="10" stroke="#00B398" />
        </svg>
      </div>
      <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBhOdIF3Y9382fqJYt5I_sswSrEw5eihAA"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossOrigin="anonymous"></script>
      <script type="text/javascript" src="/assets/js/scroll_logo.js"></script>
      <script src="/assets/js/vendor/bootstrap.min.js"></script>
      <script src="/assets/js/easing.min.js"></script>
      <script src="/assets/js/hoverIntent.js"></script>
      <script src="/assets/js/superfish.min.js"></script>
      <script src="/assets/js/owl.carousel.min.js"></script>
      <script src="/assets/js/validation/contact_validation.js"></script>
      <script src="/assets/js/main.js"></script>
      <script src="/assets/js/jquery.ajaxchimp.min.js"></script>
      <script src="/assets/js/jquery.nice-select.min.js"></script>
      <script src="/assets/js/jquery.sticky.js"></script>
      <script src="/assets/js/jquery.waypoints.min.js"></script>
      <script src="/assets/js/jquery.magnific-popup.min.js"></script>
    </>
  )
}

export default Home