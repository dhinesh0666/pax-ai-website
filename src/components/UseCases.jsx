import { motion } from 'framer-motion';
import { FaUser, FaUsers, FaCode } from 'react-icons/fa';

const UseCases = () => {
  const useCases = [
    {
      icon: <FaUser className="text-4xl text-blue-600" />,
      persona: 'Project Managers',
      title: 'Stay on Top of Everything',
      description: 'Get real-time project health updates, identify blockers instantly, and make data-driven decisions.',
      benefits: [
        'Instant project status across all tools',
        'Predictive risk analysis',
        'Automated stakeholder reports',
        'Resource optimization insights'
      ],
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <FaCode className="text-4xl text-purple-600" />,
      persona: 'Engineering Leads',
      title: 'Optimize Team Performance',
      description: 'Understand code velocity, review bottlenecks, and balance workloads across your team.',
      benefits: [
        'Code review analytics',
        'Sprint velocity tracking',
        'Technical debt monitoring',
        'Team workload distribution'
      ],
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: <FaUsers className="text-4xl text-green-600" />,
      persona: 'Team Members',
      title: 'Work Smarter, Not Harder',
      description: 'Quick answers to project questions, automated updates, and better collaboration.',
      benefits: [
        'Ask questions in natural language',
        'Automatic status updates',
        'Find relevant docs instantly',
        'Collaboration insights'
      ],
      gradient: 'from-green-500 to-teal-500'
    }
  ];

  return (
    <section id="use-cases" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Built For
            <span className="text-gradient"> Every Team Member</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Whether you're leading projects or building features, PAX-I.AI adapts to your role
          </p>
        </motion.div>

        <div className="space-y-12">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`grid lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${useCase.gradient} mb-6 text-white`}>
                  {useCase.icon}
                </div>
                <div className="inline-block bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  {useCase.persona}
                </div>
                <h3 className="text-3xl font-bold mb-4">{useCase.title}</h3>
                <p className="text-xl text-gray-600 mb-6">{useCase.description}</p>
              </div>
              
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-xl border border-gray-100">
                  <h4 className="text-xl font-bold mb-6 text-gray-800">Key Benefits:</h4>
                  <ul className="space-y-4">
                    {useCase.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className={`flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br ${useCase.gradient} flex items-center justify-center text-white text-sm font-bold mr-3 mt-0.5`}>
                          ✓
                        </span>
                        <span className="text-gray-700 text-lg">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
