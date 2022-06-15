const SocialButtons = () => {
  return (
    <div className="hidden flex-row w-min gap-x-6 flex-start md:flex md:my-10">
      <a href="">
        <div className="flex items-center justify-center rounded-full border-2 bg-transparent border-white w-14 h-14">
          <div className="flex bg-github-icon bg-no-repeat bg-46 bg-center h-10 w-10"/>
        </div>
      </a>
      <a href="">
        <div className="flex items-center justify-center rounded-full border-2 bg-transparent border-white w-14 h-14">
          <div className="flex bg-linkedin-icon bg-no-repeat bg-46 bg-center h-10 w-10"/>
        </div>
      </a>
      <a href="">
        <div className="flex items-center justify-center rounded-full border-2 bg-transparent border-white w-14 h-14">
          <div className="flex bg-whatsapp-icon bg-no-repeat bg-46 bg-center h-10 w-10"/>
        </div>
      </a>
      <a href="">
        <div className="flex items-center justify-center rounded-full border-2 bg-transparent border-white w-14 h-14">
          <div className="flex bg-email-icon bg-no-repeat bg-46 bg-center h-10 w-10"/>
        </div>
      </a>
    </div>
  );
};

export default SocialButtons;