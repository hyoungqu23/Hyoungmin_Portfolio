import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import type { Projects } from 'data/projectData';

type Props = {
  project: Projects;
};

const ProjectBox = ({ project }: Props) => {
  const { title, descriptions, retrospective, stack, period, type, imgUrl, url } = project;

  const { githubUrl, retroUrl } = url;

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen gap-2 mt-10 border-b-2 md:even:flex-row md:odd:flex-row-reverse">
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="relative w-40 h-40 overflow-hidden md:w-2/3 md:h-2/3"
      >
        <a href={githubUrl}>
          <Image src={imgUrl} layout="responsive" />
        </a>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="px-0 text-center md:w-1/3 md:px-10"
      >
        <h4 className="text-xl font-semibold text-center">
          <a href={githubUrl}>{title}</a>
        </h4>
        <p className="text-xs text-gray-400">{type}</p>
        <p className="text-xs text-gray-400">{period}</p>
        {stack.map(skill => (
          <span key={skill} className="mr-1 text-xs text-sky-500">
            {skill}
          </span>
        ))}
        <div className="my-3 text-sm text-left text-gray-600 dark:text-gray-400 text-bold">
          {retrospective}
        </div>
        <div className="my-4 text-left">
          {descriptions.map((description, index) => (
            <p
              key={description.tag + index}
              className="my-1 text-xs text-gray-400 dark:text-gray-500 md:text-sm"
            >
              {description.content}
            </p>
          ))}
        </div>
        <a
          className="p-1 text-sm rounded text-bold bg-sky-500 text-sky-100 hover:text-sky-500 hover:bg-sky-100"
          href={retroUrl}
          target="_blank"
        >
          {title} 회고 보러가기
        </a>
      </motion.div>
    </div>
  );
};

export default ProjectBox;
