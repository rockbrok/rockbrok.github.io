const NavMobile = () => {
  return (
    <nav className="flex flex-row container justify-end justify-between md:hidden">
      <div className="flex flex-row items-center">
        <a className="bg-github-icon nav-icons" href="https://github.com/paq000" target="_blank" rel="noreferrer" />
        <a className="bg-linkedin-icon nav-icons" href="" />
        <a className="bg-whatsapp-icon nav-icons"  href="" />
        <a className="bg-email-icon mail-icon white-filter" href="#contact" />

      </div>
      <a className="bg-download-icon bg-no-repeat bg-contain bg-center w-14 h-14 gold-filter px-3" href="resume.pdf" download />
    </nav>
  );
};

export default NavMobile;