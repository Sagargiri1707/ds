var maxSlidingWindow = function(nums, k) {
    var op=[],dequeue=[]
    for(var i= 0 ;i< nums.length ;i++){
        while(dequeue.length>0 && nums[i]> dequeue[dequeue.length-1])
            dequeue.pop()
        dequeue.push(nums[i])
        if(i+1-k >=0){
            op.push(dequeue[0])
            if(nums[i+1-k]===dequeue[0]){
                dequeue.shift()
            }
        }
    }
    return op
};
maxSlidingWindow([1,3,-1,-3,5,3,6,7],3)