/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(k, prices) {
    let dp = new Array(prices.length).fill(0);
        let size = prices.length;
        for(let t = 1; t <= k; t++){
            let min = prices[0];
            let max = 0;
            for(let i = 0; i < size; i++){
                min = Math.min(min, prices[i] - dp[i]);
                max = Math.max(max, prices[i] - min);
                dp[i] = max
            }
        }
        return dp   
     
};

console.log(maxProfit(3,[7,1,5,3,4,6]));