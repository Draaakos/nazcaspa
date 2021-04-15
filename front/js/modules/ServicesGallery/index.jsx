import React, { useState } from 'react';
import Modal from '../../ui/Modal';

import Oceanography from './components/Oceanography';
import Hidrography from './components/Hidrography';
import Meteorology from './components/Meteorology';
import Geodesy from './components/Geodesy';
import Robotic from './components/Robotic';
import Hidrodinamic from './components/Hidrodinamic';
import Environmental from './components/Environmental';
import Formalities from './components/Formalities';

const SERVICES_ENUM = {
  OCEANOGRAPHY: 0,
  HIDROGRAPHY: 1,
  METEOROLOGY: 2,
  GEODESY: 3,
  ROBOTIC: 4,
  HIDRODINAMIC: 5,
  ENVIRONMENTAL: 6,
  FORMALITIES: 7
};

const ServicesGallery = () => {
  const [pageActive, setPageActive] = useState(SERVICES_ENUM.OCEANOGRAPHY);
  const [isActiveModal, setIsActiveModal] = useState(false);

  const selectSection = page => {
    return () => {
      setPageActive(page);
      setIsActiveModal(!isActiveModal);
    }
  }

  const components = [
    <Oceanography />,
    <Hidrography />,
    <Meteorology />,
    <Geodesy />,
    <Robotic />,
    <Hidrodinamic />,
    <Environmental />,
    <Formalities />
  ];

  return (
    <div className="services__container"> 

      <Modal status={isActiveModal} onHandler={() => setIsActiveModal(!isActiveModal)}>
        {components[pageActive]}
      </Modal>

      <div className="section-title">SERVICIOS</div>

      <div className="grid-3 gap-2 grid-margin">
        <div className="img-hovered" onClick={selectSection(SERVICES_ENUM.OCEANOGRAPHY)}>
          <div className="shadow-block">
            <div className="shadow-block__container">
              <h4>OCEANOGRAFÍA</h4>
            </div>
          </div>

          <img src="/static/img/services/oceanografia.jpg"/>
        </div>

        <div className="img-hovered" onClick={selectSection(SERVICES_ENUM.HIDROGRAPHY)}>
          <div className="shadow-block">
            <div className="shadow-block__container">
              <h4>HIDROGRAFÍA</h4>
            </div>
          </div>
          
          <img src="/static/img/services/hidrografia.jpeg"/>
        </div>

        <div className="img-hovered" onClick={selectSection(SERVICES_ENUM.METEOROLOGY)}>
          <div className="shadow-block">
            <div className="shadow-block__container">
              <h4>METEOROLOGÍA</h4>
            </div>
          </div>

          <img src="/static/img/services/meteorologia.jpg"/>
        </div>
      </div>

      <div className="grid-2 gap-2 grid-margin">
        <div className="img-hovered" onClick={selectSection(SERVICES_ENUM.GEODESY)}>
          <div className="shadow-block">
            <div className="shadow-block__container">
              <h4>GEODESIA Y TOPOGRAFÍA</h4>
            </div>
          </div>

          <img src="/static/img/services/geodesia.jpeg"/>
        </div>

        <div className="img-hovered" onClick={selectSection(SERVICES_ENUM.ROBOTIC)}>
          <div className="shadow-block">
            <div className="shadow-block__container">
              <h4>ROBÓTICA SUBMARINA</h4>
            </div>
          </div>
          
          <img src="/static/img/services/robotica.jpg"/>
        </div>
      </div>

      <div className="grid-3 gap-2 grid-margin">
        <div className="img-hovered" onClick={selectSection(SERVICES_ENUM.HIDRODINAMIC)}>
          <div className="shadow-block">
            <div className="shadow-block__container">
              <h4>MODELACIÓN HIDRODINÁMICA</h4>
            </div>
          </div>

          <img src="/static/img/services/hidrodinamica.jpg"/>
        </div>

        <div className="img-hovered" onClick={selectSection(SERVICES_ENUM.ENVIRONMENTAL)}>
          <div className="shadow-block">
            <div className="shadow-block__container">
              <h4>ESTUDIOS AMBIENTALES </h4>
            </div>
          </div>

          <img src="/static/img/services/ambientales.jpg"/>
        </div>

        <div className="img-hovered" onClick={selectSection(SERVICES_ENUM.FORMALITIES)}>
          <div className="shadow-block">
            <div className="shadow-block__container">
              <h4>TRÁMITES SECTORIALES</h4>
            </div>
          </div>

          <img src="/static/img/services/sectoriales.jpg"/>
        </div>
      </div>
    </div>
  )
};

export default ServicesGallery;