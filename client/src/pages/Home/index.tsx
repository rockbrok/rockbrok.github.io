import Header from "./Header";
import Blog from "./Blog";
import Projects from "./Projects";
import Footer from "./Footer";

export default function Home() {
  return (
    <main className="flex flex-col container mx-auto p-20px md:px-50px lg:px-70px lg:w-1180">
      <Header />
      <Projects />
      <Blog />
      <Footer />
    </main>
  );
}
