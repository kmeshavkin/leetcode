import {intToRoman, romanToInt, longestCommonPrefix as lp, threeSum} from './algorithms';

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

describe('Sum of three', () => {
  test('Case 1', () => expect(threeSum([-1, 0, 1, 2, -1, -4])).toStrictEqual([[-1, -1, 2], [-1, 0, 1]]));
  test('Case 2', () => expect(threeSum([-2, -1, 0, 1, 2])).toStrictEqual([[-2, 0, 2], [-1, 0, 1]]));
  test('Case 3', () => expect(threeSum([-4, -2, -2, -2, 0, 1, 2, 2, 2, 3, 3, 4, 4, 6, 6])).toStrictEqual([[-4, -2, 6], [-4, 0, 4], [-4, 1, 3], [-4, 2, 2], [-2, -2, 4], [-2, 0, 2]]));
  test('Returns only unique triples', () => expect(threeSum([0, 0, 0, 0])).toStrictEqual([[0, 0, 0]]));
  test('Zero array returns itself', () => expect(threeSum([0, 0, 0])).toStrictEqual([[0, 0, 0]]));
  test('Array with length < 3 returns []', () => expect(threeSum([0, 0])).toStrictEqual([]));
});
