import React from 'react';
import { motion } from 'framer-motion';
import { User, Users, Star, Music, Clock, Award, BookOpen, Mic } from 'lucide-react';

const ProgramsPage: React.FC = () => {
  const programs = [
    {
      id: 1,
      icon: User,
      title: "Private Music Class",
      description: "One-on-one instruction tailored to your individual needs and goals. Available for various instruments and voice with our dedicated instructors.",
      features: [
        "Personalized curriculum designed for your skill level",
        "Flexible scheduling to fit your busy lifestyle", 
        "All skill levels welcome - beginner to advanced",
        "Piano, violin, guitar, voice, flute, drums, and more"
      ],
      duration: "30, 45, or 60 minutes",
      ages: "Ages 4 and up",
      color: "blue"
    },
    {
      id: 2,
      icon: BookOpen,
      title: "Music Theory Classes",
      description: "Comprehensive music theory education covering fundamentals, harmony, composition, and analysis. Build a strong foundation for musical understanding.",
      features: [
        "Music fundamentals and notation",
        "Harmony and chord progressions",
        "Composition and arrangement techniques",
        "Music analysis and ear training"
      ],
      duration: "60 minutes",
      ages: "Ages 8 and up",
      color: "green"
    },
    {
      id: 3,
      icon: Users,
      title: "String Ensemble",
      description: "Collaborative string ensemble experience for violin, viola, cello, and bass players. Develop ensemble skills and perform classical and contemporary repertoire.",
      features: [
        "Weekly ensemble rehearsals",
        "Classical and modern repertoire",
        "Performance opportunities",
        "Advanced technique development"
      ],
      duration: "90 minutes",
      ages: "Ages 10 and up",
      color: "purple"
    },
    {
      id: 4,
      icon: Star,
      title: "Performance Opportunities",
      description: "Showcase your talent through recitals, competitions, and special events. Build confidence and stage presence in a supportive environment.",
      features: [
        "Bi-annual student recitals",
        "Competition preparation and coaching",
        "Masterclasses with guest artists",
        "Community performance opportunities"
      ],
      duration: "Varies",
      ages: "All ages",
      color: "orange"
    }
  ];

  const instruments = [
    { name: "Piano", icon: Music },
    { name: "Violin", icon: Music },
    { name: "Guitar", icon: Music },
    { name: "Voice", icon: Music },
    { name: "Flute", icon: Music },
    { name: "Drums", icon: Music },
    { name: "Cello", icon: Music },
    { name: "Trumpet", icon: Music }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20"
    >
      {/* Hero Section */}
      <section className="py-20 bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-6xl font-serif font-bold mb-6">
              Our Programs
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive music education programs designed for students of all ages and skill levels
            </p>
          </motion.div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {programs.map((program, index) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 ${
                  program.color === 'blue' ? 'border-blue-500 hover:border-blue-600' :
                  program.color === 'green' ? 'border-green-500 hover:border-green-600' :
                  program.color === 'purple' ? 'border-purple-500 hover:border-purple-600' :
                  'border-orange-500 hover:border-orange-600'
                } transform hover:scale-105`}
              >
                <div className="text-center mb-6">
                  <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full mb-6 ${
                    program.color === 'blue' ? 'bg-blue-100' :
                    program.color === 'green' ? 'bg-green-100' :
                    program.color === 'purple' ? 'bg-purple-100' :
                    'bg-orange-100'
                  }`}>
                    <program.icon className={`h-10 w-10 ${
                      program.color === 'blue' ? 'text-blue-600' :
                      program.color === 'green' ? 'text-green-600' :
                      program.color === 'purple' ? 'text-purple-600' :
                      'text-orange-600'
                    }`} />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-navy-900 mb-4">{program.title}</h3>
                  <p className="text-navy-600 mb-6 leading-relaxed">{program.description}</p>
                </div>
                
                <div className="space-y-4 mb-6">
                  {program.features.map((feature, i) => (
                    <div key={i} className="flex items-start text-sm text-navy-600">
                      <div className={`w-2 h-2 rounded-full mr-3 mt-2 flex-shrink-0 ${
                        program.color === 'blue' ? 'bg-blue-400' :
                        program.color === 'green' ? 'bg-green-400' :
                        program.color === 'purple' ? 'bg-purple-400' :
                        'bg-orange-400'
                      }`}></div>
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="border-t border-gray-200 pt-4 space-y-2">
                  <div className="flex items-center text-sm text-navy-600">
                    <Clock className="h-4 w-4 mr-2" />
                    {program.duration}
                  </div>
                  <div className="flex items-center text-sm text-navy-600">
                    <Users className="h-4 w-4 mr-2" />
                    {program.ages}
                  </div>
                </div>
                
                {/* Pricing placeholder - hidden for now */}
                <div className="hidden mt-6 pt-4 border-t border-gray-200">
                  <div className="text-center">
                    <span className="text-2xl font-bold text-navy-900">$XX</span>
                    <span className="text-navy-600">/lesson</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Instruments Section */}
      <section className="py-20 bg-pearl-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-serif font-bold text-navy-900 mb-4">
              Instruments We Teach
            </h2>
            <p className="text-xl text-navy-600 max-w-3xl mx-auto">
              Learn from experienced instructors across a wide variety of instruments
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {instruments.map((instrument, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <instrument.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-navy-900">{instrument.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default ProgramsPage;