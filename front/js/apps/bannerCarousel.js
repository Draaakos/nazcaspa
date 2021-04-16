import React from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';

const BannerCarousel = () => (
  <Carousel infiniteLoop autoPlay showThumbs={false} showIndicators={false} showArrows={false} showStatus={false}>
    <div className="text-section" key={'banner-1'}>
      <div>Caminemos juntos en el conocimiento de nuestro océano</div>
    </div>
    <div className="text-section" key={'banner-2'}>
      <div>Nuestro sello es el compromiso</div>
    </div>
    <div className="text-section" key={'banner-3'}>
      <div>Nuestro objetivo es siempre ir más allá</div>
    </div>
  </Carousel>
);

ReactDOM.render(<BannerCarousel key='banner-carousel-1'/>, document.getElementById('banner-carousel'));