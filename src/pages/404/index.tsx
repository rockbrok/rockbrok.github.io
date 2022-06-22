export default function NotFound() {
  return (
    <section className="flex flex-col text-white container p-7 mx-auto">

          <div>
          <div className="flex flex-start my-5">
            <h1 className="text-white font-sans text-5xl display-linebreak">404</h1>
          </div>
          <h3 className="flex flex-start text-light-grey font-normal font-mono leading-6 text-2xl display-linebreak">
            not found
          </h3>
          </div>

          <div className="md:flex self-center md:self-end z-30 bg-[url('http://paq000.github.io/portfolio/assets/404-man.png')] bg-no-repeat bg-center bg-[length:264px_206px] w-264 h-206 lg:bg-[length:400px_302px] lg:w-400 lg:h-302" />
    </section>
  );
}