import OutsideClickHandler from "react-outside-click-handler";
import {
  FC,
  useState,
  useEffect,
  JSXElementConstructor,
  ReactElement,
  ReactFragment,
  ReactPortal,
  ClassAttributes,
  HTMLAttributes,
  MouseEventHandler,
  CSSProperties,
} from "react";
import { useSwipeable } from "react-swipeable";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { FileNav, X } from "../../components/Buttons/Nav";
import axios from "axios";

interface BlogProps {
  heading: string;
}

const Blog = () => {
  const [showBlog1, setShowBlog1] = useState<boolean>(false);
  const [showBlog2, setShowBlog2] = useState<boolean>(false);
  const [title, setTitle] = useState<string>("");
  const [title2, setTitle2] = useState<string>("");
  const [text, setText] = useState<string>("");
  const [text2, setText2] = useState<string>("");
  const [time, setTime] = useState<string>("");
  const [time2, setTime2] = useState<string>("");
  const [day, setDay] = useState<string>("");
  const [day2, setDay2] = useState<string>("");
  const [date, setDate] = useState<number>(0);
  const [date2, setDate2] = useState<number>(0);
  const [counter, setCounter] = useState<number>(0);
  const [ids, setIDS] = useState<number>(0);
  const URL: string = "https://portfolio-blog-posts.herokuapp.com/posts/";
  const firstPostURL: string = URL + 0;
  const secondPostURL: string = URL + 1;

  // get total number of posts
  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get(URL).then((res) => {
        const ids = res.data.length;
        setIDS(ids);
      });
    };
    fetchData().catch(console.error);
  }, [ids]);

  // total posts - 1
  let numPosts = ids - 1;

  // get first blog post
  useEffect(() => {
    axios.get(firstPostURL).then((response: any) => {
      setTitle(response.data.title);
      setText(response.data.text);
      setTime(response.data.time);
      setDay(response.data.day);
      setDate(response.data.date);
    });
  }, [firstPostURL]);

  // get second blog post
  useEffect(() => {
    axios.get(secondPostURL).then((response: any) => {
      setTitle2(response.data.title);
      setText2(response.data.text);
    });
  }, [secondPostURL]);

  // next blog post
  const increase = async () => {
    if (counter < numPosts) {
      setCounter((counter) => counter + 1);
      await axios.get(URL + (counter + 1)).then((response: any) => {
        setTitle(response.data.title);
        setText(response.data.text);
        setTime(response.data.time);
        setDay(response.data.day);
        setDate(response.data.date);
      });
      // get next post title
      await axios.get(URL + (counter + 2)).then((response: any) => {
        setTitle2(response.data.title);
        setText2(response.data.text);
        setTime2(response.data.time);
        setDay2(response.data.day);
        setDate2(response.data.date);
      });
    } else if (counter === numPosts) {
      setCounter((counter) => (counter = 0));
      await axios.get(firstPostURL).then((response: any) => {
        setTitle(response.data.title);
        setText(response.data.text);
        setTime(response.data.time);
        setDay(response.data.day);
        setDate(response.data.date);
      });
      // get next post title
      await axios.get(secondPostURL).then((response: any) => {
        setTitle2(response.data.title);
        setText2(response.data.text);
        setTime2(response.data.time);
        setDay2(response.data.day);
        setDate2(response.data.date);
      });
    }
  };

  // previous blog post
  const decrease = async () => {
    if (counter === 0) {
      setCounter((counter) => (counter = numPosts));
      await axios.get(URL + (counter + numPosts)).then((response: any) => {
        setTitle(response.data.title);
        setText(response.data.text);
        setTime(response.data.time);
        setDay(response.data.day);
        setDate(response.data.date);
      });
      // get next post title
      await axios.get(URL + (counter + numPosts + 1)).then((response: any) => {
        setTitle2(response.data.title);
        setText2(response.data.text);
        setTime2(response.data.time);
        setDay2(response.data.day);
        setDate2(response.data.date);
      });
    } else if (counter > 0) {
      setCounter((counter) => counter - 1);
      await axios.get(URL + (counter - 1)).then((response: any) => {
        setTitle(response.data.title);
        setText(response.data.text);
        setTime(response.data.time);
        setDay(response.data.day);
        setDate(response.data.date);
      });
      // get next post title
      await axios.get(URL + counter).then((response: any) => {
        setTitle2(response.data.title);
        setText2(response.data.text);
        setTime2(response.data.time);
        setDay2(response.data.day);
        setDate2(response.data.date);
      });
    }
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => increase(),
    onSwipedRight: () => decrease(),
  });

  return (
    <section className="flex flex-col container mt-28 gap-4 xl:mt-40">
      <Heading heading={`Blog`} />
      <div className="md:flex justify-center md:relative md:h-414">
        <section className="flex flex-col w-auto justify-center md:flex-row-reverse md:gap-x-12 md:absolute">
          <>
            <div className="flex flex-col gap-16 md:mb-[-2px] lg:mb-[4px]">
              <>
                <BlogMini
                  click={() => setShowBlog1(!showBlog1)}
                  style={{ height: "208px", paddingBottom: "16px" }}
                  title={title}
                  time={time}
                  text={text}
                  day={day}
                  date={date}
                  scroll={
                    showBlog1
                      ? disableBodyScroll(
                        Document as unknown as HTMLElement | Element
                      )
                      : enableBodyScroll(
                        Document as unknown as HTMLElement | Element
                      )
                  }
                />
                <div className="h-0 w-0 border-t-white border-l-transparent border-r-transparent border-b-transparent border-solid border-t-30 border-r-30 border-b-0 border-l-0 mt-200px ml-30px absolute" />
              </>
              <>
                <BlogMini
                  click={() => setShowBlog2(!showBlog2)}
                  style={{ height: "112px" }}
                  title={title2}
                  text={text2}
                  scroll={
                    showBlog2
                      ? disableBodyScroll(
                        Document as unknown as HTMLElement | Element
                      )
                      : null
                  }
                />
                <div className="h-8 z-10 -mt-75px mb-8 md:mb-0 -mx-2 bg-dark-grey" />
                <div className="flex md:hidden w-full h-2 z-20 bg-white -mt-130px mb-8 md:mb-0" />
              </>
            </div>
            {showBlog1 ? (
              <BlogPost
                click={() => setShowBlog1(false)}
                show={showBlog1}
                setShow={setShowBlog1}
                title={title}
                time={time}
                text={text}
                day={day}
                date={date}
                handlers={handlers}
                increase={increase}
                decrease={decrease}
              />
            ) : null}
            {showBlog2 ? (
              <BlogPost
                click={() => setShowBlog2(false)}
                show={showBlog2}
                setShow={setShowBlog2}
                title={title2}
                time={time2}
                text={text2}
                day={day2}
                date={date2}
                handlers={handlers}
                increase={increase}
                decrease={decrease}
              />
            ) : null}
          </>
          <BlogPic />
        </section>
      </div>
    </section>
  );
};

const Heading: FC<BlogProps> = ({ heading }) => (
  <h2
    id="blog"
    className="flex font-mono text-forest-green leading-10 text-2xl uppercase"
  >
    {heading}
  </h2>
);

const BlogPic = () => (
  <>
    <div className="md:hidden flex h-0 w-3/4 pb-55p relative self-center">
      <div className="absolute inset-0 md:flex self-center md:self-end z-30 bg-[url('https://rockbrok.github.io/assets/imgs/blog-man.png')] bg-no-repeat bg-center bg-[length:100%_100%] w-full h-full" />
    </div>
    <div className="hidden md:flex self-center md:self-end z-30 bg-[url('https://rockbrok.github.io/assets/imgs/blog-man.png')] bg-no-repeat bg-center bg-[length:320px_244px] w-320 h-244 lg:bg-[length:400px_302px] lg:w-400 lg:h-302" />
    <div className="hidden md:flex z-20 h-2 bg-white md:w-688 lg:w-884 xl:w-1040 absolute bottom-28px lg:bottom-35px" />
  </>
);

const BlogMini: any = (props: {
  click: MouseEventHandler<HTMLButtonElement> | undefined;
  style: CSSProperties | undefined;
  title:
  | string
  | number
  | boolean
  | ReactFragment
  | ReactPortal
  | ReactElement<any, string | JSXElementConstructor<any>>
  | null
  | undefined;
  text:
  | string
  | number
  | boolean
  | ReactFragment
  | ReactPortal
  | ReactElement<any, string | JSXElementConstructor<any>>
  | null
  | undefined;
  time:
  | string
  | number
  | boolean
  | ReactFragment
  | ReactPortal
  | ReactElement<any, string | JSXElementConstructor<any>>
  | null
  | undefined;
  day:
  | string
  | number
  | boolean
  | ReactFragment
  | ReactPortal
  | ReactElement<any, string | JSXElementConstructor<any>>
  | null
  | undefined;
  date:
  | string
  | number
  | boolean
  | ReactFragment
  | ReactPortal
  | ReactElement<any, string | JSXElementConstructor<any>>
  | null
  | undefined;
  scroll:
  | string
  | number
  | boolean
  | ReactFragment
  | ReactPortal
  | ReactElement<any, string | JSXElementConstructor<any>>
  | null
  | undefined;
}) => {
  return (
    <>
      <button onClick={props.click}>
        <div
          className="flex flex-col font-mono bg-white w-full pt-6 px-7 rounded-xl relative justify-between md:w-80"
          style={props.style}
        >
          <h6 className="flex text-dark-grey text-left font-bold uppercase font-mono">
            {props.title}
          </h6>
          <p className="line-clamp-4 text-left">{props.text}</p>
          <h6 className="flex text-dark-grey text-sm font-mono self-end justify-end uppercase">
            {props.time}&nbsp;{props.day}&nbsp;{props.date}
          </h6>
        </div>
        {props.scroll}
      </button>
    </>
  );
};

const BlogPost = (props: {
  click: (e: MouseEvent) => void;
  handlers: JSX.IntrinsicAttributes &
  ClassAttributes<HTMLDivElement> &
  HTMLAttributes<HTMLDivElement>;
  title:
  | string
  | number
  | boolean
  | ReactElement<any, string | JSXElementConstructor<any>>
  | ReactFragment
  | ReactPortal
  | null
  | undefined;
  text:
  | string
  | number
  | boolean
  | ReactElement<any, string | JSXElementConstructor<any>>
  | ReactFragment
  | ReactPortal
  | null
  | undefined;
  time:
  | string
  | number
  | boolean
  | ReactElement<any, string | JSXElementConstructor<any>>
  | ReactFragment
  | ReactPortal
  | null
  | undefined;
  day:
  | string
  | number
  | boolean
  | ReactElement<any, string | JSXElementConstructor<any>>
  | ReactFragment
  | ReactPortal
  | null
  | undefined;
  date:
  | string
  | number
  | boolean
  | ReactElement<any, string | JSXElementConstructor<any>>
  | ReactFragment
  | ReactPortal
  | null
  | undefined;
  show: boolean;
  setShow: any;
  increase: () => void;
  decrease: () => void;
}) => (
  <div className="z-40 fixed w-full h-full inset-0 bg-dark-grey">
    <X />
    <div className="z-40 fixed mx-auto md:w-768 inset-0">
      <OutsideClickHandler onOutsideClick={props.click}>
        <>
          <div
            className="h-[calc(100%-70px)] fixed overflow-y-scroll w-full md:w-768 bg-white scrollbar-hide pt-50px pb-10px px-45px md:mx-auto lg:scrollbar-default"
            {...props.handlers}
          >
            <h6 className="flex text-dark-grey font-bold uppercase font-mono mb-3">
              {props.title}
            </h6>
            <p className="whitespace-pre-line break-words leading-5">
              {props.text}
            </p>
            <div className="flex flex-col text-dark-grey text-sm text-left font-mono mt-3 items-end">
              <h6 className="uppercase">
                {props.time}&nbsp;{props.day}
              </h6>
              <h6 className="uppercase">{props.date}</h6>
            </div>
          </div>
          <FileNav
            show={props.show}
            setShow={props.setShow}
            increase={props.increase}
            decrease={props.decrease}
          />
        </>
      </OutsideClickHandler>
    </div>
  </div>
);

export default Blog;
