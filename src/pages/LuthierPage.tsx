import React from 'react';
import { motion } from 'framer-motion';
import { Music, Award, Calendar, ArrowRight, Wrench, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const LuthierPage: React.FC = () => {
  const services = [
    {
      title: "Violin Repair & Restoration",
      description: "Expert restoration of vintage and modern violins, bringing instruments back to their original glory.",
      icon: Music
    },
    {
      title: "Sound Post Adjustment",
      description: "Precise sound post positioning to optimize your instrument's tone and projection.",
      icon: Wrench
    },
    {
      title: "Bridge Fitting",
      description: "Custom bridge cutting and fitting for optimal string height and sound quality.",
      icon: Star
    },
    {
      title: "Instrument Appraisal",
      description: "Professional appraisal services for insurance, sale, or personal knowledge.",
      icon: Award
    }
  ];

  const achievements = [
    "Dean of String Department at Pacific Music Academy",
    "30+ years of luthier experience",
    "Trained in traditional European methods",
    "Specialist in violin family instruments",
    "Published researcher in string instrument acoustics"
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl sm:text-6xl font-serif font-bold mb-6">
                Dr. Arthur Mikhailov
              </h1>
              <p className="text-xl text-gray-300 mb-4">
                Master Luthier & Dean of String Department
              </p>
              <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                With over three decades of experience in the art of violin making and repair, 
                Dr. Mikhailov combines traditional European craftsmanship with modern techniques 
                to provide exceptional luthier services.
              </p>
              
              <Link
                to="/schedule-trial"
                className="inline-flex items-center gap-2 bg-sand-500 text-white px-8 py-4 rounded-lg font-medium text-lg hover:bg-sand-600 transition-colors duration-200"
              >
                <Calendar className="h-5 w-5" />
                Schedule a Trial Violin Lesson with Arthur
                <ArrowRight className="h-5 w-5" />
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1507838153414-b4b713384a76?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Dr. Arthur Mikhailov"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-sand-100 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="text-2xl font-bold text-sand-600">30+</div>
                  <div className="text-sm text-sand-600">Years</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-serif font-bold text-navy-900 mb-4">
              Luthier Services
            </h2>
            <p className="text-xl text-navy-600 max-w-3xl mx-auto">
              Professional instrument care and restoration services by a master craftsman
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center p-6 bg-sand-50 rounded-lg hover:shadow-lg transition-shadow duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-sand-100 rounded-full mb-6">
                  <service.icon className="h-8 w-8 text-sand-600" />
                </div>
                <h3 className="text-xl font-semibold text-navy-900 mb-4">{service.title}</h3>
                <p className="text-navy-600 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-sand-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="https://images.unsplash.com/photo-1465821185615-20b3c2fbf41b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Violin craftsmanship"
                className="rounded-lg shadow-xl"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-serif font-bold text-navy-900 mb-6">
                Expertise & Credentials
              </h2>
              <p className="text-lg text-navy-600 mb-8 leading-relaxed">
                Dr. Mikhailov brings unparalleled expertise to both teaching and instrument care, 
                combining his roles as educator and master craftsman.
              </p>
              
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <div className="w-2 h-2 bg-sand-500 rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-navy-700">{achievement}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-serif font-bold mb-6">
              Ready to Work with a Master?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Whether you need expert violin instruction or professional luthier services, 
              Dr. Mikhailov is here to help you achieve excellence.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                to="/schedule-trial"
                className="bg-sand-500 text-white px-8 py-4 rounded-lg font-medium text-lg hover:bg-sand-600 transition-colors duration-200 flex items-center gap-2"
              >
                <Calendar className="h-5 w-5" />
                Schedule Trial Lesson
              </Link>
              <a
                href="mailto:pmacademy.contact@gmail.com"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-medium text-lg hover:bg-white hover:text-navy-900 transition-all duration-300"
              >
                Contact for Luthier Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default LuthierPage;