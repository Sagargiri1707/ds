
const helper=(i,j,N,dp,mod,m,n)=>{
    if(i>=m||i<0||j>=n||j<0)
        return 1
    if(N===0) return 0
      
    if (dp[i][j][N] !== undefined) return dp[i][j][N];
    
    dp[i][j][N]=(
        helper(i+1,j,N-1,dp,mod,m,n)+
        helper(i-1,j,N-1,dp,mod,m,n)+
        helper(i,j+1,N-1,dp,mod,m,n)+
        helper(i,j-1,N-1,dp,mod,m,n))%mod
    return dp[i][j][N]
}
var findPaths = function(m, n, N, i, j) {
   var dp= new Array(m)
    .fill()
    .map((_) => new Array(n).fill().map((_) => new Array(N).fill()));
    var mod= Math.pow(10, 9) + 7;
    
   return helper(i,j,N,dp,mod,m,n)
};
console.log(findPaths(1,3,3,0,1));