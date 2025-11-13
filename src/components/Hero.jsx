import { motion } from 'framer-motion';
import { FaRocket, FaChartLine, FaBrain } from 'react-icons/fa';

const Hero = ({ onBookDemo }) => {

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6"
            >
              🚀 Executive Management Intelligence Platform
            </motion.div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
              Unified Performance & Sentiment Metrics
              <span className="text-gradient"> Across Your Enterprise</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
              PAXI.AI unifies data from multiple enterprise platforms to deliver comprehensive 
              performance and sentiment metrics across projects and people. Get AI-powered 
              actionable insights that improve efficiency, performance, and decision-making 
              across your entire organization.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button 
                onClick={onBookDemo}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition transform hover:scale-105"
              >
                Start Free Trial
              </button>
              <button 
                onClick={onBookDemo}
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full text-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition"
              >
                Watch Demo
              </button>
            </div>
            
            <div className="flex items-center space-x-8">
              <div className="flex items-center">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 border-2 border-white"></div>
                  ))}
                </div>
                <span className="ml-3 text-gray-600">500+ Teams</span>
              </div>
              <div className="text-yellow-500 flex items-center">
                <span className="text-2xl mr-2">★★★★★</span>
                <span className="text-gray-600">4.9/5</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10">
              <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-1">
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 mb-4">
                  <div className="flex items-center mb-4">
                    <FaBrain className="text-purple-600 text-3xl mr-3" />
                    <div>
                      <h3 className="font-bold text-lg">AI Assistant</h3>
                      <p className="text-sm text-gray-600">Always ready to help</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic">"What's the status of the mobile app redesign?"</p>
                </div>
                
                <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-semibold">Project Health</span>
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm">On Track</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Completion</span>
                      <span className="font-bold">78%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full" style={{width: '78%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-6 -right-6 bg-white rounded-xl shadow-xl p-4 z-20"
            >
              <FaChartLine className="text-green-500 text-2xl mb-2" />
              <p className="text-sm font-semibold">+23% Efficiency</p>
            </motion.div>
            
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 z-20"
            >
              <FaRocket className="text-blue-500 text-2xl mb-2" />
              <p className="text-sm font-semibold">Faster Delivery</p>
            </motion.div>
          </motion.div>
        </div>
      </div>


    </section>
  );
};

export default Hero;
