import React, { useState } from 'react';
import { Send } from 'lucide-react';

export function FooterNewsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    setEmail('');
  };

  return (
    <div className="w-full lg:w-1/3">
      <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
        Stay Updated
      </h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        Subscribe to our newsletter for exclusive offers and culinary insights.
      </p>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="flex-1 px-4 py-2 rounded-lg border border-gray-200 
                     dark:border-gray-700 dark:bg-gray-800 dark:text-white
                     focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          required
        />
        <button
          type="submit"
          className="px-4 py-2 bg-indigo-600 text-white rounded-lg
                     hover:bg-indigo-700 transition-colors duration-200
                     focus:outline-none focus:ring-2 focus:ring-offset-2 
                     focus:ring-indigo-500"
        >
          <Send className="w-5 h-5" />
        </button>
      </form>
    </div>
  );
}