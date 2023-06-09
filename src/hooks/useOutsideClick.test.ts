import { fireEvent } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';

import useOutsideClick from './useOutsideClick';

describe('useOutsideClick', () => {
  it('should call the handleClose function when clicking outside the ref element', () => {
    const handleClose = vi.fn();
    const ref = { current: document.createElement('div') };
    renderHook(() => useOutsideClick(handleClose, ref));

    fireEvent.mouseUp(document.body);

    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it('should not call the handleClose function when clicking inside the ref element', () => {
    const handleClose = vi.fn();
    const ref = { current: document.createElement('div') };
    renderHook(() => useOutsideClick(handleClose, ref));

    fireEvent.mouseUp(ref.current);

    expect(handleClose).not.toHaveBeenCalled();
  });
});
