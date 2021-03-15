/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let localMax=-Infinity
    let localMin=Infinity
    let res=0
     for(let i of prices){
        if(i>localMax && localMin!==Infinity){
            localMax=i
            res=Math.max(res,localMax-localMin)
        }
        if(i<localMin){
            localMin=i
            localMax=-Infinity
        }
     
    }
    
    return res
    
};

console.log(maxProfit([2,4,1]));