import React from 'react';
import ProjectSlide from 'components/projects/ProjectSlide';
import projects from 'data/projectData';

const Projects = () => {
  return (
    <section
      id="projects"
      className="container relative flex flex-col items-center h-screen max-w-full gap-20 mx-auto overflow-hidden justify-evenly md:flex-row"
    >
      <h3 className="absolute text-2xl tracking-widest uppercase top-24">Projects</h3>
      <div className="relative flex w-full mt-10 overflow-scroll overflow-y-hidden snap-x snap-mandatory">
        {projects.map(project => (
          <ProjectSlide key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
