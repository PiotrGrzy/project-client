import React, { ReactNode } from 'react';

const SectionTitle = ({ children }: { children: ReactNode }) => {
  return <div className="text-primary text-lg">{children}</div>;
};

export default SectionTitle;
