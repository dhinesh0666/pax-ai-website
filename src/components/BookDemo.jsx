import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaArrowLeft, FaCheckCircle, FaCalendarAlt, FaUsers, FaBrain, FaChartLine } from 'react-icons/fa';

const BookDemo = ({ onBack }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    teamSize: '',
    primaryGoal: '',
    calendlyLink: ''
  });

  const teamSizes = [
    '1-10 employees',
    '11-50 employees', 
    '51-200 employees',
    '201-500 employees',
    '500+ employees'
  ];

  const goals = [
    {
      id: 'visibility',
      title: 'Better Project Visibility',
      description: 'Get real-time insights across all projects',
      icon: <FaChartLine className="text-2xl" />
    },
    {
      id: 'performance',
      title: 'Team Performance Analytics',
      description: 'Understand team productivity and bottlenecks',
      icon: <FaUsers className="text-2xl" />
    },
    {
      id: 'ai-insights',
      title: 'AI-Powered Insights',
      description: 'Leverage AI for predictive analytics and recommendations',
      icon: <FaBrain className="text-2xl" />
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    } else {
      // Handle final submission
      console.log('Form submitted:', formData);
      setCurrentStep(4); // Success step
    }
  };

  const renderStep1 = () => (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      className="space-y-6"
    >
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">Let's get to know you</h2>
        <p className="text-gray-600">Tell us a bit about yourself and your team</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Your Name *
          </label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            placeholder="John Doe"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Work Email *
          </label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            placeholder="john@company.com"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Company Name *
          </label>
          <input
            type="text"
            required
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            placeholder="Acme Corp"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Your Role *
          </label>
          <input
            type="text"
            required
            value={formData.role}
            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            placeholder="Engineering Manager"
          />
        </div>
      </div>
    </motion.div>
  );

  const renderStep2 = () => (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      className="space-y-6"
    >
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">About your team</h2>
        <p className="text-gray-600">Help us understand your organization better</p>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-4">
          Team Size *
        </label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {teamSizes.map(size => (
            <button
              key={size}
              type="button"
              onClick={() => setFormData({ ...formData, teamSize: size })}
              className={`p-4 rounded-lg border-2 transition-all ${
                formData.teamSize === size
                  ? 'border-blue-500 bg-blue-50 text-blue-700'
                  : 'border-gray-200 hover:border-gray-300 text-gray-700'
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-4">
          What's your primary goal with PAXI.AI? *
        </label>
        <div className="space-y-3">
          {goals.map(goal => (
            <button
              key={goal.id}
              type="button"
              onClick={() => setFormData({ ...formData, primaryGoal: goal.id })}
              className={`w-full p-4 rounded-lg border-2 transition-all text-left ${
                formData.primaryGoal === goal.id
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="flex items-start space-x-4">
                <div className={`p-2 rounded-lg ${
                  formData.primaryGoal === goal.id ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'
                }`}>
                  {goal.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">{goal.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{goal.description}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </motion.div>
  );

  const renderStep3 = () => (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      className="space-y-6"
    >
      <div className="text-center mb-8">
        <FaCalendarAlt className="text-4xl text-blue-600 mx-auto mb-4" />
        <h2 className="text-3xl font-bold mb-4">Almost there!</h2>
        <p className="text-gray-600">Schedule your personalized demo</p>
      </div>

      <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 text-center">
        <h3 className="text-xl font-bold mb-4">What to expect in your demo:</h3>
        <div className="grid md:grid-cols-3 gap-6 text-left">
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
            <div>
              <h4 className="font-semibold text-gray-800">Personalized Walkthrough</h4>
              <p className="text-sm text-gray-600">See PAXI.AI configured for your specific use case</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
            <div>
              <h4 className="font-semibold text-gray-800">Live AI Features</h4>
              <p className="text-sm text-gray-600">Experience our AI insights with real project data</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
            <div>
              <h4 className="font-semibold text-gray-800">Q&A Session</h4>
              <p className="text-sm text-gray-600">Get all your questions answered by our experts</p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center">
        <p className="text-sm text-gray-600 mb-4">Demo duration: 30 minutes</p>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h4 className="font-semibold mb-2">Calendly integration would go here</h4>
          <p className="text-sm text-gray-500">In a real implementation, you'd embed the Calendly widget</p>
          <button
            type="button"
            onClick={() => setCurrentStep(4)}
            className="mt-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition"
          >
            Schedule Demo
          </button>
        </div>
      </div>
    </motion.div>
  );

  const renderSuccess = () => (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className="text-center py-12"
    >
      <FaCheckCircle className="text-6xl text-green-500 mx-auto mb-6" />
      <h2 className="text-3xl font-bold mb-4">Demo Scheduled Successfully!</h2>
      <p className="text-xl text-gray-600 mb-8">
        Thank you {formData.name}! We've sent a calendar invite to {formData.email}
      </p>
      
      <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 max-w-2xl mx-auto">
        <h3 className="text-lg font-semibold mb-4">What happens next?</h3>
        <div className="space-y-4 text-left">
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm">✓</div>
            <p className="text-gray-700">You'll receive a calendar invite with the meeting link</p>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm">✓</div>
            <p className="text-gray-700">Our team will prepare a customized demo based on your needs</p>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm">✓</div>
            <p className="text-gray-700">We'll send you preparation materials beforehand</p>
          </div>
        </div>
      </div>

      <button
        onClick={onBack}
        className="mt-8 text-blue-600 hover:text-blue-800 font-semibold"
      >
        ← Back to Homepage
      </button>
    </motion.div>
  );

  if (currentStep === 4) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          {renderSuccess()}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={onBack}
            className="flex items-center text-gray-600 hover:text-gray-800 transition"
          >
            <FaArrowLeft className="mr-2" />
            Back
          </button>
          
          <div className="text-2xl font-bold text-gradient">PAXI.AI</div>
          
          <div className="text-sm text-gray-500">
            Step {currentStep} of 3
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-2 mb-12">
          <div
            className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-500"
            style={{ width: `${(currentStep / 3) * 100}%` }}
          ></div>
        </div>

        {/* Form Content */}
        <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12">
          <form onSubmit={handleSubmit}>
            {currentStep === 1 && renderStep1()}
            {currentStep === 2 && renderStep2()}
            {currentStep === 3 && renderStep3()}

            {currentStep < 3 && (
              <div className="flex justify-between mt-12">
                <button
                  type="button"
                  onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
                  className={`px-6 py-3 rounded-lg font-semibold transition ${
                    currentStep === 1
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                  disabled={currentStep === 1}
                >
                  Previous
                </button>
                
                <button
                  type="submit"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition transform hover:scale-105"
                >
                  {currentStep === 2 ? 'Continue' : 'Next'}
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookDemo;