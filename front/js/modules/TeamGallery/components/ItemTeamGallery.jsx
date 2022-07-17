import React from 'react';
import classNames from 'classnames';

const ItemTeamGallery = ({ data, onClick, isActive }) => {
  const itemBodyClasses = classNames({
    'item-body': true,
    'item-body--active': isActive
  });

  return (
    <React.Fragment>
      <div className="item-head" onClick={onClick}>
        <img src={data.icon} />
      </div>
      <div className={itemBodyClasses}>
        <div className="item-body__img"><img src={data.url} alt="item" /></div>
        <div className="item-body__info">
          <div className="title">{data.name}</div>
          <div className="subtitle">{data.subtitle}</div>
          <div className="profession-text">{data.profession}</div>
          <div className="study-text">{data.study}</div>
          <div className="experience-text">Experiencia: {data.experience} años.</div>
          <div className="info">{data.description}</div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ItemTeamGallery;