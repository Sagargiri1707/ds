const newLocal = function (mat, K) {
  var m = mat.length;
  var n = mat[0].length;
  var prefixMat = new Array(m + 1).fill(0).map((_) => new Array(n + 1).fill(0));
  var ans = new Array(m).fill(0).map((_) => new Array(n).fill(0));
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      prefixMat[i][j] =
        prefixMat[i - 1][j] +
        prefixMat[i][j - 1] -
        prefixMat[i - 1][j - 1] +
        mat[i - 1][j - 1];
    }
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j);
      console.log(
        prefixMat[Math.min(m, i + K + 1)][Math.min(n, j + K + 1)],
        prefixMat[Math.max(0, i - K)][Math.min(n, j + K + 1)],
        prefixMat[Math.min(m, i + K + 1)][Math.max(0, j - K)],
        prefixMat[Math.max(0, i - K)][Math.max(0, j - K)]
      );
      console.log("-------------");
      ans[i][j] =
        prefixMat[Math.min(m, i + K + 1)][Math.min(n, j + K + 1)] -
        prefixMat[Math.max(0, i - K)][Math.min(n, j + K + 1)] -
        prefixMat[Math.min(m, i + K + 1)][Math.max(0, j - K)] +
        prefixMat[Math.max(0, i - K)][Math.max(0, j - K)];
    }
  }

  return ans;
};

var matrixBlockSum = newLocal;

console.log(
  matrixBlockSum(
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    1
  )
);
