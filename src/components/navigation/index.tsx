import React, { FC } from 'react';

interface NavigationProps {
    link1: string;
    link2: string;
    link3: string;
    link4: string;
}

const Navigation: FC<NavigationProps> = ({ link1, link2, link3, link4 }) => {
  return (
    <nav className="flex flex-row container justify-end justify-between p-6 text-sm max-w-lg">

        <h1 className="text-gold link-underline-gold">
          <a href="resume.pdf" download>
            {link1}
          </a>
        </h1>
        <h1 className="text-forest-green link-underline">
          <a href="#portfolio">
            {link2}
          </a>
        </h1>
        <h1 className="text-forest-green link-underline">
          <a href="#contact">
            {link3}
          </a>
        </h1>
        <h1 className="text-forest-green link-underline">
          <a href="#blog">
            {link4}
          </a>
        </h1>

    </nav>
  );
};

export default Navigation;
