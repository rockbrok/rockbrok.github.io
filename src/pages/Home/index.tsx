import Header from './Header';
import Blog from './Blog';
import Projects from './Projects';
import Footer from './Footer';

export default function Home() {
  return (
    <section className="flex flex-col container mx-auto">
      <Header />
      <main>
        <section className="flex flex-col container mt-24 gap-4">
          <Projects/>
        </section>
        <section className="flex flex-col container mt-24 gap-4">
          <Blog/>
        </section>
        <section className="flex flex-col container mt-24">
          <Footer/>
        </section>
      </main>
    </section>
  );
}
