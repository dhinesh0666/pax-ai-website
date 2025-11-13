import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

const Navbar = ({ onBookDemo, onNavigateHome, onNavigateToPage }) => {
  const [scrolled, setScrolled] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [platformOpen, setPlatformOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  const handleLogoClick = (e) => {
    e.preventDefault();
    if (onNavigateHome) {
      onNavigateHome();
    } else {
      // Fallback: scroll to top if no navigation handler
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-white/80 backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <button onClick={handleLogoClick} className="text-2xl font-bold text-gradient cursor-pointer">PAXI.AI</button>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={handleLogoClick} className="text-gray-700 hover:text-blue-600 transition font-medium">Home</button>
            
            {/* Solutions Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setSolutionsOpen(true)}
              onMouseLeave={() => setSolutionsOpen(false)}
            >
              <button className="flex items-center text-gray-700 hover:text-blue-600 transition font-medium">
                Solutions <FaChevronDown className={`ml-1 text-xs transition-transform ${solutionsOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {solutionsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-xl py-2 border border-gray-100"
                  >
                    <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase">By Role</div>
                    <a href="#executive" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition">Executive</a>
                    <a href="#engineering-manager" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition">Engineering Manager</a>
                    <a href="#project-manager" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition">Project Manager</a>
                    <a href="#vendor-contractor" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition">Vendor/Contractor</a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Platform Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setPlatformOpen(true)}
              onMouseLeave={() => setPlatformOpen(false)}
            >
              <button className="flex items-center text-gray-700 hover:text-blue-600 transition font-medium">
                Platform <FaChevronDown className={`ml-1 text-xs transition-transform ${platformOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {platformOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 mt-2 w-72 bg-white rounded-lg shadow-xl py-2 border border-gray-100"
                  >
                    <button onClick={() => onNavigateToPage('ai-scores')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition">AI Project Scores</button>
                    <button onClick={() => onNavigateToPage('ai-summary')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition">AI Project/People Summary</button>
                    <button onClick={() => onNavigateToPage('ai-chat')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition">AI Chat</button>
                    <button onClick={() => onNavigateToPage('action-items')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition">Action Items Recommendations</button>
                    <button onClick={() => onNavigateToPage('note-taker')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition">Context Aware Note Taker Agent</button>
                    <a href="#integrations" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition">Connectors</a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* About Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setAboutOpen(true)}
              onMouseLeave={() => setAboutOpen(false)}
            >
              <button className="flex items-center text-gray-700 hover:text-blue-600 transition font-medium">
                About <FaChevronDown className={`ml-1 text-xs transition-transform ${aboutOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {aboutOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-xl py-2 border border-gray-100"
                  >
                    <a href="#company" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition">Company</a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <button 
              onClick={onBookDemo}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition transform hover:scale-105 font-semibold"
            >
              Book A Demo
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
