import React from "react";

const tabsData = [
  { 
    target: 'home1', 
    title: 'Web', 
    active: false 
  },
  { 
    target: 'diseno', 
    title: 'Diseño', 
    active: true 
  },
  { 
    target: 'marketing', 
    title: 'Marketing', 
    active: false 
  },
];

const disenoImages = [
  '/assets/img/portafolio/diseno/ANGEL%20ROYALTY.jpg',
  '/assets/img/portafolio/diseno/buenfin.jpeg',
  '/assets/img/portafolio/diseno/cancelesymas.jpeg',
  '/assets/img/portafolio/diseno/disfruta.jpeg',
  '/assets/img/portafolio/diseno/dra-paulina.jpeg',
  '/assets/img/portafolio/diseno/dr-miguel-angel.jpeg',
  '/assets/img/portafolio/diseno/emmanuel.jpeg',
  '/assets/img/portafolio/diseno/emmanuel-corte.jpeg',
  '/assets/img/portafolio/diseno/EVENTOS-LA-CUPKERIA.png',
  '/assets/img/portafolio/diseno/fanpage.jpeg',
  '/assets/img/portafolio/diseno/lacupkqueria.jpeg',
  '/assets/img/portafolio/diseno/mi-revista.jpeg',
  '/assets/img/portafolio/diseno/nos-adaptamos.jpeg',
  '/assets/img/portafolio/diseno/paloma-covarrubias.jpeg',
  '/assets/img/portafolio/diseno/perla-negra.png',
  '/assets/img/portafolio/diseno/perlanegra2.jpeg',
  '/assets/img/portafolio/diseno/precios-especiales.jpeg',
  '/assets/img/portafolio/diseno/quesos.jpeg',
  '/assets/img/portafolio/diseno/retuvi.png',
  '/assets/img/portafolio/diseno/retuvi2.jpeg',
  '/assets/img/portafolio/diseno/servicio-de-calidad.jpeg',
  '/assets/img/portafolio/diseno/te-trasporto.jpeg',
  '/assets/img/portafolio/diseno/tuhogar.jpeg',
  '/assets/img/portafolio/diseno/usana.jpeg',
  '/assets/img/portafolio/diseno/yoshira.jpeg',
  '/assets/img/portafolio/diseno/turismar.jpg',
  '/assets/img/portafolio/diseno/travel.jpeg',
  '/assets/img/portafolio/diseno/vitavarpiediem.png',
  '/assets/img/portafolio/diseno/VYSNELOCAL.jpg'
];

const marketingData = [
  {
    target: 'servicio1',
    title: 'Plan Acción',
    description: 'Consiste en realizar un análisis del estado actual en el que se encuentra el negocio, en base a los resultados hacemos un plan personalizado para posicionarse en el mercado, recuperar clientes y/o mantenerse en el mercado.',
  },
  {
    target: 'servicio2',
    title: 'Equipo de Fuerza de trabajo',
    description: 'Se capacita al equipo de trabajo con herramientas tecnologías, skills para la atención al cliente, actualizando y configurando sus medios digitales.',
  },
  {
    target: 'servicio3',
    title: 'Recuperación de clientes',
    description: 'Actualizamos a tus clientes con servicios, datos e innovaciones que ofrezca tu negocio.',
  },
  {
    target: 'servicio4',
    title: 'Presencia en el medio digital',
    description: 'Se realiza un servicio totalmente personalizado de acuerdo a las metas y objetivos que se desean alcanzar, apegandonos a al presupuesto a invertir.',
  },
];

interface TabProps {
  target: string;
  title: string;
  active: boolean;
}

interface ImagePortfolioProps {
  images: string[];
}

interface MarketingInfoProps {
  info: {
    target: string;
    title: string;
    description: string;
  }
}

const Tab: React.FC<TabProps> = ({ target, title, active }) => (
  <li className="nav-item col-12 col-lg-3 d-inline-block">
    <a 
      href="/portafolio" 
      data-target={ `#${ target }` } 
      data-toggle="tab" 
      className={ `fs-30 fnt_title nav-link small text-uppercase ${ active ? 'active' : '' }` }
    >
      { title }
    </a>
  </li>
);

const ImagePortfolio: React.FC<ImagePortfolioProps> = ({ images }) => (
  <div className="row pb-2">
    {images.map((src, index) => (
      <div 
        key={ index } 
        className="col-md-4 text-center pt-10 pb-10"
      >
        <img 
          src={ src } 
          className="img-fluid mx-auto" 
          alt="proyecto"
        ></img>
        <p></p>
      </div>
    ))}
  </div>
);

const MarketingInfo: React.FC<MarketingInfoProps> = ({ info }) => (
  <div className="card">
    <a 
      href="/portafolio" 
      className="btn fondo_gris3 fs-20 pointer text-left" 
      data-toggle="collapse" 
      data-target={ `#${ info.target }` } 
      aria-expanded="true" 
      aria-controls={ info.target }
    >
      { info.title } <i className="fas fa-chevron-down float-right"></i>
    </a>
    <div 
      id={ info.target } 
      className="collapse" 
      aria-labelledby="headingOne" 
      data-parent="#accordion"
    >
      <div className="card-body">
        { info.description }
      </div>
    </div>
  </div>
);

const PortfolioSection2 = () => (
  <>
    <section id="potafolio">
      <div className="container pt-100 pb-100">
        <ul id="tabs" className="nav nav-tabs row">
          { tabsData.map((tab) => (
            <Tab key={ tab.target } { ...tab }></Tab>
          )) }
        </ul>
        <br></br>
        <div id="tabsContent" className="tab-content">
          <div id="home1" className="tab-pane fade">
            <div className="row">
              <div className="col-lg-4 pt-30 text-center">
                <div className="div-custom2">
                  <img src="/assets/img/portafolio/reutvi.PNG" className="img-fluid mx-auto pointer" alt="retuvi" data-toggle="modal" data-target="#exampleModalCenter"></img>
                  <p className="text-center fs-25 pt-10 fnt_title color_negro"> Web Retuvi </p>
                </div>
              </div>
            </div>
          </div>
          <div id="diseno" className="tab-pane fade active show">
            <ImagePortfolio images={ disenoImages }></ImagePortfolio>
          </div>
          <div id="marketing" className="tab-pane fade">
            { marketingData.map((info) => (
              <MarketingInfo key={ info.target } info={ info }></MarketingInfo>
            )) }
          </div>
        </div>
      </div>
    </section>
    <div className="modal fade" id="exampleModalCenter" tabIndex={ -1 } role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title fnt_title fs-30" id="exampleModalLongTitle"> Retuvi Clínica Integral </h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true"> &times; </span>
            </button>
          </div>
          <div className="modal-body">
            <img src="/assets/img/portafolio/reutvi2.PNG" className="img-fluid mx-auto" alt="retuvi"></img>
            <p className="fs-20"> Página responsiva, Galeria e Informacion de contacto </p>
          </div>
        </div>
      </div>
    </div>
  </>
)

export default PortfolioSection2