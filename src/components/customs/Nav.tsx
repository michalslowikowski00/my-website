'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { name: 'home', path: '/', id: 1 },
  { name: 'home', path: '/h', id: 2 },
  { name: 'home', path: '/h', id: 3 },
  { name: 'home', path: '/h', id: 4 },
];

export const Nav = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <>
      <nav className="flex gap-6">
        {links.map((link) => {
          return (
            <Link
              key={link.id}
              href={link.path}
              className={`${link.path === pathname && 'border-b-1 '} capitalize font-medium hover:text-emerald-600`}
            >
              {link.name}
            </Link>
          );
        })}
      </nav>
    </>
  );
};
