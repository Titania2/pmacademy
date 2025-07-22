import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, Mail, Phone, MapPin, Music, Clock, Users, FileText } from 'lucide-react';

const ScheduleTrialPage: React.FC = () => {
  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    yearsStudying: '',
    instruments: '',
    location: [] as string[],
    expectations: '',
    groupTheory: '',
    musicTests: '',
    lessonLength: '',
    preferredTime: '',
    howDidYouHear: '',
    parentGuardianName: '',
    todaysDate: new Date().toISOString().split('T')[0]
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Trial lesson request:', formData);
    // Handle form submission
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleLocationChange = (location: string) => {
    setFormData(prev => ({
      ...prev,
      location: prev.location.includes(location)
        ? prev.location.filter(l => l !== location)
        : [...prev.location, location]
    }));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20 min-h-screen bg-sand-50"
    >
      {/* Hero Section */}
      <section className="py-16 bg-sand-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Calendar className="h-16 w-16 mx-auto mb-6 text-sand-100" />
            <h1 className="text-4xl sm:text-5xl font-serif font-bold mb-6">
              Schedule Your Free Trial Lesson
            </h1>
            <p className="text-xl text-sand-100 max-w-3xl mx-auto">
              Experience Pacific Music Academy's exceptional teaching approach with no commitment required
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-lg shadow-xl p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Mandatory Fields Section */}
              <div>
                <h2 className="text-2xl font-serif font-bold text-navy-900 mb-6 flex items-center">
                  <User className="h-6 w-6 mr-3 text-sand-500" />
                  Required Information
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-navy-700 mb-2">
                      Student Name *
                    </label>
                    <input
                      type="text"
                      name="studentName"
                      value={formData.studentName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sand-500 focus:border-transparent"
                      placeholder="Enter student's full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-navy-700 mb-2">
                      Parent Name *
                    </label>
                    <input
                      type="text"
                      name="parentName"
                      value={formData.parentName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sand-500 focus:border-transparent"
                      placeholder="Enter parent's full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-navy-700 mb-2">
                      <Mail className="h-4 w-4 inline mr-2" />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sand-500 focus:border-transparent"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-navy-700 mb-2">
                      <Phone className="h-4 w-4 inline mr-2" />
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sand-500 focus:border-transparent"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-navy-700 mb-2">
                      Student Date of Birth *
                    </label>
                    <input
                      type="date"
                      name="dateOfBirth"
                      value={formData.dateOfBirth}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sand-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-navy-700 mb-2">
                      Years Studying Music *
                    </label>
                    <select
                      name="yearsStudying"
                      value={formData.yearsStudying}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sand-500 focus:border-transparent"
                    >
                      <option value="">Select years of study</option>
                      <option value="0">Complete Beginner</option>
                      <option value="1">1 Year</option>
                      <option value="2">2 Years</option>
                      <option value="3">3 Years</option>
                      <option value="4">4 Years</option>
                      <option value="5">5 Years</option>
                      <option value="6+">6+ Years</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-navy-700 mb-2">
                      <Music className="h-4 w-4 inline mr-2" />
                      What Instrument(s)? *
                    </label>
                    <input
                      type="text"
                      name="instruments"
                      value={formData.instruments}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sand-500 focus:border-transparent"
                      placeholder="e.g., Piano, Violin, Guitar"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-navy-700 mb-2">
                      How did you hear about us? *
                    </label>
                    <select
                      name="howDidYouHear"
                      value={formData.howDidYouHear}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sand-500 focus:border-transparent"
                    >
                      <option value="">Please select</option>
                      <option value="Google">Google</option>
                      <option value="Yelp">Yelp</option>
                      <option value="Word of Mouth">Word of Mouth</option>
                      <option value="Friend">Friend</option>
                    </select>
                  </div>
                </div>

                <div className="mt-6">
                  <label className="block text-sm font-medium text-navy-700 mb-3">
                    <MapPin className="h-4 w-4 inline mr-2" />
                    What Location? * (Check all that apply)
                  </label>
                  <div className="space-y-2">
                    {['Evergreen', 'Mountain View/Palo Alto'].map((location) => (
                      <label key={location} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={formData.location.includes(location)}
                          onChange={() => handleLocationChange(location)}
                          className="h-4 w-4 text-sand-600 focus:ring-sand-500 border-gray-300 rounded"
                        />
                        <span className="ml-2 text-navy-700">{location}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              {/* Optional Fields Section */}
              <div className="border-t border-gray-200 pt-8">
                <h2 className="text-2xl font-serif font-bold text-navy-900 mb-6 flex items-center">
                  <FileText className="h-6 w-6 mr-3 text-sand-500" />
                  Additional Information (Optional)
                </h2>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-navy-700 mb-2">
                      What are the student's/parent's expectations for studying music?
                    </label>
                    <textarea
                      name="expectations"
                      value={formData.expectations}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sand-500 focus:border-transparent"
                      placeholder="e.g., CM tests, competitions, festivals, professional career, personal enjoyment..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-navy-700 mb-2">
                      Would the student like to take part in group theory lessons?
                    </label>
                    <select
                      name="groupTheory"
                      value={formData.groupTheory}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sand-500 focus:border-transparent"
                    >
                      <option value="">Please select</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-navy-700 mb-2">
                      Has the student taken any music tests? Which ones? What level?
                    </label>
                    <textarea
                      name="musicTests"
                      value={formData.musicTests}
                      onChange={handleChange}
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sand-500 focus:border-transparent"
                      placeholder="e.g., ABRSM Grade 5, CM Level 8, RCM Advanced..."
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-navy-700 mb-2">
                        <Clock className="h-4 w-4 inline mr-2" />
                        Preferred lesson length?
                      </label>
                      <select
                        name="lessonLength"
                        value={formData.lessonLength}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sand-500 focus:border-transparent"
                      >
                        <option value="">Please select</option>
                        <option value="30 min">30 minutes</option>
                        <option value="45 min">45 minutes</option>
                        <option value="60 min">60 minutes</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-navy-700 mb-2">
                        Preferred time/day for lessons?
                      </label>
                      <select
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sand-500 focus:border-transparent"
                      >
                        <option value="">Please select</option>
                        <option value="Weekday">Weekday</option>
                        <option value="Weekend">Weekend</option>
                        <option value="Either">Either</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-navy-700 mb-2">
                        Parent/Guardian Name
                      </label>
                      <input
                        type="text"
                        name="parentGuardianName"
                        value={formData.parentGuardianName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sand-500 focus:border-transparent"
                        placeholder="If different from parent name above"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-navy-700 mb-2">
                        Today's Date
                      </label>
                      <input
                        type="date"
                        name="todaysDate"
                        value={formData.todaysDate}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sand-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Legal Text Section */}
              <div className="border-t border-gray-200 pt-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-navy-900 mb-4">Agreement</h3>
                  <p className="text-sm text-navy-700 leading-relaxed mb-4">
                    The undersigned has read this PMA Policy, and fully understands its terms, conditions, and provisions. 
                    The undersigned agrees that even if any portion of this PMA Policy is held to be invalid, the remaining 
                    portions shall continue in full force and effect.
                  </p>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <button
                  type="submit"
                  className="w-full bg-sand-500 text-white py-4 px-8 rounded-lg font-medium text-lg hover:bg-sand-600 transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  <Calendar className="h-5 w-5" />
                  Submit Trial Lesson Request
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default ScheduleTrialPage;