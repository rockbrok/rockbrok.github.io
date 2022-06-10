const Blog = () => {
  return (
    <>
    <UpArrow />
    <div className="flex bg-white w-full h-52 p-3 rounded-xl text-red relative">
      Hello
      <span className="blog-post-triangle" />
    </div>
    <DownArrow />
    <div className="bg-blog-pic flex bg-no-repeat bg-contain bg-center w-96 h-96 px-3" />
    </>
  );
};

const UpArrow = () => (
  <div className="flex flex-row w-auto mb-3 justify-end">
    <div className="arrow-icon p-3">
      <span className="arrow-up" />
    </div>
  </div>
)

const DownArrow = () => (
  <div className="flex flex-row w-auto mt-3 justify-end">
    <div className="arrow-icon p-3">
      <span className="arrow-down" />
    </div>
  </div>
)

export default Blog;