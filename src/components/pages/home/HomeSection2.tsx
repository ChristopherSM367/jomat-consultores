import React from "react";

interface FeatureData {
  imgSrc: string;
  altText: string;
  title: string;
  description: string;
}

const features: FeatureData[] = [
  {
    imgSrc: "/assets/img/inicio/aumentar.png",
    altText: "aumenta",
    title: "Impulsar tu Marca",
    description: "Que tu marca sea vista por los demas y tengas clientes potenciales.",
  },
  {
    imgSrc: "/assets/img/inicio/guia.png",
    altText: "guia",
    title: "Comunicación",
    description: "Siempre en constante comunicación para darte el mejor servicio.",
  },
  {
    imgSrc: "/assets/img/inicio/resultados.png",
    altText: "resultados",
    title: "Resultados",
    description: "Nuestro objetivo es apoyarte en alcanzar las metas que te has fijado.",
  },
];

interface FeatureProps {
  imgSrc: string;
  altText: string;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ imgSrc, altText, title, description }) => (
  <div className="col-lg-4 pt-30 text-center">
    <img 
      src={ imgSrc } 
      className="img-fluid mx-auto tam-peq" 
      alt={ altText }
    ></img>
    <p className="fnt_title fs-35 text-center">
      { title }
    </p>
    <p className="text-center fs-18">
      { description }
    </p>
  </div>
);

const HomeSection2 = () => (
  <section className="section pt-60 panel" data-color="white" style={{ backgroundImage: "url('/assets/img/inicio/fondo.png')", backgroundSize: "cover" }}>
    <div className="container pt-40">
      <p className="font_title_bold fs-70 color_negro lh-1_1">
        Agencia de Marketing
      </p>
      <p className="fs-30 fnt_title lh-1_1">
        Somos un grupo de profesionales multidisciplinarios con más de 20 años de experiencia en el mercado.
      </p>
      <div className="row pt-10">
        { features.map((feature, index) => (
          <Feature 
            key={ index } 
            { ...feature }
          ></Feature>
        )) }
      </div>
    </div>
  </section>
);

export default HomeSection2;
