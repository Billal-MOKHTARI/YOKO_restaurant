import React from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  scrolled: boolean;
  onClick?: () => void;
}

export function NavLink({ href, children, scrolled, onClick }: NavLinkProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`
        relative px-3 py-2 transition-colors
        ${scrolled
          ? 'text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400'
          : 'text-white/90 hover:text-white'
        }
        group
      `}
    >
      {children}
      <span className={`
        absolute bottom-0 left-0 w-full h-0.5
        scale-x-0 group-hover:scale-x-100
        transition-transform origin-left
        ${scrolled
          ? 'bg-indigo-600 dark:bg-indigo-400'
          : 'bg-white'
        }
      `} />
    </a>
  );
}