const trap=(arr) => {
    if (arr.length < 3)
        return 0
    var maxArr = [], minArr = new Array(arr.length).fill(0)
    var count=0
    var max = arr[0]
    for (var i = 0; i < arr.length; i++){
        if (arr[i] < max)
            maxArr.push(max)
        else {
            max = arr[i]
            maxArr.push(max)
        }
        
    }
    max = arr[arr.length - 1]
    for (var i = arr.length-1; i >=0; i--){
        if (arr[i] < max)
            minArr[i]=max
        else
        {
            max = arr[i]
            minArr[i]=max

            }
    }    
    for (var i = 0; i < arr.length; i++){
            count+=Math.min(minArr[i],maxArr[i])-arr[i]
    }
    return count
}

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]));