import React, { FC } from 'react';

interface HeadingProps {
  heading: string;
}

interface SubHeadingProps {
  subheading: string;
}

export const Heading: FC<HeadingProps> = ({ heading }) => {
  return (
    <div className="flex flex-col flex-start mt-20 md:mt-10">
      <h1 className="my-8 text-white font-sans text-6xl display-linebreak uppercase">{heading}</h1>
    </div>
  );
};

export const SubHeading: FC<SubHeadingProps> = ({ subheading }) => {
  return (
    <div className="flex flex-start">
      <h3 className="text-light-grey font-normal font-mono leading-10 text-3xl display-linebreak">{subheading}</h3>
    </div>
  );
};
