import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import VideoPreviewSection from '../components/VideoPreviewSection';
import TrialLessonCTA from '../components/TrialLessonCTA';
import WhyChooseUs from '../components/WhyChooseUs';
import AboutSection from '../components/AboutSection';

const HomePage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <HeroSection />
      <VideoPreviewSection />
      <TrialLessonCTA />
      <AboutSection />
      <WhyChooseUs />
    </motion.div>
  );
};

export default HomePage;