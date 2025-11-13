import { motion } from 'framer-motion';
import { FaMicrophone, FaFileAlt, FaBrain, FaArrowLeft, FaVideo, FaClock, FaUsers, FaMicrosoft } from 'react-icons/fa';
import { SiZoom, SiGooglemeet, SiSlack } from 'react-icons/si';

const NoteTakerAgent = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50 py-12 px-4">
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
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-indigo-500 to-cyan-500 mb-6 text-white">
            <FaMicrophone className="text-4xl" />
          </div>
          <h1 className="text-5xl font-bold mb-6">Context Aware Note Taker Agent</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Never miss important details again. Our AI agent automatically captures, 
            organizes, and contextualizes meeting notes, action items, and decisions.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-2xl p-8 shadow-lg text-center"
          >
            <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mb-4 mx-auto">
              <FaVideo className="text-3xl text-indigo-600" />
            </div>
            <h3 className="text-xl font-bold mb-3">Real-time Transcription</h3>
            <p className="text-gray-600">
              Automatically transcribe meetings across Zoom, Teams, Google Meet, and in-person sessions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl p-8 shadow-lg text-center"
          >
            <div className="w-16 h-16 bg-cyan-100 rounded-2xl flex items-center justify-center mb-4 mx-auto">
              <FaBrain className="text-3xl text-cyan-600" />
            </div>
            <h3 className="text-xl font-bold mb-3">Intelligent Summarization</h3>
            <p className="text-gray-600">
              AI understands context and creates structured summaries with key decisions and next steps.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-2xl p-8 shadow-lg text-center"
          >
            <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-4 mx-auto">
              <FaFileAlt className="text-3xl text-purple-600" />
            </div>
            <h3 className="text-xl font-bold mb-3">Auto-Documentation</h3>
            <p className="text-gray-600">
              Automatically creates formatted meeting notes and shares them with relevant stakeholders.
            </p>
          </motion.div>
        </div>

        {/* Demo Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-8">Sample AI-Generated Meeting Notes</h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Meeting Header */}
            <div className="lg:col-span-2 bg-gradient-to-r from-indigo-50 to-cyan-50 rounded-2xl p-6 mb-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">Sprint Planning - Mobile App Team</h3>
                  <p className="text-gray-600 mt-1">November 13, 2024 • 2:00 PM - 3:30 PM</p>
                </div>
                <div className="text-right">
                  <div className="flex items-center text-gray-600 mb-1">
                    <FaUsers className="mr-2" />
                    <span>8 attendees</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <FaClock className="mr-2" />
                    <span>90 minutes</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Meeting Summary */}
            <div className="bg-blue-50 rounded-2xl p-6">
              <h4 className="text-lg font-bold text-blue-800 mb-4">📋 Meeting Summary</h4>
              <div className="space-y-3 text-sm">
                <p className="text-gray-700">
                  <strong>Purpose:</strong> Plan Sprint 12 for mobile app development with focus on user authentication and payment integration.
                </p>
                <p className="text-gray-700">
                  <strong>Key Outcomes:</strong> Agreed on 15 story points for the sprint, identified 3 technical risks, and assigned ownership for all critical features.
                </p>
                <p className="text-gray-700">
                  <strong>Sprint Goal:</strong> Complete user authentication flow and integrate Stripe payment gateway with error handling.
                </p>
              </div>
            </div>

            {/* Action Items */}
            <div className="bg-orange-50 rounded-2xl p-6">
              <h4 className="text-lg font-bold text-orange-800 mb-4">✅ Action Items</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <p className="font-semibold">Sarah Kim</p>
                    <p className="text-gray-700">Set up OAuth integration testing environment</p>
                    <p className="text-xs text-gray-500">Due: Nov 15, 2024</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <p className="font-semibold">Mike Chen</p>
                    <p className="text-gray-700">Research Stripe webhook security best practices</p>
                    <p className="text-xs text-gray-500">Due: Nov 16, 2024</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <p className="font-semibold">Alex Rodriguez</p>
                    <p className="text-gray-700">Create user flow mockups for payment errors</p>
                    <p className="text-xs text-gray-500">Due: Nov 14, 2024</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decisions Made */}
            <div className="bg-green-50 rounded-2xl p-6">
              <h4 className="text-lg font-bold text-green-800 mb-4">🎯 Key Decisions</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-gray-700">Use Google OAuth as primary authentication method</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-gray-700">Implement progressive disclosure for payment form</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-gray-700">Add retry mechanism for failed payment attempts</p>
                </div>
              </div>
            </div>

            {/* Risks & Concerns */}
            <div className="bg-red-50 rounded-2xl p-6">
              <h4 className="text-lg font-bold text-red-800 mb-4">⚠️ Risks & Concerns</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <p className="text-gray-700 font-semibold">API Rate Limiting</p>
                    <p className="text-gray-600">Stripe has rate limits that might affect user experience during peak times</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <p className="text-gray-700 font-semibold">OAuth Callback Security</p>
                    <p className="text-gray-600">Need to ensure proper validation of OAuth callbacks to prevent security issues</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* How It Works */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-12">How the AI Note Taker Works</h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                🎤
              </div>
              <h3 className="font-bold mb-2">Live Capture</h3>
              <p className="text-sm text-gray-600">
                Automatically joins and records meetings across all platforms
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                🧠
              </div>
              <h3 className="font-bold mb-2">AI Processing</h3>
              <p className="text-sm text-gray-600">
                Understands context, identifies speakers, and extracts key information
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                📝
              </div>
              <h3 className="font-bold mb-2">Smart Formatting</h3>
              <p className="text-sm text-gray-600">
                Creates structured notes with sections, action items, and decisions
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                📤
              </div>
              <h3 className="font-bold mb-2">Auto Distribution</h3>
              <p className="text-sm text-gray-600">
                Shares notes with attendees and integrates with project management tools
              </p>
            </div>
          </div>
        </motion.div>

        {/* Works With Your Meeting Tools */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-8">Works With Your Meeting Tools</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="bg-blue-50 rounded-2xl p-8 flex flex-col items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              <SiZoom className="text-5xl text-blue-600 mb-4" />
              <p className="font-semibold text-gray-700 text-center">Zoom</p>
              <p className="text-xs text-gray-500 text-center mt-1">Native integration</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="bg-purple-50 rounded-2xl p-8 flex flex-col items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              <FaMicrosoft className="text-5xl text-purple-600 mb-4" />
              <p className="font-semibold text-gray-700 text-center">Microsoft Teams</p>
              <p className="text-xs text-gray-500 text-center mt-1">Seamless capture</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9 }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="bg-green-50 rounded-2xl p-8 flex flex-col items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              <SiGooglemeet className="text-5xl text-green-600 mb-4" />
              <p className="font-semibold text-gray-700 text-center">Google Meet</p>
              <p className="text-xs text-gray-500 text-center mt-1">Auto recording</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.0 }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="bg-orange-50 rounded-2xl p-8 flex flex-col items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              <SiSlack className="text-5xl text-orange-600 mb-4" />
              <p className="font-semibold text-gray-700 text-center">Slack Huddles</p>
              <p className="text-xs text-gray-500 text-center mt-1">Voice meetings</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
            <div className="text-4xl mb-4">⏰</div>
            <h3 className="text-xl font-bold mb-3">Save 2+ Hours Weekly</h3>
            <p className="text-gray-600">
              Eliminate manual note-taking and follow-up documentation. Focus on the conversation.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-bold mb-3">Perfect Accuracy</h3>
            <p className="text-gray-600">
              Never miss important details or action items. AI captures everything with context.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
            <div className="text-4xl mb-4">🔄</div>
            <h3 className="text-xl font-bold mb-3">Seamless Integration</h3>
            <p className="text-gray-600">
              Notes automatically sync with Jira, Slack, and your project management tools.
            </p>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-gradient-to-r from-indigo-600 to-cyan-600 rounded-3xl p-12 text-white text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Never Take Manual Notes Again</h2>
          <p className="text-xl mb-8 opacity-90">
            Let AI handle the documentation while you focus on the conversation
          </p>
          <button className="bg-white text-indigo-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition transform hover:scale-105">
            Start Free Trial
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default NoteTakerAgent;