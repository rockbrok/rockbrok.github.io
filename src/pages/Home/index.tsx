import Header from './Header';
import Blog from './Blog';
import Projects from './Projects';
import Footer from './Footer';

export default function Home() {
  return (
    <section className="flex flex-col container mx-auto p-20px md:px-50px lg:px-70px lg:w-1180">
      <Header />
      <main>
        <section className="flex flex-col container mt-28 gap-4">
          <Projects/>
        </section>
        <section className="flex flex-col container mt-28 gap-4">
          <Blog/>
        </section>
        <section className="flex flex-col container mt-24">
          <Footer/>
        </section>
      </main>
    </section>
  );
}
