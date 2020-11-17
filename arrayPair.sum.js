
var arrayPairSum = function(nums) {
    nums.sort((a,b) =>a-b)
    var n=0
    var id=0
    for (var i = 0; i < nums.length - 1; i+=2){
        n+=Math.min(nums[i],nums[i+1])
    }
    return n
};

console.log(arrayPairSum([6,2,6,5,1,2]));