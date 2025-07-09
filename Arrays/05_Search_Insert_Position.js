// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

const searchInsertPosition = function (nums, target) {
  if (nums.length === 0) return 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      return i;
    } else if (nums[i] > target) {
      return i;
    }
  }
  return nums.length;
};
nums = [1, 3, 5, 6];
target = 7;
console.log(searchInsertPosition(nums, target));
