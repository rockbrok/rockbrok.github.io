import OutsideClickHandler from "react-outside-click-handler";
import {
  ClassAttributes,
  HTMLAttributes,
  JSXElementConstructor,
  MouseEventHandler,
  ReactElement,
  ReactFragment,
  ReactNode,
  ReactPortal,
  useState,
} from "react";
import { useSwipeable } from "react-swipeable";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { FileNav, X } from "../../components/Buttons/Nav";

const Projects = () => {
  const [show, setShow] = useState<boolean>(false);
  let [counter, setCounter] = useState<number>(0);
  const description = "Description";
  const viewProject = "see the full project";
  const viewCode = "view code";
  const tech = "Tech used";
  const p0paragraph1 =
    "The purpose of this project was to experiment and create a fun, and interactive app using the 3D JavaScript and physics libraries of Three.js and Cannon.js.";
  const p0paragraph2 =
    "3DSearch currently works with the English alphabet and Arabic numerals with the possibility to support other languages in the near future. I intend to add functionality for custom settings, and an increase in modularity.";
  const p1paragraph1 =
    "This project developed from a suggestion that my friend Pae gave which was to recreate the Google landing page. Currently, the goal of this project is to replicate the design and function of the Google (Argentina) Search landing page and of the Sign In, Sign Up, Login, Account, and 404 pages.";
  const p1paragraph2 =
    "I used many image assets from Google including Logos, App Icons, etc. For icons I used HeroIcons by Tailwind. There is no encryption for user information, however, in the future I would like to implement the use of JSON Web Tokens for this purpose.";
  const p2paragraph1 =
    "This project was created using React.js, Leaflet.js, JavaScript, Python Flask, Geocoding API, i18next, among other React hooks and Python libraries. The purpose of this project was to experiment and create an app allowing users to share audio snippets of rain sounds from around the world and to illustrate the upload location by using a map interface. Rainmap has been translated into several languages and there is a possibility of new features to be released in the near future.";
  const p2paragraph2 = "";

  // total projects
  const numProjects = 3;

  const increase = () => {
    setCounter((c) => (c + 1) % numProjects);
  };
  const decrease = () => {
    setCounter((c) => (c - 1 + numProjects) % numProjects);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => increase(),
    onSwipedRight: () => decrease(),
  });

  return (
    <section className="flex flex-col container mt-28 gap-4">
      <div className="xl:flex flex-row justify-between items-center content-center xl:mb-12 xl:mt-20">
        <h2
          id="projects"
          className="flex font-mono text-forest-green text-2xl leading-6 uppercase self-end"
        >
          Projects
        </h2>
        <Key />
      </div>
      <section className="flex flex-wrap container justify-center md:grid md:grid-cols-2 lg:grid-cols-3 md:auto-rows-fr gap-y-20 gap-x-[50px] md:gap-x-[110px] lg:gap-x-[46px] xl:gap-x-[124px] z-40">
        <Project
          click={() => {
            setCounter(0);
            setShow(!show);
          }}
          title={`3DSearch`}
          scroll={
            counter === 0 && show
              ? disableBodyScroll(Document as unknown as HTMLElement | Element)
              : enableBodyScroll(Document as unknown as HTMLElement | Element)
          }
          counterShow={counter === 0 && show}
          outsideClick={() => setShow(false)}
          handlers={handlers}
          style="bg-3d-logo bg-no-repeat bg-46 bg-center"
          span=""
          styleBig="bg-3d-logo bg-no-repeat bg-46 bg-center my-9 self-center justify-self-center"
          projectPath="https://3dsearch.github.io/3DSearch/"
          viewProject={viewProject}
          codePath="https://github.com/3DSearch/3DSearch"
          viewCode={viewCode}
          description={description}
          paragraph1={p0paragraph1}
          paragraph2={p0paragraph2}
          tech={tech}
          text0="React.js"
          text1="Tailwind CSS"
          text2="Three.js"
          text3="Cannon.js"
          text4="Use-gesture/react"
          text5="React-three Cannon"
          text6="React-three Drei"
          text7="React-three Fiber"
          text8="TypeScript"
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
          click={() => {
            setCounter(1);
            setShow(!show);
          }}
          title={`Google Clone`}
          scroll={
            counter === 1 && show
              ? disableBodyScroll(Document as unknown as HTMLElement | Element)
              : null
          }
          counterShow={counter === 1 && show}
          outsideClick={() => setShow(false)}
          handlers={handlers}
          style="flex flex-col items-center justify-center text-4xl text-gold text-center text-white font-sans tracking-wide"
          span="Google"
          styleBig="flex flex-col items-center justify-center text-4xl text-gold text-center text-white font-sans tracking-wide my-9 mx-auto"
          projectPath="https://rockbrok.github.io/Google-Clone/"
          viewProject={viewProject}
          codePath="https://github.com/rockbrok/Google-Clone/"
          viewCode={viewCode}
          description={description}
          paragraph1={p1paragraph1}
          paragraph2={p1paragraph2}
          tech={tech}
          text0="CSS"
          text1="React.js"
          text2="i18next"
          text3="React Hook Form"
          text4="React Router"
          text5="React Outside Click Handler"
          text6="Styled Components"
          text7="React Helmet"
          text8="Axios"
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
          click={() => {
            setCounter(2);
            setShow(!show);
          }}
          title={`Rainmap`}
          scroll={
            counter === 2 && show
              ? disableBodyScroll(Document as unknown as HTMLElement | Element)
              : null
          }
          counterShow={counter === 2 && show}
          outsideClick={() => setShow(false)}
          handlers={handlers}
          style="flex flex-col items-center justify-center text-4xl text-center text-white font-sans tracking-wide"
          span="Rainmap"
          styleBig="flex flex-col items-center justify-center text-4xl text-center text-white font-sans tracking-wide my-9 mx-auto"
          projectPath="https://rockbrok.github.io/Rainmap/"
          viewProject={viewProject}
          codePath="https://github.com/rockbrok/Rainmap/"
          viewCode={viewCode}
          description={description}
          paragraph1={p2paragraph1}
          paragraph2={p2paragraph2}
          tech={tech}
          text0="React.js"
          text1="Python Flask"
          text2="i18next"
          text3="React Router"
          text4="TailwindCSS"
          text5="Geocoding API"
          text6="SQLite"
          text7="SQLAlchemy"
          text8="React Leaflet"
          show={show}
          setShow={setShow}
          increase={increase}
          decrease={decrease}
        >
          <Circle />
          <Square />
          <Star />
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
        <span className="flex font-mono text-blue pl-4">React.js</span>
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

const Project = (props: {
  span: ReactNode;
  children:
  | string
  | number
  | boolean
  | ReactFragment
  | ReactPortal
  | ReactElement<any, string | JSXElementConstructor<any>>
  | null
  | undefined;
  click: MouseEventHandler<HTMLButtonElement> | undefined;
  style: string | undefined;
  title:
  | string
  | number
  | boolean
  | ReactFragment
  | ReactElement<any, string | JSXElementConstructor<any>>
  | null
  | undefined;
  scroll: any;
  counterShow: any;
  outsideClick: (e: MouseEvent) => void;
  handlers: JSX.IntrinsicAttributes &
  ClassAttributes<HTMLElement> &
  HTMLAttributes<HTMLElement>;
  styleBig: string | undefined;
  projectPath: string | undefined;
  viewProject:
  | string
  | number
  | boolean
  | ReactFragment
  | ReactPortal
  | ReactElement<any, string | JSXElementConstructor<any>>
  | null
  | undefined;
  codePath: string | undefined;
  viewCode:
  | string
  | number
  | boolean
  | ReactFragment
  | ReactPortal
  | ReactElement<any, string | JSXElementConstructor<any>>
  | null
  | undefined;
  description:
  | string
  | number
  | boolean
  | ReactFragment
  | ReactPortal
  | ReactElement<any, string | JSXElementConstructor<any>>
  | null
  | undefined;
  paragraph1:
  | string
  | number
  | boolean
  | ReactFragment
  | ReactPortal
  | ReactElement<any, string | JSXElementConstructor<any>>
  | null
  | undefined;
  paragraph2:
  | string
  | number
  | boolean
  | ReactFragment
  | ReactPortal
  | ReactElement<any, string | JSXElementConstructor<any>>
  | null
  | undefined;
  tech:
  | string
  | number
  | boolean
  | ReactFragment
  | ReactPortal
  | ReactElement<any, string | JSXElementConstructor<any>>
  | null
  | undefined;
  text0:
  | string
  | number
  | boolean
  | ReactElement<any, string | JSXElementConstructor<any>>
  | ReactFragment
  | ReactPortal
  | null
  | undefined;
  text2:
  | string
  | number
  | boolean
  | ReactElement<any, string | JSXElementConstructor<any>>
  | ReactFragment
  | ReactPortal
  | null
  | undefined;
  text4:
  | string
  | number
  | boolean
  | ReactElement<any, string | JSXElementConstructor<any>>
  | ReactFragment
  | ReactPortal
  | null
  | undefined;
  text6:
  | string
  | number
  | boolean
  | ReactElement<any, string | JSXElementConstructor<any>>
  | ReactFragment
  | ReactPortal
  | null
  | undefined;
  text8:
  | string
  | number
  | boolean
  | ReactElement<any, string | JSXElementConstructor<any>>
  | ReactFragment
  | ReactPortal
  | null
  | undefined;
  text1:
  | string
  | number
  | boolean
  | ReactElement<any, string | JSXElementConstructor<any>>
  | ReactFragment
  | ReactPortal
  | null
  | undefined;
  text3:
  | string
  | number
  | boolean
  | ReactElement<any, string | JSXElementConstructor<any>>
  | ReactFragment
  | ReactPortal
  | null
  | undefined;
  text5:
  | string
  | number
  | boolean
  | ReactElement<any, string | JSXElementConstructor<any>>
  | ReactFragment
  | ReactPortal
  | null
  | undefined;
  text7:
  | string
  | number
  | boolean
  | ReactElement<any, string | JSXElementConstructor<any>>
  | ReactFragment
  | ReactPortal
  | null
  | undefined;
  show: boolean;
  setShow: any;
  increase: () => void;
  decrease: () => void;
}) => (
  <section className="w-264 h-364 relative">
    <div className="flex flex-row absolute top-0px h-50 w-118 border-solid border-t-2 border-x-2 border-white border-b-0 rounded-t-3xl justify-center gap-x-3 items-center">
      {props.children}
    </div>
    <button onClick={props.click}>
      <>
        <div className="flex border-2 border-solid border-white justify-center items-center absolute cursor-pointer top-50px w-full h-264">
          <span
            className={props.style}
            style={{ display: "flex", height: "56px", width: "200px" }}
          >
            {props.span}
          </span>
        </div>
        <div className="flex absolute justify-center items-center bottom-0px w-full cursor-pointer h-50 border-2 border-solid border-white border-t-0 rounded-br-3xl rounded-bl-3xl text-light-grey bg-white">
          <h4 className="text-grey text-xl font-mono select-none">
            {props.title}
          </h4>
        </div>
        {props.scroll}
      </>
    </button>
    {props.counterShow ? (
      <div className="z-40 fixed w-full h-full inset-0 bg-dark-grey">
        <X />
        <div className="z-40 fixed mx-auto md:w-768 inset-0 overflow-y-scroll scrollbar-default">
          <OutsideClickHandler onOutsideClick={props.outsideClick}>
            <>
              <section {...props.handlers}>
                <div className="flex flex-col bg-dark-grey h-auto justify-self-center justify-evenly md:w-768">
                  <div className="fixed flex flex-col top-0 justify-self-center h-206 w-full md:w-768 bg-dark-grey border-b-[5px] border-forest-green">
                    <span
                      className={props.styleBig}
                      style={{
                        display: "flex",
                        height: "80px",
                        width: "200px",
                      }}
                    >
                      {props.span}
                    </span>
                    <div className="flex flex-row flex-wrap gap-x-4  gap-y-2 justify-evenly text-white">
                      <a
                        className="whitespace-nowrap"
                        href={props.projectPath}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {props.viewProject}
                      </a>
                      <a
                        className="whitespace-nowrap"
                        href={props.codePath}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {props.viewCode}
                      </a>
                    </div>
                  </div>
                </div>
                <div className="h-[calc(100%-276px)] w-full top-206px fixed overflow-y-scroll bg-white md:w-768">
                  <div className="flex flex-col pt-40px pr-[16px] pb-20px pl-40px overflow-y-scroll scrollbar-hidden lg:scrollbar-default">
                    <h1 className="text-dark-grey text-3xl font-mono uppercase mb-2">
                      {props.title}
                    </h1>
                    <h3 className="text-forest-green text-2xl font-mono mt-5 mb-3 leading-10">
                      {props.description}
                    </h3>
                    <p className="font-mono text-black leading-5">
                      {props.paragraph1}
                    </p>
                    <p className="font-mono text-black leading-5 mt-4">
                      {props.paragraph2}
                    </p>
                    <h3 className="text-forest-green text-2xl font-mono mt-6 mb-3 leading-10">
                      {props.tech}
                    </h3>
                    <div className="flex flex-row justify-start sm:gap-x-12 md:gap-x-16 mb-2">
                      <ul className="list-disc list-outside flex flex-col w-40 sm:w-48">
                        <ListItem>{props.text0}</ListItem>
                        <ListItem>{props.text2}</ListItem>
                        <ListItem>{props.text4}</ListItem>
                        <ListItem>{props.text6}</ListItem>
                        <ListItem>{props.text8}</ListItem>
                      </ul>
                      <ul className="list-disc list-outside flex flex-col w-40 sm:w-48">
                        <ListItem>{props.text1}</ListItem>
                        <ListItem>{props.text3}</ListItem>
                        <ListItem>{props.text5}</ListItem>
                        <ListItem>{props.text7}</ListItem>
                      </ul>
                    </div>
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
    ) : null}
  </section>
);

const ListItem = (props: {
  children:
  | string
  | number
  | boolean
  | ReactFragment
  | ReactPortal
  | ReactElement<any, string | JSXElementConstructor<any>>
  | null
  | undefined;
}) => <li className="ml-4">{props.children}</li>;

const Triangle = () => <span className="flex triangle" />;
const Circle = () => <span className="flex circle" />;
const Square = () => <span className="flex square" />;
const Diamond = () => <div className="diamond" />;
const Star = () => <div className="star" />;

export default Projects;
