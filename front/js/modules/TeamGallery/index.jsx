import React, { useState } from 'react';
import classNames from 'classnames';

const teamData = [
  {
    icon: '/static/img/2023/team/icon/Jorge.png',
    url: '/static/img/2023/team/personal/Jorge.png',
    name: 'Jorge Álvarez C.',
    subtitle: 'gerente general',
    experience: '25',
    profession: 'Oceanógrafo​ / Diplomado Ingeniería Marítima',
    study: 'Pontificia Universidad Católica de Valparaíso / Universidad de Valparaíso​',
    description: ''
  },
  {
    icon: '/static/img/2023/team/icon/Priscilla.png',
    url: '/static/img/2023/team/personal/Priscilla.png',
    name: 'Priscilla Morales G.​',
    subtitle: 'Gerente Recursos Humanos',
    experience: '20',
    profession: 'Secretaria Ejecutiva Computacional',
    study: 'CFT La Araucana​',
    description: ''
  },
  {
    icon: '/static/img/2023/team/icon/Benjamin.png',
    url: '/static/img/2023/team/personal/Benjamin.png',
    name: 'Benjamín Betancur F.​',
    subtitle: 'Asistente de Operaciones',
    experience: '5',
    profession: 'Técnico en Mecánica Automotriz​',
    study: 'DUOC UC​',
    description: ''
  },
  {
    icon: '/static/img/2023/team/icon/Carlos.png',
    url: '/static/img/2023/team/personal/Carlos.png',
    name: 'Carlos Ortiz',
    subtitle: 'hidrógrafo consultor',
    experience: '13',
    profession: 'Hidrógrafo ex SHOA',
    study: 'Servicio Hidrográfico y Oceanográfico de la Armada​',
    description: ''
  },
  {
    icon: '/static/img/2023/team/icon/Cristian.png',
    url: '/static/img/2023/team/personal/Cristian.png',
    name: 'Cristian Manque S.​',
    subtitle: 'Jefe de proyecto',
    experience: '21',
    profession: 'Biólogo Marino​',
    study: 'Universidad de Los Lagos',
    description: ''
  },
  {
    icon: '/static/img/2023/team/icon/Erik.png',
    url: '/static/img/2023/team/personal/Erik.png',
    name: 'Erik Romero S.',
    subtitle: 'hidrógrafo consultor',
    experience: '13',
    profession: 'Hidrógrafo ex SHOA',
    study: 'Servicio Hidrográfico y Oceanográfico de la Armada​',
    description: ''
  },
  {
    icon: '/static/img/2023/team/icon/Gabriel.png',
    url: '/static/img/2023/team/personal/Gabriel.png',
    name: 'Gabriel Cárdenas H.​',
    subtitle: 'biólogo consultor',
    experience: '3',
    profession: 'Biólogo Marino​',
    study: 'Universidad de Los Lagos​',
    description: ''
  },
  {
    icon: '/static/img/2023/team/icon/Gonzalo.png',
    url: '/static/img/2023/team/personal/Gonzalo.png',
    name: 'Gonzalo Aguilar L.​​',
    subtitle: 'Jefe de Oceanografía',
    experience: '27',
    profession: 'Biólogo Marino​',
    study: 'Pontificia Universidad Católica de Valparaíso​',
    description: ''
  },
  {
    icon: '/static/img/2023/team/icon/Helmuth.png',
    url: '/static/img/2023/team/personal/Helmuth.png',
    name: 'Helmuth Proschle A.',
    subtitle: 'hidrógrafo consultor',
    experience: '13',
    profession: 'Ingeniero Ejecución Industrial / Hidrógrafo ex SHOA',
    study: 'Universidad de Las Américas / Servicio Hidrográfico y Oceanográfico de la Armada',
    description: ''
  },
  {
    icon: '/static/img/2023/team/icon/Mabel.png',
    url: '/static/img/2023/team/personal/Mabel.png',
    name: 'Mabel von Johnn A.',
    subtitle: 'Asistente Administrativa',
    experience: '20',
    profession: 'Secretaria Administrativa​',
    study: 'Instituto Sandrok​',
    description: ''
  },
  {
    icon: '/static/img/2023/team/icon/Manuel.png',
    url: '/static/img/2023/team/personal/Manuel.png',
    name: 'Manuel Merino R.',
    subtitle: 'Geografo',
    experience: '5',
    profession: 'Consultor de Proyectos',
    study: 'Universidad Católica de Chile',
    description: ''
  },
  {
    icon: '/static/img/2023/team/icon/Marcelo.png',
    url: '/static/img/2023/team/personal/Marcelo.png',
    name: 'Marcelo Provoste D.​',
    subtitle: 'Biólogo Consultor',
    experience: '3',
    profession: 'Biólogo Marino​',
    study: 'Universidad de Los Lagos​',
    description: ''
  },
  {
    icon: '/static/img/2023/team/icon/Mariana.png',
    url: '/static/img/2023/team/personal/Mariana.png',
    name: 'Mariana Aguila S.​',
    subtitle: 'Analista Contable',
    experience: '6',
    profession: 'Ingeniería en Administración de empresas​',
    study: 'Universidad San Sebastián​',
    description: ''
  },
  {
    icon: '/static/img/2023/team/icon/Martin.png',
    url: '/static/img/2023/team/personal/Martin.png',
    name: 'Martin Soto T.',
    subtitle: 'Consultor de Proyecto',
    experience: '1',
    profession: 'Ingeniero Civil',
    study: 'Universidad Católica del Maule​',
    description: ''
  },
  {
    icon: '/static/img/2023/team/icon/Nestor.png',
    url: '/static/img/2023/team/personal/Nestor.png',
    name: 'Néstor Riveros Z.​',
    subtitle: 'Jefe de Hidrografía y Robótica',
    experience: '13',
    profession: 'Hidrógrafo ex SHOA',
    study: 'Servicio Hidrográfico y Oceanográfico de la Armada',
    description: ''
  },
  {
    icon: '/static/img/2023/team/icon/Paola.png',
    url: '/static/img/2023/team/personal/Paola.png',
    name: 'Paola Wilhelm M.',
    subtitle: 'Jefa de Administración',
    experience: '30',
    profession: 'Secretariado Ejecutivo',
    study: 'Instituto Manpower​',
    description: ''
  },
  {
    icon: '/static/img/2023/team/icon/Ximena.png',
    url: '/static/img/2023/team/personal/Ximena.png',
    name: 'Ximena Perez G.',
    subtitle: 'Encargada de Aseo y Ornato',
    experience: '',
    profession: '',
    study: '​',
    description: ''
  }
];

const ItemTeamGallery = ({ data, onClick, isActive }) => {
  const itemBodyClasses = classNames({
    'item-body': true,
    'item-body--active': isActive
  });

  const experienceLabel = data.experience ? `Experiencia: ${data.experience} años.` : null

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
          <div className="experience-text">{experienceLabel}</div>
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
      key={`team-gallery-${index}`}
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
            key={`img-team-gallery-${index}`}
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
