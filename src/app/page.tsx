import Link from 'next/link';

import Squiggle from '@/components/atoms/Squiggle';

const links = [
  { slug: '/work', label: 'Work' },
  { slug: 'https://blog.zephix.org', label: 'Blog' },
  { slug: '/about', label: 'About' }
];

const HomePage = () => {
  return (
    <section className="flex flex-1 flex-col sm:flex-row items-center justify-center dark:text-gray-50 w-full -translate-y-11">
      <div className="sm:w-[40%] w-full flex flex-1 items-center justify-center sm:pr-56">
        <ul className="flex flex-col text-3xl space-y-10">
          {links.map(({ slug, label }) => (
            <li key={slug}>
              <Link
                href={slug}
                className="p-2 transition-colors hover:dark:text-green-300 after:dark:bg-green-300 animated-underline"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div
        className={`flex w-full flex-1 items-center justify-center sm:pr-20 p-10 text-center cursor-default font-thin text-3xl squiggly-animate`}
      >
        <p>A problem solver who loves creating and finding the root cause of problems...</p>
      </div>
      <Squiggle />
    </section>
  );
};

export default HomePage;
