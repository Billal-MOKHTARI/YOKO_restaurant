import React from 'react';
import { Utensils } from 'lucide-react';

interface LogoProps {
  scrolled: boolean;
}

export function Logo({ scrolled }: LogoProps) {
  return (
    <div className="flex items-center gap-2">
      <Utensils 
        className={`w-6 h-6 transition-colors ${
          scrolled ? 'text-indigo-600 dark:text-indigo-400' : 'text-white'
        }`}
      />
      <span className={`text-2xl font-semibold tracking-wider transition-colors ${
        scrolled ? 'text-gray-900 dark:text-white' : 'text-white'
      }`}>
        KŌYŌ
      </span>
    </div>
  );
}