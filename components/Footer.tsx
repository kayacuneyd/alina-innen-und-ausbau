
import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram } from 'react-icons/fa';
import { COMPANY_DETAILS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-lg font-bold text-white mb-4">{COMPANY_DETAILS.name}</h3>
            <p className="text-sm">Ihr Spezialist für Renovierung und Innenausbau.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Kontakt</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center justify-center md:justify-start">
                <FaMapMarkerAlt className="mr-2 text-blue-400" />
                <span>{COMPANY_DETAILS.address}</span>
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <FaPhone className="mr-2 text-blue-400" />
                <a href={`tel:${COMPANY_DETAILS.phone}`} className="hover:text-white">{COMPANY_DETAILS.phone}</a>
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <FaEnvelope className="mr-2 text-blue-400" />
                <a href={`mailto:${COMPANY_DETAILS.email}`} className="hover:text-white">{COMPANY_DETAILS.email}</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Folgen Sie uns</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-white transition-colors">
                <FaFacebook size={24} />
              </a>
              <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-white transition-colors">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} {COMPANY_DETAILS.name}. Alle Rechte vorbehalten.</p>
          <div className="mt-2 space-x-4">
            <a href="#" className="hover:text-white">Impressum</a>
            <span>|</span>
            <a href="#" className="hover:text-white">Datenschutz</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
