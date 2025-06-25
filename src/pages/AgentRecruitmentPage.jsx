import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import AgentBenefits from '@/components/agent-recruitment/AgentBenefits';
import AgentEligibility from '@/components/agent-recruitment/AgentEligibility';
import AgentApplicationForm from '@/components/agent-recruitment/AgentApplicationForm';
import AgentSuccessStories from '@/components/agent-recruitment/AgentSuccessStories';

const AgentRecruitmentPage = () => {
  return (
    <>
      <Helmet>
        <title>LIC Agent Recruitment Roorkee - Join Our Team | High Commission & Training</title>
        <meta name="description" content="Join LIC as an insurance agent in Roorkee. Flexible hours, high commission up to 35%, IRDA certified training. Apply now for agent recruitment in Uttarakhand." />
        <meta name="keywords" content="LIC agent recruitment Roorkee, insurance agent jobs Roorkee, LIC career opportunities, IRDA training, insurance agent commission" />
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
              Join the LIC Family
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-yellow-400">
              Start your rewarding career as an LIC Agent in Roorkee. 
              Enjoy flexible hours, high commissions, and comprehensive training.
            </p>
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 max-w-2xl mx-auto">
              <p className="text-black text-lg font-semibold mb-2">🎯 Now Recruiting in Roorkee & Bhagwanpur</p>
              <p className="text-blue-400">Limited positions available - Apply today!</p>
            </div>
          </motion.div>
        </div>
      </section>

      <AgentBenefits />

      {/* Requirements & Application */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <AgentEligibility />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <AgentApplicationForm />
            </motion.div>
          </div>
        </div>
      </section>

      <AgentSuccessStories />
    </>
  );
};

export default AgentRecruitmentPage;