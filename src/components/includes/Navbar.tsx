export const Navbar = () => {


  return (
    <>
      <button type="button" id="mobile-nav-toggle">
        <i className="lnr lnr-menu"></i>
      </button>
      <header id="header">
        <div className="container fnt_title">
          <div className="row align-items-center justify-content-between d-flex">
            <div id="logo">
              <a href="/" title="inicio"><img src="/assets/img/logo/logo-bco.png" id="logo-img" alt="logo"></img></a>
              <a href="/" title="inicio"><img src="/assets/img/logo/logo.png" className="logo-movil" alt="logo_"></img></a>
            </div>
            <nav id="nav-menu-container">
              <ul className="nav-menu d-none d-lg-block sf-js-enabled sf-arrows">
                <li className="nav-item dropdown d-none d-lg-block menualink"><a className="sf-with-ul" href="/">INICIO</a></li>
                <li className="nav-item d-none d-lg-block menualink"><a className="sf-with-ul" href="acerca-de">NOSOTROS</a></li>
                <li className="nav-item d-none d-lg-block menualink"><a className="sf-with-ul" href="servicios">SERVICIOS</a></li>
                <li className="nav-item d-none d-lg-block menualink"><a className="sf-with-ul" href="portafolio">PORTAFOLIO</a></li>
                <li className="nav-item dropdown d-none d-lg-block menualink"><a className="sf-with-ul" href="contacto">CONTACTO</a></li>
              </ul>
              <ul className="navbar-nav mr-auto d-lg-none fnt_title">
                <li><a href="/">INICIO</a></li>
                <li><a href="acerca-de">NOSOTROS</a></li>
                <li><a href="servicios">SERVICIOS</a></li>
                <li><a href="portafolio">PORTAFOLIO</a></li>
                <li><a href="contacto">CONTACTO</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  )
}