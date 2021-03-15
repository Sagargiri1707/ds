/**
 * @param {number[]} prices
 * @return {number}
 */

var maxProfit = function(prices) {
   var map=new Map()
    var profit=(index,buyOrSell)=>{
        if(index>=prices.length)
            return 0
        var x=0
        var key=`${index}__${buyOrSell}`
        if(map.has(key))
            return map.get(key)
        if(buyOrSell===0){
            var max1=profit(index+1,1)-prices[index]
            var max2=profit(index+1,0)
              x=Math.max(max1,max2)
        }
        else{
            var max1=profit(index+2,0)+prices[index]
            var max2=profit(index+1,1)
               x=Math.max(max1,max2)
        }
        map.set(key,x)
         return x
    }
    return profit(0,0)
};

console.log(maxProfit([1,2,3,0,2]));