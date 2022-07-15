import React, { useState } from 'react';
import team from './team.js';

import ItemTeamGallery from './components/ItemTeamGallery.jsx';
import ImageItem from './components/ImageItem.jsx';


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

  const itemList = team.map((item, index) => 
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
        team.map((item, index) => 
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
    <section className="team-galery">
      <div className="team-galery__content">
        { desktopMenu }
        { itemList }
      </div>
    </section>
  );
};

export default TeamGallery;