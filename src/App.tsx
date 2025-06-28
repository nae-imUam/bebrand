import React, { useState } from 'react';
// Importing icons
import { Home as HomeIcon, Shirt, Phone, Menu, X, Palette } from 'lucide-react';

// Importing page components
import HomePage from './pages/HomePage';
import SamplesPage from './pages/SamplesPage';
import RequestQuotePage from './pages/RequestQuotePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ServicesPage from './pages/ServicesPage';

// Define type for sample details to pass to RequestQuotePage
interface SampleDetails {
  id: number;
  name: string;
  img: string;
  description: string;
  price: string;
  moq: string;
  features: string[];
}

// Main App Component
const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<string>('home');
  // State to hold the category to display on the SamplesPage when navigating
  const [initialSampleCategory, setInitialSampleCategory] = useState<string>('All');
  // State to hold specific sample details for the RequestQuotePage
  const [quoteRequestSample, setQuoteRequestSample] = useState<SampleDetails | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false); // State for mobile menu

  // Enhanced navigate function to handle direct navigation to sample categories
  // and specific quote requests
  const navigate = (page: string, categoryId: string = 'All', sampleDetails: SampleDetails | null = null) => {
    setInitialSampleCategory(categoryId); // Set the category ID before navigating to SamplesPage
    setQuoteRequestSample(sampleDetails); // Set sample details for RequestQuotePage
    setCurrentPage(page);
    setIsMobileMenuOpen(false); // Close mobile menu on navigation
  };

  return (
    <div className="min-h-screen bg-gray-50 font-inter flex flex-col">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-lg p-4 sticky top-0 z-50">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <img src="https://i.ibb.co/pjMr8L4n/be-Brand-Logo2.png" className="h-10 w-10 mr-2" alt="beBrand Logo" />
            <div className="text-2xl font-bold cursor-pointer" onClick={() => navigate('home')}>
              beBrand
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 text-lg font-medium">
            <button
              onClick={() => navigate('home')}
              className={`hover:text-blue-200 transition duration-300 ${currentPage === 'home' ? 'text-blue-200 underline underline-offset-4' : ''}`}
            >
              Home
            </button>
            <button
              onClick={() => navigate('services')}
              className={`hover:text-blue-200 transition duration-300 ${currentPage === 'services' ? 'text-blue-200 underline underline-offset-4' : ''}`}
            >
              Services
            </button>
            <button
              onClick={() => navigate('samples')}
              className={`hover:text-blue-200 transition duration-300 ${currentPage === 'samples' ? 'text-blue-200 underline underline-offset-4' : ''}`}
            >
              Samples & Pricing
            </button>
            <button
              onClick={() => navigate('about')}
              className={`hover:text-blue-200 transition duration-300 ${currentPage === 'about' ? 'text-blue-200 underline underline-offset-4' : ''}`}
            >
              About Us
            </button>
            <button
              onClick={() => navigate('contact')}
              className={`hover:text-blue-200 transition duration-300 ${currentPage === 'contact' ? 'text-blue-200 underline underline-offset-4' : ''}`}
            >
              Contact
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <nav className="md:hidden bg-blue-700 text-white absolute top-full left-0 right-0 py-4 shadow-lg flex flex-col items-center space-y-4 animate-fade-in-down">
            <button
              onClick={() => navigate('home')}
              className="w-full text-center py-2 px-4 hover:bg-blue-600 transition duration-300 rounded-md"
            >
              Home
            </button>
            <button
              onClick={() => navigate('services')}
              className="w-full text-center py-2 px-4 hover:bg-blue-600 transition duration-300 rounded-md"
            >
              Services
            </button>
            <button
              onClick={() => navigate('samples')}
              className="w-full text-center py-2 px-4 hover:bg-blue-600 transition duration-300 rounded-md"
            >
              Samples & Pricing
            </button>
            <button
              onClick={() => navigate('about')}
              className="w-full text-center py-2 px-4 hover:bg-blue-600 transition duration-300 rounded-md"
            >
              About Us
            </button>
            <button
              onClick={() => navigate('contact')}
              className="w-full text-center py-2 px-4 hover:bg-blue-600 transition duration-300 rounded-md"
            >
              Contact
            </button>
          </nav>
        )}
      </header>

      {/* Main Content Area */}
      <main className="flex-grow container mx-auto p-4 md:p-8">
        {(() => {
          switch (currentPage) {
            case 'home':
              return <HomePage navigate={navigate} />;
            case 'services':
              return <ServicesPage navigate={navigate} />;
            case 'samples':
              return <SamplesPage navigate={navigate} initialSelectedCategory={initialSampleCategory} />;
            case 'requestQuote': // New Route
              return <RequestQuotePage navigate={navigate} sampleDetails={quoteRequestSample} />;
            case 'about':
              return <AboutPage />;
            case 'contact':
              return <ContactPage />;
            default:
              return <HomePage navigate={navigate} />;
          }
        })()}
      </main>

      {/* Bottom Navigation for Mobile */}
      <footer className="md:hidden bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-inner p-2 sticky bottom-0 z-50">
        <nav className="flex justify-around items-center h-full">
          <button
            onClick={() => navigate('home')}
            className={`flex flex-col items-center text-xs font-medium px-2 py-1 rounded-md transition duration-300 ${currentPage === 'home' ? 'text-blue-200' : 'text-white hover:bg-blue-700'}`}
          >
            <HomeIcon size={20} />
            Home
          </button>
          <button
            onClick={() => navigate('services')}
            className={`flex flex-col items-center text-xs font-medium px-2 py-1 rounded-md transition duration-300 ${currentPage === 'services' ? 'text-blue-200' : 'text-white hover:bg-blue-700'}`}
          >
            <Shirt size={20} />
            Services
          </button>
          <button
            onClick={() => navigate('samples')}
            className={`flex flex-col items-center text-xs font-medium px-2 py-1 rounded-md transition duration-300 ${currentPage === 'samples' ? 'text-blue-200' : 'text-white hover:bg-blue-700'}`}
          >
            <Palette size={20} />
            Samples
          </button>
          <button
            onClick={() => navigate('contact')}
            className={`flex flex-col items-center text-xs font-medium px-2 py-1 rounded-md transition duration-300 ${currentPage === 'contact' ? 'text-blue-200' : 'text-white hover:bg-blue-700'}`}
          >
            <Phone size={20} />
            Contact
          </button>
        </nav>
      </footer>
    </div>
  );
};

export default App;