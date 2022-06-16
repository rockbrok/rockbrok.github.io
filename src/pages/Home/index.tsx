import Header from './Header';
import Blog from './Blog';
import Projects from './Projects';
import Footer from './Footer';

export default function Home() {
  return (
    <section className="flex flex-col container mx-auto">
      <Header />
      <main className="flex flex-col container gap-8 my-8">
        <Projects/>
        <Blog/>
        <Footer/>
      </main>
    </section>
  );
}
