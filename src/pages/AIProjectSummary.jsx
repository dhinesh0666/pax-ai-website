import { motion } from 'framer-motion';
import { FaUsers, FaChartBar, FaLightbulb, FaArrowLeft, FaClock } from 'react-icons/fa';

const AIProjectSummary = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={onBack}
            className="flex items-center text-gray-600 hover:text-gray-800 transition"
          >
            <FaArrowLeft className="mr-2" />
            Back to Home
          </button>
          
          <div className="text-2xl font-bold text-gradient">PAXI.AI</div>
        </div>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 mb-6 text-white">
            <FaUsers className="text-4xl" />
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">AI Project & People Summary</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Get comprehensive AI-generated summaries of your projects and team performance. 
            Understand complex data through intelligent, easy-to-digest insights.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <FaUsers className="text-2xl text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold mb-4">People Insights</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                Individual performance analytics
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                Team collaboration patterns
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                Workload distribution analysis
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                Skill gap identification
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <FaChartBar className="text-2xl text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Project Intelligence</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                Automated progress summaries
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                Risk and blocker identification
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                Timeline and milestone tracking
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                Resource allocation insights
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Demo Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Sample AI Summary</h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Project Summary */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6">
              <div className="flex items-center mb-4">
                <FaChartBar className="text-2xl text-blue-600 mr-3" />
                <h3 className="text-xl font-bold">Project: E-commerce Platform</h3>
              </div>
              
              <div className="bg-white rounded-lg p-4 mb-4">
                <div className="flex items-center mb-2">
                  <FaClock className="text-blue-500 mr-2" />
                  <span className="font-semibold">Weekly Summary</span>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">
                  "The e-commerce platform development is progressing well with 78% completion. 
                  The team delivered 12 user stories this sprint, slightly above the planned 10. 
                  Main focus areas: payment integration (85% complete) and mobile optimization (62% complete). 
                  Risk identified: API rate limiting may impact checkout flow - recommend load testing."
                </p>
              </div>
              
              <div className="flex justify-between text-sm">
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">On Track</span>
                <span className="text-gray-600">Next Review: Friday</span>
              </div>
            </div>

            {/* People Summary */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6">
              <div className="flex items-center mb-4">
                <FaUsers className="text-2xl text-purple-600 mr-3" />
                <h3 className="text-xl font-bold">Team Performance</h3>
              </div>
              
              <div className="bg-white rounded-lg p-4 mb-4">
                <div className="flex items-center mb-2">
                  <FaLightbulb className="text-purple-500 mr-2" />
                  <span className="font-semibold">Team Insights</span>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">
                  "Team velocity has increased 15% this month. Sarah (Frontend) shows exceptional 
                  productivity with consistent code quality. Mike (Backend) may need support - 
                  his PR review time has increased. Team collaboration score: 92%. 
                  Recommend: pair programming session for API integration knowledge sharing."
                </p>
              </div>
              
              <div className="grid grid-cols-3 gap-2 text-xs text-center">
                <div className="bg-green-100 text-green-800 py-1 rounded">High Morale</div>
                <div className="bg-blue-100 text-blue-800 py-1 rounded">Strong Collab</div>
                <div className="bg-orange-100 text-orange-800 py-1 rounded">Skills Gap</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center text-white text-2xl mx-auto mb-4">
              ⚡
            </div>
            <h3 className="text-xl font-bold mb-3">Save 5+ Hours Weekly</h3>
            <p className="text-gray-600">
              No more manual status reports. Get comprehensive summaries automatically generated.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-white text-2xl mx-auto mb-4">
              🎯
            </div>
            <h3 className="text-xl font-bold mb-3">Better Decision Making</h3>
            <p className="text-gray-600">
              Data-driven insights help you make informed decisions about projects and people.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-red-500 rounded-2xl flex items-center justify-center text-white text-2xl mx-auto mb-4">
              📈
            </div>
            <h3 className="text-xl font-bold mb-3">Improved Performance</h3>
            <p className="text-gray-600">
              Early identification of issues and opportunities leads to better team performance.
            </p>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 text-white text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Experience AI-Generated Insights</h2>
          <p className="text-xl mb-8 opacity-90">
            Stop spending hours on status reports. Let AI do it for you.
          </p>
          <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition transform hover:scale-105">
            Try It Free
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default AIProjectSummary;