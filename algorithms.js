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

/** https://leetcode.com/problems/letter-combinations-of-a-phone-number/
 * Map numbers to all possible letter combinations from telephone keyboard
 * @param {string} digits Digits to map to letters
 * @return {string[]} All possible combinations
 */
export const letterCombinations = function([...digits]) {
  if (!digits.length) return [];
  const keyboard = [
    [' '], [], ['a', 'b', 'c'], ['d', 'e', 'f'],
    ['g', 'h', 'i'], ['j', 'k', 'l'], ['m', 'n', 'o'],
    ['p', 'q', 'r', 's'], ['t', 'u', 'v'], ['w', 'x', 'y', 'z'],
  ];
  return digits.reduce((convertedArray, digit) => {
    return convertedArray.reduce((allPrev, prev) => {
      return allPrev.concat(keyboard[digit].length
        ? keyboard[digit].map((letter) => prev + letter)
        : prev);
    }, []);
  }, ['']);
};

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/** https://leetcode.com/problems/remove-nth-node-from-end-of-list/
 * Given a linked list, remove the n-th node from the end of list and return its head.
 * @param {ListNode} head First element in linked list
 * @param {number} n n-th element to delete from the end
 * @return {ListNode} Linked list with removed element
 */
export const removeNthFromEnd = function(head, n) {
  let pointerFirst = head;
  let pointerSecond = head;
  let counter = 0;
  while (pointerFirst.next !== null) {
    pointerFirst = pointerFirst.next;
    if (counter >= n) pointerSecond = pointerSecond.next;
    counter++;
  }
  if (counter - n < 0) head = head.next;
  else pointerSecond.next = pointerSecond.next.next;
  return head;
};

/** https://leetcode.com/problems/valid-parentheses/
 * Given a string containing just the characters '(', ')', '{', '}', '[' and ']',
 * determine if the input string is valid.
 * @param {string} s String to check validity in
 * @return {boolean} If string is valid or not
 */
export const isValid = function([...s]) {
  const hash = {
    '(': ')',
    '[': ']',
    '{': '}',
  };
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (hash[s[i]] !== undefined) stack.push(s[i]);
    else if (hash[stack.pop()] !== s[i]) return false;
  }
  return stack.length ? false : true;
};

/** https://leetcode.com/problems/merge-two-sorted-lists/
 * Merge two sorted linked lists and return it as a new list.
 * @param {ListNode} l1 First linked list
 * @param {ListNode} l2 Second linked list
 * @return {ListNode} Combined linked list
 */
export const mergeTwoLists = function(l1, l2) {
  const result = new ListNode();
  let iResult = result;
  while (l1 && l2) {
    if (l1.val < l2.val) {
      iResult.next = l1;
      l1 = l1.next;
    } else {
      iResult.next = l2;
      l2 = l2.next;
    }
    iResult = iResult.next;
  }
  iResult.next = l1 || l2;
  return result.next;
};

/** https://leetcode.com/problems/generate-parentheses/
 * Given n pairs of parentheses, write a function to generate all
 * combinations of well-formed parentheses.
 * @param {number} n Number of pairs of parentheses
 * @param {string} [str=''] String of one of combinations passed down until it meets requirements
 * @param {number} [left=0] Number of left parentheses in string (to avoid counting it each time)
 * @param {number} [right=0] Number of right parentheses in string (to avoid counting it each time)
 * @return {string[]} All combinations of well-formed parentheses
 */
export const generateParenthesis = function(n, str = '', left = 0, right = 0) {
  let arr = [];
  if (str.length == n * 2) return str;
  if (left < n) arr = arr.concat(generateParenthesis(n, str + '(', left + 1, right));
  if (right < n && right < left) arr = arr.concat(generateParenthesis(n, str + ')', left, right + 1));
  return arr;
};

/** https://leetcode.com/problems/implement-strstr/
 * Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
export const strStr = function(haystack, needle) {
  if (!needle) return 0;
  for (let i = 0; i < haystack.length; i++) {
    for (let j = 0; j < needle.length; j++) {
      if (haystack[i + j] !== needle[j]) break;
      if (j === needle.length - 1) return i;
    }
  }
  return -1;
};

/** https://leetcode.com/problems/search-in-rotated-sorted-array/
 * Find target in sorted shifted array in O(log n)
 * @param {number[]} nums Array sorted in ascending order is rotated at some pivot unknown beforehand
 * @param {number} target Target to search
 * @return {number} Index or -1 if not found
 */
export const search = function(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  do {
    if (nums[left] === target) return left;
    if ((right - left <= 1) && (nums[right] === target)) return right;
    const prevLeft = left;
    left = Math.ceil((right - left) / 2) + left;
    if ((nums[left] < nums[right]) ^ ((target - nums[left]) * (target - nums[right]) <= 0)) {
      right = left;
      left = prevLeft;
    }
  } while (left < right);
  return -1;
};

/** https://leetcode.com/problems/sqrtx
 * Compute and return the square root of x, where x is guaranteed to be a non-negative integer.
 * Uses linear search. O(n) time complexity.
 * @param {number} x Number to find square root from
 * @return {number}  Truncated square root result
 */
export const mySqrt = function(x) {
  let result = 1;
  while (result * result <= x) result++;
  return result - 1;
};

/** https://leetcode.com/problems/sqrtx
 * Compute and return the square root of x, where x is guaranteed to be a non-negative integer.
 * Uses binary search. O(log2(n)) time complexity.
 * @param {number} x Number to find square root from
 * @return {number}  Truncated square root result
 */
export const mySqrtLog = function(x) {
  let start = 0;
  let end = x;
  let res = 0;
  while (start < end) {
    res = Math.ceil((start + end) / 2);
    if (res * res <= x && (res + 1) * (res + 1) > x) return res;
    if (res * res < x) start = res;
    else end = res;
  }
  return res;
};

/** https://leetcode.com/problems/sqrtx
 * Compute and return the square root of x, where x is guaranteed to be a non-negative integer.
 * Uses this algorithm: https://www.homeschoolmath.net/teaching/square-root-algorithm.php
 * O(log10(n)) time complexity
 * @param {number} x Number to find square root from
 * @return {number} Truncated square root result
 */
export const mySqrtAlgo = function(x) {
  // quotient is a result which we assemble during for loop
  // divisor is number in brackets from example (e.g. (45))
  // dividend is number we get after subtraction (e.g. 2 after 6 - 4 in example)

  // Prepare first iteration (calculate values for the first pair)
  const source = cutString(String(x)); // Convert to array of pairs
  let quotient = String(findSqrt(source[0])); // Get square root of first pair. It's the first number of the answer
  let dividend = (source[0] - quotient * quotient); // 2 in example (result of 6 - 4)

  // This for loop works for all pairs except of first (which was processed above)
  for (let i = 1; i < source.length; i++) {
    dividend = dividend + source[i]; // add next pair
    const tempD = String(findClosest(quotient * 2, dividend)); // _ in example (in 4_)
    const divisor = String(quotient * 2) + tempD; // actual divisor (where 4_ became 45)
    dividend = dividend - (divisor * tempD); // perform subtraction
    quotient += tempD; // finally get new quotient (result) for current iteration
  }
  return Number(quotient);
};

/** Used to cut string in pairs
 * @param {string} str String to cut in pairs
 * @return {string[]} Array with pairs in it (first element can be single digit)
 */
function cutString(str) {
  const chunks = [str.substr(0, 2 - str.length % 2)];
  str = str.substr(2 - str.length % 2);
  const length = Math.ceil(str.length / 2);
  for (let i = 0; i < length; i++) {
    chunks.push(str.substr(i * 2, 2));
  }
  return chunks;
}

/** Used to find first square root (binary search will be slower here)
 * @param {number} num Number to find square root from
 * @return {string[]} Square root result
 */
function findSqrt(num) {
  let result = 1;
  while (result * result <= num) result++;
  return result - 1;
};

/** Used to find _ (*something* from example) (binary search will be slower here as well)
 * @param {number} num Number to find last digit (123_)
 * @param {number} target Number to use as target
 * @return {number} Result in _, that justifies expression
 */
function findClosest(num, target) {
  let result = 0;
  while ((num * 10 + result) * result <= target) result++;
  return result - 1;
}

/** https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/solution/
 * Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.
 * @param {number[]} nums Sorted array to find positions in
 * @param {number} target Target value to find
 * @return {number[]} Starting and ending positions in form of [start; end]
 */
export const searchRange = function(nums, target) {
  const output = [-1, -1];
  const left = binarySearchRange(nums, target, (c1, c2) => c1 >= c2);
  if (nums[left] !== target) return [-1, -1];
  output[0] = left;
  const right = binarySearchRange(nums, target, (c1, c2) => c1 > c2);
  output[1] = nums[right] === target ? right : right - 1;
  return output;
};

/**
 * Binary search with custom condition
 * @param {number[]} nums Sorted array to find positions in
 * @param {number} target Target value to find
 * @param {function} condition Custom condition which triggers return
 * @return {number} position in array
 */
function binarySearchRange(nums, target, condition) {
  let l = 0;
  let r = nums.length - 1;
  let m = Math.floor((r - l) / 2) + l;
  while (l < r) {
    if (condition(nums[m], target)) r = m;
    else l = m + 1;
    m = Math.floor((r - l) / 2) + l;
  }
  return m;
}
