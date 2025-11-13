import { motion } from 'framer-motion';
import { FaTasks, FaLightbulb, FaRocket, FaArrowLeft, FaCheckCircle, FaClock } from 'react-icons/fa';

const ActionItems = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50 py-12 px-4">
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
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 mb-6 text-white">
            <FaTasks className="text-4xl" />
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">Action Items Recommendations</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Never miss important follow-ups again. AI automatically identifies and prioritizes 
            action items from meetings, conversations, and project updates.
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
            <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-4 mx-auto">
              <FaLightbulb className="text-3xl text-orange-600" />
            </div>
            <h3 className="text-xl font-bold mb-3">Smart Detection</h3>
            <p className="text-gray-600">
              AI scans meetings, Slack messages, and emails to identify actionable items automatically.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl p-8 shadow-lg text-center"
          >
            <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mb-4 mx-auto">
              <FaRocket className="text-3xl text-red-600" />
            </div>
            <h3 className="text-xl font-bold mb-3">Priority Ranking</h3>
            <p className="text-gray-600">
              Intelligent prioritization based on urgency, impact, and dependencies.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-2xl p-8 shadow-lg text-center"
          >
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-4 mx-auto">
              <FaClock className="text-3xl text-blue-600" />
            </div>
            <h3 className="text-xl font-bold mb-3">Smart Reminders</h3>
            <p className="text-gray-600">
              Automated follow-ups and reminders ensure nothing falls through the cracks.
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
          <h2 className="text-3xl font-bold text-center mb-8">AI-Generated Action Items</h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* High Priority Actions */}
            <div>
              <div className="flex items-center mb-6">
                <div className="w-4 h-4 bg-red-500 rounded-full mr-3"></div>
                <h3 className="text-xl font-bold text-red-600">High Priority</h3>
              </div>
              
              <div className="space-y-4">
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-bold text-gray-800">Fix payment gateway timeout</h4>
                    <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded-full">Critical</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    Identified from: Monday standup meeting
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Assigned to: Alex Martinez</span>
                    <span className="font-bold text-red-600">Due: Today</span>
                  </div>
                </div>

                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-bold text-gray-800">Update security documentation</h4>
                    <span className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded-full">Urgent</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    Identified from: Security audit email
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Assigned to: Sarah Kim</span>
                    <span className="font-bold text-orange-600">Due: Tomorrow</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Medium Priority Actions */}
            <div>
              <div className="flex items-center mb-6">
                <div className="w-4 h-4 bg-yellow-500 rounded-full mr-3"></div>
                <h3 className="text-xl font-bold text-yellow-600">Medium Priority</h3>
              </div>
              
              <div className="space-y-4">
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-bold text-gray-800">Schedule user testing session</h4>
                    <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">Important</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    Identified from: Product meeting notes
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Assigned to: Mike Chen</span>
                    <span className="font-bold text-yellow-600">Due: This Week</span>
                  </div>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-bold text-gray-800">Code review for mobile optimizations</h4>
                    <FaCheckCircle className="text-green-500" />
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    Identified from: GitHub PR comments
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Completed by: Lisa Wang</span>
                    <span className="font-bold text-green-600">Completed</span>
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
          <h2 className="text-3xl font-bold text-center mb-12">How AI Identifies Action Items</h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                1
              </div>
              <h3 className="font-bold mb-2">Content Analysis</h3>
              <p className="text-sm text-gray-600">
                AI scans meetings, messages, emails, and documents
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                2
              </div>
              <h3 className="font-bold mb-2">Context Understanding</h3>
              <p className="text-sm text-gray-600">
                Identifies commitments, deadlines, and responsibilities
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                3
              </div>
              <h3 className="font-bold mb-2">Smart Prioritization</h3>
              <p className="text-sm text-gray-600">
                Ranks items by urgency, impact, and dependencies
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                4
              </div>
              <h3 className="font-bold mb-2">Auto Assignment</h3>
              <p className="text-sm text-gray-600">
                Assigns to appropriate team members with reminders
              </p>
            </div>
          </div>
        </motion.div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-bold mb-3">3x Faster Follow-ups</h3>
            <p className="text-gray-600">
              Automatic action item detection eliminates manual note-taking and follow-up tracking.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-bold mb-3">Zero Missed Items</h3>
            <p className="text-gray-600">
              AI ensures nothing important gets forgotten with intelligent prioritization and reminders.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
            <div className="text-4xl mb-4">📈</div>
            <h3 className="text-xl font-bold mb-3">Better Accountability</h3>
            <p className="text-gray-600">
              Clear ownership and deadlines improve team accountability and project execution.
            </p>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-gradient-to-r from-orange-600 to-red-600 rounded-3xl p-12 text-white text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Never Miss an Action Item Again</h2>
          <p className="text-xl mb-8 opacity-90">
            Let AI handle the tedious work of tracking follow-ups
          </p>
          <button className="bg-white text-orange-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition transform hover:scale-105">
            Start Free Trial
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default ActionItems;