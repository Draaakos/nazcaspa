import React from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';

const BannerCarousel = () => (
  <Carousel infiniteLoop autoPlay showThumbs={false} showIndicators={false} showArrows={false} showStatus={false}>
    <div className="text-section">
      <div>Caminemos juntos en el conocimiento de nuestro océano</div>
        {/* <img src="http://react-responsive-carousel.js.org/assets/1.jpeg" /> 
        <p className="legend">Legend 1</p> */}
    </div>
    <div className="text-section">
      <div>Nuestro sello es el compromiso</div>
        {/* <img src="http://react-responsive-carousel.js.org/assets/1.jpeg" /> 
        <p className="legend">Legend 2</p> */}
    </div>
    <div className="text-section">
      <div>Nuestro objetivo es siempre ir más allá</div>
        {/* <img src="http://react-responsive-carousel.js.org/assets/1.jpeg" /> 
        <p className="legend">Legend 3</p> */}
    </div>
  </Carousel>
);

ReactDOM.render(<BannerCarousel />, document.getElementById('banner-carousel'));