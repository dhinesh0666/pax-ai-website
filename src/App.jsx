import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Integrations from './components/Integrations';
import UseCases from './components/UseCases';
import Pricing from './components/Pricing';
import CTA from './components/CTA';
import Company from './components/Company';
import Footer from './components/Footer';
import BookDemo from './components/BookDemo';

function App() {
  const [currentView, setCurrentView] = useState('home');

  const navigateHome = () => {
    setCurrentView('home');
    // Scroll to top when navigating home
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  if (currentView === 'book-demo') {
    return <BookDemo onBack={navigateHome} />;
  }

  return (
    <div className="min-h-screen">
      <Navbar 
        onBookDemo={() => setCurrentView('book-demo')} 
        onNavigateHome={navigateHome} 
      />
      <Hero onBookDemo={() => setCurrentView('book-demo')} />
      <Features />
      <Integrations />
      <UseCases />
      <Pricing />
      <Company onBookDemo={() => setCurrentView('book-demo')} />
      <CTA onBookDemo={() => setCurrentView('book-demo')} />
      <Footer />
    </div>
  );
}

export default App;
