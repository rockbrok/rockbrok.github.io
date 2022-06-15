import axios from 'axios';
import { FC, useState, useEffect } from 'react';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

interface BlogProps {
  heading: string;
}

const Blog: FC<BlogProps> = ({heading}) => {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState([]);
  const [text, setText] = useState([]);
  const [time, setTime] = useState([]);
  const [day, setDay] = useState([]);
  const [date, setDate] = useState([]);
  const [counter, setCounter] = useState(0);
  const [ids, setIDS] = useState(0);
  const URL = "https://portfolio-blog-posts.herokuapp.com/posts/";
  const URL0 = "https://portfolio-blog-posts.herokuapp.com/posts/0";

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

  // get first blog post
  useEffect(() => {
    axios.get(URL0)
      .then((response:any) => {
        setTitle(response.data.title);
        setText(response.data.text);
        setTime(response.data.time);
        setDay(response.data.day);
        setDate(response.data.date);
      })
  }, [])

  // next blog post
  const increase = async() => {
    if (counter < (ids - 1)) {
      setCounter(counter => counter + 1);
      await axios.get(URL + (counter + 1))
        .then((response:any) => {
          setTitle(response.data.title);
          setText(response.data.text);
          setTime(response.data.time);
          setDay(response.data.day);
          setDate(response.data.date);
        })
    } else if (counter === (ids - 1)) {
      setCounter(counter => counter = 0);
      await axios.get(URL0)
        .then((response:any) => {
          setTitle(response.data.title);
          setText(response.data.text);
          setTime(response.data.time);
          setDay(response.data.day);
          setDate(response.data.date);
        })
    }
  };
 
  // previous blog post
  const decrease = async() => {
    if (counter === 0) {
      setCounter(counter => counter = (ids - 1))
      await axios.get(URL + (counter + (ids - 1)))
        .then((response:any) => {
          setTitle(response.data.title);
          setText(response.data.text);
          setTime(response.data.time);
          setDay(response.data.day);
          setDate(response.data.date);
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
    }
  };

  return (
    <>
      <h2 id="blog" className="flex font-mono text-forest-green leading-10 text-2xl uppercase">
        {heading}
      </h2>
      <section className="flex flex-col w-auto justify-center">
        <UpArrow />
        <button onClick={() => setShow(!show)}>
          <>
            <div className="flex flex-col font-mono bg-white w-full h-52 pt-6 px-7 pb-4 rounded-xl relative justify-between">
              <h6 className="flex text-dark-grey font-bold uppercase font-mono">
                {title}
              </h6>
              <p className="line-clamp-4 text-left">
                {text}
              </p>
              <h6 className="flex text-dark-grey text-sm font-mono self-end justify-end uppercase">
                {time}&nbsp;{day}&nbsp;{date}
              </h6>
            </div>
            { show ? disableBodyScroll(Document as any) : enableBodyScroll(Document as any) } 
          </>
        </button>
        <span className="blog-post-triangle" />
        { show ? 
          <BlogPost 
            title={title} 
            time={time}
            text={text}
            day={day}
            date={date}
            show={show} 
            setShow={setShow} 
            increase={increase}
            decrease={decrease}
          /> 
        : null }
        <DownArrow />
        <div className="bg-blog-pic flex bg-no-repeat bg-cover bg-center w-full h-80 px-3" />
      </section>
    </>
  );
};

const BlogPost = ({setShow, show, increase, decrease, title, text, time, day, date}:any) => (
  <div className="blog-post">
    <div className="blog-post-text scrollbar-hide">
      <h6 className="flex text-dark-grey font-bold uppercase font-mono mb-3">
        {title}
      </h6>
      <p className="whitespace-pre-line break-words">
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

const LeftArrow = ({decrease}:any) => (
  <button className="h-12 w-12" onClick={decrease}>
    <div className="flex scale-50 items-center justify-center">
      <div className="arrow-icon rotate-270">
        <span className="arrow" />
      </div>
    </div>
  </button>
)

const RightArrow = ({increase}:any) => (
  <button className="h-12 w-12" onClick={increase}>
    <div className="flex scale-50 items-center justify-center">
      <div className="arrow-icon rotate-90">
        <span className="arrow" />
      </div>
    </div>
  </button>
)

const Close = ({setShow, show}:any) => (
  <button className="h-12 w-12" onClick={() => setShow(!show)}>
    <div className="flex scale-75 justify-center items-center">
      <div className="x" />
    </div>
  </button>
)

export default Blog;