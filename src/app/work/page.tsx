'use client';

import { ReactNode, useEffect, useRef } from 'react';

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

const workList: Record<string, Array<ReactNode>> = {
  Scrambleid: [
    'Migrated services form AWS Lambdas to a nodejs fastify server and acheived a speedup of 50% and cost reduction.',
    'Wrote CRUD operations in dynamodb to fetch app data'
  ],
  'Keyvalue Software Systems': [
    <span key="" className="flex">
      Worked on functional benchmarks in python for LLM&apos;s. Cited in{' '}
      <a
        className="hover:text-blue-600 text-blue-200"
        href="https://storage.googleapis.com/deepmind-media/gemini/gemini_v1_5_report.pdf"
        target="_blank"
        rel="nooperner noreferrer"
      >
        Google&apos;s Gemini 1.5 report
      </a>
    </span>,
    'Collaborated with a team to createa React Native-Android package for image processing, PDF manipulation and API querying.'
  ],
  Projects: ['']
};
const Work = () => {
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollFn = () => {
      document.body.style.setProperty(
        '--scroll',
        (window.scrollY / (document.body.offsetHeight - window.innerHeight)).toString()
      );
      // const x = progressRef.current?.offsetTop ?? 0;
      // const currentPosition = Math.round(
      //   ((progressRef.current?.clientHeight ?? 0) / window.innerHeight) * 100
      // );
      // const getCurrentPositionHighlight = () => {};
    };
    window.addEventListener('scroll', scrollFn, false);

    return () => {
      window.removeEventListener('scroll', scrollFn, false);
    };
  }, []);

  return (
    <section className="dark:text-white">
      <div ref={progressRef} className="h-2 bg-white progress-animate fixed top-0"></div>
      <div className="ml-2 min-h-[500vh] p-8 pt-4 space-y-8">
        {Object.keys(workList).map((workItem) => (
          <div key={workItem}>
            <h3 className="text-3xl">{workItem}</h3>
            <div className="text-lg">
              {workList[workItem].map((subItem) => (
                <p key={subItem?.toString()} className="flex whitespace-pre">
                  - {subItem}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;
