function maximumLearning(iv, articles, p) {
    var N = iv.length;
    var dp = new Array(N+1).fill().map(a=>new Array(p+1).fill(0))
     for (var i = 1; i <= N; i++) {
      for (var j = 1; j <= p; j++) {
        dp[i][j]=dp[i-1][j]
         if(j>=2*articles[i-1]){
            dp[i][j]=Math.max(dp[i][j], dp[i-1][j-2*articles[i-1]]+iv[i-1])
        }

      }
    }
    console.log(dp)
      return dp[N][p];
  }

console.log(maximumLearning([2,4,4,5],[2,2,3,4],15));
 