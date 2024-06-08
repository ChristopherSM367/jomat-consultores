import React from "react";

const formData = [
  {
    type: 'text',
    idName: 'nombre',
    placeholder: 'Nombre Completo',
    required: true,
  },
  {
    type: 'text',
    idName: 'email',
    placeholder: 'Email',
    required: true,
  },
  {
    type: 'tel',
    idName: 'tel',
    placeholder: 'Teléfono',
    pattern: '[0-9]{10}',
    required: false,
  },
  {
    type: 'textarea',
    idName: 'comentarios',
    placeholder: 'Deje sus dudas o comentarios',
    required: true,
  }
];

const linkData = [
  {
    iconClass: 'ion-ios-telephone-outline fs-40',
    href: 'tel:3347376654;708',
    text: '33 4737 6654 ext;708',
  },
  {
    iconClass: 'ion-social-whatsapp-outline fs-35',
    href: 'https://api.whatsapp.com/send?phone=+5213311226564&amp;text=Me comunico del sitio JomatConsultores.com',
    text: '+52 1 33 1122 6564',
  },
  {
    iconClass: 'ion-ios-email-outline fs-40',
    href: 'mailto:contacto@jomatconsultores.com',
    text: 'contacto@jomatconsultores.com',
  },
  {
    iconClass: 'ion-ios-location-outline fs-40',
    href: '/contacto',
    text: 'Calle Kabah 1592, Jardines del Sol',
    text2: '45050 Zapopan, Jalisco. México',
    blank: false,
  }
];

interface FormProps {
  type: string;
  idName: string;
  placeholder: string;
  pattern?: string;
  required: boolean;
}

interface LinkProps {
  iconClass: string;
  href: string;
  text: string;
  text2?: string;
  blank?: boolean;
}

const Form: React.FC<FormProps> = ({ type, idName, placeholder, pattern, required }) => (
  <div className="col-lg-12">
    <div className="form-group">
      <div className="validation">
        { type === 'textarea' ? (
          <textarea 
            id={ idName } 
            name={ idName } 
            className="form-control2" 
            placeholder={ placeholder } 
            rows={ 5 } 
            cols={ 25 } 
            required={ required }
          ></textarea>
        ) : (
          <input 
            type={ type } 
            id={ idName } 
            name={ idName } 
            className="form-control2 input-lg" 
            placeholder={ placeholder } 
            pattern={ pattern } 
            required={ required }
          ></input>
        ) }
      </div>
    </div>
  </div>
)

const Link: React.FC<LinkProps> = ({ iconClass, href, text, blank, text2 }) => (
  <div className="col-12">
    <div className="row align-items-center justify-content-start pt-20">
      <div className="col-2 col-lg-2 mx-auto">
        <div className="row align-items-center color_blanco mx-auto text-center img-circle" style={{ width: '40px', height: '40px', textAlign: 'center' }}>
          <i className={ `color_negro icon ${ iconClass } fs-40 mx-auto text-center` }></i>
        </div>
      </div>
      <div className="col-10 col-lg-10 pl-0 pr-0">
        <a 
          href={ href } 
          rel="noreferrer" 
          className="color_negro" 
          target={ blank ? '_blank' : '_self' }
        >
          <p className="fs-20 color_gris mb-0"> 
            { text } 
            { text2 && (
              <>
                <br></br>
                { text2 }
              </>
            ) }
          </p>
        </a>
      </div>
    </div>
  </div>
)

const ContactSection2 = () => (
  <div className="container pt-100">
    <p className="fs-40 fnt_title lh-1_1 color_negro"> Más Información </p>
    <div className="row pb-0">
      <div className="col-lg-6">
        <div className="pt-30 pb-10 mb-10">
          { linkData.map((data, index) => (
            <Link key={ index } { ...data }></Link>
          )) }
          <span id="contratar"></span>
        </div>
      </div>
      <div className="col-lg-6 div-custom2 pl-0 pr-0">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3733.458137160559!2d-103.41654528524343!3d20.65093218620421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428ac2fbaa7fe11%3A0xb4a2e856a1e1367a!2sKabah%201592%2C%20Jardines%20del%20Sol%2C%2045050%20Zapopan%2C%20Jal.!5e0!3m2!1ses!2smx!4v1636220139822!5m2!1ses!2smx" width="100%" height="450" style={{ border: '0' }} allowFullScreen loading="lazy" title="iframe"></iframe>
      </div>
    </div>
    <div className="row pt-80 pb-100 align-items-center justify-content-start">
      <div className="col-lg-6 order-lg-2 text-center">
        <img src="/assets/img/contacto/email.png" className="img-fluid mx-auto" alt="mail" style={{ maxWidth: '200px' }}></img>
      </div>
      <div className="col-12 col-lg-6 pl-0 pr-0 order-lg-1 div-custom2">
      <form id="signupForm1" className="form-horizontal col-12 col-lg-11 mx-auto pt-30 pb-30">
        <div className="row">
          { formData.map((field, index) => (
            <Form key={ index } { ...field }></Form>
          )) }
          <div className="col-12">
            <div className="captcha">
              <div className="g-recaptcha" data-sitekey="6Lev_28UAAAAAIDXSY4sao-XRJz-hrKOwZJaQzPo"></div>
            </div>
            <br></br>
          </div>
          <div id="success" style={{ display: 'inline !important', float: 'left', marginLeft: '0px !important' }}></div>
          <div className="col-12 mx-auto text-center">
            <button type="submit" className="up buttonn color_blanco fondo_negro" id="btn_contact" name="btn_contact"> Enviar mis datos </button>
            <br></br>
          </div>
        </div>
      </form>
      </div>
    </div>
  </div>
)

export default ContactSection2;
