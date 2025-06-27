import React, { useState } from 'react'; // Import useState
import { Phone, Mail, MapPin, MessageSquare } from 'lucide-react'; // Import Lucide icons

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const WHATSAPP_NUMBER = '919973358663'; // Your WhatsApp number with country code

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => { // Add type for 'e'
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const generateContactWhatsAppMessage = () => {
    let message = `Hello UniPrint Hub, I have a general inquiry!\n\n`;
    message += `Name: ${formData.name || 'N/A'}\n`;
    message += `Email: ${formData.email || 'N/A'}\n`;
    message += `\nMessage:\n${formData.message || 'No specific message provided.'}\n`;
    message += `\nLooking forward to your response.`;

    return encodeURIComponent(message);
  };

  const handleWhatsAppSend = (e: React.MouseEvent<HTMLButtonElement>) => { // Add type for 'e'
    e.preventDefault(); // Prevent default form submission
    if (!formData.name || !formData.email || !formData.message) {
        setStatus('Please fill in all required fields (Name, Email, Message) before sending via WhatsApp.');
        return;
    }

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${generateContactWhatsAppMessage()}`;
    window.open(whatsappUrl, '_blank');
    setStatus('Redirecting to WhatsApp with your message...');
    setFormData({ name: '', email: '', message: '' }); // Optionally clear form
  };

  return (
    <div className="space-y-12">
      <section className="bg-gradient-to-r from-pink-500 to-red-600 text-white rounded-3xl p-8 md:p-12 text-center shadow-lg">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Have a question or need a custom quote? We're here to help!
        </p>
      </section>

      <section className="bg-white rounded-xl shadow-lg p-8 md:p-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
          <form onSubmit={(e) => e.preventDefault()} className="space-y-6"> {/* Prevent default form submit */}
            <div>
              <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                Your Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
                placeholder="John Doe"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                Your Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
                placeholder="john.doe@example.com"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
                Your Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6} // Use rows prop
                className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
                placeholder="Tell us about your printing needs..."
                required
              ></textarea>
            </div>
            <button
              type="button" // Changed to type="button"
              onClick={handleWhatsAppSend}
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transform transition duration-300 hover:scale-105 inline-flex items-center"
            >
              Send Message via WhatsApp
              <MessageSquare size={20} className="ml-2" />
            </button>
            {status && (
              <p className={`mt-4 text-sm text-center ${status.includes('Redirecting') ? 'text-green-600' : 'text-blue-600'}`}>
                {status}
              </p>
            )}
          </form>
        </div>

        {/* Contact Information */}
        <div className="lg:pl-8 pt-8 lg:pt-0">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact Information</h2>
          <div className="space-y-4 text-gray-700 text-lg">
            <p className="flex items-center">
              <Phone size={24} className="mr-3 text-blue-600" />
              <span>+1 (123) 456-7890</span>
            </p>
            <p className="flex items-center">
              <Mail size={24} className="mr-3 text-blue-600" />
              <span>info@uniprinthub.com</span>
            </p>
            <p className="flex items-start">
              <MapPin size={24} className="mr-3 text-blue-600 mt-1" />
              <span>
                123 Print Street, <br />
                Custom City, PC 12345, <br />
                Country
              </span>
            </p>
            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-2">Business Hours:</h3>
              <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p>Saturday: 10:00 AM - 2:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;