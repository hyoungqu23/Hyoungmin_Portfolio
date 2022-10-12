import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';

const Home = () => {
  return (
    <section id="home" className="container flex flex-col items-center justify-center h-screen">
      <div className="flex flex-row">
        <h1 className="text-5xl font-bold md:text-9xl">H</h1>
        <motion.h1
          initial={{ display: 'none', opacity: 0 }}
          animate={{ display: 'inline', opacity: 1 }}
          className="text-5xl font-bold md:text-9xl"
        >
          <Typewriter words={['', 'youngmin']} delaySpeed={1000} typeSpeed={200} />
        </motion.h1>
        <motion.h1
          animate={{ rotateX: 180 }}
          transition={{ duration: 1 }}
          className="text-5xl font-bold md:text-9xl"
        >
          i
        </motion.h1>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="flex flex-col items-center mt-10"
      >
        <h3 className="text-base md:text-xl">
          <span className="font-bold">프론트엔드</span> 개발자
        </h3>
        <h2 className="text-xl md:text-2xl">
          <span className="font-bold">이형민</span>입니다
        </h2>
        <div className="flex flex-row gap-5 mt-4 text-xs text-bold md:text-base">
          <div>
            <a href="https://github.com/hyoungqu23">GitHub</a>
          </div>
          <div>
            <a href="https://www.notion.so/hyoungmin/f4673e33e89f4143a0526b91d0040f89?v=38d3e22f4eb242149ed9dc21f53f7e6a">
              Blog
            </a>
          </div>
          <div>
            <a href="https://hyoungmin.notion.site/148ffdf1a5fe480b865ff6a0de802444">Resume</a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
