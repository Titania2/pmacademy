import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProgramsPage from './pages/ProgramsPage';
import GalleryPage from './pages/GalleryPage';
import ScheduleTrialPage from './pages/ScheduleTrialPage';
import LuthierPage from './pages/LuthierPage';
import AchievementsPage from './pages/AchievementsPage';
import TestimonialsPage from './pages/TestimonialsPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-cream-50">
        <Layout>
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/programs" element={<ProgramsPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/schedule-trial" element={<ScheduleTrialPage />} />
              <Route path="/luthier" element={<LuthierPage />} />
              <Route path="/achievements" element={<AchievementsPage />} />
              <Route path="/testimonials" element={<TestimonialsPage />} />
            </Routes>
          </AnimatePresence>
        </Layout>
      </div>
    </Router>
  );
}

export default App;