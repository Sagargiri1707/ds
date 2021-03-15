/**
 * @param {number[]} A
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var numSubarrayBoundedMax = function(A, L, R) {
   
    var start=0
    var end=0
    var res=0
    var cur
    for( end=0; end<A.length ;end++){
        if(A[end]>=L && A[end]<=R){
            cur=end-start+1
        }else if(A[end]>R){
            cur=0
            start=end+1
        }
        res+=cur
    }
    return res
};


console.log(numSubarrayBoundedMax([2,1,4,3],2,3));