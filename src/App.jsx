import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HomePage from '@/pages/HomePage';
import AgentRecruitmentPage from '@/pages/AgentRecruitmentPage';
import ClientServicesPage from '@/pages/ClientServicesPage';
import ContactPage from '@/pages/ContactPage';
import BimaSakhiPage from '@/pages/BimaSakhiPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/agent-recruitment" element={<AgentRecruitmentPage />} />
            <Route path="/bima-sakhi-yojana" element={<BimaSakhiPage />} />
            <Route path="/client-services" element={<ClientServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
        <Toaster />
      </div>
    </Router>
  );
}

export default App;