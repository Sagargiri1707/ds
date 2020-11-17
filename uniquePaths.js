var uniquePathsWithObstacles = (grid) => {
    var m=grid.length
    var n=grid[0].length
    var dp=new Array(m+1).fill(null).map(a=>new Array(n+1).fill(0))
    dp[0][1]=1
    
    for(var i=0 ;i<m;i++){
        for(var j=0 ;j<n ;j++){
            if (grid[i][j] === 0) {
                console.log('is',i,j);
                dp[i+1][j+1]=dp[i+1][j]+dp[i][j+1]
            }
        }
    }
    console.log(dp);
    return dp[m][n]
   
}

console.log(uniquePathsWithObstacles([
    [1,0],[1,1]
]));