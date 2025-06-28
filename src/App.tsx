import React, { useState, useEffect, useCallback } from 'react';
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

// Helper to get current path and parse for dynamic segments
const parsePath = (path: string) => {
  const segments = path.split('/').filter(Boolean); // Filter(Boolean) removes empty strings from split
  let page = 'home';
  let categoryId: string = 'All';
  let sampleId: string | null = null;

  if (segments.length > 0) {
    switch (segments[0]) {
      case 'services':
        page = 'services';
        break;
      case 'samples':
        page = 'samples';
        if (segments[1]) {
          categoryId = segments[1]; // e.g., /samples/t-shirts
        }
        break;
      case 'quote':
        page = 'requestQuote';
        if (segments[1]) {
          sampleId = segments[1]; // e.g., /quote/sample-id-123 (though your current sampleDetails pass is better for internal nav)
        }
        break;
      case 'about':
        page = 'about';
        break;
      case 'contact':
        page = 'contact';
        break;
      default:
        page = 'home'; // Default to home for unknown paths
        break;
    }
  }
  return { page, categoryId, sampleId };
};

// Main App Component
const App: React.FC = () => {
  // State for internal page management, derived from URL
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [initialSampleCategory, setInitialSampleCategory] = useState<string>('All');
  const [quoteRequestSample, setQuoteRequestSample] = useState<SampleDetails | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  // Function to update URL and internal state
  const navigate = useCallback((page: string, categoryId: string = 'All', sampleDetails: SampleDetails | null = null) => {
    let path = '';
    let pageNameForUrl = page; // Store the original page name for URL construction

    switch (page) {
      case 'home':
        path = '/';
        break;
      case 'services':
        path = '/services';
        break;
      case 'samples':
        path = `/samples${categoryId !== 'All' ? `/${categoryId}` : ''}`;
        setInitialSampleCategory(categoryId);
        break;
      case 'requestQuote':
        // For requestQuote, if sampleDetails is provided, you might want to include an ID in the URL
        // However, passing complex objects via URL is not practical.
        // For simplicity, we'll keep it as a general '/quote' page.
        // If you had unique IDs for all samples and wanted persistent deep linking to a *specific* quote for a sample,
        // you'd need to fetch sampleDetails based on that ID in RequestQuotePage.
        path = '/quote'; // For now, keep a simple /quote path
        setQuoteRequestSample(sampleDetails); // Internal state for pre-filling form
        break;
      case 'about':
        path = '/about';
        break;
      case 'contact':
        path = '/contact';
        break;
      default:
        path = '/';
        pageNameForUrl = 'home'; // Ensure the default page is handled correctly
    }

    // Use pushState to update the URL without a full page reload
    // We pass the current page and categoryId as state for popstate event
    window.history.pushState({ page: pageNameForUrl, categoryId: categoryId, sampleDetails: sampleDetails }, '', path);
    setCurrentPage(page);
    setIsMobileMenuOpen(false); // Close mobile menu on navigation
  }, []); // Empty dependency array as navigate doesn't depend on external state here

  // Effect to handle initial load and browser back/forward buttons
  useEffect(() => {
    // Function to handle URL changes
    const handleLocationChange = () => {
      const { page, categoryId} = parsePath(window.location.pathname);
      setCurrentPage(page);
      setInitialSampleCategory(categoryId);
      // If you implement fetching sample details based on ID from URL:
      // if (page === 'requestQuote' && sampleId) {
      //   // You would fetch sampleDetails here based on sampleId
      //   // For now, it will just show the general quote page
      //   setQuoteRequestSample(null);
      // } else {
      //   setQuoteRequestSample(null);
      // }
    };

    // Listen for popstate event (browser back/forward)
    window.addEventListener('popstate', handleLocationChange);

    // Initial load: parse the current URL
    handleLocationChange();

    // Cleanup event listener
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
    };
  }, []); // Empty dependency array means this runs once on mount

  // Effect for updating document title and meta description (from your previous code, refined)
  useEffect(() => {
    let title = 'beBrand | Custom Printing Services in Bhagalpur, Bihar, India';
    let description = 'beBrand offers high-quality custom printing services across India, specializing in corporate gifts, personalized merchandise, and bulk apparel. Based in Bhagalpur, Bihar.';

    switch (currentPage) {
      case 'home':
        title = 'beBrand | Custom Printing Services in Bhagalpur, Bihar & India';
        description = 'Your trusted partner for custom t-shirts, corporate gifts, and brand merchandise across India. High-quality and affordable printing solutions from Bhagalpur, Bihar.';
        break;
      case 'services':
        title = 'Our Services | Custom T-Shirt, Mug, Pen Printing & More | beBrand';
        description = 'Explore beBrand\'s wide range of custom printing services including apparel, promotional products, stationery, and packaging solutions for your brand in India.';
        break;
      case 'samples':
        if (initialSampleCategory !== 'All') {
          title = `${initialSampleCategory.replace(/-/g, ' ').split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')} Samples & Pricing | beBrand`;
          description = `View beBrand's custom printed ${initialSampleCategory.replace(/-/g, ' ')} samples and pricing. High-quality bulk printing for businesses in India.`;
        } else {
          title = 'Custom Printed Samples & Pricing | T-Shirts, Corporate Gifts | beBrand';
          description = 'View beBrand\'s custom printed product samples and transparent pricing for t-shirts, mugs, pens, and more. Get a quote for your bulk order today!';
        }
        break;
      case 'requestQuote':
        title = 'Request a Custom Printing Quote | beBrand India';
        description = 'Get a personalized quote for your custom printing project from beBrand. Tell us your requirements for branded apparel, merchandise, or packaging, delivered across India.';
        break;
      case 'about':
        title = 'About beBrand | Top Printing Company in Bhagalpur, Bihar';
        description = 'Learn about beBrand\'s story, values, and commitment to quality as a leading custom printing service provider based in Bhagalpur, empowering brands across India.';
        break;
      case 'contact':
        title = 'Contact beBrand | Get in Touch for Custom Printing Needs';
        description = 'Contact beBrand for all your custom printing needs in Bhagalpur, Bihar, and beyond. Reach us via phone, email, or WhatsApp for quotes and support.';
        break;
      default:
        // Default values already set at the top, or can explicitly set home again
        break;
    }

    document.title = title;
    const metaDescription = document.querySelector('meta[name="description"]') || document.createElement('meta');
    if (!metaDescription.hasAttribute('name')) metaDescription.setAttribute('name', 'description');
    metaDescription.setAttribute('content', description);
    if (!document.head.contains(metaDescription)) {
      document.head.appendChild(metaDescription);
    }
  }, [currentPage, initialSampleCategory]); // Add initialSampleCategory as a dependency for samples page dynamic title

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
            case 'requestQuote':
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