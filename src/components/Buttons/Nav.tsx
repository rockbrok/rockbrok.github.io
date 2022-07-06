export const FileNav = (obj: {decrease:() => void; increase:() => void; show:boolean; setShow:any}) => (
  <div className="md:flex justify-center fixed bottom-0 bg-white w-full md:w-768 mx-auto">
    <div className="h-60 mt-0 mb-10px mx-45px border-t-2 border-solid border-light-green w-[calc(100%-90px)] flex flex-row items-center justify-evenly md:w-768">
      <LeftArrow decrease={obj.decrease} />
      <Close show={obj.show} setShow={obj.setShow} />
      <RightArrow increase={obj.increase} />
    </div>
  </div>
);

const RightArrow = (obj: {increase: () => void}) => (
  <button className="h-12 w-12" onClick={() => {obj.increase();}} title="Next">
    <div className="flex scale-50 items-center justify-center">
      <div className="arrow-icon rotate-90">
        <span className="arrow" />
      </div>
    </div>
  </button>
);

const LeftArrow = (obj: {decrease: () => void}) => (
  <button className="h-12 w-12" onClick={obj.decrease} title="Previous">
    <div className="flex scale-50 items-center justify-center">
      <div className="arrow-icon rotate-270">
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