import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const StudentShowcase: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-navy-900 mb-4">
            Discover Our Students' Talent
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Watch our talented students showcase their musical abilities and artistic growth
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative overflow-hidden rounded-lg bg-gray-100 aspect-video group cursor-pointer">
            <img
              src="https://images.pexels.com/photos/7089020/pexels-photo-7089020.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Student performance"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300" />
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-20 h-20 bg-rose-500 rounded-full flex items-center justify-center shadow-lg"
              >
                <Play className="h-10 w-10 text-white ml-1" />
              </motion.div>
            </div>
          </div>
          
          <div className="text-center mt-6">
            <button className="text-rose-500 hover:text-rose-600 font-medium transition-colors duration-200">
              View Full Screen
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StudentShowcase;