import { motion } from 'framer-motion';
import { FaComments, FaBrain, FaChartBar, FaPlug, FaRobot, FaShieldAlt } from 'react-icons/fa';

const Features = () => {
  const features = [
    {
      icon: <FaChartBar className="text-4xl text-blue-600" />,
      title: 'Unified Data Platform',
      description: 'Connect multiple enterprise platforms into a single view. Get comprehensive metrics from all your tools in one place.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <FaComments className="text-4xl text-purple-600" />,
      title: 'Performance Metrics',
      description: 'Track project and people performance across your organization. Measure productivity, velocity, and deliverables with precision.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <FaBrain className="text-4xl text-green-600" />,
      title: 'Sentiment Analysis',
      description: 'Understand team morale and engagement. AI-powered sentiment tracking helps identify issues before they impact performance.',
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: <FaRobot className="text-4xl text-orange-600" />,
      title: 'AI-Powered Insights',
      description: 'Get actionable recommendations to improve efficiency and decision-making. Let AI surface the insights that matter most.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: <FaPlug className="text-4xl text-indigo-600" />,
      title: 'Enterprise Integration',
      description: 'Seamlessly connect with Jira, GitHub, Slack, Google Workspace, and more. One unified view of your entire organization.',
      color: 'from-indigo-500 to-blue-500'
    },
    {
      icon: <FaShieldAlt className="text-4xl text-gray-600" />,
      title: 'Executive Dashboard',
      description: 'Purpose-built for C-level and management teams. Get the high-level insights you need to drive strategic decisions.',
      color: 'from-gray-500 to-slate-500'
    }
  ];

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Executive Intelligence for
            <span className="text-gradient"> Enterprise Success</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Unified metrics, AI-powered insights, and comprehensive analytics across your entire organization
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className={`bg-gradient-to-br ${feature.color} w-16 h-16 rounded-xl flex items-center justify-center mb-6 text-white`}>
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
