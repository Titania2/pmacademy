import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Parent of Piano Student",
      content: "My daughter has flourished at Performance & Music Academy. The teachers are incredibly talented and patient, and the performances have given her such confidence. We couldn't be happier with her progress.",
      rating: 5,
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "Michael Chen",
      role: "Violin Student, Age 16",
      content: "The level of instruction here is exceptional. I've grown so much as a violinist and performer over the past three years. The faculty truly cares about each student's musical journey and personal growth.",
      rating: 5,
      image: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "Emily Rodriguez",
      role: "Parent of Voice Student",
      content: "Three years at Pacific Music Academy and my son has discovered his passion for music. The individual attention and group performances are outstanding. The academy feels like a musical family.",
      rating: 5,
      image: "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=150"
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
            What Our Community Says
          </h2>
          <p className="text-xl text-navy-600 max-w-3xl mx-auto leading-relaxed">
            Hear from the families and students who have made Professional Music Academy their musical home
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-sand-50 p-8 rounded-lg relative hover:shadow-lg transition-shadow duration-300"
            >
              <Quote className="h-8 w-8 text-sand-500 mb-4" />
              <p className="text-navy-700 mb-6 italic leading-relaxed">"{testimonial.content}"</p>
              
              <div className="flex items-center">
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
              
              <div className="flex mt-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-sand-400 fill-current" />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;