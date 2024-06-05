import React from 'react';

interface InputContactProps {
  type: string;
  id: string;
  name: string;
  placeholder: string;
  pattern?: string;
  required?: boolean;
}

const InputContact: React.FC<InputContactProps> = ({ type, id, name, placeholder, pattern, required = false }) => (
  <div className="col-lg-12">
    <div className="form-group">
      <div className="validation">
        <input type={ type } className="form-control2 input-lg" id={ id } name={ name } placeholder={ placeholder } pattern={ pattern } required={ required }></input>
      </div>
    </div>
  </div>
);

const ContactForm = () => (
  <form id="signupForm1" className="form-horizontal col-12 col-lg-11 mx-auto pt-30 pb-30">
    <div className="row">
      <InputContact type="text" id="nombre" name="nombre" placeholder="Nombre Completo" required></InputContact>
      <InputContact type="text" id="email" name="email" placeholder="Email" required></InputContact>
      <InputContact type="tel" id="tel" name="tel" placeholder="Teléfono" pattern="[0-9]{10}"></InputContact>
      <div className="col-lg-12">
        <div className="form-group">
          <div className="validation">
            <textarea name="comentarios" required id="comentarios" className="form-control2" rows={ 5 } cols={ 25 } placeholder="Acerca de su proyecto"></textarea>
          </div>
        </div>
      </div>
      <div className="col-12">
        <div className="captcha">
          <div className="g-recaptcha" data-sitekey="6LeqEmEUAAAAADUQu6GVSONaaT-fVeZcmZ7bAWrE"></div>
        </div>
        <br></br>
      </div>
      <div id="success"></div>
      <div className="col-12 mx-auto">
        <button type="submit" className="up buttonn color_blanco fondo_verde" id="btn_contact" name="btn_contact"> Contactar </button><br></br>
      </div>
    </div>
  </form>
);

const HomeSection4 = () => (
  <section className="panel pt-70 pb-70" data-color="white">
    <div className="container">
      <div className="row align-items-center justify-content-start mt-40">
        <div className="col-lg-12">
          <p className="font_title_bold fs-70 color_negro lh-1_1"> Contáctanos </p>
          <p className="fs-30 fnt_title lh-1_1">
            Ponte en contacto con nosotros y cuéntanos de tu proyecto
          </p>
        </div>
        <div className="col-lg-6">
          <ContactForm></ContactForm>
        </div>
        <div className="col-lg-5 text-right centrar">
          <img src="/assets/img/inicio/audifonos.png" className="img-fluid mx-auto" alt="cel"></img>
        </div>
      </div>
    </div>
  </section>
);

export default HomeSection4