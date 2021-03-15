/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function (nums) {
  var start = 0;
  var end = nums.length - 1;
  var sorted = nums.slice();
  sorted.sort((a, b) => a - b);

  var n = nums.length;
  while (n > 0) {
    if (sorted[start] === nums[start]) {
      start = start + 1;
    }

    if (sorted[end] === nums[end]) {
      end -= 1;
    }
    if (start > end) return 0;

    n--;
  }
  return end - start;
};

console.log(findUnsortedSubarray([1, 2, 3, 4, 3, 2, 1, 2]));
