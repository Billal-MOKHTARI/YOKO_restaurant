import React from 'react';
import { FooterLinks } from './footer/FooterLinks';
import { FooterNewsletter } from './footer/FooterNewsletter';
import { FooterSocial } from './footer/FooterSocial';
import { Utensils } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-12 mb-12">
          <div className="w-full lg:w-1/3">
            <div className="flex items-center gap-2 mb-4">
              <Utensils className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
              <span className="text-2xl font-semibold tracking-wider text-gray-900 dark:text-white">
                KŌYŌ
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Experience the finest Japanese cuisine in an atmosphere of elegance and tradition.
              Our master chefs create unforgettable dining experiences that honor both heritage
              and innovation.
            </p>
            <FooterSocial />
          </div>
          
          <FooterLinks />
          
          <FooterNewsletter />
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              © {currentYear} KŌYŌ. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a
                href="#privacy"
                className="text-gray-600 hover:text-indigo-600 dark:text-gray-400 
                         dark:hover:text-indigo-400 transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a
                href="#terms"
                className="text-gray-600 hover:text-indigo-600 dark:text-gray-400 
                         dark:hover:text-indigo-400 transition-colors duration-200"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}