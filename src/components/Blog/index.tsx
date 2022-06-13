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

const BlogPost = ({setShow, show} : any) => (
  <>
    <div className="blog-post">
      <div className="blog-post-text">
        
      <button className="scale-75 absolute top-10 right-9" onClick={() => setShow(!show)}>
        <div className="x" />
        </button>
      
      <h6 className="flex text-dark-grey font-mono">First post</h6>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum amet reprehenderit esse neque illum totam quod! Ex quasi maiores, accusantium quae, eum aliquam animi id iusto dignissimos hic harum aliquid. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque totam rerum laudantium veritatis, dolore, iste quibusdam dignissimos, minima quae similique excepturi vero eveniet laborum voluptates? Ab omnis aliquam alias ea. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error doloribus voluptas totam facilis. Incidunt excepturi officia praesentium consequatur eum, quis quos voluptas fugiat earum, corrupti nobis, magni veniam eius corporis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta qui sint mollitia quasi. Ullam numquam laudantium libero, modi ut maxime aut voluptate incidunt ea consequuntur eveniet amet, deserunt qui ipsum!</p>
        <h6 className="flex text-dark-grey font-mono self-end">14:46 - Tuesday, May 11th</h6>
      </div>


    </div>

  </>
)

export default Blog;