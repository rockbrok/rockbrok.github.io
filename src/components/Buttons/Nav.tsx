import { MouseEventHandler } from "react";

export const FileNav = (obj: {decrease:() => void; increase:() => void; show:boolean; setShow:any}) => (
  <div className="md:flex justify-center fixed bottom-0 bg-white w-full md:w-768 mx-auto">
    <div className="h-60 mt-0 mb-10px mx-45px border-t-2 border-solid border-light-green w-[calc(100%-90px)] flex flex-row items-center justify-evenly md:w-768">
      <Arrow 
        click={obj.decrease}
        title="Previous"
        style="arrow-icon rotate-270"
      />
      <Close show={obj.show} setShow={obj.setShow} />
      <Arrow 
        click={obj.increase}
        title="Next"
        style="arrow-icon rotate-90"
      />
    </div>
  </div>
);

const Arrow = (props: { click: MouseEventHandler<HTMLButtonElement> | undefined; title: string | undefined; style: string | undefined; }) => (
  <button className="h-12 w-12" onClick={props.click} title={props.title}>
    <div className="flex scale-50 items-center justify-center">
      <div className={props.style}>
        <span className="arrow" />
      </div>
    </div>
  </button>
);

const Close = (obj: {setShow: any, show: boolean}) => (
  <div className="w-9 flex justify-items-center">
    <button className="flex xl:hidden" onClick={() => obj.setShow(!obj.show)} title="Close">
      <XIcon />
    </button>
  </div>
);

export const X = () => (
  <div className="xl:flex hidden flex-row justify-end pr-14px pt-14px">
    <XIcon />
  </div>
);

const XIcon = () => (
  <div className="flex scale-75 justify-center items-center cursor-pointer">
    <div className="x" />
  </div>
);