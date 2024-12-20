import React from 'react';
import { NavLink } from './NavLink';

interface NavLinksProps {
  scrolled: boolean;
}

export function NavLinks({ scrolled }: NavLinksProps) {
  return (
    <nav className="hidden md:flex items-center space-x-8">
      <NavLink href="#home" scrolled={scrolled}>Home</NavLink>
      <NavLink href="#menu" scrolled={scrolled}>Menu</NavLink>
      <NavLink href="#about" scrolled={scrolled}>About</NavLink>
      <NavLink href="#contact" scrolled={scrolled}>Contact</NavLink>
    </nav>
  );
}