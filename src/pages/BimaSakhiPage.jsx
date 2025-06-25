import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { Baby as Woman, DollarSign, GraduationCap, TrendingUp, CheckCircle, Star } from 'lucide-react';

const BimaSakhiPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    age: '',
    qualification: '',
    address: ''
  });

  const benefits = [
    {
      icon: DollarSign,
      title: 'Guaranteed Stipend',
      description: 'Earn a fixed monthly stipend: ₹7,000 (1st year), ₹6,000 (2nd year), and ₹5,000 (3rd year).'
    },
    {
      icon: Woman,
      title: 'Financial Independence',
      description: 'A special opportunity for women to build a stable career and achieve financial freedom.'
    },
    {
      icon: GraduationCap,
      title: 'Professional Training',
      description: 'Receive comprehensive training to become a certified insurance professional at no cost.'
    },
    {
      icon: TrendingUp,
      title: 'Career Progression',
      description: 'Excellent performance can lead to a promotion to the esteemed position of Development Officer.'
    }
  ];

  const eligibility = [
    'Exclusively for women',
    'Age: 18 - 70 years',
    'Minimum Qualification: Class 10th Pass',
    'Residing in the local area',
    'A desire to be self-reliant'
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const applications = JSON.parse(localStorage.getItem('bimaSakhiApplications') || '[]');
    const newApplication = {
      id: Date.now(),
      ...formData,
      submittedAt: new Date().toISOString(),
      status: 'pending'
    };
    applications.push(newApplication);
    localStorage.setItem('bimaSakhiApplications', JSON.stringify(applications));

    toast({
      title: "Application for Bima Sakhi Submitted!",
      description: "Thank you for your interest. We will review your application and contact you shortly.",
    });

    setFormData({
      name: '',
      email: '',
      phone: '',
      age: '',
      qualification: '',
      address: ''
    });
  };

  return (
    <>
      <Helmet>
        <title>LIC Bima Sakhi Yojana Roorkee - Empowering Women</title>
        <meta name="description" content="Join the LIC Bima Sakhi Yojana in Roorkee. A special scheme for women (18-70 yrs, 10th pass) with a monthly stipend up to ₹7,000. Apply now for financial independence." />
        <meta name="keywords" content="LIC Bima Sakhi Yojana Roorkee, women empowerment LIC, government scheme for women, insurance jobs for women Roorkee, LIC stipend scheme" />
      </Helmet>

      {/* Hero Section */}
      <section className="gradient-bg hero-pattern py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <div className="flex justify-center items-center gap-4 mb-4">
              <Star className="w-10 h-10 text-yellow-300 fill-current" />
              <h1 className="text-4xl md:text-5xl font-bold text-blue-600">
                LIC Bima Sakhi Yojana
              </h1>
              <Star className="w-10 h-10 text-yellow-300 fill-current" />
            </div>
            <p className="text-xl text-black md:text-2xl mb-4 max-w-3xl mx-auto">
              A Golden Opportunity for Women in Roorkee to Achieve Financial Independence and a Prestigious Career.
            </p>
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 max-w-2xl mx-auto">
              <p className="text-xl text-yellow-400 font-semibold mb-2">Empowering Women, Securing Futures</p>
              <p className="text-blue-400">Join a movement of self-reliant women today!</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="pt-2 pb-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Benefits of Bima Sakhi Yojana
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              This scheme is designed to provide women with a stable income, valuable skills, and a path to a successful career.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="hover-lift h-full text-center">
                  <CardHeader>
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <benefit.icon className="w-8 h-8 text-blue-600" />
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

      {/* Eligibility & Application */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-600">
                    Eligibility Criteria
                  </CardTitle>
                  <CardDescription>
                    Simple requirements to join the Bima Sakhi scheme.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 mb-8">
                    {eligibility.map((item, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                  <img
                  src="/bima sakhi.jpg" alt="Consultation" className="w-120 h-90 object-cover "/>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-600">
                    Apply for Bima Sakhi
                  </CardTitle>
                  <CardDescription>
                    Fill the form to take the first step towards your new career.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input id="name" name="name" value={formData.name} onChange={handleInputChange} required placeholder="Your full name" />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleInputChange} required placeholder="Your phone number" />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} required placeholder="Your email address" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="age">Age *</Label>
                        <Input id="age" name="age" type="number" value={formData.age} onChange={handleInputChange} required placeholder="e.g., 25" />
                      </div>
                      <div>
                        <Label htmlFor="qualification">Qualification *</Label>
                        <Input id="qualification" name="qualification" value={formData.qualification} onChange={handleInputChange} required placeholder="e.g., 10th Pass" />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="pincode">Pincode *</Label>
                      <Input id="pincode" name="pincode" type="number" value={formData.address} onChange={handleInputChange} required placeholder="Your Pincode" />
                    </div>
                    <div>
                      <Label htmlFor="address">Full Address *</Label>
                      <Textarea id="address" name="address" value={formData.address} onChange={handleInputChange} required placeholder="Your complete residential address" rows={3} />
                    </div>
                    <Button type="submit" className="w-full btn-primary text-lg py-3">
                      Submit Application
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BimaSakhiPage;