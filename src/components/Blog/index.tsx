import axios from 'axios';
import { useState, useEffect } from 'react';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

const Blog = () => {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState([]);
  const [text, setText] = useState([]);
  const [time, setTime] = useState([]);
  const [day, setDay] = useState([]);
  const [date, setDate] = useState([]);
  const [month, setMonth] = useState([]);
  const [counter, setCounter] = useState(0);
  const [URL] = useState("http://localhost:5000/posts/0");

  const Increase = async() => {
    if (counter < 5) {
      setCounter(counter => counter +1);
      console.log(counter + 1);
      await axios.get("http://localhost:5000/posts/" + (counter + 1))
        .then((response:any) => {
          setTitle(response.data.title);
          setText(response.data.text);
          setTime(response.data.time);
          setDay(response.data.day);
          setDate(response.data.date);
          setMonth(response.data.month);
        })
    } else if (counter === 5) {
      setCounter(counter => counter = 0);
      console.log(counter + 1);
      await axios.get(URL)
        .then((response:any) => {
          setTitle(response.data.title);
          setText(response.data.text);
          setTime(response.data.time);
          setDay(response.data.day);
          setDate(response.data.date);
          setMonth(response.data.month);
        })
    }
  };
 
  //decrease counter
  const decrease = async() => {
    if (counter === 0) {
      setCounter(counter => counter = 5)
      console.log(counter + 6 );
      await axios.get("http://localhost:5000/posts/" + (counter + 5))
        .then((response:any) => {
          setTitle(response.data.title);
          setText(response.data.text);
          setTime(response.data.time);
          setDay(response.data.day);
          setDate(response.data.date);
          setMonth(response.data.month);
        })
    } else if (counter > 0) {
        setCounter(counter => counter - 1);
        console.log(counter - 1);
        await axios.get("http://localhost:5000/posts/" + (counter - 1))
          .then((response:any) => {
            setTitle(response.data.title);
            setText(response.data.text);
            setTime(response.data.time);
            setDay(response.data.day);
            setDate(response.data.date);
            setMonth(response.data.month);
          })
    }
  };

  useEffect(() => {
    axios.get(URL)
      .then((response:any) => {
        setTitle(response.data.title);
        setText(response.data.text);
        setTime(response.data.time);
        setDay(response.data.day);
        setDate(response.data.date);
        setMonth(response.data.month);
      })
  }, [])

  return (
    <>
      <h2 id="blog" className="flex font-mono text-forest-green leading-10 text-2xl uppercase">
        Blog
      </h2>
      <section className="flex flex-col w-auto justify-center">
        <UpArrow />
        <button onClick={() => setShow(!show)}>
          <>
            <div className="flex flex-col font-mono bg-white w-full h-52 pt-6 px-7 pb-4 rounded-xl relative justify-between">
              <h6 className="flex text-dark-grey font-bold uppercase font-mono">{title}</h6>
              <p className="line-clamp-4 text-left">{text}</p>
              <h6 className="flex text-dark-grey text-sm font-mono self-end justify-end uppercase">{time}&nbsp;{day}&nbsp;{month}&nbsp;{date}</h6>
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
            month={month}
            setShow={setShow} 
            show={show} 
            setCounter={setCounter}
            counter={counter}
            increase={Increase}
            decrease={decrease}
            
          /> 
        : null }
        <DownArrow />
        <div className="bg-blog-pic flex bg-no-repeat bg-cover bg-center w-full h-80 px-3" />
      </section>
    </>
  );
};

const BlogPost = ({setShow, counter, show, increase, decrease, title, text, time, day, date, month, setVal, val} : any) => (
  <div className="blog-post">
    <div className="blog-post-text scrollbar-hide">
      <h6 className="flex text-dark-grey font-bold uppercase font-mono mb-3">{title}</h6>
      <p className="whitespace-pre-line break-words">{text}</p>
      <div className="flex flex-col text-dark-grey text-sm text-left font-mono mt-3 items-end">
        <h6 className="uppercase">{time}&nbsp;{day}</h6>
        <h6 className="uppercase">{month}&nbsp;{date}</h6>
      </div>
    </div>
    <div className="blog-post-buttons flex flex-row items-center justify-evenly">
      <button onClick={decrease}>
        <LeftArrow />
      </button>

      <button className="scale-75 justify-center " onClick={() => setShow(!show)}>
        <div className="x" />
      </button>

      <button onClick={increase}>
        <RightArrow />
      </button>
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