import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Star, Medal } from 'lucide-react';

const AwardsSlider: React.FC = () => {
  const awards = [
    {
      icon: Trophy,
      title: "National Music Competition",
      year: "2024",
      description: "First Place - Youth Orchestra",
      level: "National"
    },
    {
      icon: Award,
      title: "Regional Piano Festival",
      year: "2024",
      description: "Gold Medal - Solo Performance",
      level: "Regional"
    },
    {
      icon: Star,
      title: "State Music Awards",
      year: "2023",
      description: "Outstanding Achievement",
      level: "State"
    },
    {
      icon: Medal,
      title: "International String Competition",
      year: "2023",
      description: "Silver Medal - Ensemble",
      level: "International"
    },
    {
      icon: Trophy,
      title: "City Arts Festival",
      year: "2023",
      description: "Grand Prize Winner",
      level: "Local"
    }
  ];

  return (
    <section className="py-20 bg-sand-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-navy-900 mb-6">
            Awards & Recognition
          </h2>
          <p className="text-xl text-navy-600 max-w-3xl mx-auto leading-relaxed">
            Celebrating our students' exceptional achievements and artistic excellence on local, national, and international stages
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                <award.icon className="h-8 w-8 text-blue-600" />
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    award.level === 'International' ? 'bg-purple-100 text-purple-800' :
                    award.level === 'National' ? 'bg-blue-100 text-blue-800' :
                    award.level === 'State' ? 'bg-green-100 text-green-800' :
                    award.level === 'Regional' ? 'bg-orange-100 text-orange-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {award.level}
                  </span>
                  <span className="text-sand-600 font-medium">{award.year}</span>
                </div>
                <h3 className="text-xl font-semibold text-navy-900">{award.title}</h3>
                <p className="text-navy-600">{award.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsSlider;