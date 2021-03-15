/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function(arr) {
     for(var i=1;i<arr.length;i++){
        for(var j=0;j<arr.length;j++){
            if(j===0){
                 arr[i][j]+=Math.min(arr[i-1][j],arr[i-1][j+1])
            }
            else  if(j===arr.length-1){
                arr[i][j]+=Math.min(arr[i-1][j],arr[i-1][j-1])
            }
            else{
                arr[i][j]+=Math.min(arr[i-1][j],arr[i-1][j+1],arr[i-1][j-1])
            }
        }
    }
    return Math.min(...arr[arr.length-1])
};


console.log(minFallingPathSum([[2,1,3],[6,5,4],[7,8,9]]));