
import { IconType } from 'react-icons';

export interface Service {
  icon: IconType;
  title: string;
  description: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
}
