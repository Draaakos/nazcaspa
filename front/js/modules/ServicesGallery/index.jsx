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
import Carousel from './components/Carousel';


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
      <div className="img-hovered" onClick={selectSection(SERVICES_ENUM.GEODESY)}>
        <Carousel
          key="carousel-images-1"
          time={6000}
          name="geodesy"
          images={
            [
              '/static/img/2023/services/geodesia/1.jpg',
              '/static/img/2023/services/geodesia/2.jpg',
              '/static/img/2023/services/geodesia/3.jpg',
              '/static/img/2023/services/geodesia/4.jpg',
              '/static/img/2023/services/geodesia/5.jpg',
              '/static/img/2023/services/geodesia/6.jpg'
            ]
          }
        />

        <div className="shadow-block">
          <div className="shadow-block__container">
            <h4>GEODESIA Y TOPOGRAFÍA</h4>
          </div>
        </div>

        </div>
        <div className="img-hovered" onClick={selectSection(SERVICES_ENUM.ROBOTIC)}>
          <div className="shadow-block">
            <div className="shadow-block__container">
              <h4>ROBÓTICA SUBMARINA</h4>
            </div>
          </div>

          <img src="/static/img/services/robotica.jpg"/>
        </div>
        <div className="img-hovered" onClick={selectSection(SERVICES_ENUM.METEOROLOGY)}>
          <Carousel
            key="carousel-images-2"
            time={6000}
            name="meteology"
            images={
              [
                '/static/img/2023/services/meteorologia/1.jpg',
                '/static/img/2023/services/meteorologia/2.jpg'
              ]
            }
          />
          <div className="shadow-block">
            <div className="shadow-block__container">
              <h4>METEOROLOGÍA</h4>
            </div>
          </div>
        </div>
      </div>

      <div className="grid-2 gap-2 grid-margin" style={{ minHeight: '450px'}}>
        <div className="img-hovered" onClick={selectSection(SERVICES_ENUM.OCEANOGRAPHY)}>
          <Carousel
            key="carousel-images-3"
            time={6000}
            name="oceanography"
            images={
              [
                '/static/img/2023/services/oceanografia/1.jpg',
                '/static/img/2023/services/oceanografia/2.jpg',
                '/static/img/2023/services/oceanografia/3.jpg',
                '/static/img/2023/services/oceanografia/4.jpg',
                '/static/img/2023/services/oceanografia/5.jpg'
              ]
            }
          />
          <div className="shadow-block">
            <div className="shadow-block__container">
              <h4>OCEANOGRAFÍA</h4>
            </div>
          </div>
        </div>

        <div className="img-hovered" onClick={selectSection(SERVICES_ENUM.HIDROGRAPHY)}>
          <Carousel
            key="carousel-images-4"
            time={6000}
            name="hidrography"
            images={
              [
                '/static/img/2023/services/hidrografia/1.jpg',
                '/static/img/2023/services/hidrografia/2.jpg',
                '/static/img/2023/services/hidrografia/3.jpg',
                '/static/img/2023/services/hidrografia/4.jpg',
                '/static/img/2023/services/hidrografia/5.jpg',
                '/static/img/2023/services/hidrografia/6.jpg',
                '/static/img/2023/services/hidrografia/7.jpg',
                '/static/img/2023/services/hidrografia/8.jpg'
              ]
            }
          />
          <div className="shadow-block">
            <div className="shadow-block__container">
              <h4>HIDROGRAFÍA</h4>
            </div>
          </div>
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
          <Carousel
            key="carousel-images-5"
            time={6000}
            name="ambiental"
            images={
              [
                '/static/img/2023/services/estudios_ambientales/1.jpg',
                '/static/img/2023/services/estudios_ambientales/2.jpg',
                '/static/img/2023/services/estudios_ambientales/3.jpg',
                '/static/img/2023/services/estudios_ambientales/4.jpg',
                '/static/img/2023/services/estudios_ambientales/5.jpg',
                '/static/img/2023/services/estudios_ambientales/6.jpg'
              ]
            }
          />
          <div className="shadow-block">
            <div className="shadow-block__container">
              <h4>ESTUDIOS AMBIENTALES </h4>
            </div>
          </div>
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
