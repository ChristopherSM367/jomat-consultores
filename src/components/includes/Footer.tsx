import { useEffect } from "react";

const Footer = () => {
  const abrirLink = (url: string) => () => {
    window.open(url, '_blank');
  };

  useEffect(() => {
    const toTopButton = document.getElementById('toTop');
    if (toTopButton) {
      toTopButton.addEventListener('click', scrollToTop);
    }

    return () => {
      if (toTopButton) {
        toTopButton.removeEventListener('click', scrollToTop);
      }
    };
  }, []);

  const scrollToTop = (): void => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const hideLoader = () => {
      const loader = document.getElementById('loader');
      if (loader) {
        loader.classList.remove('show');
      }
    };

    if (document.readyState === 'complete') {
      hideLoader();
    } else {
      window.addEventListener('load', hideLoader);

      return () => {
        window.removeEventListener('load', hideLoader);
      };
    }
  }, []);

  return (
    <>
      <div id='toTop'><img src="/assets/img/inicio/up.png" className="img-fluid mx-auto" alt=""></img></div>
      <footer className="container-fluid fondo_azul4 col-12 fs-16">
        <div className="container pt-70 pb-70">
          <div className="row pb-0">
            <div className="col-md-6 col-lg-3 foot-sp pt-0">
              <div className="mx-auto">
                <img style={{ maxWidth: '180px', marginTop: '-5px' }} src="/assets/img/logo/logo-bco.png" alt="Jomat-Blanco"></img>
                <p className="color_blanco pt-20">
                  2022 - Derechos Reservados ® <br></br>
                  Calle Kabah 1592, Jardines del Sol <br></br>
                  Zapopan, Jalisco. México
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 pt-30">
              <p className="fs-20 fnt_title color_blanco2"> CONTACTO </p>
              <p>
                <a href="mailto:contacto@jomatconsultores.com" className="color_blanco"> contacto@jomatconsultores.com </a><br></br>
                <a href="tel:3347376654;708" className="color_blanco"><i className="ion-ios-telephone-outline" style={{ fontSize: '20px' }}></i> 33 4737 6654 ext;708 </a><br></br>
                <a href="https://api.whatsapp.com/send?phone=+5213311226564&amp;text=Me comunico del sitio JomatConsultores.com" className="color_blanco"><i className="fab fa-whatsapp" style={{ fontSize: '16px' }}></i> +52 1 33 1122 6564 </a>
              </p>
            </div>
            <div className="col-md-6 col-lg-3 pt-30 pb-30">
              <p className="fs-20 fnt_title color_blanco2"> NUESTRAS REDES </p>
              <div className="center">
                <div id="social-test">
                  <ul className="social">
                    <li onClick={ abrirLink('https://www.facebook.com/jomatconsultores/') }><i className="fab fa-facebook" aria-hidden="true"></i></li>
                    <li onClick={ abrirLink('https://www.instagram.com/jomatconsultores/') }><i className="fab fa-instagram" aria-hidden="true"></i></li>
                    <li onClick={ abrirLink('https://mx.linkedin.com/company/jomat-consultores?trk=public_profile_experience-item_profile-section-card_subtitle-click') }><i className="fab fa-linkedin" aria-hidden="true"></i></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3  pt-30">
              <p className="fs-20 fnt_title color_blanco2"> OTROS LINKS </p>
              <p className="color_blanco">
                <a href="contacto" className="color_blanco"> Ayuda </a><br></br>
                <a href="acerca-de" className="color_blanco"> Acerca de </a><br></br>
                <a href="/assets/aviso.pdf" target="_blank" className="color_blanco"> Aviso de Privacidad </a><br></br>
              </p>
            </div>
          </div>
        </div>
      </footer>
      <div className="sticky-container">
        <ul className="sticky">
          <li className="sticky_wats" onClick={ abrirLink('https://api.whatsapp.com/send?phone=+5213311226564&text=Me comunico del sitio JomatConsultores.com') }>
            <span><i className="fab fa-whatsapp" style={{ fontSize: '38px' }}></i></span>
            <p> WhatsApp </p>
          </li>
        </ul>
      </div>
      <div id="loader" className="show fullscreen">
        <svg className="circular" width="48px" height="48px">
          <circle className="path-bg" cx="24" cy="24" r="22" fill="none" strokeWidth="4" stroke="#eeeeee" />
          <circle className="path" cx="24" cy="24" r="22" fill="none" strokeWidth="4" strokeMiterlimit="10" stroke="#00B398" />
        </svg>
      </div>
    </>
  )
}

export default Footer