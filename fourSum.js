/*
var fourSum = function(nums, target) {

    var obj = {}
    var res = []
    for (var i = 0; i < nums.length; i++){
        for (var j = i + 1; j < nums.length; j++){
            obj[nums[i]+nums[j]]=obj[nums[i]+nums[j]]?obj[nums[i]+nums[j]].concat([[i,j]]) : [[i,j]]
        }
    }
    console.log(obj);
    var res1=new Map()
    Object.keys(obj).forEach(d => {
        var val = target - parseInt(d)
        if (obj[val]) {
         
            for (var i of obj[val]) {
                for (var j of obj[d])
                {
                 
                    if (i[0] !== j[0] && i[1] !== j[1] && i[0] !== j[1] && i[1] !== j[0]) {
                     
                        res1.set(JSON.stringify([nums[i[0]], nums[i[1]], nums[j[0]], nums[j[1]]].sort((a, b) => a - b)),1)
                    }
                }                
            }
        }
    })
    for (var i of res1.keys()) {
        res.push(JSON.parse(i))
    }
  return res
};*/

var fourSum = function(nums, target) {
    var res=[]
    nums.sort((a,b)=>a-b)
    if(nums.length<4)
        return res
    var n=nums.length
    for(var i=0 ;i<nums.length-3;++i){
        if(i>0 && nums[i]==nums[i-1]) continue
        if(nums[i]+nums[i+1]+nums[i+2]+nums[i+3] > target) break
        if(nums[i]+nums[n-1]+nums[n-2]+nums[n-3] <target) continue
        
        for(var j=i+1; j<n-2 ;++j){

            if(j>i+1 && nums[j]==nums[j-1]) continue
        
            if(nums[i]+nums[j]+nums[j+1]+nums[j+2] > target) break
            if(nums[i]+nums[j]+nums[n-1]+nums[n-2] <target) continue
            var left=j+1
            var right=n-1
            while(left<right){
                var t=nums[i]+nums[j]+nums[left]+nums[right]
                if (t === target) {
                    res.push([nums[i],nums[j],nums[left],nums[right]])
                    while(left<right && nums[left]==nums[left+1]) left++
                    while(left<right && nums[right]==nums[right-1]) right--
                }
                if(t<target)
                    left++
                else
                    right--
                
            }
            
        }
        
    }
    return res
};
console.log(fourSum([1,0,-1,0,-2,2],0));