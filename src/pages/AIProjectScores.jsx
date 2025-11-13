import { motion } from 'framer-motion';
import { FaBrain, FaChartLine, FaRobot, FaArrowLeft } from 'react-icons/fa';

const AIProjectScores = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4">
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
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 mb-6 text-white">
            <FaChartLine className="text-4xl" />
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">AI Project Scores</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Get instant, AI-powered health scores for all your projects. Our intelligent scoring system 
            analyzes multiple data points to give you a comprehensive view of project performance.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <FaBrain className="text-2xl text-blue-600" />
            </div>
            <h3 className="text-xl font-bold mb-3">Real-time Analysis</h3>
            <p className="text-gray-600">
              Continuous monitoring of project metrics with instant score updates as your team works.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <FaRobot className="text-2xl text-green-600" />
            </div>
            <h3 className="text-xl font-bold mb-3">Predictive Insights</h3>
            <p className="text-gray-600">
              AI predicts potential risks and bottlenecks before they impact your project timeline.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <FaChartLine className="text-2xl text-purple-600" />
            </div>
            <h3 className="text-xl font-bold mb-3">Multi-factor Scoring</h3>
            <p className="text-gray-600">
              Combines code quality, team velocity, deadlines, and resource allocation into one score.
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
          <h2 className="text-3xl font-bold text-center mb-8">How It Works</h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Data Collection</h4>
                  <p className="text-gray-600">Automatically gathers data from Jira, GitHub, Slack, and other connected tools.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                <div>
                  <h4 className="font-bold text-lg mb-2">AI Analysis</h4>
                  <p className="text-gray-600">Machine learning algorithms analyze patterns and calculate comprehensive health scores.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Actionable Insights</h4>
                  <p className="text-gray-600">Get specific recommendations to improve project health and team performance.</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-lg">Mobile App Redesign</h3>
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    Score: 87
                  </span>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span>Code Quality</span>
                    <span className="font-bold text-green-600">92%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{width: '92%'}}></div>
                  </div>
                  
                  <div className="flex justify-between text-sm">
                    <span>Team Velocity</span>
                    <span className="font-bold text-blue-600">85%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{width: '85%'}}></div>
                  </div>
                  
                  <div className="flex justify-between text-sm">
                    <span>Timeline Adherence</span>
                    <span className="font-bold text-orange-600">78%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-orange-500 h-2 rounded-full" style={{width: '78%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Score Your Projects?</h2>
          <p className="text-xl mb-8 opacity-90">
            Get started with AI-powered project scoring in minutes
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition transform hover:scale-105">
            Start Free Trial
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default AIProjectScores;