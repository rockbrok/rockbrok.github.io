import { FC } from 'react';

interface ProjectProps {
  project1: string;
  project2: string;
}

const Projects: FC<ProjectProps> = ({ project1, project2 }) => {
  return (
    <>
      <h2 id="projects" className="flex font-mono text-forest-green text-2xl uppercase">
        Projects
      </h2>
      <section className="flex flex-row w-auto justify-end pr-6">
        <section className="flex flex-col">
          <div className="flex flex-row mb-2 items-center">
            <span className="flex triangle"/>
            <span className="flex font-mono text-blue pl-4">CSS</span>
          </div>
          <div className="flex flex-row my-2 items-center">
            <span className="flex circle"/>
            <span className="flex font-mono text-red pl-4">React</span>
          </div>
          <div className="flex flex-row my-2 items-center">
            <span className="flex square"/>
            <span className="flex font-mono text-gold pl-4">JavaScript</span>
          </div>
        </section>
      </section>
      <section className="flex container my-8 justify-center">
        <section className="grid grid-rows-auto gap-y-12">
          <section className="project-container">
              <div className="project-icons">
                <span className="flex triangle"/>
                <span className="flex circle"/>
                <span className="flex square"/>
              </div>
              <div className="project">
                <span className="bg-google-logo bg-no-repeat bg-contain bg-center w-60 h-20 flex" />
              </div>
              <div className="project-title-bar">
                <h4 className="text-grey text-lg font-mono select-none">{project1}</h4>
              </div>
          </section>
          <section className="project-container">
              <div className="project-icons">
                <span className="flex triangle"/>
                <span className="flex circle"/>
                <span className="flex square"/>
              </div>
              <div className="project">
                <span className="bg-google-logo bg-no-repeat bg-contain bg-center w-60 h-20 flex" />
              </div>
              <div className="project-title-bar">
                <h4 className="text-grey text-lg font-mono select-none">{project2}</h4>
              </div>
          </section>
        </section>
      </section>
    </>
  );
};

export default Projects;