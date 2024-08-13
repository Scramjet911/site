import Link from 'next/link';
import { ReactNode } from 'react';

import HomeIcon from '@/components/atoms/HomeIcon';

import { cn } from '@/lib/utils';

interface MainLayoutProps {
  children: ReactNode;
  className?: string;
}

export const MainLayout = ({ children, className }: MainLayoutProps) => {
  const wrapperStyles = cn('flex flex-col relative min-h-screen dark:bg-gray-950', className);

  return (
    <main className={wrapperStyles}>
      <header className="p-5 flex justify-end">
        <Link
          href="/"
          className="p-2 group-hover:text-green-300 after:bg-green-300 animated-underline group"
        >
          <HomeIcon className="text-gray-300 group-hover:text-green-300 w-10 h-10" />
        </Link>
      </header>
      {children}
    </main>
  );
};
