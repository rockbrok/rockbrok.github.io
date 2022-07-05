export const RightArrow = (obj: {increase: () => void}) => (
  <button className="h-12 w-12" onClick={() => {obj.increase();}} title="Next">
    <div className="flex scale-50 items-center justify-center">
      <div className="arrow-icon rotate-90">
        <span className="arrow" />
      </div>
    </div>
  </button>
);

export const LeftArrow = (obj: {decrease: () => void}) => (
  <button className="h-12 w-12" onClick={obj.decrease} title="Previous">
    <div className="flex scale-50 items-center justify-center">
      <div className="arrow-icon rotate-270">
        <span className="arrow" />
      </div>
    </div>
  </button>
);