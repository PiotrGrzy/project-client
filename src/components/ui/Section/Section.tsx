import { ReactNode } from 'react';

const Section = ({ children }: { children: ReactNode }) => {
  return <section className="bg-amber-800/20 p-2 rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)]">{children}</section>;
};

export default Section;
