import React, { useState } from 'react';
import type { NextPage } from 'next';
import ProjectDetail from 'components/projects/ProjectDetail/ProjectDetail';
import { PROJECTS } from 'data/projectsData';

const Projects: NextPage = () => {
  return (
    <div className="container grid items-start justify-center h-full grid-cols-3 gap-10 mx-auto">
      {PROJECTS.map(project => (
        <div key={project.title}>
          <div className="relative flex flex-col row-span-1 gap-2 p-4 mb-3 text-left border-2 border-pink-400 rounded-xl">
            <h2 className="text-2xl">{project.title}</h2>
            <div>
              <p className="text-gray-400">{project.summary}</p>
              <p className="text-xs text-gray-400">{project.period}</p>
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
};

export default Projects;
