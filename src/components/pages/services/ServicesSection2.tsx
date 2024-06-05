import React, { useEffect } from "react";

interface ServicesData {
  title: string;
  subtitle: string;
  description: string;
  imgSrc: string;
  alt: string;
  class?: string;
}

const servicesInfo: ServicesData[] = [
  {
    title: "Páginas Web",
    subtitle: "Tu marca o negocio en la nube",
    description: "Desarrollamos tu sitio web resposivo, que sea rápido y tenga una buena experiencia de usuario.",
    imgSrc: "/assets/img/servicios/sitioweb.png",
    alt: "sitioweb",
  },
  {
    title: "Diseño Gráfico",
    subtitle: "Refresca tu imagen para llamar más la atencion.",
    description: "Diseño de identidad, folletos, manuales y montajes.",
    imgSrc: "/assets/img/servicios/diseno.png",
    alt: "diseno",
    class: "order-lg-2",
  },
  {
    title: "Marketing Digital",
    subtitle: "Los resultados que esperas",
    description: "Trabaja con tu propio presupuesto e impulsamos tu marca para llegar más lejos.",
    imgSrc: "/assets/img/servicios/marketing.png",
    alt: "marketing",
  },
  {
    title: "Software",
    subtitle: "Sistema personalizado",
    description: "Herramientas diseñadas a la medida según tus necesidades. Hacemos lo que tu necesitas.",
    imgSrc: "/assets/img/servicios/software.png",
    alt: "software",
    class: "order-lg-2",
  },
  {
    title: "Selección Personal",
    subtitle: "Personal calificado para la organización",
    description: "Contamos con un equipo de psicólogos laborales especialistas en desarrollo organizacional y reclutamiento.",
    imgSrc: "/assets/img/servicios/personal.png",
    alt: "seleccion-personal",
  },
];

const ServicesSection2 = () => {
  useEffect(() => {
    const images = document.querySelectorAll<HTMLImageElement>(".aos-init");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("aos-animate");
          } else {
            entry.target.classList.remove("aos-animate");
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    images.forEach((image) => {
      observer.observe(image);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="nosotros">
      <div className="container pt-100 pb-100">
        { servicesInfo.map((item, index) => (
          <div
            key={ index }
            className="row pt-0 pb-100 align-items-center justify-content-start"
          >
            <div className={ `col-lg-6 ${ item.class ?? "" }` }>
              <p className="font_title_bold fs-70 color_negro lh-1_1">
                { item.title }
              </p>
              <p className="fs-35 fnt_title lh-1_1 mb-0 pb-10">
                { item.subtitle }
              </p>
              <p className="fs-18">
                { item.description }
              </p>
            </div>
            <div className={ `col-lg-6 ${ item.class ? "" : "order-lg-1" }` }>
              <div data-aos="flip-left" data-aos-duration="2000" className="aos-init">
                <img
                  src={ item.imgSrc }
                  alt={ item.alt }
                  className="img-fluid mx-auto estirar-img"
                ></img>
              </div>
            </div>
          </div>
        )) }
      </div>
    </section>
  );
};

export default ServicesSection2;
