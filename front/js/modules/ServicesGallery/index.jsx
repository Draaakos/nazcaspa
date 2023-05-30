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
          time={2700}
          name="geodesy"
          images={
            [
              '/static/img/services/geodesia1.jpeg',
              '/static/img/services/geodesia2.jpg',
              '/static/img/services/geodesia3.jpg',
              '/static/img/services/geodesia4.jpg',
              '/static/img/services/geodesia5.jpg',
              '/static/img/services/geodesia6.jpg',
              '/static/img/services/geodesia7.jfif',
              '/static/img/services/geodesia8.jpg',
              '/static/img/services/geodesia9.jpg'
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
            time={5500}
            name="meteology"
            images={
              [
                '/static/img/services/meteorologia1.jpg',
                '/static/img/services/meteorologia2.jpg',
                '/static/img/services/meteorologia3.jpg'
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
            time={2400}
            name="oceanography"
            images={
              [
                '/static/img/services/oceanografia1.jpg',
                '/static/img/services/oceanografia2.jpg',
                '/static/img/services/oceanografia3.jpg',
                '/static/img/services/oceanografia4.jpg',
                '/static/img/services/oceanografia5.jpg',
                '/static/img/services/oceanografia6.jpg'
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
            time={3500}
            name="hidrography"
            images={
              [
                '/static/img/services/hidrografia1.jpeg',
                '/static/img/services/hidrografia2.jpg',
                '/static/img/services/hidrografia3.jpg',
                '/static/img/services/hidrografia4.jpg',
                '/static/img/services/hidrografia5.png',
                '/static/img/services/hidrografia6.png',
                '/static/img/services/hidrografia7.jpg'
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
            time={3000}
            name="ambiental"
            images={
              [
                '/static/img/services/ambientales1.jpg',
                '/static/img/services/ambientales2.jpg',
                '/static/img/services/ambientales3.jpg',
                '/static/img/services/ambientales4.jpg',
                '/static/img/services/ambientales5.jpg',
                '/static/img/services/ambientales6.jpg',
                '/static/img/services/ambientales6.jpg'
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
