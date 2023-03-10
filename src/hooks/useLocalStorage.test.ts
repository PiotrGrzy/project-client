import { act } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';

import useLocalStorage from './useLocalStorage';

describe('useLocalStorage hook', () => {
  beforeEach(() => {
    localStorage.clear();
  });
  it('should return the initial value when there is no stored value', () => {
    const { result } = renderHook(() => useLocalStorage('testKey', 'testInitialValue'));
    expect(result.current[0]).toBe('testInitialValue');
  });
  test('should return the stored value when it exists', () => {
    localStorage.setItem('testKey', JSON.stringify('testStoredValue'));
    const { result } = renderHook(() => useLocalStorage('testKey', 'testStoredValue'));
    expect(result.current[0]).toBe('testStoredValue');
  });
  it('should store to localStorage and return a new value', () => {
    const { result } = renderHook(() => useLocalStorage('testKey', 'testInitialValue'));
    act(() => {
      result.current[1]('testNewValue');
    });
    expect(result.current[0]).toBe('testNewValue');
    expect(localStorage.getItem('testKey')).toBe(JSON.stringify('testNewValue'));
  });
});
