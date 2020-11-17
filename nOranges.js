/**
 * @param {number} n
 * @return {number}
 */
var minDays = function(n) {
    var dp=new Array(n+1).fill(1e7)
    dp[1]=1
    dp[2]=2
    for (var i = 3; i <= n; i++){
       if(i%3===0 && i%2===0){
            var a=i-i/2
            var b=i-i*2/3
            dp[i]=1+Math.min(dp[a],dp[b])
        }
        else if( i%2===0){
            var a=i-i/2
            dp[i]=1+Math.min(dp[i-1],dp[a])
        }
        else if(i%3===0){
            var a=i-2*i/3
            dp[i]=1+Math.min(dp[i-1],dp[a])
        }
        dp[i] = Math.min(dp[i], 1+dp[i-1]);
    }
    return dp[n]
};

console.log(minDays(61455274))