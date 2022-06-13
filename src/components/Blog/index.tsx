const Blog = () => {
  return (
    <>
      <h2 id="blog" className="flex font-mono text-forest-green leading-10 text-2xl uppercase">
        Blog
      </h2>
      <section className="flex flex-col w-auto justify-center">
        <UpArrow />
        <div className="flex bg-white w-full h-52 p-3 rounded-xl text-red relative">
          Hello
          <span className="blog-post-triangle" />
        </div>
        <DownArrow />
        <div className="bg-blog-pic flex bg-no-repeat bg-cover bg-center w-full h-80 px-3" />
      </section>
    </>
  );
};

const UpArrow = () => (
  <div className="flex flex-row w-auto m-3 justify-end">
    <div className="arrow-icon">
      <span className="arrow" />
    </div>
  </div>
)

const DownArrow = () => (
  <div className="flex flex-row w-auto m-3 justify-end">
    <div className="arrow-icon rotate-180">
      <span className="arrow" />
    </div>
  </div>
)

export default Blog;