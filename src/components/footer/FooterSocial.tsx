import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export function FooterSocial() {
  return (
    <div className="flex gap-4">
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-indigo-600 dark:text-gray-400 
                   dark:hover:text-indigo-400 transition-colors duration-200"
        aria-label="Facebook"
      >
        <Facebook className="w-6 h-6" />
      </a>
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-indigo-600 dark:text-gray-400 
                   dark:hover:text-indigo-400 transition-colors duration-200"
        aria-label="Instagram"
      >
        <Instagram className="w-6 h-6" />
      </a>
      <a
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-indigo-600 dark:text-gray-400 
                   dark:hover:text-indigo-400 transition-colors duration-200"
        aria-label="Twitter"
      >
        <Twitter className="w-6 h-6" />
      </a>
    </div>
  );
}