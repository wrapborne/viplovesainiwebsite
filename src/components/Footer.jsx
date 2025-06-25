import React from 'react';
import { Shield, Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-6">
      <div className="container mx-auto px-4 pt-8 pb-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                {/* Replace Shield with Image */}
                  <img src="/vip1x1.png" alt="Viplove Saini LIC Logo" className="w-10 h-10 " />
              </div>
              <div>
                <span className="text-xl font-bold">Viplove Saini</span>
                <p className="text-sm text-gray-400">LIC Development Officer</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your trusted partner for life insurance solutions in Roorkee and surrounding areas. 
              Providing comprehensive insurance coverage and agent recruitment opportunities.
            </p>
          </div>

          {/* Empty Space */}
          <div></div>

          {/* Contact Info */}
          <div>
            <span className="text-lg font-semibold mb-4 block">Contact Information</span>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-blue-400" />
                <a href="tel:+918439712571" className="text-sm text-gray-400 hover:text-blue-400">
                  +91 8439712571
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-blue-400" />
                <a href="mailto:contact@viplovesaini.in" className="text-sm text-gray-400 hover:text-blue-400">
                  contact@viplovesaini.in
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MessageCircle className="w-4 h-4 text-blue-400" />
                <a href="https://wa.me/918439712571" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-blue-400">
                  WhatsApp
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-blue-400 mt-1" />
                <a href="https://maps.google.com?q=LIC+Office,+Civil+Lines,+Roorkee,+Uttarakhand+247667" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-blue-400">
                  LIC Office, Civil Lines<br />
                  Roorkee, Uttarakhand 247667
                </a>
              </div>
            </div>
          </div>

          {/* Disclaimer - Commented Out */}
          {/*
          <div>
            <span className="text-lg font-semibold mb-4 block">Important Notice</span>
            <div className="text-xs text-gray-400 space-y-2">
              <p>
                Life Insurance Corporation of India is a statutory corporation established under 
                LIC Act 1956. IRDAI Registration No. 512.
              </p>
              <p>
                All insurance products are subject to terms and conditions. 
                Please read policy documents carefully before purchasing.
              </p>
              <p>
                For grievances, contact: Customer Service - 022-68276827/28
              </p>
            </div>
          </div>
          */}
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center pb-4">
          <p className="text-sm text-gray-400">
            © 2025 All rights reserved | 
            Developed by Viplove Saini, LIC Development Officer, Roorkee
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;