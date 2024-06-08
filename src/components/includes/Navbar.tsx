import { useEffect, useState } from "react";

const Navbar = () => {
  const [isMobileNavActive, setMobileNavActive] = useState(false);

  const toggleMobileNav = () => {
    setMobileNavActive(!isMobileNavActive);
  };

  useEffect(() => {
    if (isMobileNavActive) {
      document.body.classList.add('mobile-nav-active');
    } else {
      document.body.classList.remove('mobile-nav-active');
    }
    return () => {
      document.body.classList.remove('mobile-nav-active');
    };
  }, [isMobileNavActive]);

  return (
    <>
      <button type="button" id="mobile-nav-toggle" onClick={ toggleMobileNav }>
        <i className={ `lnr ${ isMobileNavActive ? 'lnr-cross' : 'lnr-menu' }` }></i>
      </button>
      <nav id="mobile-nav" style={{ backgroundColor: '#01588f' }}>
        <ul style={{ marginTop: '28px' }}>
          <li><a href="/"> INICIO </a></li>
          <li><a href="acerca-de"> NOSOTROS </a></li>
          <li><a href="servicios"> SERVICIOS </a></li>
          <li><a href="portafolio"> PORTAFOLIO </a></li>
          <li><a href="contacto"> CONTACTO </a></li>
        </ul>
      </nav>
      <header id="header">
        <div className="container fnt_title">
          <div className="row align-items-center justify-content-between d-flex">
            <div id="logo">
              <a href="/" title="inicio"><img src="/assets/img/logo/logo-bco.png" id="logo-img" alt="logo"></img></a>
              <a href="/" title="inicio"><img src="/assets/img/logo/logo.png" className="logo-movil" alt="logo_"></img></a>
            </div>
            <nav id="nav-menu-container">
              <ul className="nav-menu d-none d-lg-block sf-js-enabled sf-arrows">
                <li className="nav-item dropdown d-none d-lg-block menualink"><a className="sf-with-ul" href="/"> INICIO </a></li>
                <li className="nav-item d-none d-lg-block menualink"><a className="sf-with-ul" href="acerca-de"> NOSOTROS </a></li>
                <li className="nav-item d-none d-lg-block menualink"><a className="sf-with-ul" href="servicios"> SERVICIOS </a></li>
                <li className="nav-item d-none d-lg-block menualink"><a className="sf-with-ul" href="portafolio"> PORTAFOLIO </a></li>
                <li className="nav-item dropdown d-none d-lg-block menualink"><a className="sf-with-ul" href="contacto"> CONTACTO </a></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar;
