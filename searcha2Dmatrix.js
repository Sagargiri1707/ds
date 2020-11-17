var searchMatrix = function(arr, target) {
    
    var width=arr[0].length
    var start=0
    var end=arr.length*arr[0].length-1
    var mid
    while(start<=end){
        mid= Math.ceil((start+end)/2)
        var x=Math.floor(mid/width)
        var y =(mid % width)
        if(arr[x][y] >target){
            end=mid-1
        }
        else if(target>arr[x][y]){
            start=mid+1
        }
        else 
            return true
    }
    return false
    
};


console.log(searchMatrix([[1]],1 ));