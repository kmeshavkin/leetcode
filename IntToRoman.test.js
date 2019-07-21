import {intToRoman} from './IntToRoman';

describe('Int to Roman', () => {
  test('3 returns III', () => expect(intToRoman(3)).toBe('III'));
  test('4 returns IV', () => expect(intToRoman(4)).toBe('IV'));
  test('9 returns IX', () => expect(intToRoman(9)).toBe('IX'));
  test('58 returns LVIII', () => expect(intToRoman(58)).toBe('LVIII'));
  test('1994 returns MCMXCIV', () => expect(intToRoman(1994)).toBe('MCMXCIV'));
});
