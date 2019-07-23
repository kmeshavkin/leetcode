import {intToRoman, romanToInt, longestCommonPrefix as lp} from './algorithms';

describe('Int to Roman', () => {
  test('3 returns III', () => expect(intToRoman(3)).toBe('III'));
  test('4 returns IV', () => expect(intToRoman(4)).toBe('IV'));
  test('9 returns IX', () => expect(intToRoman(9)).toBe('IX'));
  test('58 returns LVIII', () => expect(intToRoman(58)).toBe('LVIII'));
  test('1994 returns MCMXCIV', () => expect(intToRoman(1994)).toBe('MCMXCIV'));
});

describe('Roman to Int', () => {
  test('III returns 3', () => expect(romanToInt('III')).toBe(3));
  test('IV returns 4', () => expect(romanToInt('IV')).toBe(4));
  test('IX returns 9', () => expect(romanToInt('IX')).toBe(9));
  test('LVIII returns 58', () => expect(romanToInt('LVIII')).toBe(58));
  test('MCMXCIV returns 1994', () => expect(romanToInt('MCMXCIV')).toBe(1994));
});

describe('Longest prefix', () => {
  test('["flower","flow","flight"] returns "fl"', () =>
    expect(lp(['flower', 'flow', 'flight'])).toBe('fl'));
  test('No common prefix returns empty string', () =>
    expect(lp(['dog', 'racecar', 'car'])).toBe(''));
  test('Empty array returns empty string', () => expect(lp([])).toBe(''));
  test('["a"] returns "a"', () => expect(lp(['a'])).toBe('a'));
});
