import { motion } from 'framer-motion';
import { FaRocket, FaUsers, FaChartLine, FaMapMarkerAlt } from 'react-icons/fa';

const Company = ({ onBookDemo }) => {

  return (
    <section id="company" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4">
            About <span className="text-gradient">PAXI.AI</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Executive management intelligence that unifies your enterprise data
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
            <div className="prose prose-lg text-gray-600 space-y-4">
              <p>
                <strong>PAXI.AI</strong> is an Executive Management Tool that unifies data from multiple 
                enterprise platforms and provides comprehensive performance & sentiment metrics across 
                both projects and people in the organization.
              </p>
              <p>
                Enhanced with AI, we deliver actionable insights that improve efficiency, performance, 
                and decision-making across the enterprise.
              </p>
              <p>
                Built by C1X, our leadership and technology team have extensive experience tackling 
                the most challenging problems. Using rapid development and deployment, we've created 
                a state-of-art platform that operates efficiently while delivering exceptional value.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 text-center">
              <FaRocket className="text-4xl text-blue-600 mx-auto mb-3" />
              <h4 className="text-3xl font-bold text-gray-800 mb-2">500+</h4>
              <p className="text-gray-600">Teams Using PAX-I</p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 text-center">
              <FaUsers className="text-4xl text-purple-600 mx-auto mb-3" />
              <h4 className="text-3xl font-bold text-gray-800 mb-2">50+</h4>
              <p className="text-gray-600">Expert Team Members</p>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 text-center">
              <FaChartLine className="text-4xl text-green-600 mx-auto mb-3" />
              <h4 className="text-3xl font-bold text-gray-800 mb-2">10M+</h4>
              <p className="text-gray-600">Data Points Analyzed</p>
            </div>
            
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6 text-center">
              <FaMapMarkerAlt className="text-4xl text-orange-600 mx-auto mb-3" />
              <h4 className="text-3xl font-bold text-gray-800 mb-2">Chennai</h4>
              <p className="text-gray-600">Engineering Hub</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white text-center"
        >
          <h3 className="text-3xl font-bold mb-4">Ready to See PAX-I.AI in Action?</h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Schedule a personalized demo and discover how our AI-powered platform can transform 
            your team's project management.
          </p>
          <button 
            onClick={onBookDemo}
            className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition transform hover:scale-105"
          >
            Book A Demo
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Company;
