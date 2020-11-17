const helper = (arr, len, width, color, visited) => {
    if (len < 0 || len >= arr.length || width < 0 || width >= arr[0].length || arr[len][width] != color )
        return
    
    visited[len][width] = 1
    arr[len][width]=null
    helper(arr,len + 1, width,color, visited)
    helper(arr,len - 1, width,color, visited)
    helper(arr,len, width + 1,color, visited)
    helper(arr,len, width - 1,color, visited)

    
}

const PaintBucket = (arr) => {
    visited = [[0, 0, 0, 0], [0, 0, 0, 0],[0, 0, 0, 0]]
    var count=0
     for (var k = 0; k < visited.length; k++){
         for (var j = 0; j < visited[0].length; j++){
             if (visited[k][j] === 0) {
                 helper(arr, k, j,arr[k][j], visited)
                 count++
            }
         }
     }
     console.log(count);
}
(PaintBucket([['a', 'b', 'a', 'c'], ['c', 'd', 'a', 'd'], ['g', 'h', 'e', 'g']]));