import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    title: "Turismar",
    description1: " Excelente servicio y atención, la asesoría para cuestiones de mkt digital y tradicional es muy buena, se actualizan constantemente y van de la mano con la tecnología. ",
    description2: " En cuestión administrativa el asesoramiento ha sido impecable ya que trabajamos en base a nuestras metas y objetivos planeados anualmente. ",
    stars: 5,
  },
  {
    title: "Zapatería y Más Yoshira",
    description1: " Excelente asesoría de mercadotecnia y administración para que mi negocio crezca y tenga presencia en los medios digitales. ",
    description2: "",
    stars: 5,
  },
  {
    title: "Emmanuel estética",
    description1: " Llegaron a estética Emmanuel en una época muy difícil, gracias al trabajo que se realizó muchas amigas y clientes existentes me llamaron y pues se ha dado a conocer cada día más. ",
    description2: " Me gustó mucho mi logo, le dio un plus que necesitaba para marcar la diferencia, ustedes son una empresa muy dedicada a sus clientes, así como están pendientes de sus expectativas y más que nada tienen la paciencia en la exigencia de sus clientes, les dan tips y sugerencias para mejorar durante todo el camino. ",
    stars: 5,
  },
  {
    title: "Cortes el Perla Negra",
    description1: " Buenos diseños para publicidad mediante redes sociales y medios tradicionales, nos apoyaron mucho en la aportación de ideas para promociones y descuentos. ",
    description2: " Así como nos brindaron un excelente servicio en la parte administrativa, así como en la capacitación que nos brindaron para que nuestro equipo esté preparado con las herramientas tecnológicas. ",
    stars: 5,
  },
];

const AboutSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false,
  };

  return (
    <section className="fondo_gris2 pt-30 pb-80">
      <div className="container">
        <p className="fs-40 fnt_title lh-1_1 color_negro">
          Opiniones de Clientes
        </p>
        <div className="major-caousel js-carousel-1a owl-carousel">
          <Slider { ...settings }>
            { testimonials.map((testimonial, index) => (
              <div 
                key={ index } 
                className="testimonial"
              >
                <h4 className="font_title_bold fs-25 mt-4">
                  { testimonial.title }
                </h4>
                <p className="font-weight-normal fs-14">
                  <i className="fas fa-quote-left pr-2"></i>
                  { testimonial.description1 }
                  <br></br>
                  { testimonial.description2 }
                  <i className="fas fa-quote-right pr-2"></i>
                </p>
                <div className="grey-text">
                  { [...Array(testimonial.stars)].map((_, i) => (
                    <i key={ i } className="fas fa-star"></i>
                  )) }
                </div>
              </div>
            )) }
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default AboutSlider;
