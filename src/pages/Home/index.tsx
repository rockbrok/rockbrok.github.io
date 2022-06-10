import Logo from '../../components/logo';
import Blog from '../../components/Blog';
import Navigation from '../../components/navigation';
import NavMobile from '../../components/NavMobile';
import SocialButtons from '../../components/socialbuttons';
import { Heading, SubHeading } from '../../components/Header';

export default function Home() {
  return (
    <section className="flex flex-col container px-7 py-7 mx-auto">
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
        <Heading
          heading={`Hi, I'm Glenn Phillips! \n`}
        />
        <div className="flex flex-row flex-wrap h-full w-full container">
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
        </section>
        <section>
          <h2 id="blog" className="flex font-mono text-forest-green leading-10 text-2xl uppercase">
            Blog
          </h2>
          <Blog />
        </section>
        <section>
          <h2 id="contact" className="flex font-sans font-bold text-white leading-10 text-3xl">
            Thank you!
          </h2>
          <span className="flex font-mono text-light-grey text-lg">
            contact me: glennp167@gmail.com
          </span>
        </section>
      </main>
    </section>
  );
}