export const Close = (obj: {setShow: any, show: boolean}) => (
  <button className="h-12 w-12" onClick={() => obj.setShow(!obj.show)} title="Close">
    <div className="flex scale-75 justify-center items-center">
      <div className="x" />
    </div>
  </button>
);