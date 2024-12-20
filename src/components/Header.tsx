import React, { useState } from 'react';
import { Menu as MenuIcon } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { MobileMenu } from './navigation/MobileMenu';
import { useScrollPosition } from '../hooks/useScrollPosition';
import { Logo } from './navigation/Logo';
import { NavLinks } from './navigation/NavLinks';
import { CTAButton } from './navigation/CTAButton';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrolled = useScrollPosition();

  return (
    <>
      <header 
        className={`
          fixed top-0 w-full z-40
          transition-all duration-300
          ${scrolled 
            ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm' 
            : 'bg-transparent'
          }
        `}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Logo scrolled={scrolled} />
            <NavLinks scrolled={scrolled} />
            
            <div className="flex items-center gap-4">
              <CTAButton scrolled={scrolled} />
              <ThemeToggle />
              <button 
                onClick={() => setIsMenuOpen(true)}
                className={`
                  md:hidden p-2 rounded-full transition-colors
                  ${scrolled 
                    ? 'hover:bg-gray-100 dark:hover:bg-gray-800' 
                    : 'hover:bg-white/10'
                  }
                `}
                aria-label="Open menu"
              >
                <MenuIcon className={scrolled ? 'text-gray-900 dark:text-white' : 'text-white'} />
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileMenu 
        isOpen={isMenuOpen} 
        onClose={() => setIsMenuOpen(false)} 
        scrolled={scrolled}
      />
    </>
  );
}