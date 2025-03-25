'use lient';
import Link from 'next/link';
import { Nav } from './Nav';
import { Button } from '../ui/button';

export const Header = () => {
  const headerName = 'Michał';

  return (
    <header className="py-8 xl:py-12 text-white">
      {/* mx-auto margin inline auto */}
      <div className="container mx-auto flex justify-between items-baseline">
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            {headerName}
            <span className="text-emerald-600"> .</span>
          </h1>
        </Link>

        {/* hidden -- hides element when the size of the screen is small */}
        <div className="hidden xl:flex">
          <Nav />
          <Link href="/">
            <Button className="bg-emerald-600 ml-6">Hire me</Button>
          </Link>
        </div>
      </div>
    </header>
  );
};
