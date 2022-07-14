import { createRoot } from 'react-dom/client';
import InterestForm from '../modules/InterestForm';

const root = createRoot(document.getElementById('interest-form'));
root.render(<InterestForm />);