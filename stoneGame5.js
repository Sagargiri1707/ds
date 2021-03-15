var stoneGame5 = (arr) => {
  var dp = new Array(arr.length)
    .fill(0)
    .map((_) => new Array(arr.length).fill(-1));
  var preficArr = new Array(arr.length + 1).fill(0);

  for (var i = 0; i < arr.length; i++) {
    preficArr[i + 1] = preficArr[i] + arr[i];
  }
  var helper = (l, r) => {
    if (l == r) return 0;
    if (dp[l][r] !== -1) {
      return dp[l][r];
    }
    dp[l][r] = 0;
    for (var i = l + 1; i <= r; i++) {
      var left = preficArr[i] - preficArr[l];
      var right = preficArr[r] - preficArr[i + 1];
      if (left > right)
        dp[l][r] = Math.max(dp[l][r], Math.max(l + helper(l, i)));
      else if (left < right)
        dp[l][r] = Math.max(dp[l][r], Math.max(r + helper(i + 1, r)));
      else
        dp[l][r] = Math.max(
          dp[l][r],
          Math.max(l + helper(l, i), r + helper(i + 1, r))
        );
    }
    return dp[l][r];
  };
  var z = helper(0, arr.length - 1);
  console.log(z);
  console.log(dp);
  return z;
};

console.log(stoneGame5([6, 2, 3, 4, 5, 5]));
