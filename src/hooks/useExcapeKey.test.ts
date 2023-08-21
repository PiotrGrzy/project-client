import { fireEvent } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';

import useEscapeKey from './useEscapeKey';

describe('useEscapeKey', () => {
  it('should call the handleClose function when the Escape key is pressed', () => {
    const handleClose = vi.fn();
    renderHook(() => useEscapeKey(handleClose));

    fireEvent.keyUp(document, { key: 'Escape' });

    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it('should not call the handleClose function when a different key is pressed', () => {
    const handleClose = vi.fn();
    renderHook(() => useEscapeKey(handleClose));

    fireEvent.keyUp(document, { key: 'Enter' });

    expect(handleClose).not.toHaveBeenCalled();
  });
});
