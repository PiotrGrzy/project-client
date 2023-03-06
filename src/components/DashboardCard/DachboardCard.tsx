import Section from '@/components/ui/Section';
import SectionTitle from '@/components/ui/SectionTitle';
import { Stats } from '@/services/stats.service';

interface DachboardCardProps {
  title: string;
  stats: Stats[];
  color: string;
}

const DachboardCard = ({ title, stats, color }: DachboardCardProps) => {
  const totalStats = stats.find((stat) => stat._id === null);
  return (
    <Section>
      <SectionTitle>{title}</SectionTitle>
      <div className="flex flex-col justify-center align-middle flex-1">
        <p>
          <span>Total:</span>
          <span className={`font-semibold text-lg ml-1 ${color}`}>{totalStats?.total}zł</span>
        </p>
      </div>
    </Section>
  );
};

export default DachboardCard;
