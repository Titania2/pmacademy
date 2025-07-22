import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';

const HeroSection: React.FC = () => {
  const [isMuted, setIsMuted] = useState(true);

  const scrollToPrograms = () => {
    const programsSection = document.getElementById('about-section');
    if (programsSection) {
      programsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted={isMuted}
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
          {/* Fallback image */}
          <img 
            src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
            alt="Young pianist at piano"
            className="w-full h-full object-cover"
          />
        </video>
        <div className="absolute inset-0 bg-navy-900/50" />
      </div>

      {/* Sound Toggle */}
      <button
        onClick={() => setIsMuted(!isMuted)}
        className="absolute top-24 right-8 z-20 bg-sand-500/80 backdrop-blur-sm text-white p-3 rounded-full hover:bg-sand-600/80 transition-all duration-300"
      >
        {isMuted ? <VolumeX className="h-6 w-6" /> : <Volume2 className="h-6 w-6" />}
      </button>

      {/* Content */}
      <div className="relative z-10 text-center px-6 lg:px-8 max-w-5xl mx-auto text-white">
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 10 }}
          className="text-5xl lg:text-7xl font-serif font-bold mb-6"
        >
          Pacific Music Academy
        </motion.h1>
        
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 10.2 }}
          className="text-xl lg:text-2xl mb-8 leading-relaxed"
        >
          Where talent meets opportunity
        </motion.p>

        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 10.4 }}
          className="text-lg mb-12 max-w-3xl mx-auto leading-relaxed opacity-90"
        >
          Performance & Music Academy provides a nurturing environment where students of all ages 
          can grow musically and artistically. Our mission is to foster creativity, discipline, 
          and self-expression in every student through dedicated instruction and comprehensive curriculum.
        </motion.p>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 10.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <button
            onClick={scrollToPrograms}
            className="bg-blue-600 text-white px-8 py-4 rounded-lg font-medium text-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Why Choose Us?
          </button>
          
          <a
            href="/schedule-trial"
            className="border-2 border-white text-white px-8 py-4 rounded-lg font-medium text-lg hover:bg-white hover:text-navy-900 transition-all duration-300"
          >
            Schedule Free Trial
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;