import ProfileImage from '@/images/polarbear.jpg';
import Image from 'next-export-optimize-images/image';
import React from 'react';

const About = () => {
  return (
    <section className="flex flex-col justify-center items-center dark:text-white">
      <div className="h-full">
        <Image src={ProfileImage} alt="Me" className="h-[40vh] w-auto object-cover" />
        <p>Shashank</p>
      </div>
      <h1 className="text-3xl">Software Developer | ML enthusiast | Explorer</h1>
      <p>A software engineer with a passion to code</p>
    </section>
  );
};

export default About;
