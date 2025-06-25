import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, DollarSign, GraduationCap, TrendingUp, Users, Award } from 'lucide-react';

const benefits = [
  {
    icon: Clock,
    title: 'Flexible Working Hours',
    description: 'Work at your own pace and schedule. Perfect for part-time or full-time commitment.'
  },
  {
    icon: DollarSign,
    title: 'High Commission Structure',
    description: 'Earn attractive commissions up to 35% on first year premium and renewal bonuses.'
  },
  {
    icon: GraduationCap,
    title: 'IRDA Certified Training',
    description: 'Comprehensive training program with IRDA certification and ongoing support.'
  },
  {
    icon: TrendingUp,
    title: 'Career Growth',
    description: 'Clear promotion path from Agent to Development Officer and beyond.'
  },
  {
    icon: Users,
    title: 'Team Building',
    description: 'Build your own team and earn override commissions on team performance.'
  },
  {
    icon: Award,
    title: 'Recognition & Rewards',
    description: 'Regular awards, incentives, and recognition for top performers.'
  }
];

const AgentBenefits = () => {
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
            Why Become an LIC Agent?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join India's most trusted insurance company and build a successful career 
            with unlimited earning potential and comprehensive support.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="hover-lift h-full">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <benefit.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgentBenefits;