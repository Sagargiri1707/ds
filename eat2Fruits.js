var eatTwoFruits = (arr) => {
    var map = new Map()
    var i = 0
    var j = 0
    var ans=1
    while (j < arr.length) {
        if (map.size<=2) {
            map.set(arr[j], j++)
        }
        if (map.size>2){
            min=arr.length-1
            for (var i of map.values()) {
                min=Math.min(min,i)
            }
            map.delete(arr[min])
            i=min+1
        }
        ans=Math.max(ans,j-i)
    }
    return ans
}

console.log(eatTwoFruits([1, 1, 2, 2, 1, 3, 3, 2, 2, 1, 2, 2, 2]));