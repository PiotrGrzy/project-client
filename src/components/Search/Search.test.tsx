import { fireEvent, render, waitFor } from '@testing-library/react';

import Search from './Search';

describe('Search component', () => {
  const onSearchChange = vi.fn();
  it('renders text input', () => {
    const { getByPlaceholderText } = render(<Search onSearchChange={onSearchChange} />);
    const searchInput = getByPlaceholderText('Search…');
    expect(searchInput).toBeInTheDocument();
  });

  it('launch callback fn after debounce delay', async () => {
    const { getByPlaceholderText } = render(<Search onSearchChange={onSearchChange} />);
    const searchInput = getByPlaceholderText('Search…');
    fireEvent.change(searchInput, { target: { value: 'test' } });
    expect(onSearchChange).not.toHaveBeenCalled();
    await waitFor(() => expect(onSearchChange).toHaveBeenCalledWith('test'));
  });
});
