import { FC, useState } from 'react';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

interface Project1Props {
  title: string;
  showProject1: any;
  setShowProject1: any;
}
interface Project2Props {
  title: string;
  showProject2: any;
  setShowProject2: any;
}
interface Project3Props {
  title: string;
  showProject3: any;
  setShowProject3: any;
}
interface ProjectProps {
  description: string;
  viewProject: string;
  viewCode: string;
  tech: string;
}

const Projects = () => {
  const [showProject1, setShowProject1] = useState(false);
  const [showProject2, setShowProject2] = useState(false);
  const [showProject3, setShowProject3] = useState(false);
  const description = "Description";
  const viewProject = "see the full project";
  const viewCode = "view code";
  const tech = "Tech used";

  return (
    <section className="flex flex-col container mt-28 gap-4">
      <div className="xl:flex flex-row justify-between items-center content-center xl:mb-12 xl:mt-20">
        <h2 id="projects" className="flex font-mono text-forest-green text-2xl leading-6 uppercase self-end">
          Projects
        </h2>
        <Key />
      </div>
      <section className="flex flex-wrap container justify-center md:grid md:grid-cols-2 lg:grid-cols-3 md:auto-rows-fr gap-y-20 gap-x-[50px] md:gap-x-[110px] lg:gap-x-[46px] xl:gap-x-[124px] z-40">
        <Project1
          title={`Google Frontend`}
          showProject1={showProject1}
          setShowProject1={setShowProject1}
          description={description}
          viewProject={viewProject}
          viewCode={viewCode}
          tech={tech}
        />
        <Project2
          title={`Portfolio`}
          showProject2={showProject2}
          setShowProject2={setShowProject2}
          description={description}
          viewProject={viewProject}
          viewCode={viewCode}
          tech={tech}
        />
        <Project3
          title={`Shop`}
          showProject3={showProject3}
          setShowProject3={setShowProject3}
          description={description}
          viewProject={viewProject}
          viewCode={viewCode}
          tech={tech}
        />
      </section>
    </section>
  );
};

const Key = () => (
  <section className="flex flex-row w-auto justify-end mb-4 xl:mb-0">
    <section className="flex flex-col xl:flex-row gap-x-12">
      <div className="flex flex-row my-1 items-center">
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
          Tailwind CSS
        </span>
      </div>
    </section>
  </section>
);

const Project1: FC<Project1Props & ProjectProps> = ({setShowProject1, showProject1, title, description, viewProject, viewCode, tech}: any) => (
  <section className="w-264 h-364 relative">
    <div className="flex flex-row absolute top-0px h-50 w-118 border-solid border-t-2 border-x-2 border-white border-b-0 rounded-t-3xl justify-center gap-x-3 items-center">
      <Triangle />
      <Circle />
      <Square />
    </div>
    <button onClick={() => setShowProject1(!showProject1)}>
      <>
        <div className="flex border-2 border-solid border-white justify-center items-center absolute cursor-pointer top-50px w-full h-264">
          <span className="bg-google-logo bg-no-repeat bg-200 bg-center w-52 h-20 flex" />
        </div>
        <div className="flex absolute justify-center items-center bottom-0px w-full cursor-pointer h-50 border-2 border-solid border-white border-t-0 rounded-br-3xl rounded-bl-3xl text-light-grey bg-white">
          <h4 className="text-grey text-xl font-mono select-none">{title}</h4>
        </div>
        { showProject1 ? disableBodyScroll(Document as any) : enableBodyScroll(Document as any) }
      </>
    </button>
    { showProject1 ? <Project1Overlay setShowProject1={setShowProject1} showProject1={showProject1} title={title} description={description} viewProject={viewProject} viewCode={viewCode} tech={tech} /> : null }
  </section>
);

const Project1Overlay: FC<Project1Props & ProjectProps> = ({setShowProject1, showProject1, title, description, viewProject, viewCode, tech}) => (
  <div className="md:bg-dark-grey md:w-full md:fixed md:inset-0 z-50 flex justify-center">
    <section className="fixed md:static w-full h-screen top-0px left-0px md:flex-col overflow-y-scroll scrollbar-hide z-50 md:w-768">
      <div className="project-overlay-top flex flex-col justify-self-center justify-evenly md:w-768 relative">
        <div className="clear-container">
          <button className="x" onClick={() => setShowProject1(!showProject1)} />
        </div>
        <span className="bg-google-logo bg-no-repeat bg-200 bg-center w-52 h-20 flex my-9 self-center justify-self-center" />
        <div className="flex flex-row flex-wrap gap-x-4  gap-y-2 justify-evenly text-white">
          <a className="whitespace-nowrap" href="https://paq000.github.io/Google/" target="_blank" rel="noreferrer" >{viewProject}</a>
          <a className="whitespace-nowrap" href="https://github.com/paq000/Google" target="_blank" rel="noreferrer" >{viewCode}</a>
        </div>
      </div>
      <div className="project-overlay-bottom flex flex-col md:w-768">
        <h1 className="text-dark-grey text-3xl font-mono uppercase mb-2">{title}</h1>
        <h3 className="text-forest-green text-2xl font-mono mt-5 mb-3 leading-10">{description}</h3>
        <p className="font-mono text-black leading-5">This project developed from a suggestion that my friend Pae gave which was to recreate the Google landing page. Currently, the goal of this project is to replicate the design and function of the Google (Argentina) Search landing page and of the Sign In, Sign Up, Login, Account, and 404 pages.</p>
        <p className="font-mono text-black leading-5 mt-4">I used many image assets from Google including Logos, App Icons, etc. For icons I used HeroIcons by Tailwind. There is no encryption for user information, however, in the future I would like to implement the use of JSON Web Tokens for this purpose.</p>
        <h3 className="text-forest-green text-2xl font-mono mt-6 mb-3 leading-10">{tech}</h3>
        <ul className="inline-grid grid-cols-2 auto-cols-fr gap-x-4 list-disc list-outside">
          <li className="ml-4">CSS</li>
          <li className="ml-4">ReactJS</li>
          <li className="ml-4">i18next</li>
          <li className="ml-4">React Router</li>
          <li className="ml-4">Styled Components</li>
          <li className="ml-4">Axios</li>
          <li className="ml-4">ESLint</li>
          <li className="ml-4">JSON Server (Heroku)</li>
          <li className="ml-4">React Hook Form</li>
          <li className="ml-4">React Outside Click Handler</li>
          <li className="ml-4">React Helmet</li>
        </ul>
        <div className="flex flex-row justify-end mt-8 mb-2 gap-x-3">
          <div className="mt-2px">
            <Triangle />
          </div>
          <Circle />
          <Square />
        </div>
      </div>
    </section>
  </div>
);

const Project2: FC<Project2Props & ProjectProps>= ({setShowProject2, showProject2, title, description, viewProject, viewCode, tech}: any) => (
  <section className="w-264 h-364 relative">
    <div className="flex flex-row absolute top-0px h-50 w-118 border-solid border-t-2 border-x-2 border-white border-b-0 rounded-t-3xl justify-center gap-x-3 items-center">
      <Circle />
      <Diamond />
      <Star />
    </div>
    <button onClick={() => setShowProject2(!showProject2)}>
      <>
        <div className="flex border-2 border-solid border-white justify-center items-center absolute cursor-pointer top-50px w-full h-264">
          <span className="bg-grey-2 h-2 w-373 -rotate-45 absolute" />
          <span className="bg-grey-2 h-2 w-373 rotate-45 absolute" />
        </div>
        <div className="flex absolute justify-center items-center bottom-0px w-full cursor-pointer h-50 border-2 border-solid border-white border-t-0 rounded-br-3xl rounded-bl-3xl text-light-grey bg-white ">
          <h4 className="text-grey text-xl font-mono select-none">{title}</h4>
        </div>
        { showProject2 ? disableBodyScroll(Document as any) : null }
      </>
    </button>
    { showProject2 ? <Project2Overlay setShowProject2={setShowProject2} showProject2={showProject2} title={title} description={description} viewProject={viewProject} viewCode={viewCode} tech={tech} /> : null }
  </section>
);

const Project2Overlay: FC<Project2Props & ProjectProps> = ({setShowProject2, showProject2, title, description, viewProject, viewCode, tech}) => (
  <div className="md:bg-dark-grey md:w-full md:fixed md:inset-0 z-50 flex justify-center">
    <section className="fixed md:static w-full h-screen top-0px left-0px md:flex-col overflow-y-scroll scrollbar-hide z-50 md:w-768">
      <div className="project-overlay-top flex flex-col justify-self-center justify-evenly md:w-768 relative">
        <div className="clear-container">
          <button className="x" onClick={() => setShowProject2(!showProject2)} />
        </div>
        <span className="bg-google-logo bg-no-repeat bg-200 bg-center w-52 h-20 flex my-9 self-center justify-self-center" />
        <div className="flex flex-row flex-wrap gap-x-4  gap-y-2 justify-evenly text-white">
          <a className="whitespace-nowrap" href="https://github.com/paq000/portfolio" target="_blank" rel="noreferrer">{viewCode}</a>
        </div>
      </div>
      <div className="project-overlay-bottom flex flex-col md:w-768">
        <h1 className="text-dark-grey text-3xl font-mono uppercase mb-2">{title}</h1>
        <h3 className="text-forest-green text-2xl font-mono mt-5 mb-3 leading-10">{description}</h3>
        <p className="font-mono text-black leading-5">This project's purpose is to serve as a demonstration of my past projects, and skills as a front-end developer. It was made using TailwindCSS, ReactJS, and TypeScript. It was designed by my partner. It was built with a mobile-first design.</p>
        <p className="font-mono text-black leading-5 mt-4">The project is extremely simple and uses minimal dependencies. My blog posts are fetched using Axios and pages are switched by using a button (or swipe) which act as a counter, increasing (to the next) or decreasing (to the previous).</p>
        <h3 className="text-forest-green text-2xl font-mono mt-6 mb-3 leading-10">{tech}</h3>
        <ul className="inline-grid grid-cols-2 auto-cols-fr gap-x-4 list-disc list-outside">
          <li className="ml-4">Typescript</li>
          <li className="ml-4">ReactJS</li>
          <li className="ml-4">Tailwind CSS</li>
          <li className="ml-4">React Router</li>
          <li className="ml-4">Axios</li>
          <li className="ml-4">Body Scroll Lock</li>
          <li className="ml-4">React Swipeable</li>
          <li className="ml-4">useState</li>
          <li className="ml-4">useEffect</li>
          <li className="ml-4">Function Components</li>
          <li className="ml-4">JSON Server (Heroku)</li>
        </ul>
        <div className="flex flex-row justify-end mt-8 mb-2 gap-x-3">
          <div className="mt-2px">
            <Triangle />
          </div>
          <Circle />
          <Square />
        </div>
      </div>
    </section>
  </div>
);

const Project3: FC<Project3Props & ProjectProps>= ({setShowProject3, showProject3, title, description, viewProject, viewCode, tech}: any) => (
  <section className="w-264 h-364 relative">
    <div className="flex flex-row absolute top-0px h-50 w-118 border-solid border-t-2 border-x-2 border-white border-b-0 rounded-t-3xl justify-center gap-x-3 items-center">

    </div>
    <button onClick={() => setShowProject3(!showProject3)}>
      <>
        <div className="flex border-2 border-solid border-white justify-center items-center absolute cursor-pointer top-50px w-full h-264">
          <span className="bg-grey-2 h-2 w-373 -rotate-45 absolute" />
          <span className="bg-grey-2 h-2 w-373 rotate-45 absolute" />
        </div>
        <div className="flex absolute justify-center items-center bottom-0px w-full cursor-pointer h-50 border-2 border-solid border-white border-t-0 rounded-br-3xl rounded-bl-3xl text-light-grey bg-white ">
          <h4 className="text-grey text-xl font-mono select-none">{title}</h4>
        </div>
        { showProject3 ? disableBodyScroll(Document as any) : null }
      </>
    </button>
    { showProject3 ? <Project3Overlay setShowProject3={setShowProject3} showProject3={showProject3} title={title} description={description} viewProject={viewProject} viewCode={viewCode} tech={tech} /> : null }
  </section>
);

const Project3Overlay: FC<Project3Props & ProjectProps> = ({setShowProject3, showProject3, title, description, viewProject, viewCode, tech}) => (
  <div className="md:bg-dark-grey md:w-full md:fixed md:inset-0 z-50 flex justify-center">
    <section className="fixed md:static w-full h-screen top-0px left-0px md:flex-col overflow-y-scroll scrollbar-hide z-50 md:w-768">
      <div className="project-overlay-top flex flex-col justify-self-center justify-evenly md:w-768 relative">
        <div className="clear-container">
          <button className="x" onClick={() => setShowProject3(!showProject3)} />
        </div>
        <span className="w-52 h-20 flex my-9 text-white text-center text-3xl justify-center font-sans self-center">
          Shop
          </span>
        <div className="flex flex-row flex-wrap gap-x-4  gap-y-2 justify-evenly text-white">
          <a className="whitespace-nowrap" href="#">{viewProject}</a>
          <a className="whitespace-nowrap" href="#">{viewCode}</a>
        </div>
      </div>
      <div className="project-overlay-bottom flex flex-col md:w-768">
        <h1 className="text-dark-grey text-3xl font-mono uppercase mb-2">{title}</h1>
        <h3 className="text-forest-green text-2xl font-mono mt-5 mb-3 leading-10">{description}</h3>
        <p className="font-mono text-black leading-5">My next project is a work in progress. I am creating an online store which allows users to shop as guests or to create an account and receive discounts. The app will integrate Stripe's payment services so that users can purchase goods through with existing credit or debit card. </p>
        <h3 className="text-forest-green text-2xl font-mono mt-6 mb-3 leading-10">{tech}</h3>
        <ul className="inline-grid grid-cols-2 auto-cols-fr gap-x-4 list-disc list-outside">
          <li className="ml-4">ReactJS</li>
        </ul>
        <div className="flex flex-row justify-end mt-8 mb-2 gap-x-3">
          <div className="mt-2px">
            <Triangle />
          </div>
          <Circle />
          <Square />
        </div>
      </div>
    </section>
  </div>
);

const Triangle = () => <span className="flex triangle"/>;
const Circle = () => <span className="flex circle"/>;
const Square = () => <span className="flex square"/>;
const Diamond = () => <div className="diamond" />;
const Star = () => <div className="star" />;

export default Projects;