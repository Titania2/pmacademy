import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';
import content from '../content/homepage.json';

const HeroSection: React.FC = () => {
  const [isMuted, setIsMuted] = useState(true);

  const scrollToPrograms = () => {
    const el = document.getElementById('about-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
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
          <img
            src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1920&q=80"
            alt="Fallback hero"
            className="w-full h-full object-cover"
          />
        </video>
        <div className="absolute inset-0 bg-navy-900/50" />
      </div>

      {/* Mute Toggle */}
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
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl lg:text-7xl font-serif font-bold mb-6"
        >
          {content.hero_title}
        </motion.h1>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl lg:text-2xl mb-8 leading-relaxed"
        >
          {content.hero_subtitle}
        </motion.p>
        {/* ...rest unchanged ... */}
      </div>
    </section>
  );
};

export default HeroSection;
