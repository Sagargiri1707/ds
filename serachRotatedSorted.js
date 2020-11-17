/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    var start=0
    var end=nums.length-1
    var mid
    while(start<=end){
        mid = Math.floor((start + end) / 2)
        console.log(start, end, mid, nums[mid]);

        if(nums[mid]===target) return mid
        else if (nums[start] < nums[mid]) {
          
           
            if(nums[start]<=target && nums[mid]>target)  end=mid-1
            else start=mid+1
        }
        else if(nums[mid]<nums[end]){
            if(nums[mid]<target && nums[end]>=target) start=mid+1
            else end=mid-1
        } 
       
        
        else break
    }
      return -1
};
  
console.log(search([3,1],1));