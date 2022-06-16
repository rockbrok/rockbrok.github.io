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


          <div className="flex">
            <div className="pic-404"/>
          </div>
    </section>
  );
}