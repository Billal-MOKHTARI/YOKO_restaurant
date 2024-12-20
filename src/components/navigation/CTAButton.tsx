import React from 'react';

interface CTAButtonProps {
  scrolled: boolean;
}

export function CTAButton({ scrolled }: CTAButtonProps) {
  return (
    <a
      href="#reservation"
      className={`
        hidden sm:inline-flex items-center px-4 py-2 rounded-full
        font-medium transition-all duration-300
        ${scrolled
          ? 'bg-indigo-600 text-white hover:bg-indigo-700'
          : 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm'
        }
      `}
    >
      Reserve a Table
    </a>
  );
}