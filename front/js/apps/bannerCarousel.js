import { createRoot } from 'react-dom/client';
import { Carousel } from 'react-responsive-carousel';

const BannerCarousel = () => (
  <Carousel
    infiniteLoop
    autoPlay
    showThumbs={false}
    showIndicators={false}
    showArrows={false}
    showStatus={false}
    interval={5000}
  >
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

const root = createRoot(document.getElementById('banner-carousel'));
root.render(<BannerCarousel />);