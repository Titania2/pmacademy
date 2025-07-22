import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, X } from 'lucide-react';

const VideoPreviewSection: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null);

  const videos = [
    {
      id: 1,
      title: "Competition Winner - Piano Solo",
      thumbnail: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      duration: "3:45",
      description: "Award-winning performance by our talented piano student"
    },
    {
      id: 2,
      title: "National Competition - Violin",
      thumbnail: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      duration: "4:20",
      description: "First place winner at national violin competition"
    },
    {
      id: 3,
      title: "Voice Competition Winner",
      thumbnail: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      duration: "2:30",
      description: "Outstanding vocal performance at regional competition"
    },
    {
      id: 4,
      title: "Orchestra Competition",
      thumbnail: "https://images.unsplash.com/photo-1465821185615-20b3c2fbf41b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      duration: "5:15",
      description: "Award-winning youth orchestra performance"
    },
    {
      id: 5,
      title: "Guitar Competition Champion",
      thumbnail: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      duration: "6:00",
      description: "State champion guitar performance"
    },
    {
      id: 6,
      title: "Chamber Music Winners",
      thumbnail: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      duration: "4:45",
      description: "Award-winning chamber music ensemble"
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
            Discover Our Students' Talent
          </h2>
          <p className="text-xl text-navy-600 max-w-3xl mx-auto leading-relaxed">
            Discover the incredible talent and dedication of our students through their captivating performances
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => setSelectedVideo(video.id)}
            >
              <div className="relative overflow-hidden rounded-lg bg-gray-100 aspect-video mb-4 shadow-lg">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center shadow-lg"
                  >
                    <Play className="h-8 w-8 text-white ml-1" />
                  </motion.div>
                </div>
                <div className="absolute top-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm">
                  {video.duration}
                </div>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-navy-900 group-hover:text-blue-600 transition-colors">
                  {video.title}
                </h3>
                <p className="text-navy-600 text-sm leading-relaxed">
                  {video.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Video Lightbox */}
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="relative bg-white rounded-lg max-w-4xl w-full aspect-video"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute top-4 right-4 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
              <div className="w-full h-full bg-gray-200 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <Play className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">Video Player Placeholder</p>
                  <p className="text-sm text-gray-500 mt-2">
                    {videos.find(v => v.id === selectedVideo)?.title}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default VideoPreviewSection;