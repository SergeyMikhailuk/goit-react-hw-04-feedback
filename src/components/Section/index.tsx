import React from 'react';

const Section: React.FC<SectionProps> = props => {
  const { title, children } = props;

  return (
    <section>
      <h2>{title}</h2>
      {children}
    </section>
  );
};

export default Section;

type SectionProps = {
  title: string;
  children: React.ReactNode;
};
