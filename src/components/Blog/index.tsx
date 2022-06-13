const Blog = () => {
  return (
    <>
      <h2 id="blog" className="flex font-mono text-forest-green leading-10 text-2xl uppercase">
        Blog
      </h2>
      <section className="flex flex-col w-auto justify-center">
        <UpArrow />
        <div className="flex flex-col bg-white w-full h-52 p-3 rounded-xl relative overflow-y-scroll">
          <h6 className="text-dark-grey font-mono">First post</h6>
          <p className="text-black font-mono">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime sit amet obcaecati quos eos repellendus magni, nemo, ex iusto modi alias explicabo neque laborum perferendis. Sequi repellat maiores pariatur cum?</p>
          <p className="text-black font-mono">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime sit amet obcaecati quos eos repellendus magni, nemo, ex iusto modi alias explicabo neque laborum perferendis. Sequi repellat maiores pariatur cum?</p>
          <h6 className="text-dark-grey font-mono self-end">14:46 - Tuesday, May 11th</h6>
          
        </div>
        <span className="blog-post-triangle" />
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