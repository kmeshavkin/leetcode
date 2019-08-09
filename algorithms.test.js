import {
  intToRoman,
  romanToInt,
  longestCommonPrefix as lp,
  threeSum,
  letterCombinations as lc,
  isValid,
  generateParenthesis as gp,
  strStr,
  search,
  mySqrt,
  mySqrtLog,
  mySqrtAlgo,
  searchRange,
} from './algorithms';

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
  test('Returns expected results', () => {
    expect(threeSum([-1, 0, 1, 2, -1, -4])).toStrictEqual([[-1, -1, 2], [-1, 0, 1]]);
    expect(threeSum([-2, -1, 0, 1, 2])).toStrictEqual([[-2, 0, 2], [-1, 0, 1]]);
    expect(threeSum([-4, -2, -2, -2, 0, 1, 2, 2, 2, 3, 3, 4, 4, 6, 6])).toStrictEqual([[-4, -2, 6], [-4, 0, 4], [-4, 1, 3], [-4, 2, 2], [-2, -2, 4], [-2, 0, 2]]);
  });
  test('Returns only unique triples', () => expect(threeSum([0, 0, 0, 0])).toStrictEqual([[0, 0, 0]]));
  test('Zero array returns itself', () => expect(threeSum([0, 0, 0])).toStrictEqual([[0, 0, 0]]));
  test('Array with length < 3 returns []', () => expect(threeSum([0, 0])).toStrictEqual([]));
});

describe('Letter combinations', () => {
  test('Returns expected results', () => expect(lc('23')).toStrictEqual(['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf']));
  test('Empty string returns empty array', () => expect(lc('')).toStrictEqual([]));
});

describe('Valid parantheses', () => {
  test('() is valid', () => expect(isValid('()')).toBe(true));
  test('()[]{} is valid', () => expect(isValid('()[]{}')).toBe(true));
  test('(] is NOT valid', () => expect(isValid('(]')).toBe(false));
  test('([)] is NOT valid', () => expect(isValid('([)]')).toBe(false));
  test('{[]} is valid', () => expect(isValid('{[]}')).toBe(true));
  test('[ is NOT valid', () => expect(isValid('[')).toBe(false));
});

describe('Generate parantheses', () => {
  test('Returns expected results', () => expect(gp(3)).toStrictEqual([
    '((()))',
    '(()())',
    '(())()',
    '()(())',
    '()()()',
  ]));
});

describe('Substring in string', () => {
  test('Returns expected results', () => expect(strStr('hello', 'll')).toBe(2));
  test('If not found, return -1', () => expect(strStr('aaaaa', 'bba')).toBe(-1));
  test('If needle is empty, return 0', () => expect(strStr('a', '')).toBe(0));
});

describe('Search in sorted shifted array', () => {
  test('Returns correct index', () => {
    expect(search([4, 5, 6, 7, 0, 1, 2], 0)).toBe(4);
    expect(search([4, 5, 6, 7, 0, 1, 2], 5)).toBe(1);
    expect(search([1, 3, 5], 3)).toBe(1);
    expect(search([1, 3, 5], 5)).toBe(2);
    expect(search([1, 3], 2)).toBe(-1);
    expect(search([1, 3], 1)).toBe(0);
  });
  test('Returns correct index if array length is 1', () => expect(search([1], 1)).toBe(0));
  test('Returns -1 if target is not found', () => expect(search([4, 5, 6, 7, 0, 1, 2], 3)).toBe(-1));
});

describe('MySqrt, O(n) solution', () => {
  test('Returns expected results', () => {
    expect(mySqrt(0)).toBe(0);
    expect(mySqrt(2)).toBe(1);
    expect(mySqrt(3)).toBe(1);
    expect(mySqrt(4)).toBe(2);
    expect(mySqrt(8)).toBe(2);
    expect(mySqrt(80)).toBe(8);
    expect(mySqrt(81)).toBe(9);
    expect(mySqrt(645)).toBe(25);
    expect(mySqrt(3150)).toBe(56);
    expect(mySqrt(97812)).toBe(312);
    expect(mySqrt(10298374)).toBe(3209);
    expect(mySqrt(938745092)).toBe(30638);
  });
});

describe('MySqrt, O(log2(n)) solution', () => {
  test('Returns expected results', () => {
    expect(mySqrtLog(0)).toBe(0);
    expect(mySqrtLog(2)).toBe(1);
    expect(mySqrtLog(3)).toBe(1);
    expect(mySqrtLog(4)).toBe(2);
    expect(mySqrtLog(8)).toBe(2);
    expect(mySqrtLog(80)).toBe(8);
    expect(mySqrtLog(81)).toBe(9);
    expect(mySqrtLog(645)).toBe(25);
    expect(mySqrtLog(3150)).toBe(56);
    expect(mySqrtLog(97812)).toBe(312);
    expect(mySqrtLog(10298374)).toBe(3209);
    expect(mySqrtLog(938745092)).toBe(30638);
  });
});

describe('MySqrt, O(log10(n)) solution', () => {
  test('Returns expected results', () => {
    expect(mySqrtAlgo(0)).toBe(0);
    expect(mySqrtAlgo(2)).toBe(1);
    expect(mySqrtAlgo(3)).toBe(1);
    expect(mySqrtAlgo(4)).toBe(2);
    expect(mySqrtAlgo(8)).toBe(2);
    expect(mySqrtAlgo(80)).toBe(8);
    expect(mySqrtAlgo(81)).toBe(9);
    expect(mySqrtAlgo(645)).toBe(25);
    expect(mySqrtAlgo(3150)).toBe(56);
    expect(mySqrtAlgo(97812)).toBe(312);
    expect(mySqrtAlgo(10298374)).toBe(3209);
    expect(mySqrtAlgo(938745092)).toBe(30638);
  });
});

describe('Search range', () => {
  test('Returns expected results', () => {
    expect(searchRange([5, 7, 7, 8, 8, 10], 8)).toStrictEqual([3, 4]);
    expect(searchRange([2, 2], 2)).toStrictEqual([0, 1]);
    expect(searchRange([1, 2, 2], 2)).toStrictEqual([1, 2]);
    expect(searchRange([0, 0, 1, 1, 1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 6, 6, 6, 8, 10, 10], 4)).toStrictEqual([10, 13]);
  });
  test('Correctly returns if there\'s only one target value', () => expect(searchRange([5, 7, 7, 8, 8, 10], 10)).toStrictEqual([5, 5]));
  test('Returns -1 if not found', () => expect(searchRange([5, 7, 7, 8, 8, 10], 6)).toStrictEqual([-1, -1]));
  test('Correctly returns if array of length 1', () => expect(searchRange([1], 1)).toStrictEqual([0, 0]));
});
