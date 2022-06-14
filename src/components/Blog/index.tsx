import { useState } from 'react';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

const Blog = () => {
  const text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa illum incidunt quibusdam, voluptate modi labore nihil debitis ab repudiandae obcaecati porro similique neque. Voluptatem optio voluptatibus, iste fugiat tenetur sunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa illum incidunt quibusdam, voluptate modi labore nihil debitis ab repudiandae obcaecati porro similique neque. Voluptatem optio voluptatibus, iste fugiat tenetur sunt.'
  const [show, setShow] = useState(false);

  return (
    <>
      <h2 id="blog" className="flex font-mono text-forest-green leading-10 text-2xl uppercase">
        Blog
      </h2>
      <section className="flex flex-col w-auto justify-center">
        <UpArrow />
        <button onClick={() => setShow(!show)}>
          <>
            <div className="flex flex-col font-mono bg-white w-full h-52 p-5 rounded-xl relative">
              <h6 className="flex text-dark-grey font-mono">First post</h6>
              <p className="line-clamp-5 text-left">{text}</p>
              <h6 className="flex text-dark-grey font-mono self-end">14:46 - Tuesday, May 11th</h6>
            </div>
            { show ? disableBodyScroll(Document as any) : enableBodyScroll(Document as any) } 
          </>
        </button>
        <span className="blog-post-triangle" />
        { show ? <BlogPost setShow={setShow} show={show} /> : null }
        <DownArrow />
        <div className="bg-blog-pic flex bg-no-repeat bg-cover bg-center w-full h-80 px-3" />
      </section>
    </>
  );
};

const BlogPost = ({setShow, show} : any) => (
  <div className="blog-post">
    <div className="blog-post-text scrollbar-hide">
      <h6 className="flex text-dark-grey font-bold uppercase font-mono mb-3">First post</h6>
      <p className="whitespace-pre-line break-words">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum amet reprehenderit esse neque illum totam quod! Ex quasi maiores, accusantium quae, eum aliquam animi id iusto dignissimos hic harum aliquid. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque totam rerum laudantium veritatis, dolore, iste quibusdam dignissimos, minima quae similique excepturi vero eveniet laborum voluptates? Ab omnis aliquam alias ea. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error doloribus voluptas totam facilis. Incidunt excepturi officia praesentium consequatur eum, quis quos voluptas fugiat earum, corrupti nobis, magni veniam eius corporis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta qui sint mollitia quasi. Ullam numquam laudantium libero, modi ut maxime aut voluptate incidunt ea consequuntur eveniet amet, deserunt qui ipsum!</p>
      <div className="flex flex-col text-dark-grey text-sm text-left font-mono mt-3 items-end">
        <h6 className="uppercase">14:46 Tue</h6>
        <h6 className="uppercase">May 13</h6>
      </div>
    </div>
    <div className="blog-post-buttons flex flex-row items-center justify-evenly">
      <LeftArrow />
      <button className="scale-75 justify-center " onClick={() => setShow(!show)}>
        <div className="x" />
      </button>
      <RightArrow />
    </div>
  </div>
)

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

const LeftArrow = () => (
  <div className="flex flex-row w-auto m-3 justify-end scale-50">
    <div className="arrow-icon rotate-270">
      <span className="arrow" />
    </div>
  </div>
)

const RightArrow = () => (
  <div className="flex flex-row w-auto m-3 justify-end scale-50">
    <div className="arrow-icon rotate-90">
      <span className="arrow" />
    </div>
  </div>
)

export default Blog;