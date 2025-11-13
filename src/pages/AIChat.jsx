import { motion } from 'framer-motion';
import { FaComments, FaRobot, FaMicrophone, FaArrowLeft, FaSearch, FaBrain } from 'react-icons/fa';

const AIChat = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 py-12 px-4">
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
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-green-500 to-blue-500 mb-6 text-white">
            <FaComments className="text-4xl" />
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">AI Chat Assistant</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ask questions about your projects, team, and data in natural language. 
            Get instant, intelligent answers powered by context-aware AI.
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
            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-4 mx-auto">
              <FaSearch className="text-3xl text-green-600" />
            </div>
            <h3 className="text-xl font-bold mb-3">Smart Search</h3>
            <p className="text-gray-600">
              Find any information across all your connected tools with natural language queries.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl p-8 shadow-lg text-center"
          >
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-4 mx-auto">
              <FaBrain className="text-3xl text-blue-600" />
            </div>
            <h3 className="text-xl font-bold mb-3">Context Aware</h3>
            <p className="text-gray-600">
              AI understands your project context and provides relevant, actionable answers.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-2xl p-8 shadow-lg text-center"
          >
            <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-4 mx-auto">
              <FaMicrophone className="text-3xl text-purple-600" />
            </div>
            <h3 className="text-xl font-bold mb-3">Voice Commands</h3>
            <p className="text-gray-600">
              Ask questions with voice commands for hands-free project management.
            </p>
          </motion.div>
        </div>

        {/* Chat Demo Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-8">See AI Chat in Action</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 min-h-96">
              {/* Chat Header */}
              <div className="flex items-center border-b border-gray-200 pb-4 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white mr-3">
                  <FaRobot className="text-xl" />
                </div>
                <div>
                  <h3 className="font-bold">PAXI.AI Assistant</h3>
                  <p className="text-sm text-gray-600">Ready to help with your projects</p>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="space-y-4">
                {/* User Message */}
                <div className="flex justify-end">
                  <div className="bg-blue-500 text-white rounded-2xl rounded-br-sm px-4 py-3 max-w-xs">
                    <p>What's the status of the mobile app project?</p>
                  </div>
                </div>

                {/* AI Response */}
                <div className="flex justify-start">
                  <div className="bg-white border border-gray-200 rounded-2xl rounded-bl-sm px-4 py-3 max-w-md">
                    <p className="mb-3">The mobile app project is progressing well! Here's the current status:</p>
                    <div className="bg-gray-50 rounded-lg p-3 text-sm">
                      <div className="flex justify-between mb-2">
                        <span>Overall Progress:</span>
                        <span className="font-bold text-green-600">73%</span>
                      </div>
                      <div className="flex justify-between mb-2">
                        <span>Sprint Goal:</span>
                        <span className="font-bold">8/10 stories completed</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Next Milestone:</span>
                        <span className="font-bold">Beta Release (Nov 20)</span>
                      </div>
                    </div>
                    <p className="mt-3 text-sm text-gray-600">Would you like details on any specific area?</p>
                  </div>
                </div>

                {/* User Follow-up */}
                <div className="flex justify-end">
                  <div className="bg-blue-500 text-white rounded-2xl rounded-br-sm px-4 py-3 max-w-xs">
                    <p>Who's working on the authentication feature?</p>
                  </div>
                </div>

                {/* AI Follow-up Response */}
                <div className="flex justify-start">
                  <div className="bg-white border border-gray-200 rounded-2xl rounded-bl-sm px-4 py-3 max-w-md">
                    <p>The authentication feature is being handled by:</p>
                    <div className="bg-gray-50 rounded-lg p-3 mt-2 text-sm">
                      <div className="flex items-center mb-2">
                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs mr-3">
                          AM
                        </div>
                        <div>
                          <div className="font-bold">Alex Martinez</div>
                          <div className="text-gray-600">Lead: OAuth integration (85% complete)</div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-xs mr-3">
                          SP
                        </div>
                        <div>
                          <div className="font-bold">Sarah Park</div>
                          <div className="text-gray-600">Support: UI components (60% complete)</div>
                        </div>
                      </div>
                    </div>
                    <p className="mt-3 text-sm text-gray-600">Expected completion: November 18th</p>
                  </div>
                </div>
              </div>

              {/* Chat Input */}
              <div className="mt-6 flex items-center border-t border-gray-200 pt-4">
                <input
                  type="text"
                  placeholder="Ask anything about your projects..."
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-blue-500"
                  disabled
                />
                <button className="ml-3 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white">
                  <FaMicrophone />
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Example Queries */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-8">Example Questions You Can Ask</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Which team member has the highest code quality score this month?",
              "What are the main blockers for the Q4 roadmap?",
              "Show me projects that are behind schedule",
              "How is the team sentiment trending this quarter?",
              "What dependencies does the payment feature have?",
              "Which Slack channels are most active for our project?"
            ].map((query, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="bg-white rounded-lg p-4 shadow-lg border-l-4 border-blue-500 hover:shadow-xl transition cursor-pointer"
              >
                <div className="flex items-start">
                  <FaComments className="text-blue-500 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700 text-sm italic">"{query}"</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-gradient-to-r from-green-600 to-blue-600 rounded-3xl p-12 text-white text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Start Chatting with Your Data</h2>
          <p className="text-xl mb-8 opacity-90">
            Transform how you interact with your project information
          </p>
          <button className="bg-white text-green-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition transform hover:scale-105">
            Try AI Chat
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default AIChat;