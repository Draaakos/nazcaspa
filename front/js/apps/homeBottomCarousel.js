import { createRoot } from 'react-dom/client';
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
    'name': 'Ventisqueros',
    'url': '/static/img/Ventisqueros.png',
    'link': 'https://nazcaspa.sharepoint.com/sites/Ventisqueros2'
  }
];

const clientList3 = [
  {
    'name': 'Cooke AQUALCULTURE',
    'url': '/static/img/cooke.png',
    'link': 'https://nazcaspa.sharepoint.com/sites/CookeAquacultureChile'
  },
  {
    'name': 'AQUA CHILE',
    'url': '/static/img/AquaChile.png',
    'link': 'https://nazcaspa.sharepoint.com/sites/aquachile'
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
      { clientList1.map((item, index) => <Card key={`card-${index}`} data={item}/>) }
    </div>
    <div className="card-list-client grid-2 gap-2">
      { clientList2.map((item, index) => <Card key={`card-${index}`} data={item}/>) }
    </div>
    <div className="card-list-client grid-2 gap-2">
      { clientList3.map((item, index) => <Card key={`card-${index}`} data={item}/>) }
    </div>
  </Carousel>
);


const root = createRoot(document.getElementById('home-bottom-carousel'));
root.render(<BannerCarousel key='banner-carousel-2'/>);
