import { render } from '@testing-library/react';

import { Stats } from '@/services/stats.service';

import DashboardCard from './DashboardCard';

describe('Dashboard Card', () => {
  it('renders the title and total amount correctly', () => {
    const title = 'Example Title';
    const stats: Stats[] = [
      { _id: null, total: 100 },
      { _id: 'food', total: 50 },
      { _id: 'car', total: 75 },
    ];
    const color = 'text-blue-300';

    const { getByText } = render(
      <DashboardCard title={title} stats={stats} color={color}>
        <div>Some child component</div>
      </DashboardCard>,
    );

    const titleElement = getByText(title);
    const totalAmountElement = getByText('100zł');
    expect(titleElement).toBeInTheDocument();
    expect(totalAmountElement).toBeInTheDocument();
    expect(totalAmountElement).toHaveClass(color);
  });
});
