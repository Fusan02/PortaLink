import { toClassNames } from './toClassNames_utils';

describe('toClassNames', () => {
  it('文字列だけが結合される', () => {
    expect(toClassNames(['a', 'b', 'c'])).toBe('a b c');
  });

  it('undefined が除外される', () => {
    expect(toClassNames(['a', undefined, 'c'])).toBe('a c');
  });

  it('空文字が除外される', () => {
    expect(toClassNames(['a', '', 'c'])).toBe('a c');
  });

  it('undefined と空文字がすべて除外される', () => {
    expect(toClassNames(['', undefined, ''])).toBe('');
  });

  it('空配列の場合は空文字列を返す', () => {
    expect(toClassNames([])).toBe('');
  });
});
