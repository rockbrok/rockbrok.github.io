import { FC } from 'react';

interface HeadingProps {
  heading: string;
}
interface SubHeadingProps {
  subheading: string;
}

const Header = () => {
  return (
    <header className="flex flex-col mx-auto h-screen container">
      <NavBar/>
      <Heading 
        heading={`Hi, I'm Glenn Phillips! \n`} 
      />
      <div className="flex flex-col flex-wrap h-full w-full container">
        <div className="flex justify-start w-full container">
          <SubHeading 
            subheading={`I'm a front-end developer \n from the US.`} 
          />
          <SocialButtons/>
        </div>
        <Profile />
      </div>
    </header>
  )
}

const NavBar = () => (
  <section className="flex justify-end">
    <NavMobile/>
    <Navigation/>
  </section>
);

const Navigation = () => (
  <nav className="flex-row container justify-between px-5 text-sm max-w-lg hidden md:flex">
    <a className="text-gold link-underline-gold" href="resume.pdf" download>
      download my resume
    </a>
    <a className="text-forest-green link-underline" href="#projects">
      portfolio
    </a>
    <a className="text-forest-green link-underline" href="#blog">
      blog
    </a>
    <a className="text-forest-green link-underline" href="#contact">
      contact
    </a>
  </nav>
);

const NavMobile = () => (
  <nav className="flex flex-row container justify-end justify-between md:hidden">
    <div className="flex flex-row items-center gap-x-2">
      <a className="bg-github-icon bg-no-repeat bg-46 bg-center h-10 w-10" href="https://github.com/paq000" target="_blank" rel="noreferrer" />
      <a className="bg-linkedin-icon bg-no-repeat bg-46 bg-center h-10 w-10" href="" />
      <a className="bg-whatsapp-icon bg-no-repeat bg-46 bg-center h-10 w-10"  href="" />
      <a className="bg-email-icon bg-no-repeat bg-46 bg-center h-10 w-10" href="#contact" />
    </div>
    <a className="bg-download-icon bg-no-repeat bg-46 bg-center w-12 h-12 shrink-0 ml-4 gold-filter" href="resume.pdf" download />
  </nav>
);

const SocialButtons = () => (
  <div className="hidden flex-row w-min gap-x-6 flex-start md:flex md:my-10">
    <a href="">
      <div className="flex items-center justify-center rounded-full border-2 bg-transparent border-white w-11 h-11">
        <div className="flex bg-github-icon bg-no-repeat bg-46 bg-center h-8 w-8"/>
      </div>
    </a>
    <a href="">
      <div className="flex items-center justify-center rounded-full border-2 bg-transparent border-white w-11 h-11">
        <div className="flex bg-linkedin-icon bg-no-repeat bg-46 bg-center h-8 w-8"/>
      </div>
    </a>
    <a href="">
      <div className="flex items-center justify-center rounded-full border-2 bg-transparent border-white w-11 h-11">
        <div className="flex bg-whatsapp-icon bg-no-repeat bg-46 bg-center h-8 w-8"/>
      </div>
    </a>
    <a href="">
      <div className="flex items-center justify-center rounded-full border-2 bg-transparent border-white w-11 h-11">
        <div className="flex bg-email-icon bg-no-repeat bg-46 bg-center h-8 w-8"/>
      </div>
    </a>
  </div>
);

const Profile = () => (
  <div className="flex profile-pic overflow-hidden" />
);

const Heading: FC<HeadingProps> = ({heading}) => (
  <div className="flex flex-col flex-start my-5 md:mt-10">
    <h1 className="text-white font-sans text-5xl display-linebreak uppercase">{heading}</h1>
  </div>
);

const SubHeading: FC<SubHeadingProps> = ({ subheading }) => (
  <h3 className="flex flex-start text-light-grey font-normal font-mono leading-6 text-2xl display-linebreak">
    {subheading}
  </h3>
);

export default Header;
