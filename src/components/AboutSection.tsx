import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, Award } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section className="py-20 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-navy-900 mb-6">
              About Pacific Music Academy
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Pacific Music Academy provides a nurturing environment where students of all ages 
              can grow musically and artistically. Our mission is to foster creativity, discipline, 
              and self-expression in every student.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center">
                    <Users className="h-6 w-6 text-rose-500" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-navy-900 mb-2">Dedicated Instructors</h3>
                  <p className="text-gray-600">Our experienced faculty brings passion and expertise to every lesson</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center">
                    <Award className="h-6 w-6 text-rose-500" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-navy-900 mb-2">Comprehensive Curriculum</h3>
                  <p className="text-gray-600">Well-rounded music education covering technique, theory, and performance</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center">
                    <Heart className="h-6 w-6 text-rose-500" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-navy-900 mb-2">Student Development</h3>
                  <p className="text-gray-600">Commitment to nurturing each student's unique musical journey</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Music students in class"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-rose-100 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="text-2xl font-bold text-rose-600">15+</div>
                <div className="text-sm text-rose-600">Years</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <div id="about-section"></div>
    </section>
  );
};

export default AboutSection;