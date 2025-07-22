import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Music } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTASection: React.FC = () => {
  return (
    <section className="py-20 bg-sage-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Music className="h-16 w-16 text-rose-400 mx-auto mb-6" />
          <h2 className="text-4xl sm:text-5xl font-serif font-bold mb-6">
            Ready to Begin Your Musical Journey?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join Performance & Music Academy and discover your artistic potential in our nurturing environment with dedicated instructors.
          </p>
          <Link
            to="/schedule-trial"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-rose-500 text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-rose-600 transition-all duration-300 inline-flex items-center gap-2"
          >
            Get Started Today
            <ArrowRight className="h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;