import React from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';

const clientList1 = [
  {
    'name': 'Salmones Blumar',
    'url': '/static/img/blumar.png',
    'link': 'https://nazcaspa.sharepoint.com/sites/Blumar2'
  },
  {
    'name': 'Salmones Camanchaca',
    'url': '/static/img/camanchaca.png',
    'link': 'https://nazcaspa.sharepoint.com/sites/camanchaca'
  }
];

const clientList2 = [
  {
    'name': 'MOWI Chile',
    'url': '/static/img/mowi.png',
    'link': 'https://nazcaspa.sharepoint.com/sites/mowi'
  },
  {
    'name': 'BluRiver Chile',
    'url': '/static/img/logobluriver.png',
    'link': 'https://nazcaspa.sharepoint.com/sites/bluriver'
  }
];

const Card = ({ data }) => (
  <div className="card" onClick={() => window.location.assign(data.link)}>
    <div className="card__content">
      <div className="card-client-img">
        <img src={data.url}/>
      </div>
    </div>
    <div className="sticky">{data.name}</div>
  </div>
);

const BannerCarousel = () => (
  <Carousel
      infiniteLoop
      autoPlay
      showThumbs={false}
      showIndicators={false}
      showStatus={false}
  >
    <div className="card-list-client grid-2 gap-2">
      { clientList1.map((item, index) => <Card data={item}/>) }
    </div>
    <div className="card-list-client grid-2 gap-2">
      { clientList2.map((item, index) => <Card data={item}/>) }
    </div>
    {/* <div className="client-section">
      <div>
        <div className="title">WHAT THEY SAY</div>
        <div className="information">Donec laoreet eu purus eu viverra. Vestibulum sed convallis massa, eu aliquet massa. Suspendisse lacinia rutrum tincidunt. Integer id erat porta, convallis tortor.</div>
      </div>
    </div>
    <div className="client-section">
      <div>
        <div className="title">WHAT THEY SAY</div>
        <div className="information">Donec laoreet eu purus eu viverra. Vestibulum sed convallis massa, eu aliquet massa. Suspendisse lacinia rutrum tincidunt. Integer id erat porta, convallis tortor.</div>
      </div>
    </div>
    <div className="client-section">
      <div>
        <div className="title">WHAT THEY SAY</div>
        <div className="information">Donec laoreet eu purus eu viverra. Vestibulum sed convallis massa, eu aliquet massa. Suspendisse lacinia rutrum tincidunt. Integer id erat porta, convallis tortor.</div>
      </div>
    </div> */}
  </Carousel>
);

ReactDOM.render(<BannerCarousel />, document.getElementById('home-bottom-carousel'));