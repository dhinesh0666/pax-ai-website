import { motion } from 'framer-motion';
import { SiJira, SiGithub, SiSlack, SiGoogle, SiTrello, SiAsana } from 'react-icons/si';

const Integrations = () => {
  const integrations = [
    { name: 'Jira', icon: <SiJira className="text-5xl text-blue-600" />, color: 'bg-blue-50' },
    { name: 'GitHub', icon: <SiGithub className="text-5xl text-gray-800" />, color: 'bg-gray-50' },
    { name: 'Slack', icon: <SiSlack className="text-5xl text-purple-600" />, color: 'bg-purple-50' },
    { name: 'Google Workspace', icon: <SiGoogle className="text-5xl text-red-600" />, color: 'bg-red-50' },
    // { name: 'Trello', icon: <SiTrello className="text-5xl text-blue-500" />, color: 'bg-blue-50' },
    // { name: 'Asana', icon: <SiAsana className="text-5xl text-pink-600" />, color: 'bg-pink-50' },
  ];

  return (
    <section id="integrations" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Connects With Your
            <span className="text-gradient"> Favorite Tools</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Seamlessly integrate with the tools your team already uses. No disruption to your workflow.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 max-w-4xl mx-auto">
          {integrations.map((integration, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              className={`${integration.color} rounded-2xl p-8 flex flex-col items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer`}
            >
              {integration.icon}
              <p className="mt-4 font-semibold text-gray-700 text-center">{integration.name}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white text-center"
        >
          <h3 className="text-3xl font-bold mb-4">Connect Everything in Minutes</h3>
          <p className="text-xl mb-8 opacity-90">
            Simple OAuth setup. No coding required. Start getting insights immediately.
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition transform hover:scale-105">
            View All Integrations
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Integrations;
