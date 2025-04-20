import ProfileImage from '@/images/polarbear.jpg';
import Image from 'next-export-optimize-images/image';
import React from 'react';

const About = () => {
  return (
    <section className="flex flex-col justify-center items-center dark:text-white">
      <div className="h-full mb-2">
        <Image src={ProfileImage} alt="Me" className="h-[40vh] w-auto object-cover" />
        <p className="text-center text-lg">Shashank</p>
      </div>
      <h1 className="text-3xl mb-2">Software Developer | ML enthusiast | Explorer</h1>
      <p className="text-lg max-w-[40vw] text-center">
        A software engineer who loves to code and with a demonstrated history of working in
        production grade websites, mobile, backend and ML applications.
      </p>
    </section>
  );
};

export default About;
