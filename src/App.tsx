import React, { useRef } from 'react';
import Logo from './components/logo'
import Navigation from './components/navigation';
import { Heading, SubHeading } from './components/heading';
import SocialButtons from './components/socialbuttons';

function App() {
  return (
    <section className="flex flex-col container pt-20px mx-auto">
      <section className="flex flex-col h-screen container">
        <header className="flex justify-end">
          <Navigation
            link1='download my resume'
            link2='portfolio'
            link3='contact' 
            link4='blog'
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
            <SocialButtons />
          </div>
          <Logo />
        </div>
      </section>
      <main>
        <section>
          <h2 id="portfolio" className="flex font-mono text-forest-green leading-10 text-2xl uppercase">
            Portfolio
          </h2>
          </section>
        <section>
          <h2 id="contact" className="flex justify-end font-mono text-forest-green leading-10 text-2xl uppercase">
            Contact
          </h2>
        </section>
        <section>
          <h2 id="blog" className="flex font-mono text-forest-green leading-10 text-2xl uppercase">
            Blog
          </h2>
        </section>
        

      <Text text='Hello world!' i={9} />
      </main>
    </section>
  );
}

interface Props {
  text: string;
  i: number;
  obj?: {

  }
  handleChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const Text: React.FC<Props> = ({ handleChange }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form>
    <input ref={inputRef} onChange={handleChange}/>
    <input type="reset"/>
    <input type="submit"/>
    </form>
  );
};

export default App;
