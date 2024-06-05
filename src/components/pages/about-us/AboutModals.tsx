import React from 'react';

const modalsData = [
  {
    id: "comunicacion",
    title: "Comunicación",
    text: "Página responsiva, Galeria e Informacion de contacto",
  },
  {
    id: "compromiso",
    title: "Compromiso",
    text: "Nos comprometemos a ofrecer cada servicio con pasión.",
  },
  {
    id: "excelencia",
    title: "Excelencia",
    text: "Llevamos al máximo la calidad de nuestros servicios.",
  },
  {
    id: "transparencia",
    title: "Transparencia",
    text: "Todo el equipo esta plenamente comprometido a demostrar honestidad con los servicios que se les esté brindando.",
  },
  {
    id: "amabilidad",
    title: "Amabilidad",
    text: "Todo el equipo esta plenamente comprometido a demostrar honestidad con los servicios que se les esté brindando.",
  },
  {
    id: "companerismo",
    title: "Compañerismo",
    text: "Apoyo mutuo es para JOMAT Consultores una de las claves fundamentales para que todo el equipo funcione, por eso, una buena convivencia marca la diferencia.",
  },
];

interface ModalProps {
  id: string;
  title: string;
  text: string;
}

const Modal: React.FC<ModalProps> = ({ id, title, text }) => (
  <div className="modal fade" id={ id } tabIndex={ -1 } role="dialog" aria-labelledby={ `${ id }Title` } aria-hidden="true">
    <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title fnt_title fs-30" id={ `${ id }Title` }>{ title }</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          <p className="fs-20">{ text }</p>
        </div>
      </div>
    </div>
  </div>
);

const AboutModals = () => (
  <>
    { modalsData.map(modal => (
      <Modal key={ modal.id } id={ modal.id } title={ modal.title } text={ modal.text }></Modal>
    )) }
  </>
)

export default AboutModals