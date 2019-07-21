/**
 * https://leetcode.com/problems/integer-to-roman/
 * Transforms Integer in Roman number according to rules in the function
 * @param {number} num
 * @return {string}
 */
export const intToRoman = function(num) {
  const symbols = ['I', 'V', 'X', 'L', 'C', 'D', 'M']; // Listed like this: 'ones', 'fives', 'tens', 'fivesOfTens', etc.
  const rule = ['', 'o', 'oo', 'ooo', 'of', 'f', 'fo', 'foo', 'fooo', 'ot']; // o is ones, f is fives, t is tens

  let roman = '';
  for (let numStr = String(num), i = numStr.length - 1, j = 0; i >= 0; i--, j++) {
    const romanNum = [...rule[numStr[i]]].map(x => {
      if (x === 'o') return symbols[j * 2];
      if (x === 'f') return symbols[j * 2 + 1];
      if (x === 't') return symbols[j * 2 + 2];
    }).join('');
    roman = romanNum + roman;
  }
  return roman;
};