import React from 'react';
import type { NextPage } from 'next';
import ProjectDetail from 'components/projects/ProjectDetail/ProjectDetail';
import PROJECTS from 'data/projectsData';

const Projects: NextPage = () => (
  <div className="container grid items-center justify-center h-full grid-rows-4 mx-auto lg:items-start lg:gap-10 lg:grid-cols-4">
    {PROJECTS.map(project => (
      <div key={project.title}>
        <div className="relative flex flex-col row-span-1 gap-2 p-4 mb-3 text-left border-2 border-pink-400 rounded-xl">
          <a href={project?.githubUrl}>
            <h2 className="text-lg lg:text-xl">{project.title}</h2>
          </a>
          <div>
            <p className="hidden text-gray-400 lg:flex">{project.summary}</p>
            <p className="text-xs text-gray-400 ">{project.period}</p>
            <p className="text-sm text-gray-400">{project.type}</p>
          </div>
        </div>
        <ProjectDetail
          pageUrl={project?.pageUrl}
          githubUrl={project?.githubUrl}
          notionUrl={project?.notionUrl}
          figmaUrl={project?.figmaUrl}
          descriptions={project.descriptions}
        />
      </div>
    ))}
  </div>
);

export default Projects;
