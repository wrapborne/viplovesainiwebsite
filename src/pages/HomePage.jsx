
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Users, TrendingUp, Award, Phone, Mail } from 'lucide-react';

const HomePage = () => {
  const features = [
    {
      icon: Shield,
      title: 'Trusted Protection',
      description: 'Comprehensive life insurance coverage for you and your family'
    },
    {
      icon: Users,
      title: 'Agent Network',
      description: 'Join our growing network of successful insurance agents'
    },
    {
      icon: TrendingUp,
      title: 'Financial Growth',
      description: 'Build wealth with our investment and retirement plans'
    },
    {
      icon: Award,
      title: 'Award Winning',
      description: 'India\'s most trusted life insurance company since 1956'
    }
  ];

  return (
    <>
      <Helmet>
        <title>LIC Roorkee - Life Insurance & Agent Recruitment | Development Officer</title>
        <meta name="description" content="LIC Development Officer in Roorkee, Uttarakhand. Life insurance, agent recruitment, retirement plans. Serving Roorkee and nearby areas. IRDA certified training available." />
        <meta name="keywords" content="LIC Roorkee, LIC agent recruitment Roorkee, life insurance Roorkee, bima sakhi, lic bima sakhi, insurance near me, lic near me, lic me job, insurance agent jobs Roorkee, LIC development officer" />
      </Helmet>

      {/* Hero Section */}
      <section className="gradient-bg hero-pattern min-h-screen flex items-center">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-shadow text-blue-700">
                Secure Your Future with 
                <span className="block text-yellow-300">LIC Roorkee</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-300">
                Your trusted Development Officer serving Roorkee and surrounding areas. 
                Comprehensive life insurance solutions and lucrative agent opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/client-services">
                  <Button className="btn-primary text-lg px-8 py-4 w-full sm:w-auto">
                    Bima Sakhi Yojana
                  </Button>
                </Link>
                <Link to="/agent-recruitment">
                  <Button variant="outline" className="btn-secondary text-lg px-8 py-4 w-full sm:w-auto hover:text-blue-500">
                    Become an Agent
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="glass-effect rounded-2xl p-8 backdrop-blur-lg">
                <img  
                  alt="Professional insurance consultation in modern office"
                  className="w-full h-80 object-cover rounded-xl"
                 src="/consultation.png" alt="Consultation" className="w-120 h-90 object-cover rounded-[30px]"/>
                <div className="mt-6 text-white text-center">
                  <p className="text-lg font-semibold">Professional Insurance Consultation</p>
                  <p className="text-blue-400">Personalized solutions for your family's security</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Viplove Saini?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              With months of experience and a commitment to excellence, we provide 
              unmatched insurance solutions and career opportunities in Roorkee and nearby.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="hover-lift h-full text-center">
                  <CardHeader>
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-blue-600">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Whether you're looking for comprehensive insurance coverage or a rewarding career 
              as an LIC agent, we're here to help you succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4">
                  <Phone className="w-5 h-5 mr-2" />
                  Contact Us Today
                </Button>
              </Link>
              <Link to="/agent-recruitment">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-4">
                  <Mail className="w-5 h-5 mr-2" />
                  Apply as Agent
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            {/*
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Serving Uttarakhand
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Our comprehensive insurance services cover the following areas:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {['Roorkee', 'Haridwar', 'Dehradun', 'Rishikesh', 'Muzaffarnagar', 'Saharanpur', 'Hardwar Rural', 'Laksar'].map((area, index) => (
                <motion.div
                  key={area}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-blue-50 text-blue-700 px-4 py-3 rounded-lg font-semibold"
                >
                  {area}
                </motion.div>
              ))} 
            </div>
            */}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
