const NavMobile = () => {
  return (
    <nav className="flex flex-row container justify-end justify-between md:hidden">
      <div>
        <a className="bg-github-icon inline-flex bg-no-repeat bg-contain bg-center w-12 h-12 px-3" href="" />
        <a className="bg-linkedin-icon inline-flex bg-no-repeat bg-contain bg-center w-12 h-12 white-filter px-3" href="" />
  Be
        
        <a className="text-forest-green px-3" href="">
  Be
        </a>
        <a className="bg-email-icon inline-flex bg-no-repeat bg-contain bg-center w-12 h-12 white-filter px-3" href="#contact" />

      </div>
      <a className="bg-download-icon bg-no-repeat bg-contain bg-center w-12 h-12 gold-filter px-3" href="resume.pdf" download />
    </nav>
  );
};

export default NavMobile;