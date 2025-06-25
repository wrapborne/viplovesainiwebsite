import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';
import { Shield, GraduationCap, PiggyBank, Users, TrendingUp, Award, Phone } from 'lucide-react';

const ClientServicesPage = () => {
  const { toast } = useToast();

  const products = [
    {
      icon: Shield,
      title: 'Term Life Insurance',
      description: 'Pure protection at affordable premiums. Secure your family\'s future with high coverage.',
      features: ['High Sum Assured', 'Low Premium', 'Tax Benefits', 'Flexible Terms'],
      popular: true
    },
    {
      icon: PiggyBank,
      title: 'Endowment Plans',
      description: 'Combination of insurance and investment. Guaranteed returns with life cover.',
      features: ['Guaranteed Returns', 'Life Cover', 'Maturity Benefits', 'Loan Facility'],
      popular: false
    },
    {
      icon: TrendingUp,
      title: 'ULIP Plans',
      description: 'Market-linked investment with insurance. Grow your wealth while staying protected.',
      features: ['Market Returns', 'Fund Switching', 'Tax Benefits', 'Flexible Premiums'],
      popular: false
    },
    {
      icon: Users,
      title: 'Pension Plans',
      description: 'Secure retirement with regular income. Build your retirement corpus systematically.',
      features: ['Regular Income', 'Tax Benefits', 'Flexible Options', 'Guaranteed Pension'],
      popular: true
    },
    {
      icon: GraduationCap,
      title: 'Child Education Plans',
      description: 'Ensure your child\'s education dreams come true. Planned savings for education goals.',
      features: ['Education Fund', 'Waiver Benefits', 'Flexible Payouts', 'Tax Savings'],
      popular: false
    }
  ];

  const handleGetQuote = (productTitle) => {
    toast({
      title: "Quote Request Received!",
      description: `We'll contact you soon with ${productTitle} details and personalized quote.`,
    });
  };

  return (
    <>
      <Helmet>
        <title>LIC Insurance Products Roorkee - Life Insurance, Pension, Child Plans</title>
        <meta name="description" content="Comprehensive LIC insurance products in Roorkee. Term life insurance, pension plans, child education, health insurance, ULIP. Get quotes and expert advice." />
        <meta name="keywords" content="LIC products Roorkee, life insurance Roorkee, pension plans, child education insurance, health insurance, ULIP plans, term insurance" />
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
              Comprehensive Insurance Solutions
            </h1>
            <p className="text-xl text-black md:text-2xl mb-8 max-w-3xl mx-auto">
              Discover LIC's wide range of insurance products designed to protect 
              and grow your wealth. Serving Roorkee and surrounding areas.
            </p>
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 max-w-2xl mx-auto">
              <p className="text-xl text-yellow-400 font-semibold mb-2">🎯 Personalized Insurance Solutions</p>
              <p className="text-blue-400">Expert guidance for your financial security</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="pt-4 py-6">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Insurance Products
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our comprehensive range of insurance products, 
              each designed to meet specific financial goals and protection needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className={`hover-lift h-full relative ${product.popular ? 'ring-2 ring-blue-500' : ''}`}>
                  {product.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <CardHeader>
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <product.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl">{product.title}</CardTitle>
                    <CardDescription className="text-gray-600">
                      {product.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="flex-grow">
                    <div className="space-y-2 mb-6">
                      {product.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <Award className="w-4 h-4 text-green-500" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="space-y-3">
                      <Button 
                        onClick={() => handleGetQuote(product.title)}
                        className="w-full btn-primary"
                      >
                        Get Quote
                      </Button>
                      <Link to="/contact">
                        <Button variant="outline" className="w-full">
                          Learn More
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose LIC */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose LIC?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Trusted Since 1956</h4>
                    <p className="text-gray-600">India's largest and most trusted life insurance company with decades of experience.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Guaranteed Returns</h4>
                    <p className="text-gray-600">Assured returns on traditional plans with bonus declarations and loyalty additions.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Wide Network</h4>
                    <p className="text-gray-600">Extensive branch network across India for easy policy servicing and claims.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Award className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Tax Benefits</h4>
                    <p className="text-gray-600">Enjoy tax deductions under Section 80C and tax-free maturity benefits under Section 10(10D).</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                <img  
                  alt="Happy family protected by LIC insurance"
                  className="w-full h-96 object-cover rounded-xl shadow-lg"
                 src="https://images.unsplash.com/photo-1679335026558-3e71768f0af9" />
                <div className="absolute inset-0 bg-blue-600/20 rounded-xl"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h4 className="text-xl font-bold mb-2">Your Family's Security</h4>
                  <p className="text-blue-100">Protecting what matters most to you</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Simple Process to Get Started
            </h2>
            <p className="text-xl text-gray-600">
              Getting your LIC policy is easier than ever
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Consultation', desc: 'Discuss your needs with our expert' },
              { step: '2', title: 'Plan Selection', desc: 'Choose the right product for you' },
              { step: '3', title: 'Documentation', desc: 'Complete simple paperwork' },
              { step: '4', title: 'Policy Issued', desc: 'Receive your policy documents' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                <p className="text-gray-600">{item.desc}</p>
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
              Ready to Secure Your Future?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Get personalized insurance advice and quotes from our experienced 
              Development Officer in Roorkee.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4">
                  <Phone className="w-5 h-5 mr-2" />
                  Get Free Consultation
                </Button>
              </Link>
              <Button 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-4"
                onClick={() => toast({
                  title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
                })}
              >
                Download Brochures
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ClientServicesPage;