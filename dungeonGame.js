
/**
 * @param {number[][]} dungeon
 * @return {number}
 */
var calculateMinimumHP = function(arr) {
    var dp= new Array(arr.length+1).fill().map(a=>new Array(arr[0].length+1).fill(Infinity))
    var n=arr.length
    var l=arr[0].length
    dp[n][l-1]=1
    dp[n-1][l]=1
    for(var i=n-1;i>=0;i--){
        for(var j=l-1;j>=0;j--){
            console.log(dp)

            dp[i][j]=Math.max(1,Math.min(dp[i+1][j],dp[i][j+1])-arr[i][j] )
        }
    }
    
    return dp[0][0]
};


console.log(calculateMinimumHP([[-2,-3,3],[-5,-10,1],[10,30,-5]]));