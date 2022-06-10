import { FC } from 'react';

interface HeadingUpperCaseProps {
  headinguppercase: string;
}

interface HeadingProps {
  heading: string;
}

interface SubHeadingProps {
  subheading: string;
}

export const HeadingUpperCase: FC<HeadingUpperCaseProps> = ({ headinguppercase }) => {
  return (
    <div className="flex flex-col flex-start mt-20 md:mt-10">
      <h1 className="my-8 text-white font-sans text-5xl display-linebreak uppercase">{headinguppercase}</h1>
    </div>
  );
};

export const Heading: FC<HeadingProps> = ({ heading }) => {
  return (
    <div className="flex flex-start">
      <h1 className="my-8 text-white font-sans text-5xl display-linebreak">{heading}</h1>
    </div>
  );
};

export const SubHeading: FC<SubHeadingProps> = ({ subheading }) => {
  return (
    <div className="flex flex-start">
      <h3 className="text-light-grey font-normal font-mono leading-10 text-2xl display-linebreak">{subheading}</h3>
    </div>
  );
};
