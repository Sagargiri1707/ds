
var bestTeamScore = function(scores, ages) {
    var ob=[]
    for (var i = 0; i < scores.length; i++){
        ob.push([ages[i],scores[i]])
    }
    ob.sort((a, b) => {
    return   a[0]==b[0]?a[1]-b[1]: a[0]-b[0]
    })
    var dp = new Array(scores.length);
        dp[0] = ob[0][1];
        var max = dp[0];
        for(var i=1; i<scores.length; i++) {
            dp[i] = ob[i][1];
            for(var j=0; j<i; j++) {
                if(ob[j][1] <= ob[i][1]) {
                    dp[i] = Math.max(dp[i], ob[i][1]+dp[j]);
                }  
            }
            max = Math.max(dp[i], max);
        }
        return max;
    
};

console.log(bestTeamScore([4,5,6,5],[2,1,2,1]));