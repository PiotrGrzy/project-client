import { SvgWrapper, ThemeProvider } from '@nivo/core';
import { ResponsivePie } from '@nivo/pie';

import { CategoryType } from '@/models/expense.schema';
import { Stats } from '@/services/stats.service';
import { getExpenseColor } from '@/utils/common';

const PieChart = ({ data, dataKey }: { data: Stats[]; dataKey: string }) => {
  const parsedData = data
    .filter((d) => d._id !== null)
    .map((d) => ({
      id: d._id,
      value: d.total,
      label: d._id,
      color: getExpenseColor(d._id as CategoryType),
    }));
  console.log('parsedData', parsedData);

  return (
    <ResponsivePie
      data={parsedData}
      margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
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
          anchor: 'right',
          direction: 'column',
          justify: false,
          translateX: 0,
          translateY: 16,
          itemsSpacing: 10,
          itemWidth: 100,
          itemHeight: 18,
          itemTextColor: '#999',
          itemDirection: 'left-to-right',
          itemOpacity: 1,
          symbolSize: 18,
          symbolShape: 'circle',
        },
      ]}
    />
  );
};

export default PieChart;
