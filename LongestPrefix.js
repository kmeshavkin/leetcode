/**
 * https://leetcode.com/problems/longest-common-prefix/
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
