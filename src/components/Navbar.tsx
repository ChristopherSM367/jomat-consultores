export const Navbar = () => {


  return (
    <header id="header">
      <div className="container fnt_title">
        <div className="row align-items-center justify-content-between d-flex">
          <div id="logo">
            <a href="Home" title="inicio"><img src="/assets/img/logo/logo-bco.png" id="logo-img" alt="logo" /></a>
            <a href="Home" title="inicio"><img src="/assets/img/logo/logo.png" className="logo-movil" alt="logo_" /></a>
          </div>
          <nav id="nav-menu-container">
            <ul className="nav-menu d-none d-lg-block">
              <li className="nav-item dropdown d-none d-lg-block menualink"><a className="sf-with-ul" href="Home">INICIO</a></li>
              <li className="nav-item d-none d-lg-block menualink"><a className="sf-with-ul" href="AboutUs">NOSOTROS</a></li>
              <li className="nav-item d-none d-lg-block menualink"><a className="sf-with-ul" href="Services">SERVICIOS</a></li>
              <li className="nav-item d-none d-lg-block menualink"><a className="sf-with-ul" href="Portfolio">PORTAFOLIO</a></li>
              <li className="nav-item dropdown d-none d-lg-block menualink"><a className="sf-with-ul" href="Contact">CONTACTO</a></li>
            </ul>
            <ul className="navbar-nav mr-auto d-lg-none fnt_title">
              <li><a href="Home">INICIO</a></li>
              <li><a href="AboutUs">NOSOTROS</a></li>
              <li><a href="Services">SERVICIOS</a></li>
              <li><a href="Portfolio">PORTAFOLIO</a></li>
              <li><a href="Contact">CONTACTO</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}