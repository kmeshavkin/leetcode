import { romanToInt } from './RomanToInt';

describe('Roman to Int', () => {
  test('III returns 3', () => expect(romanToInt('III')).toBe(3));
  test('IV returns 4', () => expect(romanToInt('IV')).toBe(4));
  test('IX returns 9', () => expect(romanToInt('IX')).toBe(9));
  test('LVIII returns 58', () => expect(romanToInt('LVIII')).toBe(58));
  test('MCMXCIV returns 1994', () => expect(romanToInt('MCMXCIV')).toBe(1994));
});
