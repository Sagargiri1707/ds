/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a,b)=>{
        if(a[0]!==b[0]){
            return a[0]-b[0]
        }
        else
            return a[1]-b[1]
    })
    var i=0
    for(i=0; i<intervals.length-1;i++){
        var prev=intervals[i]
        var next = intervals[i + 1]
        if(prev[1]>next[0] && prev[0]<next[1]){
            intervals[i]=[Math.min(prev[0],next[0]),Math.max(prev[1],next[1])]
            console.log(intervals);
            intervals.splice(i+1, 1)
            i--
        }
        
    }
    
    return intervals
};
console.log(merge([[1,3],[2,6],[8,10],[15,18]]));