import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const sliderData = [
  {
    title: "Sitios Web",
    description: "Diseñamos tu página web a tu medida y al mejor precio",
    imgUrl: "/assets/img/slider_horizontal/pc-web.png",
    altText: "Sitios Web",
  },
  {
    title: "Diseño Gráfico",
    description: "Diseñamos tu logo e identidad gráfica",
    imgUrl: "/assets/img/slider_horizontal/diseno.png",
    altText: "Diseño Gráfico",
  },
  {
    title: "Marketing Digital",
    description: "Planes a tu medida",
    imgUrl: "/assets/img/slider_horizontal/redes.png",
    altText: "Marketing Digital",
  },
];

const HomeSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    nextArrow: <button className="slick-next"></button>,
    prevArrow: <button className="slick-prev"></button>,
  };

  return (
    <section className="home-slider owl-carousel div-to-fondo owl-loaded owl-drag">
      <Slider { ...settings }>
        { sliderData.map((slide, index) => (
          <div
            key={ index } 
            className="slider-item banner-home"
            style={{ backgroundImage: "url('/assets/img/slider_horizontal/transparente.png')" }}
          >
            <div className="container">
              <div className="row slider-text align-items-center justify-content-start">
                <div className="banner-content col-lg-10 mx-auto element-animate">
                  <div className="text-center">
                    <h1 className="titulos titulobanner font_title_bold lh1 centrar">
                      { slide.title }
                    </h1>
                    <span className="d-none d-lg-block">
                      { slide.description }
                    </span>
                  </div>
                  <img
                    src={ slide.imgUrl }
                    className="img-fluid mx-auto pt-30"
                    alt={ slide.altText }
                  ></img>
                </div>
              </div>
            </div>
          </div>
        )) }
      </Slider>
    </section>
  );
};

export default HomeSlider;
