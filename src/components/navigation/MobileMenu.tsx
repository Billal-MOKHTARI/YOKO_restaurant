import React from 'react';
import { NavLink } from './NavLink';
import { X } from 'lucide-react';
import { CTAButton } from './CTAButton';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  scrolled: boolean;
}

export function MobileMenu({ isOpen, onClose, scrolled }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm dark:bg-gray-900/80">
      <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-white dark:bg-gray-800 p-6 shadow-lg">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-xl font-semibold dark:text-white">Menu</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
            aria-label="Close menu"
          >
            <X className="w-6 h-6 dark:text-white" />
          </button>
        </div>
        <nav className="flex flex-col space-y-4">
          <NavLink href="#home" scrolled={true} onClick={onClose}>Home</NavLink>
          <NavLink href="#menu" scrolled={true} onClick={onClose}>Menu</NavLink>
          <NavLink href="#about" scrolled={true} onClick={onClose}>About</NavLink>
          <NavLink href="#contact" scrolled={true} onClick={onClose}>Contact</NavLink>
        </nav>
        <div className="mt-8">
          <CTAButton scrolled={true} />
        </div>
      </div>
    </div>
  );
}