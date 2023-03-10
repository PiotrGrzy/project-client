import { render, screen } from '@testing-library/react';

import MissingView from './MissingView';

describe('MissingView', () => {
  it('renders correctly', () => {
    render(<MissingView />);
    const test = screen.getByText(/MissingView/i);
    expect(test).toBeVisible();
  });
});
