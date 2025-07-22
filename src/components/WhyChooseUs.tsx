import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, User, Building, Trophy, Heart } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      icon: GraduationCap,
      title: "Experienced Faculty",
      description: "Learn from professional musicians and certified instructors with years of teaching experience and performance backgrounds"
    },
    {
      icon: User,
      title: "Personalized Learning",
      description: "Customized instruction tailored to each student's individual goals, learning style, and musical interests"
    },
    {
      icon: Building,
      title: "Modern Facilities",
      description: "State-of-the-art practice rooms and performance spaces equipped with quality instruments and technology"
    },
    {
      icon: Trophy,
      title: "Proven Student Success",
      description: "Our students consistently excel in competitions, auditions, and performances at local and national levels"
    },
    {
      icon: Heart,
      title: "Passionate Environment",
      description: "A supportive community that celebrates musical growth, artistic expression, and personal development"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-navy-900 mb-6">
            Why Choose Pacific Music Academy
          </h2>
          <p className="text-xl text-navy-600 max-w-3xl mx-auto leading-relaxed">
            Discover what makes us the perfect place for your musical journey and artistic development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.slice(0, 3).map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="text-center p-6"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-sand-100 rounded-full mb-6">
                <reason.icon className="h-8 w-8 text-sand-600" />
              </div>
              <h3 className="text-xl font-semibold text-navy-900 mb-4">{reason.title}</h3>
              <p className="text-navy-600 leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-4xl mx-auto">
          {reasons.slice(3).map((reason, index) => (
            <motion.div
              key={index + 3}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: (index + 3) * 0.1 }}
              className="text-center p-6"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-sand-100 rounded-full mb-6">
                <reason.icon className="h-8 w-8 text-sand-600" />
              </div>
              <h3 className="text-xl font-semibold text-navy-900 mb-4">{reason.title}</h3>
              <p className="text-navy-600 leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;