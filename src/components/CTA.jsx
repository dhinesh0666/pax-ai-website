import { motion } from 'framer-motion';

const CTA = ({ onBookDemo }) => {

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto"
      >
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-12 lg:p-16 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="relative z-10">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Unify Your Enterprise Data?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join leading organizations using PAXI.AI to gain comprehensive performance and sentiment 
              metrics across projects and people with AI-powered insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={onBookDemo}
                className="bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-bold hover:shadow-2xl transition transform hover:scale-105"
              >
                Start Your Free Trial
              </button>
              <button 
                onClick={onBookDemo}
                className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-white hover:text-purple-600 transition"
              >
                Schedule a Demo
              </button>
            </div>
            <p className="mt-6 text-sm opacity-75">
              No credit card required • 14-day free trial • Setup in 5 minutes
            </p>
          </div>
        </div>
      </motion.div>


    </section>
  );
};

export default CTA;
