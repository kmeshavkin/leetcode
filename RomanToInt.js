/**
 * https://leetcode.com/problems/roman-to-integer/
 * Transforms Roman in Integer number according to rules in the function
 * @param {string} s
 * @return {number}
 */
export const romanToInt = function(s) {
  const rule = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  };
  let roman = 0;
  for (let i = 0; i < s.length; i++) {
    roman += (rule[s[i]] < rule[s[i + 1]]) ? -rule[s[i]] : rule[s[i]];
  }
  return roman;
};