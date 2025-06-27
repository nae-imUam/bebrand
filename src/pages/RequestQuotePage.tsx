import React, { useState, useEffect } from 'react'; // Import useState and useEffect
import { MessageSquare } from 'lucide-react'; // Import Lucide icons

// Define the SampleDetails type for better type safety
interface SampleDetails {
  id: number;
  name: string;
  img: string;
  description: string;
  price: string;
  moq: string;
  features: string[];
}

// Define the props for RequestQuotePage
interface RequestQuotePageProps {
  navigate: (path: string) => void; // Function to navigate programmatically
  sampleDetails: SampleDetails; // Can be null if not coming from a sample
}

const RequestQuotePage: React.FC<RequestQuotePageProps> = ({ navigate, sampleDetails }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    productName: sampleDetails ? sampleDetails.name : '',
    quantity: sampleDetails ? sampleDetails.moq.split(' ')[0] : '', // Pre-fill with MOQ number if available
    message: sampleDetails ? `I'm interested in a quote for the "${sampleDetails.name}". My desired quantity is around ${sampleDetails.moq}.` : '',
    deadline: '',
  });
  const [status, setStatus] = useState('');
  const WHATSAPP_NUMBER = '919973358663'; // Replace with your actual WhatsApp number, including country code

  // Update form data if sampleDetails change (e.g., user clicks another sample's quote button)
  useEffect(() => {
    if (sampleDetails) {
      setFormData(prev => ({
        ...prev,
        productName: sampleDetails.name,
        quantity: sampleDetails.moq.split(' ')[0],
        message: `I'm interested in a quote for the "${sampleDetails.name}". My desired quantity is around ${sampleDetails.moq}.`,
      }));
    } else {
      // Clear form if no sample details are provided (e.g., general custom quote)
      setFormData({ name: '', email: '', phone: '', productName: '', quantity: '', message: '', deadline: '' });
    }
  }, [sampleDetails]); // Dependency array: run effect when sampleDetails changes


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => { // Add type for 'e'
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const generateWhatsAppMessage = () => {
    let message = `Hello UniPrint Hub, I'd like to request a quote!\n\n`;
    message += `Name: ${formData.name || 'N/A'}\n`;
    message += `Email: ${formData.email || 'N/A'}\n`;
    if (formData.phone) {
      message += `Phone: ${formData.phone}\n`;
    }
    message += `Product Interested In: ${formData.productName || 'Custom/General Inquiry'}\n`;
    message += `Approx. Quantity: ${formData.quantity || 'Not specified'}\n`;
    if (formData.deadline) {
      message += `Desired Delivery Date: ${formData.deadline}\n`;
    }
    message += `\nProject Details:\n${formData.message || 'No additional details provided.'}\n`;
    message += `\nLooking forward to hearing from you!`;

    return encodeURIComponent(message);
  };

  const handleWhatsAppSend = (e: React.MouseEvent<HTMLButtonElement>) => { // Add type for 'e'
    e.preventDefault(); // Prevent default form submission if this button is part of a form
    if (!formData.name || !formData.email || !formData.quantity || !formData.message) {
        setStatus('Please fill in all required fields (Name, Email, Quantity, Message) before sending via WhatsApp.');
        return;
    }

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${generateWhatsAppMessage()}`;
    window.open(whatsappUrl, '_blank');
    setStatus('Redirecting to WhatsApp with your quote request...');
    // Optionally clear form after redirection
    setFormData({ name: '', email: '', phone: '', productName: '', quantity: '', message: '', deadline: '' });
  };

  return (
    <div className="space-y-12">
      <section className="bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-3xl p-8 md:p-12 text-center shadow-lg">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Request Your Custom Quote</h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Tell us about your project and we'll get back to you with a personalized quote.
        </p>
      </section>

      <section className="bg-white rounded-xl shadow-lg p-8 md:p-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Quote Request Form</h2>
        <form onSubmit={(e) => e.preventDefault()} className="space-y-6"> {/* Prevent default form submit */}
          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
          </div>
          <div>
            <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">
              Your Phone Number (Optional)
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
              placeholder="+1 (123) 456-7890"
            />
          </div>

          {/* Product Details */}
          <div>
            <label htmlFor="productName" className="block text-gray-700 text-sm font-bold mb-2">
              Interested Product/Service
            </label>
            <input
              type="text"
              id="productName"
              name="productName"
              value={formData.productName}
              onChange={handleChange}
              className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200 bg-gray-100"
              placeholder="e.g., Custom T-shirts, Branded Pens (Pre-filled if from sample)"
              readOnly={sampleDetails !== null} // Make read-only if pre-filled
            />
            {sampleDetails && (
              <p className="text-sm text-gray-500 mt-2">
                Pre-filled from "{sampleDetails.name}". You can modify it.
              </p>
            )}
          </div>
          <div>
            <label htmlFor="quantity" className="block text-gray-700 text-sm font-bold mb-2">
              Approximate Quantity <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
              placeholder={sampleDetails ? sampleDetails.moq.split(' ')[0] : "e.g., 100, 500"}
              min="1"
              required
            />
          </div>

          {/* Message and Deadline */}
          <div>
            <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
              Your Project Details / Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={6} // Use rows prop
              className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
              placeholder="Describe your design, colors, sizes, preferred print method, and any specific requirements."
              required
            ></textarea>
          </div>
          <div>
            <label htmlFor="deadline" className="block text-gray-700 text-sm font-bold mb-2">
              Desired Delivery Date (Optional)
            </label>
            <input
              type="date"
              id="deadline"
              name="deadline"
              value={formData.deadline}
              onChange={handleChange}
              className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
            />
          </div>

          <button
            type="button" // Change type to button to prevent default form submission
            onClick={handleWhatsAppSend}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transform transition duration-300 hover:scale-105 inline-flex items-center"
          >
            Send Quote via WhatsApp
            <MessageSquare size={20} className="ml-2" />
          </button>
          {status && (
            <p className={`mt-4 text-sm text-center ${status.includes('successfully') || status.includes('Redirecting') ? 'text-green-600' : 'text-blue-600'}`}>
              {status}
            </p>
          )}
        </form>
      </section>

      <section className="bg-blue-600 text-white rounded-3xl p-8 md:p-12 text-center shadow-lg transform transition duration-500 hover:scale-[1.01]">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Have Immediate Questions?</h2>
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
          Feel free to call us directly or send a quick message.
        </p>
        <button
          onClick={() => navigate('/contact')} 
          className="bg-white text-blue-600 hover:bg-blue-50 hover:text-blue-700 font-bold py-3 px-8 rounded-full shadow-lg transform transition duration-300 hover:scale-105"
        >
          Go to Contact Page
        </button>
      </section>
    </div>
  );
};

export default RequestQuotePage;