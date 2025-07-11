// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

const mergeArrays = function (nums1, m, nums2, n) {
  let p1 = m - 1;
  let p2 = n - 1;
  let p = m + n - 1;

  while (p1 >= 0 && p2 >= 0) {
    console.log(p1, p2);

    if (nums1[p1] > nums2[p2]) {
      console.log(nums1[p1], ">", nums2[p2]);

      nums1[p] = nums1[p1];
      console.log(nums1[p], nums1[p1]);

      p1--;
    } else {
      nums1[p] = nums2[p2];
      console.log(nums1[p], nums2[p2]);
      p2--;
    }
    p--;
  }

  while (p2 >= 0) {
    console.log(p2, ">=", 0);

    nums1[p] = nums2[p2];
    console.log(nums1[p], nums2[p2]);
    p2--;
    p--;
  }
  return nums1;
};
nums1 = [1, 2, 3, 0, 0, 0];
m = 3;
nums2 = [2, 5, 6];
n = 3;

console.log(mergeArrays(nums1, m, nums2, n));
