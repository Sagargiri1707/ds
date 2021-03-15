/**
 * @param {number[]} prices
 * @return {number}
 */ 
var maxProfit = function(prices) {
   let buy1=-Infinity
   let buy2=-Infinity
   let sell1=0
   let sell2=0
   for( i of prices){
       buy1=Math.max(buy1,-i)
       sell1=Math.max(sell1,buy1+i)
       buy2=Math.max(buy2,sell1-i)
       sell2=Math.max(sell2,buy2+i)
   }
   return sell2
// var by1=-1e10
// var by2=-1e10
// var sell1=0
// var sell2=0
// for(var i=0 ;i< prices.length; i++){
//     by1=Math.max(by1,-prices[i])
//     sell1=Math.max(sell1,prices[i]+by1)
//     by2=Math.max(by2, sell1-prices[i])
//     sell2=Math.max(sell2,prices[i]+by2)
// }
// return sell2
};

console.log(maxProfit([3,3,5,0,0,3,1,4]));