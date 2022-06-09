import { FC } from 'react';

interface NavigationProps {
  link1: string;
  link2: string;
  link3: string;
  link4: string;
}

const Navigation: FC<NavigationProps> = ({ link1, link2, link3, link4 }) => {
  return (
    <nav className="flex-row container justify-end justify-between px-5 text-sm max-w-lg hidden md:flex">
      <a className="text-gold link-underline-gold" href="resume.pdf" download>
        {link1}
      </a>
      <a className="text-forest-green link-underline"href="#projects">
        {link2}
      </a>
      <a className="text-forest-green link-underline" href="#blog">
        {link3}
      </a>
      <a className="text-forest-green link-underline" href="#contact">
        {link4}
      </a>
    </nav>
  );
};

export default Navigation;
