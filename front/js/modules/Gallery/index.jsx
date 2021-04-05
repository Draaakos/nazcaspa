import React, { useState } from 'react';
import Modal from 'ui/Modal';
import ImageList from './ImageList';

const Gallery = () => {
  const [isModalActive, setModalActive] = useState(false);
  const modal = isModalActive ? <Modal onHandler={() => setModalActive(false)} status={isModalActive}><ImageList /></Modal> : null;

  return (
    <div className="galery-information__container">
      {modal}
      <div className="galery-information__container__title">GALERÍA</div>
      <div className="galery-information__container__description">Duis nulla nulla, faucibus id diam ac, luctus sodales purus. Quisque nibh ipsum, venenatis vitae imperdiet eu, commodo nec sem. Ut accumsan tellus quis velit mattis sollicitudin.</div>
      <button className="nazca-button" onClick={() => setModalActive(true)}>Ver galería</button>
    </div>
  )
};

export default Gallery;