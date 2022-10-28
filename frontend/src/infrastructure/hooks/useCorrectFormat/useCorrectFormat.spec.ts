import { act, renderHook } from '@testing-library/react-hooks';
import { useCorrectFormat } from './useCorrectFormat';

describe('useCorrectFormat', () => {
  it('check correct format into data', () => {
    const { result } = renderHook(() => useCorrectFormat());
    expect(result).toBeTruthy();
  });
});
