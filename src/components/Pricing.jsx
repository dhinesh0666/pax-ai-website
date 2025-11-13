import { motion } from 'framer-motion';
import { FaCheck } from 'react-icons/fa';

const Pricing = () => {
  const plans = [
    {
      name: 'Starter',
      price: '$29',
      period: 'per user/month',
      description: 'Perfect for small teams getting started',
      features: [
        'Up to 10 team members',
        'Basic AI chat functionality',
        '3 integrations',
        'Email support',
        '30-day history',
        'Basic analytics'
      ],
      color: 'from-blue-500 to-cyan-500',
      buttonStyle: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
    },
    {
      name: 'Professional',
      price: '$79',
      period: 'per user/month',
      description: 'For growing teams that need more',
      features: [
        'Up to 50 team members',
        'Advanced AI capabilities',
        'Unlimited integrations',
        'Priority support',
        'Unlimited history',
        'Advanced analytics',
        'Custom workflows',
        'API access'
      ],
      color: 'from-purple-500 to-pink-500',
      buttonStyle: 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-2xl',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'contact us',
      description: 'For large organizations with specific needs',
      features: [
        'Unlimited team members',
        'Dedicated AI instance',
        'All integrations',
        '24/7 dedicated support',
        'Unlimited everything',
        'Custom analytics',
        'White-label options',
        'SLA guarantee',
        'On-premise deployment',
        'Custom training'
      ],
      color: 'from-gray-700 to-gray-900',
      buttonStyle: 'border-2 border-gray-700 text-gray-700 hover:bg-gray-700 hover:text-white'
    }
  ];

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Simple, Transparent
            <span className="text-gradient"> Pricing</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the plan that fits your team. No hidden fees. Cancel anytime.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative bg-white rounded-3xl shadow-xl p-8 ${
                plan.popular ? 'ring-4 ring-purple-600 transform scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-bold">
                    MOST POPULAR
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="mb-2">
                  <span className="text-5xl font-bold">{plan.price}</span>
                  {plan.price !== 'Custom' && <span className="text-gray-600">/{plan.period.split('/')[1]}</span>}
                </div>
                <p className="text-gray-500 text-sm">{plan.period}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <FaCheck className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 ${plan.buttonStyle}`}>
                {plan.price === 'Custom' ? 'Contact Sales' : 'Start Free Trial'}
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-600">
            All plans include 14-day free trial. No credit card required. 
            <a href="#" className="text-blue-600 hover:underline ml-2">See full comparison →</a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
