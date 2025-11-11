
import { Service, GalleryImage } from './types';
import { FaPaintRoller, FaHammer, FaTools, FaBath, FaHome, FaRulerCombined } from 'react-icons/fa';

export const SERVICES_DATA: Service[] = [
  {
    icon: FaRulerCombined,
    title: 'Innenausbau',
    description: 'Kompletter Innenausbau nach Ihren Wünschen, von der Planung bis zur Fertigstellung.'
  },
  {
    icon: FaHammer,
    title: 'Trockenbau',
    description: 'Professioneller Trockenbau für Wände, Decken und individuelle Raumkonzepte.'
  },
  {
    icon: FaPaintRoller,
    title: 'Malerarbeiten',
    description: 'Hochwertige Maler- und Lackierarbeiten für ein perfektes Finish Ihrer Räume.'
  },
  {
    icon: FaHome,
    title: 'Bodenverlegung',
    description: 'Verlegung von Parkett, Laminat, Vinyl und anderen Bodenbelägen mit Präzision.'
  },
  {
    icon: FaBath,
    title: 'Badsanierung',
    description: 'Moderne und funktionale Badsanierung aus einer Hand, inklusive Fliesenarbeiten.'
  },
  {
    icon: FaTools,
    title: 'Komplette Renovierung',
    description: 'Wir übernehmen die vollständige Renovierung Ihrer Immobilie, stressfrei für Sie.'
  }
];

export const GALLERY_IMAGES: GalleryImage[] = [
  { src: 'https://picsum.photos/seed/kitchen/600/400', alt: 'Moderne Küchenrenovierung' },
  { src: 'https://picsum.photos/seed/bathroom/600/400', alt: 'Elegantes saniertes Badezimmer' },
  { src: 'https://picsum.photos/seed/livingroom/600/400', alt: 'Heller Wohnbereich nach Renovierung' },
  { src: 'https://picsum.photos/seed/floor/600/400', alt: 'Neu verlegter Parkettboden' },
  { src: 'https://picsum.photos/seed/drywall/600/400', alt: 'Trockenbauwand im Aufbau' },
  { src: 'https://picsum.photos/seed/painting/600/400', alt: 'Frisch gestrichene Wand in moderner Farbe' },
];

export const COMPANY_DETAILS = {
  name: 'ALINA Innen- & Ausbau',
  address: 'Musterstraße 123, 12345 Musterstadt, Deutschland',
  phone: '+49 170 1234567',
  whatsappNumber: '491701234567', // International format without +
  email: 'info@alina-ausbau.de',
};
