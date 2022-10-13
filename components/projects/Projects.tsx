import React from 'react';
import ProjectBox from 'components/projects/ProjectBox';
import projects from 'data/projectData';

const Projects = () => {
  return (
    <section
      id="projects"
      className="container relative flex flex-col items-center h-full max-w-full gap-20 py-20 mx-auto overflow-hidden justify-evenly md:flex-row"
    >
      <h3 className="absolute text-2xl tracking-widest uppercase top-10 md:top-14">Projects</h3>
      <p className="absolute text-xs text-gray-500 top-20 md:top-24">
        프로젝트 이미지를 클릭하면 <span className="text-sky-500">프로젝트 레포지토리</span>로
        연결됩니다.
      </p>
      <div className="flex flex-col gap-0">
        {projects.map(project => (
          <ProjectBox key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
