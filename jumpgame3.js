/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
var canReach = function(arr, start) {
    var queue=[]
    var map=new Map()
    queue.push(start)
    
    while(queue.length>0){
        var pop=queue.shift()
        var forward=pop+arr[pop]
        var backward = pop - arr[pop]
        console.log(pop,forward,backward);
        if(arr[pop]===0)
            return true
        if (forward < arr.length) {
            if (!map.has(pop) && !map.has(forward)) {
                queue.push(forward)
            }
        }
        if( backward>=0){
            if (!map.has(pop) && !map.has(backward))
            {
                queue.push(backward)
            }
        }
        map.set(pop, 1)
        console.log(queue);
    }
    return false
};

console.log(canReach([0,1] , 1));