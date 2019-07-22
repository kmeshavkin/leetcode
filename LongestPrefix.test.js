import {longestCommonPrefix as lp} from './LongestPrefix';

describe('Longest prefix', () => {
  test('["flower","flow","flight"] returns "fl"', () =>
    expect(lp(['flower', 'flow', 'flight'])).toBe('fl'));
  test('No common prefix returns empty string', () =>
    expect(lp(['dog', 'racecar', 'car'])).toBe(''));
  test('Empty array returns empty string', () => expect(lp([])).toBe(''));
  test('["a"] returns "a"', () => expect(lp(['a'])).toBe('a'));
});
