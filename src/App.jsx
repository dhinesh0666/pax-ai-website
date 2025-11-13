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
import AIProjectScores from './pages/AIProjectScores';
import AIProjectSummary from './pages/AIProjectSummary';
import AIChat from './pages/AIChat';
import ActionItems from './pages/ActionItems';
import NoteTakerAgent from './pages/NoteTakerAgent';

function App() {
  const [currentView, setCurrentView] = useState('home');

  const navigateHome = () => {
    setCurrentView('home');
    // Scroll to top when navigating home
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  const navigateToPage = (page) => {
    setCurrentView(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Render different pages based on current view
  if (currentView === 'book-demo') {
    return <BookDemo onBack={navigateHome} />;
  }

  if (currentView === 'ai-scores') {
    return <AIProjectScores onBack={navigateHome} />;
  }

  if (currentView === 'ai-summary') {
    return <AIProjectSummary onBack={navigateHome} />;
  }

  if (currentView === 'ai-chat') {
    return <AIChat onBack={navigateHome} />;
  }

  if (currentView === 'action-items') {
    return <ActionItems onBack={navigateHome} />;
  }

  if (currentView === 'note-taker') {
    return <NoteTakerAgent onBack={navigateHome} />;
  }

  return (
    <div className="min-h-screen">
      <Navbar 
        onBookDemo={() => setCurrentView('book-demo')} 
        onNavigateHome={navigateHome}
        onNavigateToPage={navigateToPage}
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
