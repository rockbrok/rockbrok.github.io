import { FC, useState } from 'react';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

interface Project1Title {
  project1: string;
}
interface Project2Title {
  project2: string;
}
interface UseStateProps {
  show: any;
  setShow: any;
}

const Projects = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <h2 id="projects" className="flex font-mono text-forest-green text-2xl uppercase">
        Projects
      </h2>
      <Key />
      <section className="flex container my-8 justify-center">
        <section className="grid grid-rows-auto gap-y-12">
          <Project1
            project1={`Google Frontend`}
            show={show}
            setShow={setShow}
          />
          <Project2
            project2={`Portfolio`}
            show={show}
            setShow={setShow}
          />
        </section>
      </section>
    </>
  );
};

const Key = () => (
  <section className="flex flex-row w-auto justify-end pr-6">
    <section className="flex flex-col">
      <div className="flex flex-row mb-1 items-center">
        <Triangle />
        <span className="flex font-mono text-red pl-4">
          CSS
        </span>
      </div>
      <div className="flex flex-row my-1 items-center">
        <Circle />
        <span className="flex font-mono text-blue pl-4">
          ReactJS
        </span>
      </div>
      <div className="flex flex-row my-1 items-center">
        <Square />
        <span className="flex font-mono text-gold pl-4">
          JavaScript
        </span>
      </div>
      <div className="flex flex-row my-1 items-center">
        <Diamond />
        <span className="flex font-mono text-light-green pl-4">
          Typescript
        </span>
      </div>
      <div className="flex flex-row my-1 items-center">
        <Star />
        <span className="flex font-mono text-white pl-4">
          Tailwind
          <br/>CSS
        </span>
      </div>
    </section>
  </section>
);

const Project1: FC<Project1Title & UseStateProps> = ({setShow, show, project1}: any) => (
  <section className="project-container">
    <div className="project-icons flex flex-row justify-center gap-x-3 items-center">
      <Triangle />
      <Circle />
      <Square />
    </div>
    <button onClick={() => setShow(!show)}>
      <>
        <div className="project">
          <span className="bg-google-logo bg-no-repeat bg-200 bg-center w-52 h-20 flex" />
        </div>
        <div className="project-title-bar">
          <h4 className="text-grey text-xl font-mono select-none">{project1}</h4>
        </div>
        { show ? disableBodyScroll(Document as any) : enableBodyScroll(Document as any) }
      </>
    </button>
    { show ? <ProjectOverlay1 setShow={setShow} show={show} /> : null }
  </section>
);

const Project2: FC<Project2Title & UseStateProps>= ({setShow, show, project2}) => (
  <section className="project-container">
    <div className="project-icons flex flex-row justify-center gap-x-3 items-center">
      <Circle />
      <Diamond />
      <Star />
    </div>
    <button onClick={() => setShow(!show)}>
      <>
        <div className="project">
          <span className="bg-google-logo bg-no-repeat bg-200 bg-center w-52 h-20 flex" />
        </div>
        <div className="project-title-bar">
          <h4 className="text-grey text-xl font-mono select-none">{project2}</h4>
        </div>
        { show ? disableBodyScroll(Document as any) : enableBodyScroll(Document as any) }
      </>
    </button>
    { show ? <ProjectOverlay1 setShow={setShow} show={show} /> : null }
  </section>
);

const ProjectOverlay1: FC<UseStateProps> = ({setShow, show}) => (
  <section className="project-overlay scrollbar-hide">
    <div className="project-overlay-top flex flex-col justify-evenly">
      <div className="clear-container">
        <button className="x" onClick={() => setShow(!show)} />
      </div>
      <span className="bg-google-logo bg-no-repeat bg-200 bg-center w-52 h-20 flex my-9 self-center justify-self-center" />
      <div className="flex flex-row flex-wrap gap-4 justify-evenly text-white">
        <a className="whitespace-nowrap" href="">see the full project</a>
        <a className="whitespace-nowrap" href="">view code</a>
      </div>
    </div>
    <div className="project-overlay-bottom flex flex-col">
      <h1 className="text-dark-grey text-3xl font-mono uppercase mb-2">Google Frontend</h1>
      <h3 className="my-3 text-forest-green text-2xl font-mono leading-10">Description</h3>
      <p className="font-mono text-black leading-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique voluptates in ad, excepturi esse debitis quos perferendis, inventore repudiandae dolorem placeat asperiores assumenda accusamus molestias veritatis beatae facilis molestiae ab.</p>
      <h3 className="my-3 text-forest-green text-2xl font-mono leading-10">Tech used</h3>
      <ul className="inline-grid grid-cols-2 auto-cols-fr gap-x-4 list-disc list-outside">
        <li className="ml-4">Typescript</li>
        <li className="ml-4">ReactJS</li>
        <li className="ml-4">Tailwind CSS</li>
        <li className="ml-4">React Router</li>
        <li className="ml-4">Typescript</li>
        <li className="ml-4">Typescript</li>
      </ul>
      <div className="flex flex-row justify-end mt-6 gap-x-3">
        <Triangle />
        <Circle />
        <Square />
      </div>
    </div>
  </section>
);

const Triangle = () => <span className="flex triangle"/>;
const Circle = () => <span className="flex circle"/>;
const Square = () => <span className="flex square"/>;
const Diamond = () => <div className="diamond" />;
const Star = () => <div className="star" />;

export default Projects;