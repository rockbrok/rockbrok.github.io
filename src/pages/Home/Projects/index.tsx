import OutsideClickHandler from 'react-outside-click-handler';
import { ClassAttributes, HTMLAttributes, JSXElementConstructor, MouseEventHandler, ReactElement, ReactFragment, ReactPortal, useState } from 'react';
import { useSwipeable } from "react-swipeable";
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { FileNav, X } from '../../../components/Buttons/Nav';

const Projects = () => {
  const [show, setShow] = useState<boolean>(false);
  let [counter, setCounter] = useState<number>(0);
  const description = "Description";
  const viewProject = "see the full project";
  const viewCode = "view code";
  const tech = "Tech used";
  const p1paragraph1 = "This project developed from a suggestion that my friend Pae gave which was to recreate the Google landing page. Currently, the goal of this project is to replicate the design and function of the Google (Argentina) Search landing page and of the Sign In, Sign Up, Login, Account, and 404 pages."
  const p1paragraph2 = "I used many image assets from Google including Logos, App Icons, etc. For icons I used HeroIcons by Tailwind. There is no encryption for user information, however, in the future I would like to implement the use of JSON Web Tokens for this purpose."
  const p2paragraph1 = "This project's purpose is to serve as a demonstration of my past projects, and skills as a front-end developer. It was made using TailwindCSS, ReactJS, and TypeScript. It was designed by my partner. It was built with a mobile-first design."
  const p2paragraph2 = "The project is extremely simple and uses minimal dependencies. My blog posts are fetched using Axios and pages are switched by using a button (or swipe) which act as a counter, increasing (to the next) or decreasing (to the previous)."
  const p3paragraph1 = "My next project is currently a work in progress. I am building a React app for a mock online coffee store. User authentication will be made possible using JSON Web Tokens (JWT), and React Stripe will be used to integrate Stripe's payment services into the app. I'm using MongoDB for the back end to store user and item data. Three.js is used to render a 3D scene on the homepage."
  const p3paragraph2 = "This is very exciting for me as I've been heavily interested in user authentication and 3D rendering within the browser for some time. Stay tuned to check the progress of this project and for future projects!"

  // total projects
  const numProjects = 3;

  const increase = () => {
    setCounter(c => (c + 1) % numProjects);
  };
  const decrease = () => {
    setCounter(c => (c - 1 + numProjects) % numProjects);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => increase(),
    onSwipedRight: () => decrease()
  });

  return (
    <section className="flex flex-col container mt-28 gap-4">
      <div className="xl:flex flex-row justify-between items-center content-center xl:mb-12 xl:mt-20">
        <h2 id="projects" className="flex font-mono text-forest-green text-2xl leading-6 uppercase self-end">
          Projects
        </h2>
        <Key />
      </div>
      <section className="flex flex-wrap container justify-center md:grid md:grid-cols-2 lg:grid-cols-3 md:auto-rows-fr gap-y-20 gap-x-[50px] md:gap-x-[110px] lg:gap-x-[46px] xl:gap-x-[124px] z-40">
        <Project
          click={() => {setCounter(0); setShow(!show);}}
          title={`Google Frontend`}
          scroll={counter === 0 && show ? disableBodyScroll(Document as unknown as HTMLElement | Element) : enableBodyScroll(Document as unknown as HTMLElement | Element) }
          counterShow={counter === 0 && show}
          outsideClick={() => setShow(false)}
          handlers={handlers}
          style="bg-google-logo bg-no-repeat bg-160 bg-center"
          styleBig="bg-google-logo bg-no-repeat bg-160 bg-center my-9 self-center justify-self-center"
          projectPath="https://glennphil.github.io/Google/"
          viewProject={viewProject}
          codePath="https://github.com/glennphil/Google"
          viewCode={viewCode} 
          description={description}
          paragraph1={p1paragraph1}
          paragraph2={p1paragraph2}
          tech={tech}
          textstuff={<Project1 />}
          show={show}
          setShow={setShow}
          increase={increase}
          decrease={decrease}
        >
          <Triangle />
          <Circle />
          <Square />
        </Project>
        <Project
          click={() => {setCounter(1); setShow(!show);}}
          title={`Portfolio`}
          scroll={counter === 1 && show ? disableBodyScroll(Document as unknown as HTMLElement | Element) : null }
          counterShow={counter === 1 && show}
          outsideClick={() => setShow(false)}
          handlers={handlers}
          style="bg-portfolio-logo bg-no-repeat bg-200 bg-center"
          styleBig="bg-portfolio-logo bg-no-repeat bg-200 bg-center my-9 self-center justify-self-center"
          projectPath={undefined}
          viewProject={undefined}
          codePath="https://github.com/glennphil/glennphil.github.io"
          viewCode={viewCode} 
          description={description}
          paragraph1={p2paragraph1}
          paragraph2={p2paragraph2}
          tech={tech}
          textstuff={<Project2 />}
          show={show}
          setShow={setShow}
          increase={increase}
          decrease={decrease}
        >
          <Circle />
          <Diamond />
          <Star />
        </Project>
        <Project
          click={() => {setCounter(2); setShow(!show);}}
          title={`Coffee Shop`}
          scroll={counter === 2 && show ? disableBodyScroll(Document as unknown as HTMLElement | Element) : null }
          counterShow={counter === 2 && show}
          outsideClick={() => setShow(false)}
          handlers={handlers}
          style="bg-no-repeat bg-200 bg-center"
          styleBig="bg-no-repeat bg-200 bg-center my-9 self-center justify-self-center"
          projectPath=""
          viewProject={viewProject}
          codePath="https://github.com/glennphil/CoffeeStore"
          viewCode={viewCode} 
          description={description}
          paragraph1={p3paragraph1}
          paragraph2={p3paragraph2}
          tech={tech}
          textstuff={<Project3 />}
          show={show}
          setShow={setShow}
          increase={increase}
          decrease={decrease}
        >
          <Circle />
          <Square />
        </Project>
      </section>
    </section>
  );
};

const Key = () => (
  <section className="flex flex-row w-auto justify-end mb-4 xl:mb-0">
    <section className="flex flex-col xl:flex-row gap-x-12">
      <div className="flex flex-row my-1 items-center">
        <Triangle />
        <span className="flex font-mono text-red pl-4">CSS</span>
      </div>
      <div className="flex flex-row my-1 items-center">
        <Circle />
        <span className="flex font-mono text-blue pl-4">ReactJS</span>
      </div>
      <div className="flex flex-row my-1 items-center">
        <Square />
        <span className="flex font-mono text-gold pl-4">JavaScript</span>
      </div>
      <div className="flex flex-row my-1 items-center">
        <Diamond />
        <span className="flex font-mono text-light-green pl-4">Typescript</span>
      </div>
      <div className="flex flex-row my-1 items-center">
        <Star />
        <span className="flex font-mono text-white pl-4">Tailwind CSS</span>
      </div>
    </section>
  </section>
);

const Project = (props: { children: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; click: MouseEventHandler<HTMLButtonElement> | undefined; style: string | undefined; title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | null | undefined; scroll: any; counterShow: any; outsideClick: (e: MouseEvent) => void; handlers: JSX.IntrinsicAttributes & ClassAttributes<HTMLElement> & HTMLAttributes<HTMLElement>; styleBig: string | undefined; projectPath: string | undefined; viewProject: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; codePath: string | undefined; viewCode: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; description: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; paragraph1: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; paragraph2: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; tech: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; textstuff: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; show: boolean; setShow: any; increase: () => void; decrease: () => void; }) => (
  <section className="w-264 h-364 relative">
    <div className="flex flex-row absolute top-0px h-50 w-118 border-solid border-t-2 border-x-2 border-white border-b-0 rounded-t-3xl justify-center gap-x-3 items-center">{props.children}</div>
    <button onClick={props.click}>
      <>
        <div className="flex border-2 border-solid border-white justify-center items-center absolute cursor-pointer top-50px w-full h-264">
          <span className={props.style} style={{display: "flex", height: "56px", width: "200px"}}/>
        </div>
        <div className="flex absolute justify-center items-center bottom-0px w-full cursor-pointer h-50 border-2 border-solid border-white border-t-0 rounded-br-3xl rounded-bl-3xl text-light-grey bg-white">
          <h4 className="text-grey text-xl font-mono select-none">{props.title}</h4>
        </div>
        {props.scroll}
      </>
    </button>
    { props.counterShow ?
      <div className="z-40 fixed w-full h-full inset-0 bg-dark-grey">
        <X />
        <div className="z-40 fixed mx-auto md:w-768 inset-0 overflow-y-scroll scrollbar-default">
          <OutsideClickHandler onOutsideClick={props.outsideClick}>
              <>
              <section {...props.handlers}>
                <div className="flex flex-col bg-dark-grey h-auto justify-self-center justify-evenly md:w-768">
                  <div className="fixed flex flex-col top-0 justify-self-center h-206 w-full md:w-768 bg-dark-grey border-b-[5px] border-forest-green">
                    <span className={props.styleBig} style={{display: "flex", height: "80px", width: "200px"}}/>
                    <div className="flex flex-row flex-wrap gap-x-4  gap-y-2 justify-evenly text-white">
                      <a className="whitespace-nowrap" href={props.projectPath} target="_blank" rel="noreferrer">{props.viewProject}</a>
                      <a className="whitespace-nowrap" href={props.codePath} target="_blank" rel="noreferrer">{props.viewCode}</a>
                    </div>
                  </div>
                </div>
                <div className="h-[calc(100%-276px)] w-full top-206px fixed overflow-y-scroll bg-white md:w-768">
                  <div className="flex flex-col pt-40px pr-[16px] pb-20px pl-40px overflow-y-scroll scrollbar-hidden lg:scrollbar-default">
                    <h1 className="text-dark-grey text-3xl font-mono uppercase mb-2">{props.title}</h1>
                    <h3 className="text-forest-green text-2xl font-mono mt-5 mb-3 leading-10">{props.description}</h3>
                    <p className="font-mono text-black leading-5">{props.paragraph1}</p>
                    <p className="font-mono text-black leading-5 mt-4">{props.paragraph2}</p>
                    <h3 className="text-forest-green text-2xl font-mono mt-6 mb-3 leading-10">{props.tech}</h3>
                    {props.textstuff}
                  </div>
                </div>
              </section>
              <FileNav
                show={props.show}
                setShow={props.setShow}
                increase={props.increase}
                decrease={props.decrease}
              />
            </>
          </OutsideClickHandler>
        </div>
      </div>
    : null }
  </section>
);

const Project1 = () => (
  <>
    <div className="flex flex-row justify-start sm:gap-x-12 md:gap-x-16">
      <ul className="list-disc list-outside flex flex-col w-40 sm:w-48">
        <li className="ml-4">CSS</li>
        <li className="ml-4">ReactJS</li>
        <li className="ml-4">i18next</li>
        <li className="ml-4">React Router</li>
        <li className="ml-4">Styled Components</li>
        <li className="ml-4">Axios</li>
      </ul>
      <ul className="list-disc list-outside flex flex-col w-40 sm:w-48">
        <li className="ml-4">ESLint</li>
        <li className="ml-4">JSON Server</li>
        <li className="ml-4">React Hook Form</li>
        <li className="ml-4">React Outside Click Handler</li>
        <li className="ml-4">React Helmet</li>
      </ul>
    </div>
    <div className="flex flex-row justify-end mt-8 mb-2 gap-x-3">
      <div className="mt-2px">
        <Triangle />
      </div>
      <Circle />
      <Square />
    </div>
  </>
);

const Project2 = () => (
  <>
    <div className="flex flex-row justify-start sm:gap-x-12 md:gap-x-16">
      <ul className="list-disc list-outside flex flex-col w-40 sm:w-48">
        <li className="ml-4">Typescript</li>
        <li className="ml-4">ReactJS</li>
        <li className="ml-4">Tailwind CSS</li>
        <li className="ml-4">JSON Server</li>
        <li className="ml-4">Body Scroll Lock</li>
        <li className="ml-4">React Scroll</li>
      </ul>
      <ul className="list-disc list-outside flex flex-col w-40 sm:w-48">
        <li className="ml-4">React Swipeable</li>
        <li className="ml-4">React Router</li>
        <li className="ml-4">Axios</li>
        <li className="ml-4">Function Components</li>
      </ul>
    </div>
    <div className="flex flex-row justify-end align-items-center mt-8 mb-2 gap-x-3 mr-4">
      <Circle />
      <Diamond />
      <DarkStar />
    </div>
  </>
);

const Project3 = () => (
  <>
    <div className="flex flex-row justify-start sm:gap-x-12 md:gap-x-16">
      <ul className="list-disc list-outside flex flex-col w-40 sm:w-48">
        <li className="ml-4">ReactJS</li>
        <li className="ml-4">TypeScript</li>
        <li className="ml-4">CSS</li>
        <li className="ml-4">React Hook Form</li>
        <li className="ml-4">JSON Web Tokens (JWT)</li>
      </ul>
      <ul className="list-disc list-outside flex flex-col w-40 sm:w-48">
        <li className="ml-4">MongoDB</li>
        <li className="ml-4">Mongoose</li>
        <li className="ml-4">React Router</li>
        <li className="ml-4">React Stripe</li>
        <li className="ml-4">Three Fiber</li>
      </ul>
    </div>
    <div className="flex flex-row justify-end mt-8 mb-2 gap-x-3">
      <Circle />
      <Square />
    </div>
  </>
);

const Triangle = () => <span className="flex triangle"/>;
const Circle = () => <span className="flex circle"/>;
const Square = () => <span className="flex square"/>;
const Diamond = () => <div className="diamond" />;
const Star = () => <div className="star" />;
const DarkStar = () => (
  <div className="ml-[2px] mt-[12px]">
    <div className="star filter contrast-200 brightness-50 drop-shadow" />
  </div>
);

export default Projects;