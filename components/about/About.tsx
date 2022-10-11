import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import AboutDetail from 'components/about/AboutDetail';
import { aboutDetailData } from 'data/aboutData';

const About = () => {
  return (
    <section
      id="about"
      className="container relative flex flex-col-reverse items-center justify-center h-screen gap-10 md:flex-row"
    >
      <h3 className="absolute text-2xl tracking-widest uppercase top-10">About</h3>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="flex flex-col w-full md:w-2/3"
      >
        <h2 className="mb-5 text-base md:text-3xl">안녕하세요🙋‍♂️ 프론트엔드 개발자 이형민입니다.</h2>
        <div className="flex flex-col gap-2 lg">
          {aboutDetailData.map((data, index) => (
            <AboutDetail key={index} data={data} />
          ))}
        </div>
      </motion.div>
      <motion.div
        initial={{ x: '50%', opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="relative w-40 h-40 overflow-hidden md:w-60 md:h-60"
      >
        <Image src="/image/profile.svg" layout="fill" />
      </motion.div>
    </section>
  );
};

export default About;
