import { ResponsivePie } from '@nivo/pie';
import { useMemo } from 'react';

import { CategoryType } from '@/models/expense.schema';
import { Stats } from '@/services/stats.service';
import { getExpenseColor } from '@/utils/common';

const parsePieChartData = (data: Stats[]) => {
  return data
    .filter((d) => d._id !== null)
    .map((d) => ({
      id: d._id,
      value: d.total,
      label: d._id,
      color: getExpenseColor(d._id as CategoryType),
    }));
};

interface PieChartProps {
  data: Stats[];
}

const PieChart = ({ data }: PieChartProps) => {
  const parsedData = useMemo(() => parsePieChartData(data), [data]);
  return (
    <ResponsivePie
      data={parsedData}
      margin={{ top: 40, right: 20, bottom: 120, left: 20 }}
      innerRadius={0.5}
      padAngle={0.7}
      cornerRadius={3}
      activeOuterRadiusOffset={8}
      colors={{ datum: 'data.color' }}
      borderWidth={1}
      borderColor={{
        from: 'color',
        modifiers: [['darker', 0.2]],
      }}
      arcLinkLabelsSkipAngle={11}
      arcLinkLabelsTextColor={{ from: 'color', modifiers: [] }}
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: 'color' }}
      arcLabelsSkipAngle={10}
      arcLabelsTextColor={{
        from: 'color',
        modifiers: [['darker', 2]],
      }}
      legends={[
        {
          anchor: 'bottom',
          direction: 'row',
          justify: false,
          translateX: 0,
          translateY: 50,
          itemsSpacing: 5,
          itemWidth: 75,
          itemHeight: 14,
          itemTextColor: '#999',
          itemDirection: 'left-to-right',
          itemOpacity: 1,
          symbolSize: 14,
          symbolShape: 'circle',
        },
      ]}
    />
  );
};

export default PieChart;
