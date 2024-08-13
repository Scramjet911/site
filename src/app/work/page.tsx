'use client';

import { useEffect, useRef, useState } from 'react';

// const RevealOnScroll = ({ children }: { children: JSX.Element }) => {
//   const [isVisible, setIsVisible] = useState(false);
//   const ref = useRef(null);

//   useEffect(() => {
//     const scrollObserver = new IntersectionObserver(([entry]) => {
//       if (entry.isIntersecting) {
//         setIsVisible(true);
//         scrollObserver.unobserve(entry.target);
//       }
//     });
//     if (ref.current) {
//       scrollObserver.observe(ref.current);
//     }

//     return () => {
//       if (ref.current) {
//         scrollObserver.unobserve(ref.current);
//       }
//     };
//   }, []);

//   const classes = `transition-opacity duration-1000
//         ${isVisible ? '' : ''}`;

//   return (
//     <div ref={ref} className={classes}>
//       {children}
//     </div>
//   );
// };

const Work = () => {
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollFn = () => {
      document.body.style.setProperty(
        '--scroll',
        (window.scrollY / (document.body.offsetHeight - window.innerHeight)).toString()
      );
      const x = progressRef.current?.offsetTop ?? 0;
      const currentPosition = Math.round(
        ((progressRef.current?.clientHeight ?? 0) / window.innerHeight) * 100
      );
      const getCurrentPositionHighlight = () => {};
    };
    window.addEventListener('scroll', scrollFn, false);

    return () => {
      window.removeEventListener('scroll', scrollFn, false);
    };
  }, []);

  return (
    <section className="text-white">
      <div ref={progressRef} className="h-2 bg-white progress-animate fixed top-0"></div>
      <div className="ml-2 min-h-[500vh] p-8 pt-4 space-y-8">
        <div>
          <h3 className="text-3xl">Option 1</h3>
          <ul className="list-['-_'] list-inside text-lg">
            <li>So and so was good</li>
          </ul>
        </div>
        <div>
          <h3 className="text-3xl">Option 2</h3>
          <ul className="list-['-_'] list-inside text-lg">
            <li>So and so was good</li>
          </ul>
        </div>
        <div>Option 3</div>
        <div>Option 4</div>
      </div>
    </section>
  );
};

export default Work;
