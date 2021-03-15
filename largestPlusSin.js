/**
 * @param {number} N
 * @param {number[][]} mines
 * @return {number}
 */
var orderOfLargestPlusSign = function (N, mines) {
  var dp = new Array(N + 1).fill().map((a) => new Array(N + 1).fill(0));
  var res = 0;
  var map = new Map();
  for (var i of mines) {
    map.set(`${i[0]}_${i[1]}`, 0);
  }
  const findExist = (i, j, val) => {
    if (
      i + val >= N ||
      i - val >= N ||
      i + val < 0 ||
      i - val < 0 ||
      j + val >= N ||
      j - val >= N ||
      j + val < 0 ||
      j - val < 0
    )
      return false;

    if (map.has(`${i}_${j + val}`)) return false;
    if (map.has(`${i}_${j - val}`)) return false;
    if (map.has(`${i + val}_${j}`)) return false;
    if (map.has(`${i - val}_${j}`)) return false;
    return true;
  };
  for (var i = 1; i < N + 1; i++) {
    for (var j = 1; j < N + 1; j++) {
      if (map.has(`${i - 1}_${j - 1}`)) dp[i][j] = 0;
      else {
        var min = Math.min(dp[i - 1][j], dp[i][j - 1]);

        if (findExist(i - 1, j - 1, min)) {
          dp[i][j] = min + 1;
        } else {
          dp[i][j] 
          = min;
        }
        res = Math.max(res, dp[i][j]);
      }
    }
  }
  console.log(dp);
  return res;
};

console.log(
  orderOfLargestPlusSign(10, [
    [0, 0],
    [0, 1],
    [0, 2],
    [0, 7],
    [1, 2],
    [1, 3],
    [1, 9],
    [2, 3],
    [2, 5],
    [2, 7],
    [2, 8],
    [3, 2],
    [3, 5],
    [3, 7],
    [4, 2],
    [4, 3],
    [4, 5],
    [4, 7],
    [5, 1],
    [5, 4],
    [5, 8],
    [5, 9],
    [7, 2],
    [7, 5],
    [7, 7],
    [7, 8],
    [8, 5],
    [8, 8],
    [9, 0],
    [9, 1],
    [9, 2],
    [9, 8],
  ])
);
