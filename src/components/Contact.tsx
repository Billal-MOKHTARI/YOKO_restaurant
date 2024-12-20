import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl mb-6 tracking-wide dark:text-white">Hours</h2>
            <div className="space-y-2 text-gray-600 dark:text-gray-300">
              <p>Monday - Thursday: 11:30 AM - 10:00 PM</p>
              <p>Friday - Saturday: 11:30 AM - 11:00 PM</p>
              <p>Sunday: 12:00 PM - 9:00 PM</p>
            </div>
          </div>
          <div>
            <h2 className="text-2xl mb-6 tracking-wide dark:text-white">Contact</h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p className="flex items-center gap-2">
                <MapPin size={18} className="dark:text-gray-400" aria-hidden="true" />
                <span>123 Sakura Street, New York, NY 10001</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone size={18} className="dark:text-gray-400" aria-hidden="true" />
                <span>(212) 555-0123</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail size={18} className="dark:text-gray-400" aria-hidden="true" />
                <span>info@koyo-restaurant.com</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}