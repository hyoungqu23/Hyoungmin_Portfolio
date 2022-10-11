import React from 'react';
import { motion } from 'framer-motion';
import type { Projects } from 'data/projectData';

type Props = {
  project: Projects;
};

const ProjectSlide = ({ project }: Props) => {
  const { title, stack, period, type, imgUrl, url } = project;

  const { githubUrl } = url;

  return (
    <div className="flex flex-col items-center justify-center flex-shrink-0 w-screen h-screen p-20 space-y-5 snap-center md:p-44">
      <a href={githubUrl} target="_blank">
        <motion.img
          initial={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          src={
            imgUrl ? imgUrl : 'https://media.graphassets.com/output=format:jpg/Z8r7JPjZQgiDV4BXtQGF'
          }
          alt="프로젝트 이미지"
          className="transition duration-150 ease-in-out cursor-pointer h-[300px]"
          data-bs-toggle="tooltip"
          title="클릭하면 GitHub Repository로 이동합니다."
        />
      </a>
      <div className="max-w-6xl px-0 text-center md:px-10">
        <h4 className="text-xl font-semibold text-center">{title}</h4>
        <p className="text-sm text-gray-400">{type}</p>
        <p className="text-xs text-gray-400">{period}</p>
        {stack.map(skill => (
          <span key={skill} className="mr-1 text-xs even:text-cyan-500 odd:text-sky-500">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectSlide;
