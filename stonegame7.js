/**
 * @param {number[]} stones
 * @return {number}
 */
var stoneGameVII = function(stones) {
    if(stones.length===0)
        return 0
    if(stones.length===1)
        return 1
    var start=0,end=stones.length-1
    var max=0;
    var min=0
    var sum=stones.reduce((a,b)=>a+b)
    for (var i=0;i<stones.length;i++){
        if(i%2===0){
            var s1=sum-stones[start]
            var s2=sum-stones[end]
            if(s1>s2){
                min=min+s1
                sum=sum-stones[start++]
                
            }
            else{
                min=min+s2
                sum=sum-stones[end--]
            }
            // if(stones[start]<=stones[end]){
            
            //     min+=sum-stones[start]
            //     sum=sum-stones[start++]
            //     console.log([max,min,i]);
            // } 
            // else{
            //     min+=sum-stones[end]
            //     sum=sum-stones[end--]
            //     console.log([max,min,i]);
//            }
        }
        else{
            var s1=sum-stones[start]
            var s2=sum-stones[end]
            if(s1>s2){
                max=max+s1
                sum=sum-stones[start++]
                
            }
            else{
                max=max+s2
                sum=sum-stones[end--]
            }
            // if(stones[start]<=stones[end]){
            //     console.log([sum,end,stones[end]]);
            //     max+=sum-stones[end]
            //     sum=sum-stones[end--]
            //     console.log([max,min,i]);
            // }else{
            //     max+=sum-stones[start]
            //     sum=sum-stones[start++]
            //     console.log([max,min,i]);
            // }
        }
   
    }
    console.log(max,min,sum)
    return min-max
};


console.log(stoneGameVII([5,3,1,4,2]));