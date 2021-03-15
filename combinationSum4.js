/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function(nums, target) {
    var dp=new Array(target+1).fill(0)
    dp[0]=1
    for(var j=0 ;j<=target ;j++){
        for(var i=0 ;i<nums.length ;i++){
            if(nums[i]<=j){
                console.log('changing',nums[i],j);
                dp[j]+=dp[j-nums[i]]
                console.log('after changing',nums[i],j,dp);

            }
        }
    }
     return dp[target]
}; 
 

console.log(combinationSum4([1,3,5],4));