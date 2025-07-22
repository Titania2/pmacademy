import React from 'react';
import { motion } from 'framer-motion';
import { Users, Heart, Award, Target, Calendar, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

const AboutPage: React.FC = () => {
  const [expandedFaculty, setExpandedFaculty] = useState<number | null>(null);

  const values = [
    {
      icon: Heart,
      title: "Passion for Music",
      description: "We believe music has the power to transform lives and inspire greatness in every student."
    },
    {
      icon: Users,
      title: "Individual Attention",
      description: "Every student receives personalized instruction tailored to their unique learning style and goals."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We maintain the highest standards in music education and performance opportunities."
    },
    {
      icon: Target,
      title: "Growth Mindset",
      description: "We foster a supportive environment where students can take risks and grow as artists."
    }
  ];

  const timeline = [
    {
      year: "1999",
      title: "Academy Founded",
      description: "Pacific Music Academy was established with a vision to provide exceptional music education in the Bay Area."
    },
    {
      year: "2005",
      title: "First Competition Win",
      description: "Our students achieved their first major competition victory at the State Music Festival."
    },
    {
      year: "2010",
      title: "Facility Expansion",
      description: "Opened our second location and expanded to serve more students across the region."
    },
    {
      year: "2015",
      title: "International Recognition",
      description: "Students began competing and winning at international music competitions."
    },
    {
      year: "2020",
      title: "Digital Innovation",
      description: "Successfully transitioned to hybrid learning during the pandemic, maintaining excellence in education."
    },
    {
      year: "2024",
      title: "25 Years of Excellence",
      description: "Celebrating a quarter-century of nurturing musical talent and artistic growth."
    }
  ];
  const faculty = [
    {
      name: "Dr. Sarah Martinez",
      role: "Director & Piano Instructor",
      bio: "PhD in Music Education, 20+ years teaching experience",
      fullBio: "Dr. Martinez holds a PhD in Music Education from Stanford University and has over 20 years of experience in music pedagogy. She has published numerous articles on piano technique and music theory, and her students have won over 100 competitions. Before joining Pacific Music Academy, she served as faculty at several prestigious conservatories.",
      image: "https://images.unsplash.com/photo-1494790108755-2616c9c0e8e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      specialties: ["Piano Performance", "Music Theory", "Competition Preparation"],
      education: ["PhD Music Education - Stanford University", "MM Piano Performance - Juilliard", "BM Piano - Curtis Institute"]
    },
    {
      name: "Dr. Arthur Mikhailov",
      role: "String Instructor",
      bio: "Master Luthier & Dean of String Department",
      fullBio: "Dr. Mikhailov combines his expertise as a master luthier with exceptional teaching abilities. With over 30 years of experience in violin making and repair, he brings unique insights into string instrument technique and sound production. His students consistently achieve top rankings in national and international competitions.",
      image: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      specialties: ["Violin", "Viola", "Luthier Services", "Advanced Technique"],
      education: ["Master Luthier Certification - Cremona, Italy", "MM Violin Performance - Moscow Conservatory", "Advanced Studies - European Violin Making Schools"],
      link: "/luthier"
    },
    {
      name: "Emily Rodriguez",
      role: "Vocal Coach",
      bio: "Professional opera singer and voice specialist",
      fullBio: "Emily Rodriguez is an internationally acclaimed opera singer who has performed on stages across Europe and North America. She specializes in classical voice training and has helped numerous students gain acceptance to top conservatories. Her teaching method combines traditional bel canto technique with contemporary vocal health practices.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      specialties: ["Classical Voice", "Opera", "Musical Theater", "Vocal Health"],
      education: ["MM Voice Performance - Manhattan School of Music", "BM Voice - New England Conservatory", "Opera Studio - La Scala Academy"]
    },
    {
      name: "Michael Chen",
      role: "Guitar & Contemporary Music",
      bio: "Professional guitarist and composer",
      fullBio: "Michael Chen is a versatile musician who bridges classical and contemporary guitar styles. He has released several albums and regularly performs with the San Francisco Chamber Orchestra. His teaching approach emphasizes both technical excellence and creative expression, helping students develop their unique musical voice.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      specialties: ["Classical Guitar", "Jazz", "Composition", "Music Technology"],
      education: ["MM Guitar Performance - San Francisco Conservatory", "BM Composition - Berklee College of Music", "Jazz Studies Certificate - Stanford"]
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
              Our Story
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              For over 25 years, Harmony Academy has been nurturing musical talent and inspiring artistic excellence in our community.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-serif font-bold text-navy-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                At Performance & Music Academy, we believe that music education is more than just learning notes and rhythms. We cultivate creativity, discipline, and self-expression in every student, preparing them not just as musicians but as confident, well-rounded individuals.
              </p>
              <p className="text-lg text-gray-600">
                Our dedicated faculty combines technical excellence with genuine care, creating an environment where students can discover their unique musical voice and reach their full potential.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="https://images.pexels.com/photos/8520556/pexels-photo-8520556.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Music students learning"
                className="rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-serif font-bold text-navy-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do at Pacific Music Academy
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gold-100 rounded-full mb-6">
                  <value.icon className="h-8 w-8 text-gold-600" />
                </div>
                <h3 className="text-xl font-semibold text-navy-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-serif font-bold text-navy-900 mb-4">
              Meet Our Faculty
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our exceptional instructors bring decades of experience and passion to every lesson
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faculty.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-sand-50 p-6 rounded-lg shadow-lg"
              >
                <div className="flex items-start space-x-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full object-cover flex-shrink-0"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-navy-900 mb-1">{member.name}</h3>
                    <p className="text-sand-600 font-medium mb-2">{member.role}</p>
                    <p className="text-navy-600 text-sm mb-3">{member.bio}</p>
                    
                    {member.link && (
                      <a
                        href={member.link}
                        className="inline-block bg-sand-500 text-white px-4 py-2 rounded text-sm hover:bg-sand-600 transition-colors mb-3"
                      >
                        Luthier Services
                      </a>
                    )}
                    
                    <button
                      onClick={() => setExpandedFaculty(expandedFaculty === index ? null : index)}
                      className="flex items-center text-sand-600 hover:text-sand-700 text-sm font-medium"
                    >
                      {expandedFaculty === index ? 'Show Less' : 'Read More'}
                      {expandedFaculty === index ? 
                        <ChevronUp className="h-4 w-4 ml-1" /> : 
                        <ChevronDown className="h-4 w-4 ml-1" />
                      }
                    </button>
                  </div>
                </div>
                
                {expandedFaculty === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-4 pt-4 border-t border-gray-200"
                  >
                    <p className="text-navy-700 mb-4 leading-relaxed">{member.fullBio}</p>
                    
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold text-navy-900 mb-2">Specialties:</h4>
                        <div className="flex flex-wrap gap-2">
                          {member.specialties.map((specialty, i) => (
                            <span key={i} className="bg-sand-100 text-sand-700 px-2 py-1 rounded text-xs">
                              {specialty}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-navy-900 mb-2">Education:</h4>
                        <ul className="space-y-1">
                          {member.education.map((edu, i) => (
                            <li key={i} className="text-navy-600 text-sm flex items-start">
                              <div className="w-1 h-1 bg-sand-500 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                              {edu}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-sand-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-serif font-bold text-navy-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-navy-600 max-w-3xl mx-auto">
              25 years of musical excellence and community impact
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-sand-300"></div>
            
            <div className="space-y-12">
              {timeline.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Calendar className="h-5 w-5 text-sand-600" />
                        <span className="text-2xl font-bold text-sand-600">{event.year}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-navy-900 mb-2">{event.title}</h3>
                      <p className="text-navy-600">{event.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="relative z-10 w-4 h-4 bg-sand-600 rounded-full border-4 border-white shadow-lg"></div>
                  
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default AboutPage;