import React from 'react';

interface LinkGroup {
  title: string;
  links: Array<{
    label: string;
    href: string;
  }>;
}

const linkGroups: LinkGroup[] = [
  {
    title: 'Restaurant',
    links: [
      { label: 'About Us', href: '#about' },
      { label: 'Menu', href: '#menu' },
      { label: 'Reservations', href: '#reservations' },
      { label: 'Private Events', href: '#events' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'Contact', href: '#contact' },
      { label: 'FAQ', href: '#faq' },
      { label: 'Gift Cards', href: '#gift-cards' },
      { label: 'Careers', href: '#careers' },
    ],
  },
];

export function FooterLinks() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-8 lg:gap-12">
      {linkGroups.map((group) => (
        <div key={group.title}>
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
            {group.title}
          </h3>
          <ul className="space-y-2">
            {group.links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-gray-600 hover:text-indigo-600 dark:text-gray-400 
                           dark:hover:text-indigo-400 transition-colors duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}