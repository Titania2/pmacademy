import React from 'react';
import { Music, Phone, Mail, MapPin, Instagram, Facebook, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Music className="h-8 w-8 text-yellow-400" />
              <span className="text-2xl font-serif font-bold">Pacific Music Academy</span>
            </div>
            <p className="text-blue-100 mb-6 max-w-md">
              Pacific Music Academy provides a nurturing environment where students of all ages 
              can grow musically and artistically through dedicated instruction and comprehensive curriculum.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-6 w-6 text-blue-200 hover:text-yellow-400 cursor-pointer transition-colors" />
              <Instagram className="h-6 w-6 text-blue-200 hover:text-yellow-400 cursor-pointer transition-colors" />
              <Youtube className="h-6 w-6 text-blue-200 hover:text-yellow-400 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-yellow-400" />
                <span className="text-blue-100">(650) 308-6578</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-yellow-400" />
                <span className="text-blue-100">pmacademy.contact@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-yellow-400" />
                <span className="text-blue-100">850 Middlefield Rd, Palo Alto, CA 94301</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-blue-100">Hours: Mon-Fri 9am-8pm, Sat 9am-5pm, Sun Closed</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/programs" className="text-blue-100 hover:text-yellow-400 transition-colors">Programs</a></li>
              <li><a href="/gallery" className="text-blue-100 hover:text-yellow-400 transition-colors">Gallery</a></li>
              <li><a href="/achievements" className="text-blue-100 hover:text-yellow-400 transition-colors">Achievements</a></li>
              <li><a href="/testimonials" className="text-blue-100 hover:text-yellow-400 transition-colors">Testimonials</a></li>
              <li><a href="/policy.pdf" download className="text-blue-100 hover:text-yellow-400 transition-colors">Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-400 mt-12 pt-8 text-center">
          <p className="text-blue-100">
            © 2024 Pacific Music Academy. All rights reserved. | Where talent meets opportunity.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;