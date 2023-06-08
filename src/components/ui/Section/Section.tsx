import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface SectionProps {
  children: ReactNode;
  className?: string;
}

const Section = ({ children, className = '' }: SectionProps) => {
  return (
    <section className={twMerge('bg-amber-800/20 p-2 rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)]', className)}>
      {children}
    </section>
  );
};

export default Section;
