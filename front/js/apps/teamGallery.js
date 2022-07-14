import { createRoot } from 'react-dom/client';
import TeamGallery from '../modules/TeamGallery';

const root = createRoot(document.getElementById('team-gallery'));
root.render(<TeamGallery />);
