/** https://leetcode.com/problems/integer-to-roman/
 * Transforms Integer in Roman number according to rules in the function
 * @param {number} num
 * @return {string}
 */
export const intToRoman = function(num) {
  const symbols = ['I', 'V', 'X', 'L', 'C', 'D', 'M']; // Listed like this: 'ones', 'fives', 'tens', 'fivesOfTens', etc.
  const rule = ['', 'o', 'oo', 'ooo', 'of', 'f', 'fo', 'foo', 'fooo', 'ot']; // o is ones, f is fives, t is tens

  let roman = '';
  for (let numStr = String(num), i = numStr.length - 1, j = 0; i >= 0; i--, j++) {
    const romanNum = [...rule[numStr[i]]].map((x) => {
      if (x === 'o') return symbols[j * 2];
      if (x === 'f') return symbols[j * 2 + 1];
      if (x === 't') return symbols[j * 2 + 2];
    }).join('');
    roman = romanNum + roman;
  }
  return roman;
};

/** https://leetcode.com/problems/roman-to-integer/
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
    'M': 1000,
  };
  let roman = 0;
  for (let i = 0; i < s.length; i++) {
    roman += (rule[s[i]] < rule[s[i + 1]]) ? -rule[s[i]] : rule[s[i]];
  }
  return roman;
};

/** https://leetcode.com/problems/longest-common-prefix/
 * Finds the longest common prefix string amongst an array of strings
 * @param {string[]} strs
 * @return {string}
 */
export const longestCommonPrefix = function(strs) {
  if (!strs[0]) return '';
  let result = '';
  for (let j = 0; strs[0][j] !== undefined; j++) {
    for (let i = 1; i < strs.length; i++) {
      if (strs[i - 1][j] !== strs[i][j]) return result;
    }
    result += strs[0][j];
  }
  return result;
};

/** https://leetcode.com/problems/3sum/
 * Finds all unique triplets in the array which gives the sum of zero
 * @param {number[]} nums
 * @return {number[]}
 */
export const threeSum = function(nums) {
  nums = nums.sort((a, b) => a - b);
  const hashArr = {};
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1, k = nums.length - 1; j < k;) {
      if (-nums[i] > nums[j] + nums[k]) j++;
      else if (-nums[i] < nums[j] + nums[k]) k--;
      else {
        hashArr[`${nums[i]},${nums[j]}`] = [nums[i], nums[j], nums[k]];
        j++;
        k--;
      }
    }
  }
  return Object.values(hashArr);
};
