import React from 'react';

interface ModalVinetaProps {
  targetId: string;
  text: string;
}

const ModalVineta: React.FC<ModalVinetaProps> = ({ targetId, text }) => (
  <div>
    <span className="color_azul"><i className="fs-20 vineta fas fa-star"></i></span>
    <p className="pointer d-inline-block" data-toggle="modal" data-target={ targetId }>
      { text }
    </p>
  </div>
);

const AboutSection2 = () => (
  <section id="nosotros">
    <div className="container pt-100 pb-80">
      <div className="row pt-0 pb-10 align-items-center justify-content-start">
        <div className="col-lg-6 order-lg-2">
          <p className="fs-40 fnt_title lh-1_1 color_negro">
            Nuestros Inicios
          </p>
          <p className="pt-20">
            Nacio con el próposito de utilizar la tecnologia y actualizaciones constantes que existen en el mercado para espcializarnos en el desarrollo de software, haciendo sinergia con las diversas áreas administrativas para alcanzar la meta deseada.
          </p>
          <p className="fs-40 pt-40 fnt_title lh-1_1 color_negro">
            Nuestros Valores
          </p>
          <div className="row">
            <div className="col-6">
              <ModalVineta targetId="#comunicacion" text="Comunicación"></ModalVineta>
              <ModalVineta targetId="#compromiso" text="Compromiso"></ModalVineta>
              <ModalVineta targetId="#excelencia" text="Excelencia"></ModalVineta>
            </div>
            <div className="col-6">
              <ModalVineta targetId="#transparencia" text="Transparencia"></ModalVineta>
              <ModalVineta targetId="#amabilidad" text="Amabilidad"></ModalVineta>
              <ModalVineta targetId="#companerismo" text="Compañerismo"></ModalVineta>
            </div>
          </div>
        </div>
        <div className="col-lg-6 order-lg-1">
          <img src="/assets/img/nosotros/about.jpg" alt="" className="img-fluid mx-auto"></img>
        </div>
      </div>
      <div className="pt-50">
        <p>
          Nuestra misión es hacer que con tu equipo de trabajo logres alcanzar los resultados deseados,
          actualizándote y capacitándote desde el trato humano hasta las últimas actualizaciones
          tecnológicas en el mercado.
        </p>
        <p className="pt-20">
          JOMAT Consultores es una empresa socialmente responsable ya que se encarga de adquirir
          equipos de tecnología como computadoras, tabletas, celulares entre otros, para restaurarlos y
          entregárselos a niños de bajos recursos, con el único objetivo de que tengan el acceso a los
          medios digitales y puedan continuar sus estudios.
        </p>
      </div>
    </div>
  </section>
);

export default AboutSection2