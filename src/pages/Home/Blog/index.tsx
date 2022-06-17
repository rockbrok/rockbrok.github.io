import axios from 'axios';
import { FC, useState, useEffect } from 'react';
import { useSwipeable } from "react-swipeable";
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

interface BlogProps {
  heading: string;
}

const Blog = () => {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState([]);
  const [title2, setTitle2] = useState([]);
  const [text, setText] = useState([]);
  const [text2, setText2] = useState([]);
  const [time, setTime] = useState([]);
  const [day, setDay] = useState([]);
  const [date, setDate] = useState([]);
  const [counter, setCounter] = useState(0);
  const [ids, setIDS] = useState(0);
  const URL:string = "https://portfolio-blog-posts.herokuapp.com/posts/";
  const firstPostURL:string = URL + 0;
  const secondPostURL:string = URL + 1;

  // get total number of posts
  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get(URL)
        .then(res => {
          const ids = res.data.length;
          setIDS(ids);
        })
    }
    fetchData()
      .catch(console.error);
  }, [ids])

  // total posts - 1
  let numPosts = (ids - 1);

  // get first blog post
  useEffect(() => {
    axios.get(firstPostURL)
      .then((response:any) => {
        setTitle(response.data.title);
        setText(response.data.text);
        setTime(response.data.time);
        setDay(response.data.day);
        setDate(response.data.date);
      })
  }, [firstPostURL])

  // get second blog post
    useEffect(() => {
      axios.get(secondPostURL)
        .then((response:any) => {
          setTitle2(response.data.title);
          setText2(response.data.text);
        })
    }, [secondPostURL])

  // next blog post
  const increase = async() => {
    if (counter < numPosts) {
      setCounter(counter => counter + 1);
      await axios.get(URL + (counter + 1))
        .then((response:any) => {
          setTitle(response.data.title);
          setText(response.data.text);
          setTime(response.data.time);
          setDay(response.data.day);
          setDate(response.data.date);
        })
      // get next post title
      await axios.get(URL + (counter + 2))
        .then((response:any) => {
          setTitle2(response.data.title);
          setText2(response.data.text);
        })
    } else if (counter === numPosts) {
      setCounter(counter => counter = 0);
      await axios.get(firstPostURL)
        .then((response:any) => {
          setTitle(response.data.title);
          setText(response.data.text);
          setTime(response.data.time);
          setDay(response.data.day);
          setDate(response.data.date);
        })
      // get next post title
      await axios.get(secondPostURL)
        .then((response:any) => {
          setTitle2(response.data.title);
          setText2(response.data.text);
        })
    }
  };
 
  // previous blog post
  const decrease = async() => {
    if (counter === 0) {
      setCounter(counter => counter = numPosts)
      await axios.get(URL + (counter + numPosts))
        .then((response:any) => {
          setTitle(response.data.title);
          setText(response.data.text);
          setTime(response.data.time);
          setDay(response.data.day);
          setDate(response.data.date);
        })
      // get next post title
      await axios.get(URL + (counter + numPosts + 1))
        .then((response:any) => {
          setTitle2(response.data.title);
          setText2(response.data.text);
        })
    } else if (counter > 0) {
        setCounter(counter => counter - 1);
        await axios.get(URL + (counter - 1))
          .then((response:any) => {
            setTitle(response.data.title);
            setText(response.data.text);
            setTime(response.data.time);
            setDay(response.data.day);
            setDate(response.data.date);
          })
        // get next post title
        await axios.get(URL + counter)
          .then((response:any) => {
            setTitle2(response.data.title);
            setText2(response.data.text);
          })
    }
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => decrease(),
    onSwipedRight: () => increase()
  });

  return (
    <>
      <Heading 
        heading={`Blog`}
      />
      <section className="flex flex-col w-auto justify-center md:flex-row-reverse">
        <>
          <div className="flex flex-col gap-8">
            <button onClick={() => setShow(!show)}>
              <>
                <FirstBlogPost 
                  title={title} 
                  time={time}
                  text={text}
                  day={day}
                  date={date}
                />
                { show ? disableBodyScroll(Document as any) : enableBodyScroll(Document as any) } 
              </>
            </button>
            <SecondBlogPost 
              title2={title2}
              text2={text2}
            />
          </div>
          { show ? 
            <div className="blog-post">
              <BlogPost 
                title={title} 
                time={time}
                text={text}
                day={day}
                date={date}
                handlers={handlers}
              /> 
              <BlogButtons
                show={show} 
                setShow={setShow} 
                increase={increase}
                decrease={decrease}
              />
            </div>
          : null }
        </>
        <div className="flex bg-blog-pic bg-no-repeat bg-260 bg-center w-full h-52" />
      </section>
    </>
  );
};

const Heading: FC<BlogProps> = ({heading}) => (
  <h2 id="blog" className="flex font-mono text-forest-green leading-10 text-2xl uppercase">
    {heading}
  </h2>
)

const FirstBlogPost = ({title, text, time, day, date}:any) => (
  <div className="flex flex-col font-mono bg-white w-full h-52 pt-6 px-7 pb-4 mb-6 rounded-xl relative justify-between md:w-80">
    <h6 className="flex text-dark-grey font-bold uppercase font-mono">
      {title}
    </h6>
    <p className="line-clamp-4 text-left">
      {text}
    </p>
    <h6 className="flex text-dark-grey text-sm font-mono self-end justify-end uppercase">
      {time}&nbsp;{day}&nbsp;{date}
    </h6>
    <span className="blog-post-triangle absolute" />
  </div>
)

const SecondBlogPost = ({title2, text2}:any) => (
  <>
  <div className="flex flex-col font-mono bg-white w-full h-28 pt-6 px-7 pb-4 rounded-t-xl relative justify-between md:w-80">
    <h6 className="flex text-dark-grey font-bold uppercase font-mono select-none">
      {title2}
    </h6>
    <p className="line-clamp-4 text-left select-none">
      {text2}
    </p>
  </div>
  <div className="blog-wrap" />
  </>
)

const BlogPost = ({title, text, time, day, date, handlers}:any) => (
  <div className="blog-post-text scrollbar-hide" {...handlers}>
    <h6 className="flex text-dark-grey font-bold uppercase font-mono mb-3">
      {title}
    </h6>
    <p className="whitespace-pre-line break-words leading-5">
      {text}
    </p>
    <div className="flex flex-col text-dark-grey text-sm text-left font-mono mt-3 items-end">
      <h6 className="uppercase">
        {time}&nbsp;{day}
      </h6>
      <h6 className="uppercase">
        {date}
      </h6>
    </div>
  </div>
)

const BlogButtons = ({setShow, show, increase, decrease}:any) => (
  <div className="blog-post-buttons flex flex-row items-center justify-evenly">
    <LeftArrow 
      decrease={decrease}
    />
    <Close
      show={show}
      setShow={setShow}
    />
    <RightArrow 
      increase={increase}
    />
  </div>
)

const LeftArrow = ({decrease}:any) => (
  <button className="h-12 w-12" onClick={decrease} title="Previous">
    <div className="flex scale-50 items-center justify-center">
      <div className="arrow-icon rotate-270">
        <span className="arrow" />
      </div>
    </div>
  </button>
)

const RightArrow = ({increase}:any) => (
  <button className="h-12 w-12" onClick={increase} title="Next">
    <div className="flex scale-50 items-center justify-center">
      <div className="arrow-icon rotate-90">
        <span className="arrow" />
      </div>
    </div>
  </button>
)

const Close = ({setShow, show}:any) => (
  <button className="h-12 w-12" onClick={() => setShow(!show)} title="Close">
    <div className="flex scale-75 justify-center items-center">
      <div className="x" />
    </div>
  </button>
)

export default Blog;
