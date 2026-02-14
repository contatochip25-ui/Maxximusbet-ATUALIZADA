import React, { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  dark?: boolean;
}

const Section: React.FC<SectionProps> = ({ children, className = "", id, dark = true }) => {
  return (
    <section 
      id={id} 
      className={`
        w-full px-6 py-20 md:py-24 
        ${dark ? 'bg-premium-black text-white' : 'bg-premium-dark text-white'}
        ${className}
      `}
    >
      <div className="max-w-6xl mx-auto w-full">
        {children}
      </div>
    </section>
  );
};

export default Section;