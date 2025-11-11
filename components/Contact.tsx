
import React, { useState } from 'react';
import { SERVICES_DATA, COMPANY_DETAILS } from '../constants';

interface FormData {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    service: SERVICES_DATA[0].title,
    message: '',
  });
  
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!formData.name || !formData.phone) {
      setError('Name und Telefonnummer sind Pflichtfelder.');
      return;
    }

    const whatsappMessage = `Neue Anfrage von ${COMPANY_DETAILS.name} Webseite:\n\nName: ${formData.name}\nTelefon: ${formData.phone}\nEmail: ${formData.email}\nService: ${formData.service}\n\nNachricht:\n${formData.message}`;
    
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${COMPANY_DETAILS.whatsappNumber}&text=${encodedMessage}`;

    setSuccess('Leite zu WhatsApp weiter...');
    
    // Redirect to WhatsApp
    window.location.href = whatsappUrl;
  };

  return (
    <section id="kontakt" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Kontaktformular</h2>
          <p className="mt-2 text-gray-600">Senden Sie uns eine unverbindliche Anfrage. Wir melden uns umgehend bei Ihnen.</p>
          <div className="mt-4 w-24 h-1 bg-blue-500 mx-auto rounded"></div>
        </div>

        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name*</label>
              <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Telefon*</label>
              <input type="tel" name="phone" id="phone" value={formData.phone} onChange={handleChange} required className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
            </div>
            <div>
              <label htmlFor="service" className="block text-sm font-medium text-gray-700">Service</label>
              <select name="service" id="service" value={formData.service} onChange={handleChange} className="mt-1 block w-full px-4 py-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                {SERVICES_DATA.map(service => (
                  <option key={service.title} value={service.title}>{service.title}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Nachricht</label>
              <textarea name="message" id="message" rows={4} value={formData.message} onChange={handleChange} className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"></textarea>
            </div>
            <div className="text-center">
              {error && <p className="text-red-500 mb-4">{error}</p>}
              {success && <p className="text-green-500 mb-4">{success}</p>}
              <button type="submit" className="w-full md:w-auto bg-blue-500 text-white font-bold py-3 px-12 rounded-full text-lg transition-transform transform hover:scale-105 hover:bg-blue-600 shadow-lg">
                Anfrage per WhatsApp senden
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
