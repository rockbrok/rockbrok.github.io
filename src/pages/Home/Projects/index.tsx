import OutsideClickHandler from 'react-outside-click-handler';
import { FC, useState } from 'react';
import { useSwipeable } from "react-swipeable";
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { Close } from '../../../components/Buttons/Close';
import { RightArrow, LeftArrow } from '../../../components/Buttons/Arrows';

interface ProjectProps {
  description: string;
  viewProject: string;
  viewCode: string;
  tech: string;
  title: string;
  handlers: object;
};
interface useStateProps {
  show: boolean;
  setShow: any;
};
interface CounterProps {
  setCounter: any;
  counter: number;
};
interface ArrowProps {
  increase:() => void;
  decrease:() => void;
};

const Projects = () => {
  const [show, setShow] = useState<boolean>(false);
  const description = "Description";
  const viewProject = "see the full project";
  const viewCode = "view code";
  const tech = "Tech used";

  // total projects
  const numProjects = 3;

  let [counter, setCounter] = useState<number>(0);

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
        <Project1
          title={`Google Frontend`}
          description={description}
          viewProject={viewProject}
          viewCode={viewCode}
          tech={tech}
          increase={increase}
          decrease={decrease}
          counter={counter}
          setCounter={setCounter}
          show={show}
          setShow={setShow}
          handlers={handlers}
        />
        <Project2
          title={`Portfolio`}
          description={description}
          viewProject={viewProject}
          viewCode={viewCode}
          tech={tech}
          increase={increase}
          decrease={decrease}
          counter={counter}
          setCounter={setCounter}
          show={show}
          setShow={setShow}
          handlers={handlers}
        />
        <Project3
          title={`Coffee Shop`}
          description={description}
          viewProject={viewProject}
          viewCode={viewCode}
          tech={tech}
          increase={increase}
          decrease={decrease}
          counter={counter}
          setCounter={setCounter}
          show={show}
          setShow={setShow}
          handlers={handlers}
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

const Project1:FC <CounterProps & ArrowProps & ProjectProps & useStateProps> = (obj: {handlers:any; show:boolean; setShow:any; counter:number; setCounter:any; decrease:() => void; increase:() => void; title:string; description:string; viewProject:string; viewCode:string; tech:string}) => (
  <section className="w-264 h-364 relative">
    <div className="flex flex-row absolute top-0px h-50 w-118 border-solid border-t-2 border-x-2 border-white border-b-0 rounded-t-3xl justify-center gap-x-3 items-center">
      <Triangle />
      <Circle />
      <Square />
    </div>
    <button onClick={() => {obj.setCounter(0); obj.setShow(!obj.show);}}>
      <>
        <div className="flex border-2 border-solid border-white justify-center items-center absolute cursor-pointer top-50px w-full h-264">
          <span className="bg-google-logo bg-no-repeat bg-200 bg-center w-52 h-20 flex" />
        </div>
        <div className="flex absolute justify-center items-center bottom-0px w-full cursor-pointer h-50 border-2 border-solid border-white border-t-0 rounded-br-3xl rounded-bl-3xl text-light-grey bg-white">
          <h4 className="text-grey text-xl font-mono select-none">{obj.title}</h4>
        </div>
        { obj.counter === 0 && obj.show ? disableBodyScroll(Document as unknown as HTMLElement | Element) : enableBodyScroll(Document as unknown as HTMLElement | Element) }
      </>
    </button>
    { obj.counter === 0 && obj.show ?
      <div className="z-40 fixed w-full h-full inset-0 bg-dark-grey">
        <div className="z-40 fixed mx-auto md:w-768 inset-0 overflow-y-scroll scrollbar-default">
          <OutsideClickHandler onOutsideClick={() => obj.setShow(false)}>
              <>
                <Project1Big 
                  title={obj.title}
                  description={obj.description}
                  viewProject={obj.viewProject}
                  viewCode={obj.viewCode}
                  tech={obj.tech}
                  handlers={obj.handlers}
                /> 
                <ProjectButtons
                  show={obj.show}
                  setShow={obj.setShow}
                  increase={obj.increase}
                  decrease={obj.decrease}
                />
              </>
          </OutsideClickHandler>
        </div>
      </div>
    : null }
  </section>
);

const Project1Big: FC<ProjectProps> = (obj: {handlers:object; title:string; description:string; viewProject:string; viewCode:string; tech:string}) => (
  <section {...obj.handlers}>
    <div className="flex flex-col bg-dark-grey h-auto justify-self-center justify-evenly md:w-768">
      <div className="fixed flex flex-col top-0 justify-self-center h-206 w-full md:w-768 bg-dark-grey border-b-[5px] border-forest-green">
        <span className="bg-google-logo bg-no-repeat bg-200 bg-center w-52 h-20 flex my-9 self-center justify-self-center" />
        <div className="flex flex-row flex-wrap gap-x-4  gap-y-2 justify-evenly text-white">
          <a className="whitespace-nowrap" href="https://glennphil.github.io/Google/" target="_blank" rel="noreferrer" >
            {obj.viewProject}
          </a>
          <a className="whitespace-nowrap" href="https://github.com/glennphil/Google" target="_blank" rel="noreferrer" >
            {obj.viewCode}
          </a>
        </div>
      </div>
    </div>
    <div className="h-[calc(100%-276px)] top-206px fixed overflow-y-scroll bg-white md:w-768">
      <div className="flex flex-col pt-40px pr-40px pb-20px pl-40px overflow-y-scroll scrollbar-hidden lg:scrollbar-default">
        <h1 className="text-dark-grey text-3xl font-mono uppercase mb-2">{obj.title}</h1>
        <h3 className="text-forest-green text-2xl font-mono mt-5 mb-3 leading-10">{obj.description}</h3>
        <p className="font-mono text-black leading-5">This project developed from a suggestion that my friend Pae gave which was to recreate the Google landing page. Currently, the goal of this project is to replicate the design and function of the Google (Argentina) Search landing page and of the Sign In, Sign Up, Login, Account, and 404 pages.</p>
        <p className="font-mono text-black leading-5 mt-4">I used many image assets from Google including Logos, App Icons, etc. For icons I used HeroIcons by Tailwind. There is no encryption for user information, however, in the future I would like to implement the use of JSON Web Tokens for this purpose.</p>
        <h3 className="text-forest-green text-2xl font-mono mt-6 mb-3 leading-10">{obj.tech}</h3>
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
    </div>
  </section>
);

const Project2: FC<ProjectProps & CounterProps & ArrowProps & useStateProps> = (obj: {handlers:object; show:boolean; setShow:any; decrease:() => void; increase:() => void; setCounter:any; counter:number; title:string; description:string; viewProject:string; viewCode:string; tech:string}) => (
  <section className="w-264 h-364 relative">
    <div className="flex flex-row absolute top-0px h-50 w-118 border-solid border-t-2 border-x-2 border-white border-b-0 rounded-t-3xl justify-center gap-x-3 items-center">
      <Circle />
      <Diamond />
      <Star />
    </div>
    <button onClick={() => {obj.setCounter(1); obj.setShow(!obj.show);}}>
      <>
        <div className="flex border-2 border-solid border-white justify-center items-center absolute cursor-pointer top-50px w-full h-264">
          <span className="bg-portfolio-logo bg-no-repeat bg-200 bg-center w-52 h-20 flex" />
        </div>
        <div className="flex absolute justify-center items-center bottom-0px w-full cursor-pointer h-50 border-2 border-solid border-white border-t-0 rounded-br-3xl rounded-bl-3xl text-light-grey bg-white ">
          <h4 className="text-grey text-xl font-mono select-none">{obj.title}</h4>
        </div>
        { obj.counter === 1 && obj.show ? disableBodyScroll(Document as unknown as HTMLElement | Element) : null }
      </>
    </button>
    { obj.counter === 1 && obj.show ? 
      <div className="z-40 fixed w-full h-full inset-0 bg-dark-grey">
        <div className="z-40 fixed mx-auto md:w-768 inset-0 overflow-y-scroll scrollbar-default">
          <OutsideClickHandler onOutsideClick={() => obj.setShow(false)}>
            <>
              <Project2Big 
                title={obj.title}
                description={obj.description}
                viewProject={obj.viewProject}
                viewCode={obj.viewCode}
                tech={obj.tech}
                handlers={obj.handlers}
              /> 
              <ProjectButtons
                show={obj.show}
                setShow={obj.setShow}
                increase={obj.increase}
                decrease={obj.decrease}
              />
            </>
          </OutsideClickHandler>
        </div>
      </div>
    : null }
  </section>
);

const Project2Big: FC<ProjectProps> = (obj: {handlers:object; title:string; description:string; viewProject:string; viewCode:string; tech:string}) => (
  <section {...obj.handlers}>
    <div className="flex flex-col bg-dark-grey h-auto justify-self-center justify-evenly md:w-768">
      <div className="fixed flex flex-col top-0 justify-self-center h-206 w-full md:w-768 bg-dark-grey border-b-[5px] border-forest-green">
        <span className="bg-portfolio-logo bg-no-repeat bg-200 bg-center w-52 h-20 flex my-9 self-center justify-self-center" />
        <div className="flex flex-row flex-wrap gap-x-4  gap-y-2 justify-evenly text-white">
          <a className="whitespace-nowrap" href="https://github.com/glennphil/glennphil.github.io" target="_blank" rel="noreferrer">
            {obj.viewCode}
          </a>
        </div>
      </div>
    </div>
    <div className="h-[calc(100%-276px)] top-206px fixed overflow-y-scroll bg-white md:w-768">
      <div className="flex flex-col pt-40px pr-40px pb-20px pl-40px overflow-y-scroll scrollbar-hidden lg:scrollbar-default">
        <h1 className="text-dark-grey text-3xl font-mono uppercase mb-2">{obj.title}</h1>
        <h3 className="text-forest-green text-2xl font-mono mt-5 mb-3 leading-10">{obj.description}</h3>
        <p className="font-mono text-black leading-5">This project's purpose is to serve as a demonstration of my past projects, and skills as a front-end developer. It was made using TailwindCSS, ReactJS, and TypeScript. It was designed by my partner. It was built with a mobile-first design.</p>
        <p className="font-mono text-black leading-5 mt-4">The project is extremely simple and uses minimal dependencies. My blog posts are fetched using Axios and pages are switched by using a button (or swipe) which act as a counter, increasing (to the next) or decreasing (to the previous).</p>
        <h3 className="text-forest-green text-2xl font-mono mt-6 mb-3 leading-10">{obj.tech}</h3>
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
          <li className="ml-4">React Scroll</li>
        </ul>
        <div className="flex flex-row justify-end mt-8 mb-2 gap-x-3">
          <div className="mt-2px">
            <Triangle />
          </div>
          <Circle />
          <Square />
        </div>
      </div>
    </div>
  </section>
);

const Project3: FC<ProjectProps & CounterProps & ArrowProps & useStateProps> = (obj: {handlers:object; show:boolean; setShow:any; decrease:() => void; increase:() => void; setCounter:any; counter:number; title:string; description:string; viewProject:string; viewCode:string; tech:string}) => (
  <section className="w-264 h-364 relative">
    <div className="flex flex-row absolute top-0px h-50 w-118 border-solid border-t-2 border-x-2 border-white border-b-0 rounded-t-3xl justify-center gap-x-3 items-center">

    </div>
    <button onClick={() => {obj.setCounter(2); obj.setShow(!obj.show);}}>
      <>
        <div className="flex border-2 border-solid border-white justify-center items-center absolute cursor-pointer top-50px w-full h-264">
          <span className="bg-grey-2 h-2 w-373 -rotate-45 absolute" />
          <span className="bg-grey-2 h-2 w-373 rotate-45 absolute" />
        </div>
        <div className="flex absolute justify-center items-center bottom-0px w-full cursor-pointer h-50 border-2 border-solid border-white border-t-0 rounded-br-3xl rounded-bl-3xl text-light-grey bg-white ">
          <h4 className="text-grey text-xl font-mono select-none">{obj.title}</h4>
        </div>
        { obj.counter === 2 && obj.show ? disableBodyScroll(Document as unknown as HTMLElement | Element) : null }
      </>
    </button>
    { obj.counter === 2 && obj.show ? 
      <div className="z-40 fixed w-full h-full inset-0 bg-dark-grey">
        <div className="z-40 fixed mx-auto md:w-768 inset-0 overflow-y-scroll scrollbar-default">
          <OutsideClickHandler onOutsideClick={() => obj.setShow(false)}>
              <>
                <Project3Big 
                  title={obj.title}
                  description={obj.description}
                  viewProject={obj.viewProject}
                  viewCode={obj.viewCode}
                  tech={obj.tech}
                  handlers={obj.handlers}
                /> 
                <ProjectButtons
                  show={obj.show}
                  setShow={obj.setShow}
                  increase={obj.increase}
                  decrease={obj.decrease}
                />
              </>
          </OutsideClickHandler>
        </div>
      </div>
    : null }
  </section>
);

const Project3Big: FC<ProjectProps> = (obj: {handlers:object; title:string; description:string; viewProject:string; viewCode:string; tech:string}) => (
  <section {...obj.handlers}>
    <div className="flex flex-col bg-dark-grey h-auto justify-self-center justify-evenly md:w-768">
      <div className="fixed flex flex-col top-0 justify-self-center h-206 w-full md:w-768 bg-dark-grey border-b-[5px] border-forest-green">
        <span className="w-52 h-20 flex my-9 text-white text-center text-3xl justify-center font-sans self-center">
          Shop
        </span>
        <div className="flex flex-row flex-wrap gap-x-4  gap-y-2 justify-evenly text-white">
          <a className="whitespace-nowrap" href="#">{obj.viewProject}</a>
          <a className="whitespace-nowrap" href="https://github.com/glennphil/CoffeeStore" target="_blank" rel="noreferrer">{obj.viewCode}</a>
        </div>
      </div>
    </div>
    <div className="h-[calc(100%-276px)] top-206px fixed overflow-y-scroll bg-white md:w-768">
      <div className="flex flex-col pt-40px pr-40px pb-20px pl-40px overflow-y-scroll scrollbar-hidden lg:scrollbar-default">
        <h1 className="text-dark-grey text-3xl font-mono uppercase mb-2">{obj.title}</h1>
        <h3 className="text-forest-green text-2xl font-mono mt-5 mb-3 leading-10">{obj.description}</h3>
        <p className="font-mono text-black leading-5">My next project is a work in progress. I am creating an online store which allows users to shop as guests or to create an account and receive discounts. The app will integrate Stripe's payment services so that users can purchase goods through with existing credit or debit card. </p>
        <h3 className="text-forest-green text-2xl font-mono mt-6 mb-3 leading-10">{obj.tech}</h3>
        <ul className="inline-grid grid-cols-2 auto-cols-fr gap-x-4 list-disc list-outside">
          <li className="ml-4">ReactJS</li>
          <li className="ml-4">TypeScript</li>
          <li className="ml-4">CSS</li>
          <li className="ml-4">MongoDB</li>
          <li className="ml-4">Mongoose</li>
          <li className="ml-4">React Router</li>
        </ul>
        <div className="flex flex-row justify-end mt-8 mb-2 gap-x-3">
          <div className="mt-2px">
            <Triangle />
          </div>
          <Circle />
          <Square />
        </div>
      </div>
    </div>
  </section>
);

const ProjectButtons = (obj: {decrease:() => void; increase:() => void; show:boolean; setShow:any}) => (
  <div className="md:flex justify-center fixed bottom-0 bg-white w-full md:w-768 mx-auto">
    <div className="h-60 mt-0 mb-10px mx-45px border-t-2 border-solid border-light-green w-[calc(100%-90px)] flex flex-row items-center justify-evenly md:w-768">
      <LeftArrow decrease={obj.decrease} />
      <Close show={obj.show} setShow={obj.setShow} />
      <RightArrow increase={obj.increase} />
    </div>
  </div>
);

const Triangle = () => <span className="flex triangle"/>;
const Circle = () => <span className="flex circle"/>;
const Square = () => <span className="flex square"/>;
const Diamond = () => <div className="diamond" />;
const Star = () => <div className="star" />;

export default Projects;