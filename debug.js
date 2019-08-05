const search = function(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  do {
    if (nums[left] === target) return left;
    if (nums[right] === target) return right;
    const prevLeft = left;
    left = Math.ceil((right - left) / 2) + left;
    if ((nums[left] < nums[right]) ^ ((target - nums[left]) * (target - nums[right]) <= 0)) {
      right = left;
      left = prevLeft;
    }
  } while (left < right);
  if (nums[left] === target) return left;
  if (nums[right] === target) return right;
  return -1;
};

console.log(search([1, 3, 5], 5));
