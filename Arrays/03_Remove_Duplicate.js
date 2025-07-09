// Remove Duplicate from sorted Array

const removeDup = function (nums) {
  if (nums.length === 0) return 0;
  let k = 0;
  for (let value of nums) {
    if (value !== nums[k]) {
      nums[++k] = value;
    }
  }
  return k + 1;
};

// another way to slove

const removeDup1 = function (nums) {
  if (nums.length === 0) return 0;
  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[j] !== nums[i]) {
      i++;
      nums[i] = nums[j];
    }
  }
  return i + 1;
};

let nums = [1, 1, 2, 2, 3];
console.log(removeDup1(nums));
