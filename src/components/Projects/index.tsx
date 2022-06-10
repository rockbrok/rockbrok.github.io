import { FC } from 'react';

interface ProjectProps {
  project1: string;
  project2: string;
}

const Projects: FC<ProjectProps> = ({ project1, project2 }) => {
  return (
    <section className="grid grid-rows-auto gap-y-4">
      <section className="project-container">
          <div className="project-icons">
            <span className="flex triangle"/>
            <span className="flex circle"/>
            <span className="flex square"/>
          </div>
          <div className="project">
            <span className="bg-google-logo bg-no-repeat bg-contain bg-center w-72 h-28 flex" />
          </div>
          <div className="project-title-bar">
            <h4 className="text-grey text-3xl font-mono select-none">{project1}</h4>
          </div>
      </section>
      <section className="project-container">
          <div className="project-icons">
            <span className="flex triangle"/>
            <span className="flex circle"/>
            <span className="flex square"/>
          </div>
          <div className="project">
            <span className="bg-google-logo bg-no-repeat bg-contain bg-center w-72 h-28 flex" />
          </div>
          <div className="project-title-bar">
            <h4 className="text-grey text-3xl font-mono select-none">{project2}</h4>
          </div>
      </section>
    </section>
  );
};

export default Projects;