import { ReactNode } from 'react';

import Section from '@/components/ui/Section';
import SectionTitle from '@/components/ui/SectionTitle';
import { Stats } from '@/services/stats.service';

interface DachboardCardProps {
  title: string;
  stats: Stats[];
  color: string;
  children?: ReactNode;
}

const DachboardCard = ({ title, stats, color, children }: DachboardCardProps) => {
  const totalStats = stats.find((stat) => stat._id === null);

  return (
    <Section>
      <div className="flex justify-between align-middle flex-1 p-1">
        <div>
          <SectionTitle>{title}</SectionTitle>
          <p className={`font-semibold lg:text-3xl py-2 ${color}`}>{totalStats?.total}zł</p>
        </div>
        <div className={`${color} self-center`}>{children}</div>
      </div>
    </Section>
  );
};

export default DachboardCard;
