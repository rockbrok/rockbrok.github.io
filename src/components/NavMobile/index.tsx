const NavMobile = () => {
  return (
    <nav className="flex flex-row container justify-end justify-between md:hidden">
      <div className="flex flex-row items-center gap-x-2">
        <a className="bg-github-icon bg-no-repeat bg-46 bg-center h-10 w-10" href="https://github.com/paq000" target="_blank" rel="noreferrer" />
        <a className="bg-linkedin-icon bg-no-repeat bg-46 bg-center h-10 w-10" href="" />
        <a className="bg-whatsapp-icon bg-no-repeat bg-46 bg-center h-10 w-10"  href="" />
        <a className="bg-email-icon bg-no-repeat bg-46 bg-center h-10 w-10" href="#contact" />
      </div>
      <a className="bg-download-icon bg-no-repeat bg-46 bg-center w-12 h-12 shrink-0 ml-4 gold-filter" href="resume.pdf" download />
    </nav>
  );
};

export default NavMobile;