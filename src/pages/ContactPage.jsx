import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from 'lucide-react';

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone Number',
      details: 'Viplove Saini\n+91 8439712571',
      description: 'Call for immediate assistance'
    },
    {
      icon: Mail,
      title: 'Email Address',
      details: 'contact@viplovesaini.in',
      description: 'Send us your queries'
    },
    {
      icon: MapPin,
      title: 'Office Address',
      details: 'LIC Office, Civil Lines\nRoorkee, Uttarakhand 247667',
      description: 'Visit our office'
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: 'Mon - Sat: 10:00 AM - 6:00 PM\nSun: 10:00 AM - 2:00 PM',
      description: 'We are available'
    }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const inquiries = JSON.parse(localStorage.getItem('clientInquiries') || '[]');
    const newInquiry = {
      id: Date.now(),
      ...formData,
      submittedAt: new Date().toISOString(),
      status: 'new'
    };
    inquiries.push(newInquiry);
    localStorage.setItem('clientInquiries', JSON.stringify(inquiries));

    toast({
      title: "Message Sent Successfully!",
      description: "Thank you for contacting us. We'll respond within 24 hours.",
    });

    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <>
      <Helmet>
        <title>Contact Viplove Saini - LIC Development Officer Roorkee</title>
        <meta name="description" content="Contact Viplove Saini, LIC Development Officer in Roorkee, for insurance quotes, policy support, and agent recruitment. Office in Civil Lines, Roorkee. Call +91 8439712571." />
        <meta name="keywords" content="LIC Roorkee contact, Viplove Saini LIC, LIC office Roorkee, insurance quotes Roorkee, LIC development officer contact, LIC Uttarakhand" />
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-blue-600">
              Get in Touch
            </h1>
            <p className="text-xl text-black md:text-2xl mb-8 max-w-3xl mx-auto">
              Ready to secure your future or start your LIC agent career? 
              Contact our Roorkee office for personalized assistance.
            </p>
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 max-w-2xl mx-auto">
              <p className="text-xl text-yellow-400 font-semibold mb-2">📞 Quick Response Guaranteed</p>
              <p className="text-blue-300">We respond to all inquiries within 24 hours</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="pt-4 py-6">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Contact Information
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Multiple ways to reach us for all your insurance needs and queries
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="hover-lift h-full text-center">
                  <CardHeader>
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <info.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl">{info.title}</CardTitle>
                    <CardDescription className="text-gray-600">
                      {info.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-800 font-semibold whitespace-pre-line">
                      {info.details}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-600 flex items-center">
                    <MessageCircle className="w-6 h-6 mr-2" />
                    Send us a Message
                  </CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you as soon as possible
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          placeholder="Enter your full name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          placeholder="Enter your phone number"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter your email address"
                      />
                    </div>

                    <div>
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        placeholder="What is this regarding?"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        placeholder="Tell us how we can help you"
                        rows={5}
                      />
                    </div>

                    <Button type="submit" className="w-full btn-primary text-lg py-3">
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Map & Office Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* Map */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-600 flex items-center">
                    <MapPin className="w-6 h-6 mr-2" />
                    Find Our Office
                  </CardTitle>
                  <CardDescription>
                    Located in the heart of Roorkee for easy accessibility
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                    <div className="text-center text-gray-600">
                      <MapPin className="w-12 h-12 mx-auto mb-2" />
                      <p className="font-semibold">LIC Office, Civil Lines</p>
                      <p>Roorkee, Uttarakhand 247667</p>
                      <p className="text-sm mt-2">Interactive map would be integrated here</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Contact */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-blue-600">
                    Need Immediate Assistance?
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                    <Phone className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="font-semibold">Call Now</p>
                      <p className="text-blue-600">+91 8439712571</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                    <MessageCircle className="w-5 h-5 text-green-600" />
                    <div>
                      <p className="font-semibold">WhatsApp</p>
                      <p className="text-green-600">Quick responses available</p>
                    </div>
                  </div>

                  {/*<div className="p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-400">
                    <p className="text-sm text-yellow-800">
                      <strong>Emergency Claims:</strong> For urgent claim assistance, 
                      call our 24/7 helpline at 022-68276827
                    </p>
                  </div>
                  */}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      {/*<section className="section-padding">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Areas We Serve
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Providing comprehensive LIC services across Uttarakhand and nearby regions
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
              {[
                'Roorkee', 'Haridwar', 'Dehradun', 'Rishikesh', 
                'Muzaffarnagar', 'Saharanpur', 'Hardwar Rural', 'Laksar',
                'Jwalapur', 'Bhagwanpur', 'Landhaura', 'Manglaur'
              ].map((area, index) => (
                <motion.div
                  key={area}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="bg-blue-50 text-blue-700 px-3 py-2 rounded-lg font-semibold text-sm"
                >
                  {area}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      */}
    </>
  );
};

export default ContactPage;