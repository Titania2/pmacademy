import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Music, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const TrialLessonCTA: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <Music className="h-16 w-16 mx-auto mb-6 text-sand-200" />
            <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6">
              Ready to Begin Your Musical Journey?
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-8">
              Experience our nurturing environment and dedicated instruction with a complimentary trial lesson. 
              Discover how we can help you or your child develop musical skills and artistic expression.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link
              to="/schedule-trial"
              className="bg-sand-500 text-white px-8 py-4 rounded-lg font-medium text-lg hover:bg-sand-600 transition-all duration-300 transform hover:scale-105 flex items-center gap-2 shadow-lg"
            >
              <Calendar className="h-5 w-5" />
              Schedule Free Trial Lesson
              <ArrowRight className="h-5 w-5" />
            </Link>
            
            <div className="text-blue-100 text-sm">
              <p>No commitment required • All instruments available</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
          >
            <div>
              <div className="text-3xl font-bold text-sand-200 mb-2">30 min</div>
              <div className="text-blue-100">Trial Lesson Duration</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-sand-200 mb-2">All Ages</div>
              <div className="text-blue-100">Students Welcome</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-sand-200 mb-2">15+</div>
              <div className="text-blue-100">Instruments Available</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TrialLessonCTA;