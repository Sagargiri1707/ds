
var rotate = function (arr) {
    for(var i=0;i<arr.length;i++){
        for(var j=i; j<arr.length;j++){
            var temp=arr[i][j]
            arr[i][j]=arr[j][i]
            arr[j][i]=temp
        }
    }
   
    for(var i=0 ;i<arr.length;i++){
    
        var head=0 
        var tail=arr.length-1
        while(head<tail){
            var temp=arr[i][head]
            arr[i][head]=arr[i][tail]
            arr[i][tail]=temp
            head++
            tail--
        }
    }
    return arr
};
console.log(rotate([[1,2,3],[4,5,6],[7,8,9]]));