
var canJump=(nums) =>{
    if (nums.length == 1)
        return true
    
    var position=0
    for(var i=0;i<nums.length;i++ ){
        if(i>position)
            break
        position=Math.max(i+nums[i],position)
    }
    return position>=nums.length-1
}
console.log(canJump([2,3,1,1,4]))