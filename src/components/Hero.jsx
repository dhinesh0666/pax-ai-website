import { motion } from 'framer-motion';
import { FaRocket, FaChartLine, FaBrain, FaGlobe, FaBuilding, FaUsers, FaUser, FaChevronRight, FaMapMarkerAlt, FaLayerGroup, FaSearch } from 'react-icons/fa';

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
              className="inline-block bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 px-6 py-3 rounded-full text-sm font-semibold mb-6"
            >
              🌍 Global Drill-Down Intelligence Platform
            </motion.div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
              From Global Overview to
              <span className="text-gradient"> Individual Employee Insights</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
              Start with a bird's-eye view of your entire global organization, then drill down through 
              countries, offices, teams, and individual employees. See exactly what anyone is working on, 
              their performance metrics, and sentiment—all in real-time from a single dashboard.
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
            
            {/* Drill-Down Capability Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="bg-white rounded-xl p-4 shadow-md border border-gray-100"
              >
                <div className="flex items-center mb-2">
                  <FaGlobe className="text-blue-500 mr-2" />
                  <span className="font-semibold text-sm">Global → Local</span>
                </div>
                <p className="text-xs text-gray-600">From worldwide overview to individual office insights</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                className="bg-white rounded-xl p-4 shadow-md border border-gray-100"
              >
                <div className="flex items-center mb-2">
                  <FaUsers className="text-purple-500 mr-2" />
                  <span className="font-semibold text-sm">Team → Individual</span>
                </div>
                <p className="text-xs text-gray-600">Drill down to see what each person is working on</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 }}
                className="bg-white rounded-xl p-4 shadow-md border border-gray-100"
              >
                <div className="flex items-center mb-2">
                  <FaSearch className="text-green-500 mr-2" />
                  <span className="font-semibold text-sm">Real-Time Tracking</span>
                </div>
                <p className="text-xs text-gray-600">Live updates on activities and sentiment</p>
              </motion.div>
            </div>

            <div className="flex items-center space-x-8">
              <div className="flex items-center">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 border-2 border-white"></div>
                  ))}
                </div>
                <span className="ml-3 text-gray-600">500+ Global Teams</span>
              </div>
              <div className="text-yellow-500 flex items-center">
                <span className="text-2xl mr-2">★★★★★</span>
                <span className="text-gray-600">4.9/5 Executives</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Interactive Drill-Down Visualization */}
            <div className="relative z-10">
              <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl shadow-2xl p-6 border border-blue-100">
                
                {/* Breadcrumb Navigation */}
                <div className="flex items-center text-sm text-gray-600 mb-4 flex-wrap">
                  <span className="font-semibold text-blue-600">Global</span>
                  <FaChevronRight className="mx-2 text-gray-400" />
                  <span className="font-semibold text-green-600">USA</span>
                  <FaChevronRight className="mx-2 text-gray-400" />
                  <span className="font-semibold text-purple-600">NYC Office</span>
                  <FaChevronRight className="mx-2 text-gray-400" />
                  <span className="font-semibold text-orange-600">Engineering</span>
                  <FaChevronRight className="mx-2 text-gray-400" />
                  <span className="font-semibold">Sarah Chen</span>
                </div>

                {/* Animated Drill-Down Levels */}
                <div className="space-y-3">
                  
                  {/* Level 1: Global Organization */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="relative"
                  >
                    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-4 text-white shadow-lg">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="bg-white/20 rounded-lg p-2 mr-3">
                            <FaGlobe className="text-2xl" />
                          </div>
                          <div>
                            <h3 className="font-bold text-lg">Global Corporation</h3>
                            <p className="text-sm opacity-90">12 Countries • 47 Offices • 2,847 Employees</p>
                          </div>
                        </div>
                        <div className="bg-green-400 px-3 py-1 rounded-full text-xs font-semibold">
                          91% Health
                        </div>
                      </div>
                    </div>
                    <motion.div
                      className="absolute -right-3 top-1/2 transform -translate-y-1/2"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <div className="bg-blue-500 rounded-full p-2 shadow-lg">
                        <FaChevronRight className="text-white text-sm" />
                      </div>
                    </motion.div>
                  </motion.div>

                  {/* Level 2: Country/Region */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 }}
                    className="ml-6 relative"
                  >
                    <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl p-4 text-white shadow-lg">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="bg-white/20 rounded-lg p-2 mr-3">
                            <FaMapMarkerAlt className="text-xl" />
                          </div>
                          <div>
                            <h3 className="font-bold">🇺🇸 United States</h3>
                            <p className="text-sm opacity-90">8 Offices • 1,247 Employees</p>
                          </div>
                        </div>
                        <div className="bg-green-300 px-2 py-1 rounded text-xs font-semibold">
                          94%
                        </div>
                      </div>
                    </div>
                    <motion.div
                      className="absolute -right-3 top-1/2 transform -translate-y-1/2"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
                    >
                      <div className="bg-green-500 rounded-full p-2 shadow-lg">
                        <FaChevronRight className="text-white text-sm" />
                      </div>
                    </motion.div>
                  </motion.div>

                  {/* Level 3: Office */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.5 }}
                    className="ml-12 relative"
                  >
                    <div className="bg-gradient-to-r from-purple-500 to-violet-500 rounded-xl p-3 text-white shadow-lg">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="bg-white/20 rounded-lg p-2 mr-2">
                            <FaBuilding className="text-lg" />
                          </div>
                          <div>
                            <h3 className="font-bold text-sm">New York City Office</h3>
                            <p className="text-xs opacity-90">347 Employees • 12 Projects</p>
                          </div>
                        </div>
                        <div className="bg-purple-300 px-2 py-1 rounded text-xs font-semibold">
                          89%
                        </div>
                      </div>
                    </div>
                    <motion.div
                      className="absolute -right-3 top-1/2 transform -translate-y-1/2"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: 0.6 }}
                    >
                      <div className="bg-purple-500 rounded-full p-2 shadow-lg">
                        <FaChevronRight className="text-white text-sm" />
                      </div>
                    </motion.div>
                  </motion.div>

                  {/* Level 4: Team/Department */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 2 }}
                    className="ml-16 relative"
                  >
                    <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-lg p-3 text-white shadow-md">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="bg-white/20 rounded p-1.5 mr-2">
                            <FaUsers className="text-base" />
                          </div>
                          <div>
                            <h3 className="font-bold text-sm">Engineering Team</h3>
                            <p className="text-xs opacity-90">24 Developers</p>
                          </div>
                        </div>
                        <div className="bg-orange-300 px-2 py-0.5 rounded text-xs font-semibold">
                          92%
                        </div>
                      </div>
                    </div>
                    <motion.div
                      className="absolute -right-3 top-1/2 transform -translate-y-1/2"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: 0.9 }}
                    >
                      <div className="bg-orange-500 rounded-full p-1.5 shadow-lg">
                        <FaChevronRight className="text-white text-xs" />
                      </div>
                    </motion.div>
                  </motion.div>

                  {/* Level 5: Individual Employee */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 2.5 }}
                    className="ml-20"
                  >
                    <div className="bg-gradient-to-r from-pink-500 to-rose-500 rounded-lg p-3 text-white shadow-md">
                      <div className="flex items-center space-x-3">
                        <div className="bg-white/20 rounded p-1.5">
                          <FaUser className="text-sm" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-sm">Sarah Chen - Senior Developer</h3>
                          <p className="text-xs opacity-90">Working on: Mobile App Redesign</p>
                          <div className="flex items-center space-x-2 mt-1">
                            <div className="bg-green-400 px-2 py-0.5 rounded text-xs">3 Tasks Done</div>
                            <div className="bg-yellow-400 px-2 py-0.5 rounded text-xs">2 In Progress</div>
                            <div className="text-xs">😊 Positive</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Animated Connection Lines */}
                <svg className="absolute top-0 left-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
                  <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.3" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Bottom Legend */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 3 }}
                  className="mt-6 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg p-3"
                >
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center">
                      <FaLayerGroup className="text-blue-600 mr-2" />
                      <span className="font-semibold text-gray-700">5-Level Deep Drill-Down</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-1"></div>
                        <span className="text-gray-600">Healthy</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full mr-1"></div>
                        <span className="text-gray-600">At Risk</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
            
            {/* Floating Level Indicators */}
            <motion.div
              animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-6 -right-6 bg-white rounded-xl shadow-xl p-3 z-20"
            >
              <div className="text-center">
                <FaGlobe className="text-blue-500 text-xl mb-1 mx-auto" />
                <div className="text-xs font-semibold">5 Levels</div>
                <div className="text-xs text-gray-600">Deep Drill</div>
              </div>
            </motion.div>
            
            <motion.div
              animate={{ y: [0, 12, 0], x: [0, -5, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, delay: 1 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-3 z-20"
            >
              <div className="text-center">
                <FaUser className="text-teal-500 text-xl mb-1 mx-auto" />
                <div className="text-xs font-semibold">Individual</div>
                <div className="text-xs text-gray-600">Visibility</div>
              </div>
            </motion.div>

            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              className="absolute top-1/2 -left-4 bg-white rounded-full shadow-xl p-3 z-20"
            >
              <FaChartLine className="text-purple-500 text-lg" />
            </motion.div>
          </motion.div>
        </div>
      </div>


    </section>
  );
};

export default Hero;
