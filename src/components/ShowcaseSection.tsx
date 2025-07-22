import React from 'react';
import { motion } from 'framer-motion';
import { User, Users, Star } from 'lucide-react';

const ShowcaseSection: React.FC = () => {
  const programs = [
    {
      id: 1,
      icon: User,
      title: "Private Lessons",
      description: "One-on-one instruction tailored to your individual needs and goals. Available for various instruments and voice with our dedicated instructors.",
      features: ["Personalized curriculum", "Flexible scheduling", "All skill levels welcome", "Various instruments & voice"]
    },
    {
      id: 2,
      icon: Users,
      title: "Group Classes",
      description: "Music theory, ensembles, and collaborative learning. Develop your skills in a supportive group environment with fellow musicians.",
      features: ["Music theory classes", "Ensemble playing", "Collaborative learning", "Skill development"]
    },
    {
      id: 3,
      icon: Star,
      title: "Performance Opportunities",
      description: "Showcase your talent through recitals, competitions, and special events. Build confidence and stage presence in a supportive environment.",
      features: ["Regular recitals", "Competition preparation", "Special events", "Confidence building"]
    }
  ];

  return (
    <section className="py-20 bg-sand-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-navy-900 mb-6">
            Featured Programs
          </h2>
          <p className="text-xl text-navy-600 max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive music education programs designed for students of all ages and skill levels
          </p>
        </motion.div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                  <program.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-navy-900 mb-4">{program.title}</h3>
                <p className="text-navy-600 mb-6 leading-relaxed">{program.description}</p>
              </div>
              <div className="space-y-3">
                {program.features.map((feature, i) => (
                  <div key={i} className="flex items-center text-sm text-navy-600">
                    <div className="w-2 h-2 bg-sand-400 rounded-full mr-3"></div>
                    {feature}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;