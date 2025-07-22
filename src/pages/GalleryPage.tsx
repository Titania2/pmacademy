import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Play } from 'lucide-react';

const GalleryPage: React.FC = () => {
  const [selectedMedia, setSelectedMedia] = useState<number | null>(null);

  const galleryItems = [
    {
      id: 1,
      type: 'image',
      src: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Piano lesson",
      category: "Lessons"
    },
    {
      id: 2,
      type: 'image',
      src: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Vocal performance",
      category: "Performances"
    },
    {
      id: 3,
      type: 'image',
      src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Orchestra practice",
      category: "Ensembles"
    },
    {
      id: 4,
      type: 'image',
      src: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Piano recital",
      category: "Recitals"
    },
    {
      id: 5,
      type: 'image',
      src: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Violin practice",
      category: "Lessons"
    },
    {
      id: 6,
      type: 'image',
      src: "https://images.unsplash.com/photo-1465821185615-20b3c2fbf41b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "String ensemble",
      category: "Ensembles"
    }
  ];

  const performanceItems = [
    {
      id: 7,
      type: 'video',
      src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      thumbnail: "https://images.unsplash.com/photo-1465821185615-20b3c2fbf41b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "String ensemble performance",
      category: "Performances"
    },
    {
      id: 8,
      type: 'video',
      src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      thumbnail: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Piano competition performance",
      category: "Competitions"
    },
    {
      id: 9,
      type: 'video',
      src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
      thumbnail: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Guitar performance",
      category: "Recitals"
    },
    {
      id: 10,
      type: 'video',
      src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
      thumbnail: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Student practice session",
      category: "Behind the Scenes"
    }
  ];

  const archiveVideos = [
    {
      id: "dQw4w9WgXcQ",
      title: "Spring Recital 2023",
      description: "Highlights from our annual spring recital featuring student performances"
    },
    {
      id: "9bZkp7q19f0",
      title: "Competition Winners 2023",
      description: "Award-winning performances from regional and national competitions"
    },
    {
      id: "kJQP7kiw5Fk",
      title: "Chamber Music Concert",
      description: "Intimate chamber music performances by our advanced students"
    },
    {
      id: "jNQXAC9IVRw",
      title: "Holiday Concert 2022",
      description: "Festive holiday performances by all academy ensembles"
    }
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
              Gallery
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our collection of moments, performances, and behind-the-scenes content
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-serif font-bold text-navy-900 mb-4">
              Photo Gallery
            </h2>
            <p className="text-xl text-navy-600 max-w-3xl mx-auto">
              Capturing the essence of musical education and student achievements
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="relative overflow-hidden rounded-lg aspect-square group cursor-pointer"
                onClick={() => setSelectedMedia(item.id)}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
                
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-semibold text-navy-900">{item.alt}</h3>
                    <p className="text-sm text-navy-600">{item.category}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Videos */}
      <section className="py-20 bg-sand-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-serif font-bold text-navy-900 mb-4">
              Performance Videos
            </h2>
            <p className="text-xl text-navy-600 max-w-3xl mx-auto">
              Watch our students showcase their musical talents and achievements
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {performanceItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="relative overflow-hidden rounded-lg aspect-video group cursor-pointer"
                onClick={() => setSelectedMedia(item.id)}
              >
                <img
                  src={item.thumbnail}
                  alt={item.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300" />
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-12 h-12 bg-sand-600 rounded-full flex items-center justify-center shadow-lg opacity-80 group-hover:opacity-100 transition-opacity"
                  >
                    <Play className="h-6 w-6 text-white ml-1" />
                  </motion.div>
                </div>
                
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-semibold text-navy-900">{item.alt}</h3>
                    <p className="text-sm text-navy-600">{item.category}</p>
                    <p className="text-xs text-sand-600 font-medium">Video</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Archive Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-serif font-bold text-navy-900 mb-4">
              Archive
            </h2>
            <p className="text-xl text-navy-600 max-w-3xl mx-auto">
              Explore our collection of past performances and special events
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {archiveVideos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-sand-50 rounded-lg overflow-hidden shadow-lg"
              >
                <div className="aspect-video">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-navy-900 mb-2">{video.title}</h3>
                  <p className="text-navy-600">{video.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Lightbox */}
      {selectedMedia && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedMedia(null)}
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="relative max-w-4xl max-h-[90vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedMedia(null)}
              className="absolute top-4 right-4 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
            
            {(() => {
              const allItems = [...galleryItems, ...performanceItems];
              const item = allItems.find(item => item.id === selectedMedia);
              if (!item) return null;
              
              if (item.type === 'video') {
                return (
                  <video
                    controls
                    autoPlay
                    className="w-full h-full object-contain rounded-lg"
                  >
                    <source src={item.src} type="video/mp4" />
                  </video>
                );
              } else {
                return (
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-contain rounded-lg"
                  />
                );
              }
            })()}
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default GalleryPage;