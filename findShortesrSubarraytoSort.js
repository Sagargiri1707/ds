var findLengthOfShortestSubarray = function (arr) {
  let j = arr.length - 1;
  const n = arr.length;
  while (j > 0 && arr[j - 1] <= arr[j]) j--;
  if (j == 0) return 0;
  let ans = j;
  for (let i = 0; i < n; i++) {
    if (i > 0 && arr[i - 1] > arr[i]) break;
    while (j < n && arr[i] > arr[j]) ++j;
    ans = Math.min(ans, j - i - 1);
  }
  return ans;
};
console.log(findLengthOfShortestSubarray([1, 2, 3, 10, 4, 4, 5, 2, 3, 5]));
