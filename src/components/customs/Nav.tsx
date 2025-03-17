'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { name: 'home', path: '/' },
  { name: 'services', path: '/services' },
  { name: 'resume', path: '/resume' },
  { name: 'work', path: '/work' },
  { name: 'contact', path: '/contact' },
];

export const Nav = () => {
  const pathname = usePathname();
  return (
    <>
      <nav className="flex gap-6">
        {links.map((link, index) => {
          return (
            <Link
              href={link.path}
              key={index}
              className={`${link.path === pathname && 'text-emerald-600 border-b-1 '} 
              capitalize font-medium hover:text-emerald-600`}
            >
              {link.name}
            </Link>
          );
        })}
      </nav>
    </>
  );
};
