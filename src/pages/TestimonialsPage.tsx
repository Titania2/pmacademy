import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const TestimonialsPage: React.FC = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Parent of Piano Student",
      content: "My daughter has flourished at Performance & Music Academy. The teachers are incredibly talented and patient, and the performances have given her such confidence. We couldn't be happier with her progress.",
      rating: 5,
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150",
      studentAge: "Age 8",
      instrument: "Piano"
    },
    {
      name: "Michael Chen",
      role: "Violin Student, Age 16",
      content: "The level of instruction here is exceptional. I've grown so much as a violinist and performer over the past three years. The faculty truly cares about each student's musical journey and personal growth.",
      rating: 5,
      image: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=150",
      studentAge: "Age 16",
      instrument: "Violin"
    },
    {
      name: "Emily Rodriguez",
      role: "Parent of Voice Student",
      content: "Three years at Performance & Music Academy and my son has discovered his passion for music. The individual attention and group performances are outstanding. The academy feels like a musical family.",
      rating: 5,
      image: "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=150",
      studentAge: "Age 12",
      instrument: "Voice"
    },
    {
      name: "David Kim",
      role: "Parent of Guitar Student",
      content: "Performance & Music Academy has been transformative for our family. My daughter started as a complete beginner and now performs confidently at recitals. The teachers are phenomenal.",
      rating: 5,
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150",
      studentAge: "Age 10",
      instrument: "Guitar"
    },
    {
      name: "Lisa Thompson",
      role: "Parent of Piano Student",
      content: "The academy's approach to music education is comprehensive and nurturing. My son has not only improved technically but has developed a deep love for music that will last a lifetime.",
      rating: 5,
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150",
      studentAge: "Age 14",
      instrument: "Piano"
    },
    {
      name: "James Wilson",
      role: "Drum Student, Age 17",
      content: "I've been studying drums here for four years and the progress has been incredible. The teachers push you to be your best while creating a supportive environment. I've won several competitions thanks to their guidance.",
      rating: 5,
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150",
      studentAge: "Age 17",
      instrument: "Drums"
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
              What Our Community Says
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Hear from the families and students who have made Performance & Music Academy their musical home
            </p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-pearl-50 p-8 rounded-lg relative hover:shadow-lg transition-shadow duration-300"
              >
                <Quote className="h-8 w-8 text-sand-500 mb-4" />
                <p className="text-navy-700 mb-6 italic leading-relaxed">"{testimonial.content}"</p>
                
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-navy-900">{testimonial.name}</h4>
                    <p className="text-navy-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-sand-400 fill-current" />
                    ))}
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-navy-600">{testimonial.studentAge}</p>
                    <p className="text-sm text-sand-600">{testimonial.instrument}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-sand-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-serif font-bold text-navy-900 mb-6">
              Join Our Musical Family
            </h2>
            <p className="text-xl text-navy-600 mb-8 max-w-3xl mx-auto">
              Experience the same exceptional instruction and supportive community that our families love at Pacific Music Academy
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-blue-700 transition-colors duration-300"
            >
              Schedule Your Free Trial
            </motion.button>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default TestimonialsPage;