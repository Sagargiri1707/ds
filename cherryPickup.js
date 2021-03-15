

/**
 * @param {number[][]} grid
 * @return {number}
 */
var cherryPickup = function(grid) {
    var n=grid.length
    var dp=new Array(n).fill().map(_=>new Array(n))
    var dp2=new Array(n).fill().map(_=>new Array(n))
    for(var i=0;i<n;i++){
        for(var j=0 ;j<n;j++){
            if(i==0&&j==0) dp[i][j]=grid[i][j]
            else if(i==0 &&j!==0){
                if(grid[i][j]===-1){
                    dp[i][j]=-Infinity
                }else
                dp[i][j]=dp[i][j-1]+grid[i][j]
            } 
            else if(j==0 &&i!==0){
                if(grid[i][j]===-1){
                    dp[i][j]=-Infinity
                }else 
                dp[i][j]=dp[i-1][j]+grid[i][j]
                
            } 
            else{
                if(grid[i][j]===-1){
                    dp[i][j]=-Infinity
                }
                else dp[i][j]=Math.max(dp[i-1][j],dp[i][j-1])+grid[i][j]
            }
            if(grid[i][j])
            grid[i][j]=0
        }
    }

    for(var i=n-1;i>=0;i--){
        for(var j=n-1 ;j>=0;j--){
            if(i==n-1&&j==n-1) dp2[i][j]=grid[i][j]
            else if(i==n-1 &&j!==n-1){
                if(grid[i][j]===-1){
                    dp2[i][j]=-Infinity
                }else
                dp2[i][j]=dp2[i][j+1]+grid[i][j]
            } 
            else if(j==n-1 &&i!==n-1){
                if(grid[i][j]===-1){
                    dp2[i][j]=-Infinity
                }else 
                dp2[i][j]=dp2[i+1][j]+grid[i][j]
                
            }
            else{
                if(grid[i][j]===-1){
                    dp2[i][j]=-Infinity
                }
                else dp2[i][j]=Math.max(dp2[i+1][j],dp2[i][j+1])+grid[i][j]
            }
        }
    }
    console.log(dp);
    console.log(dp2);
};

console.log(cherryPickup([[0,1,-1],[1,0,-1],[1,1,1]]))