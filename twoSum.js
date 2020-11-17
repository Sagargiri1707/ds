var twoSum = (arr,target) => {
    var map = new Map()
    for (var i = 0; i < arr.length; i++){
        var diff=target-arr[i]
        if (map.has(diff)) {
            return [map.get(diff),arr[i]]
        }
        map.set(arr[i],arr[i])
    }
    return false
}

console.log(twoSum([2,5,7,9] ,12));