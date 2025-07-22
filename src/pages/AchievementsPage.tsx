import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Star, Medal, Calendar, MapPin, Play, X, GraduationCap, Users } from 'lucide-react';

const AchievementsPage: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null);

  const achievementsByYear = {
    2024: [
      {
        icon: Trophy,
        title: "National Young Musicians Competition",
        level: "National",
        award: "First Place - Piano Solo",
        student: "Emily Chen",
        location: "New York, NY",
        description: "Outstanding performance of Chopin's Piano Concerto No. 1",
        videoSrc: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        videoThumbnail: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        totalAwards: 12
      },
      {
        icon: Award,
        title: "State Music Festival",
        level: "State",
        award: "Gold Medal - String Quartet",
        student: "Pacific Music Academy String Quartet",
        location: "Austin, TX",
        description: "Exceptional interpretation of Brahms String Quartet No. 1",
        videoSrc: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        videoThumbnail: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        totalAwards: 8
      },
      {
        icon: Star,
        title: "Regional Vocal Competition",
        level: "Regional",
        award: "Outstanding Achievement",
        student: "Marcus Rodriguez",
        location: "Dallas, TX",
        description: "Powerful performance of classical and contemporary vocal pieces",
        videoSrc: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
        videoThumbnail: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        totalAwards: 5
      }
    ],
    2023: [
      {
        icon: Medal,
        title: "International Youth Orchestra Festival",
        level: "International",
        award: "Silver Medal",
        student: "Academy Symphony Orchestra",
        location: "Vienna, Austria",
        description: "Brilliant performance of Beethoven's Symphony No. 5",
        videoSrc: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
        videoThumbnail: "https://images.unsplash.com/photo-1465821185615-20b3c2fbf41b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        totalAwards: 15
      },
      {
        icon: Trophy,
        title: "City Arts Festival",
        level: "City",
        award: "Grand Prize Winner",
        student: "Sarah Johnson",
        location: "Palo Alto, CA",
        description: "Captivating violin performance that moved the audience",
        videoSrc: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
        videoThumbnail: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        totalAwards: 7
      }
    ]
  };

  const alumniAchievements = [
    {
      name: "Jennifer Liu",
      achievement: "Accepted to Juilliard School",
      year: "2024",
      description: "Full scholarship for violin performance",
      image: "https://images.unsplash.com/photo-1494790108755-2616c9c0e8e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "David Park",
      achievement: "Curtis Institute of Music",
      year: "2023",
      description: "Piano performance program",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Maria Santos",
      achievement: "New England Conservatory",
      year: "2023",
      description: "Merit scholarship for voice",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ];

  const facultyAchievements = [
    {
      name: "Dr. Arthur Mikhailov",
      achievement: "National Arts Foundation Grant",
      year: "2024",
      description: "Research in string instrument acoustics",
      image: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Prof. Sarah Martinez",
      achievement: "Excellence in Teaching Award",
      year: "2023",
      description: "State Music Educators Association",
      image: "https://images.unsplash.com/photo-1494790108755-2616c9c0e8e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ];

  const stats = [
    { number: "150+", label: "Awards Won" },
    { number: "25+", label: "Years of Excellence" },
    { number: "500+", label: "Students Awarded" },
    { number: "15+", label: "Countries Represented" }
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
              Achievements
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Celebrating excellence across student competitions, alumni success, and faculty recognition
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-sand-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-sand-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-navy-900 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards by Year */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-serif font-bold text-navy-900 mb-4">
              Competition Awards
            </h2>
            <p className="text-xl text-navy-600 max-w-3xl mx-auto">
              Our students consistently excel in prestigious competitions worldwide
            </p>
          </motion.div>

          {Object.entries(achievementsByYear).map(([year, achievements]) => (
            <div key={year} className="mb-16">
              <h3 className="text-3xl font-serif font-bold text-navy-900 mb-8 text-center">{year}</h3>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="bg-sand-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center justify-center w-12 h-12 bg-sand-100 rounded-full">
                          <achievement.icon className="h-6 w-6 text-sand-600" />
                        </div>
                        <span className="bg-sand-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                          {achievement.totalAwards} Awards
                        </span>
                      </div>

                      <h4 className="text-xl font-semibold text-navy-900 mb-2">
                        {achievement.title}
                      </h4>
                      
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center gap-2 text-sand-600 font-medium text-sm">
                          <Calendar className="h-4 w-4" />
                          {year}
                        </div>
                        <div className="flex items-center gap-2 text-navy-600 text-sm">
                          <MapPin className="h-4 w-4" />
                          {achievement.location}
                        </div>
                      </div>

                      <div className="border-t border-gray-200 pt-4 mb-4">
                        <div className="text-lg font-medium text-navy-900 mb-1">
                          {achievement.award}
                        </div>
                        <div className="text-sand-600 font-medium mb-2">
                          {achievement.student}
                        </div>
                        <p className="text-navy-600 text-sm">
                          {achievement.description}
                        </p>
                      </div>

                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                        achievement.level === 'International' ? 'bg-purple-100 text-purple-800' :
                        achievement.level === 'National' ? 'bg-blue-100 text-blue-800' :
                        achievement.level === 'State' ? 'bg-green-100 text-green-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {achievement.level}
                      </span>
                    </div>

                    {/* Video Preview */}
                    <div className="relative">
                      <div 
                        className="relative overflow-hidden aspect-video group cursor-pointer"
                        onClick={() => setSelectedVideo(index)}
                      >
                        <img
                          src={achievement.videoThumbnail}
                          alt={`${achievement.student} performance`}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <motion.div
                            whileHover={{ scale: 1.1 }}
                            className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center shadow-lg"
                          >
                            <Play className="h-6 w-6 text-white ml-1" />
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Alumni Achievements */}
      <section className="py-20 bg-sand-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-serif font-bold text-navy-900 mb-4 flex items-center justify-center gap-3">
              <GraduationCap className="h-10 w-10 text-sand-600" />
              Alumni Achievements
            </h2>
            <p className="text-xl text-navy-600 max-w-3xl mx-auto">
              Our graduates continue to excel at prestigious music institutions worldwide
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {alumniAchievements.map((alumni, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg text-center"
              >
                <img
                  src={alumni.image}
                  alt={alumni.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-navy-900 mb-2">{alumni.name}</h3>
                <p className="text-sand-600 font-medium mb-2">{alumni.achievement}</p>
                <p className="text-navy-600 text-sm mb-2">{alumni.description}</p>
                <span className="text-sand-500 text-sm">{alumni.year}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Achievements */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-serif font-bold text-navy-900 mb-4 flex items-center justify-center gap-3">
              <Users className="h-10 w-10 text-sand-600" />
              Faculty Highlights
            </h2>
            <p className="text-xl text-navy-600 max-w-3xl mx-auto">
              Our distinguished faculty members continue to receive recognition for their contributions to music education
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {facultyAchievements.map((faculty, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-sand-50 p-6 rounded-lg shadow-lg text-center"
              >
                <img
                  src={faculty.image}
                  alt={faculty.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-navy-900 mb-2">{faculty.name}</h3>
                <p className="text-sand-600 font-medium mb-2">{faculty.achievement}</p>
                <p className="text-navy-600 text-sm mb-2">{faculty.description}</p>
                <span className="text-sand-500 text-sm">{faculty.year}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Lightbox */}
      {selectedVideo !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedVideo(null)}
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="relative max-w-4xl max-h-[90vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-4 right-4 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
            <video
              controls
              autoPlay
              className="w-full h-full object-contain rounded-lg"
            >
              <source src={Object.values(achievementsByYear).flat()[selectedVideo]?.videoSrc} type="video/mp4" />
            </video>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default AchievementsPage;