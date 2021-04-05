import React, { useState } from 'react';
import classNames from 'classnames';

const teamData = [
  {
    icon: '/static/img/team/cristianManque-icon.png',
    url: '/static/img/team/cristianManque.png',
    name: 'Cristian Manque S.​',
    subtitle: 'jefe de proyecto',
    experience: '21',
    profession: 'Biólogo Marino​',
    study: 'Universidad de Los Lagos',
    description: ''
  },
  {
    icon: '/static/img/team/erikRomero-icon.png',
    url: '/static/img/team/erikRomero.png',
    name: 'Erik Romero S.',
    subtitle: 'hidrógrafo consultor',
    experience: '11',
    profession: 'Hidrógrafo ex SHOA',
    study: 'SHOA​ y Academia Politécnica Naval​',
    description: ''
  },
  {
    icon: '/static/img/team/gabrielCardenas-icon.png',
    url: '/static/img/team/gabrielCardenas.png',
    name: 'Gabriel Cárdenas H.​',
    subtitle: 'biólogo consultor',
    experience: '3',
    profession: 'Biólogo Marino​',
    study: 'Universidad de Los Lagos​',
    description: ''
  },
  {
    icon: '/static/img/team/gonzaloAguilar-icon.png',
    url: '/static/img/team/gonzaloAguilar.png',
    name: 'Gonzalo Aguilar L.​',
    subtitle: 'jefe de proyectos',
    experience: '25',
    profession: 'Oceanógrafo',
    study: 'Pontificia Universidad Católica de Valparaíso',
    description: ''
  },
  {
    icon: '/static/img/team/helmuthProschle-icon.png',
    url: '/static/img/team/helmuthProschle.png',
    name: 'Helmuth Proschle',
    subtitle: 'hidrógrafo consultor',
    experience: '11',
    profession: 'Hidrógrafo ex SHOA',
    study: 'SHOA​ y Academia Politécnica Naval',
    description: ''
  },
  {
    icon: '/static/img/team/jorgeAlvarez_PriscillaMorales-icon.png',
    url: '/static/img/team/jorgeAlvarez_PriscillaMorales.png',
    name: 'Jorge Álvarez C.',
    subtitle: 'gerente general',
    experience: '25',
    profession: 'Oceanógrafo​ / Diplomado ingeniería Oceánica​',
    study: 'Pontificia Universidad Católica de Valparaíso / Universidad de Valparaíso​',
    description: ''
  },
  {
    icon: '/static/img/team/nestorRiveros-icon.png',
    url: '/static/img/team/nestorRiveros.png',
    name: 'Néstor Riveros Z.​',
    subtitle: 'hidrógrafo consultor',
    experience: '11',
    profession: 'Hidrógrafo ex SHOA',
    study: 'SHOA​ y Academia Politécnica Naval',
    description: ''
  },
  {
    icon: '/static/img/team/marceloProvoste-icon.png',
    url: '/static/img/team/marceloProvoste.png',
    name: 'Marcelo Provoste D.​',
    subtitle: 'biólogo consultor',
    experience: '3',
    profession: 'Biólogo Marino​',
    study: 'Universidad de Los Lagos​',
    description: ''
  }
];

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
        <div className="item-body__img"><img src={data.url}/></div>
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

const ImageItem = ({ item, onClick, isActive }) => {
  const itemClasses = classNames({
    'item-img': true,
    'item-img--active': isActive
  })

  return(
    <div className={itemClasses}>
      <img src={item.icon} onClick={onClick} />
    </div>
  )
}

const TeamGallery = () => {
  const [itemActive, setItemActive] = useState(0);
  const onHandlerItem = index => {
    return () => {
      if(index === itemActive) {
        setItemActive(null);
        return;
      };

      setItemActive(index);
    };
  };

  const itemList = teamData.map((item, index) => 
    <ItemTeamGallery
      data={item}
      onClick={onHandlerItem(index)}
      isActive={!!(index === itemActive)}
    />
  );

  const desktopMenu = (
    <div className="team-galery-desktop-list">
      { 
        teamData.map((item, index) => 
          <ImageItem 
            item={item} 
            isActive={!!(index == itemActive)} 
            onClick={onHandlerItem(index)} 
          /> 
        )
      }
    </div>
  );

  return(
    <div className="team-galery">
      <div className="team-galery__content">
        {desktopMenu}
        {itemList}
      </div>
    </div>
  );
};

export default TeamGallery;