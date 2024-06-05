import React from "react";

interface ServiceData {
  imgSrc: string;
  altText: string;
  title: string;
  description: string;
}

const services: ServiceData[] = [
  {
    imgSrc: "/assets/img/inicio/web-icon.png",
    altText: "web",
    title: "Sitios Web",
    description: "Desarrollo o configuración de sitios web según tus necesidades.",
  },
  {
    imgSrc: "/assets/img/inicio/design.png",
    altText: "diseño",
    title: "Diseño",
    description: "Refresca tu imagen, impacta a tus clientes, diseñamos tu identidad gráfica.",
  },
  {
    imgSrc: "/assets/img/inicio/venta-pc.png",
    altText: "venta equipo",
    title: "Venta Equipo",
    description: "Equipo para oficinas, computadoras y accesorios.",
  },
];

interface ServiceProps {
  imgSrc: string;
  altText: string;
  title: string;
  description: string;
}

const Service: React.FC<ServiceProps> = ({ imgSrc, altText, title, description }) => (
  <div className="col-lg-4 pt-30 text-center">
    <img 
      src={ imgSrc } 
      className="img-fluid mx-auto tam-peq" 
      alt={ altText }
    ></img>
    <p className="fnt_title fs-35 text-center color_blanco">
      { title }
    </p>
    <p className="text-center fs-18 color_blanco">
      { description }
    </p>
  </div>
);

const HomeSection3 = () => (
  <section className="panel pt-100 pb-70 mt-50 animate violeta" data-color="violet">
    <div className="container pb-60">
      <p className="font_title_bold fs-70 color_blanco lh-1_1 text-center">
        Nuestros Servicios
      </p>
      <p className="fs-30 fnt_title lh-1_1 color_blanco text-center">
        Calidad y entrega en todo momento
      </p>
      <div className="row pt-10">
        { services.map((service, index) => (
          <Service 
            key={ index } 
            { ...service }
          ></Service>
        )) }
      </div>
    </div>
  </section>
);

export default HomeSection3;
