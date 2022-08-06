export default function NotFound() {
  return (
    <section className="flex flex-col text-white container p-7 mx-auto w-884">
      <div className="flex justify-center self-center container relative w-884">
        <Heading/>
        <Image/>
      </div>    
    </section>
  );
}

const Heading = () => (
  <div className="absolute top-70px left-70px">
    <h1 className="flex flex-start my-5 text-white font-sans text-5xl display-linebreak">
      404
    </h1>
    <h3 className="flex flex-start text-light-grey font-normal font-mono leading-6 text-2xl display-linebreak">
      not found
    </h3>
  </div>
)

const Image = () => (
  <div className="flex justify-center absolute container">
    <div className="flex h-0 w-70p pb-50p relative self-center">
      <div className="absolute inset-0 md:flex self-center md:self-end z-30 bg-[url('https://glennphil.github.io/assets/imgs/404-man.png')] bg-no-repeat bg-center bg-[length:100%_100%] w-full h-full" />
    </div>
  </div>
)