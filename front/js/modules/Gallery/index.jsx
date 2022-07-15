import React, { useState } from 'react';
import Modal from 'ui/Modal';
import ImageList from './ImageList';

const Gallery = () => {
  const [isModalActive, setModalActive] = useState(false);
  const modal = isModalActive 
    ? <Modal 
        onHandler={() => setModalActive(false)} 
        status={isModalActive}
      >
        <ImageList />
      </Modal> 
    : null;

  return (
    <div className="galery-information__container">
      {modal}
      <div className="galery-information__container__title">GALERÍA</div>
      <div className="galery-information__container__description">En esta galerÍa podrás ver algunas imágenes sobre el trabajo al que nos dedicamos a diario. </div>
      <button className="nazca-button" onClick={() => setModalActive(true)}>Ver galería</button>
    </div>
  )
};

export default Gallery;