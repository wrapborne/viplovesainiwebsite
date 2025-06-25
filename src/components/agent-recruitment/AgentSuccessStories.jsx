import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

const AgentSuccessStories = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Success Stories from Roorkee
          </h2>
          <p className="text-xl text-gray-600">
            Real agents, real success stories from our Team
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="hover-lift">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <img  
                    alt="Successful LIC agent Rubi Saini"
                    className="w-16 h-16 rounded-full object-cover"
                   src="https://images.unsplash.com/photo-1659353219716-699803846194" />
                  <div>
                    <h4 className="font-semibold text-lg">Rubi Saini</h4>
                    <p className="text-gray-600">LIC Agent since 2024</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "Joining LIC changed my life completely. From a housewife to earning ₹50,000+ monthly, 
                  the training and support provided helped me build confidence and financial independence."
                </p>
                <div className="mt-4 text-sm text-blue-600 font-semibold">
                  Monthly Earnings: ₹50,000+ 
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="hover-lift">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <img  
                    alt="Successful LIC agent Rajesh Kumar"
                    className="w-16 h-16 rounded-full object-cover"
                   src="https://images.unsplash.com/photo-1580128637392-35b81ba47467" />
                  <div>
                    <h4 className="font-semibold text-lg">Rajesh Kumar</h4>
                    <p className="text-gray-600">LIC Agent since 2018</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "Started part-time while running my shop. Now LIC is my primary income source. 
                  The flexible hours allowed me to grow gradually"
                </p>
                <div className="mt-4 text-sm text-blue-600 font-semibold">
                  Monthly Earnings: ₹75,000+
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AgentSuccessStories;