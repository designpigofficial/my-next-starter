import * as React from 'react';

import UnstyledLink from '../../components/links/UnstyledLink';

const links = [
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Projects' },
  { href: '/testemonials', label: 'Testemonials' },
  { href: '/contact', label: 'Contact' },
  { href: '/components', label: '</dev>' },
];

export default function Header() {
  return (
    <header className='sticky top-0 z-50 bg-transparent'>
      <div className='layout flex justify-between items-center h-14'>
        <UnstyledLink
          href='/'
          className='text-2xl font-bold hover:mix-blend-overlay'
        >
          &lt;/design<span style={{ color: 'pink' }}>pig</span>&gt;
        </UnstyledLink>
        <nav>
          <ul className='flex justify-between items-center space-x-4'>
            {links.map(({ href, label }) => (
              <li key={`${href}${label}`}>
                <UnstyledLink href={href} className='hover:text-gray-600'>
                  {label}
                </UnstyledLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
