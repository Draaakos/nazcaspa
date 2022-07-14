import { createRoot } from 'react-dom/client';
import ServicesGallery from '../modules/ServicesGallery';

const root = createRoot(document.getElementById('services-gallery'));
root.render(<ServicesGallery />);