/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
var mincostTickets = function(days, costs) {
    var dp=new Array(days[days.length-1]).fill(Infinity)
    dp[0]=0
    dp[1]=costs[0]
    for(var i=2;i<days.length;i++){
        for(var j of costs){
            dp[i]=Math.min(dp[i-1]+costs[0])
        }
    }
    console.log(dp);
};

console.log(mincostTickets([1,4,6,7,8,20],[2,7,15]))