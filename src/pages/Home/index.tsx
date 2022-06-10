import Logo from '../../components/logo';
import Blog from '../../components/Blog';
import Projects from '../../components/Projects';
import Navigation from '../../components/navigation';
import NavMobile from '../../components/NavMobile';
import SocialButtons from '../../components/socialbuttons';
import { Heading, HeadingUpperCase, SubHeading } from '../../components/Header';

export default function Home() {
  return (
    <section className="flex flex-col container mx-auto">
      <section className="flex flex-col mx-auto h-screen container">
        <header className="flex justify-end">
          <NavMobile />
          <Navigation
            link1='download my resume'
            link2='portfolio'
            link3='blog'
            link4='contact'
          />
        </header>
        <HeadingUpperCase
          headinguppercase={`Hi, I'm Glenn Phillips! \n`}
        />
        <div className="flex flex-col flex-wrap h-full w-full container">
          <div className="flex flex-col justify-start grow min-w-fit">
            <SubHeading 
              subheading={`I'm a front-end developer \n from the US.`}
            />
            <SocialButtons/>
          </div>
          <Logo />
        </div>
      </section>
      <main>
        <section>
          <h2 id="projects" className="flex font-mono text-forest-green leading-10 text-2xl uppercase">
            Projects
          </h2>
          <span className="flex triangle"/>
          <span className="flex font-mono text-blue">CSS</span>
          <span className="flex circle"/>
          <span className="flex font-mono text-red">React</span>
          <span className="flex square"/>
          <span className="flex font-mono text-gold">JavaScript</span>
          <Projects 
            project1={`Google Frontend`}
            project2={`Portfolio`}
          />
        </section>
        <section>
          <h2 id="blog" className="flex font-mono text-forest-green leading-10 text-2xl uppercase">
            Blog
          </h2>
          <Blog />
        </section>
        <section>
          <Heading 
              heading={`Thank you!`}
            />
          <SubHeading 
              subheading={`contact me: glennp167@gmail.com`}
            />
        </section>
      </main>
    </section>
  );
}