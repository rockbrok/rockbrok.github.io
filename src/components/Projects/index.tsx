import { FC, useState } from 'react';
import {RemoveScrollBar} from 'react-remove-scroll-bar';

interface ProjectProps {

  project2: string;
}

interface Props {
  show: any;
  setShow: any;
}

const Projects: FC<ProjectProps> = ({ project2 }) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <h2 id="projects" className="flex font-mono text-forest-green text-2xl uppercase">
        Projects
      </h2>
      <Key />
      <section className="flex container my-8 justify-center">
        <section className="grid grid-rows-auto gap-y-12">
          <section className="project-container">
              <div className="project-icons">
                <Triangle />
                <Circle />
                <Square />
              </div>
              <button onClick={() => setShow(!show)}>
                <Test />
              </button>
              { show ? 
                <>
                <RemoveScrollBar />
                <Mobile setShow={setShow} show={show} />
                </>
              : null }
          </section>
          <section className="project-container">
              <div className="project-icons">
                <Triangle />
                <Circle />
                <Square />
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

const Test = () => (
  <>
    <div className="project">
      <span className="bg-google-logo bg-no-repeat bg-contain bg-center w-60 h-20 flex" />
    </div>
    <div className="project-title-bar">
      <h4 className="text-grey text-lg font-mono select-none">Google Frontend</h4>
    </div>
  </>
)

const Mobile: FC<Props> = ({setShow, show}) => (
  <>
    <div className="project-mobile">

      <div className="project-mobile-top">
        <button onClick={() => setShow(!show)}>
          Close window
        </button>
      </div>

      <div className="project-mobile-bottom">
        Content....
      </div>

    </div>
  </>
)

const Key = () => (
  <section className="flex flex-row w-auto justify-end pr-6">
    <section className="flex flex-col">
      <div className="flex flex-row mb-2 items-center">
        <Triangle />
        <span className="flex font-mono text-blue pl-4">
          CSS
        </span>
      </div>
      <div className="flex flex-row my-2 items-center">
        <Circle />
        <span className="flex font-mono text-red pl-4">
          React
        </span>
      </div>
      <div className="flex flex-row my-2 items-center">
        <Square />
        <span className="flex font-mono text-gold pl-4">
          JavaScript
        </span>
      </div>
    </section>
  </section>
)

const Triangle = () => <span className="flex triangle"/>;
const Circle = () => <span className="flex circle"/>;
const Square = () => <span className="flex square"/>;

export default Projects;