import Blog from '../../components/Blog';
import Projects from '../../components/Projects';
import Navigation from '../../components/Nav';
import NavMobile from '../../components/NavMobile';
import SocialButtons from '../../components/Social';
import { Heading, HeadingUpperCase, SubHeading } from '../../components/Header';

export default function Home() {
  return (
    <section className="flex flex-col container mx-auto">
      <header className="flex flex-col mx-auto h-screen container">
        <section className="flex justify-end">
          <NavMobile />
          <Navigation
            link1='download my resume'
            link2='portfolio'
            link3='blog'
            link4='contact'
          />
        </section>
        <HeadingUpperCase headinguppercase={`Hi, I'm Glenn Phillips! \n`} />
        <div className="flex flex-col flex-wrap h-full w-full container">
          <div className="flex flex-col justify-start grow min-w-fit">
            <SubHeading subheading={`I'm a front-end developer \n from the US.`} />
            <SocialButtons/>
          </div>
          <Profile />
        </div>
      </header>
      <main className="flex flex-col container gap-8 my-8">
        <Projects 

          project2={`Portfolio`}
        />
        <Blog />
        <>
          <Heading heading={`Thank you!`} />
          <SubHeading subheading={`contact me: glennp167@gmail.com`} />
        </>
      </main>
    </section>
  );
}

const Profile = () => (
  <div className="flex flex-row justify-end">
    <div className="bg-profile-pic bg-no-repeat bg-contain bg-center overflow-hidden justify-self-end -mx-3 w-96 h-96 flex" />
  </div>
)