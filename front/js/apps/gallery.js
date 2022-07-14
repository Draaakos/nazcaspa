import { createRoot } from 'react-dom/client';
import Gallery from './../modules/Gallery';

const root = createRoot(document.getElementById('gallery'));
root.render(<Gallery />);