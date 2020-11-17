 
var uniquePathsIII = function(grid) {
    var zeroCount = 0, startX, startY, endX, endY
    var ans=0
    for (var i = 0; i < grid.length; i++) {
       for (var j = 0; j < grid[0].length; j++) {
           if (grid[i][j] === 0) 
               zeroCount++
           if (grid[i][j] === 1) {
               startX = i  
               startY = j 
           }
           if (grid[i][j] === 2) {
               endX = i  
               endY = j 
           }
       }
    }

    var helper = (i,j,length) => {
        if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length) {
            return  
        }
        if (grid[i][j] === '#')
            return 
        if (grid[i][j] == '-1')
            return 
        if (grid[i][j] == '2' ) {
            if( length === zeroCount+1)
                ans++
            return 
        }
        var z=grid[i][j]
        grid[i][j]='#'

        helper(i - 1, j, length + 1) 
        helper(i + 1, j, length + 1) 
        helper(i, j - 1, length + 1) 
        helper(i, j + 1, length + 1) 
        grid[i][j]=z
    }
    helper(startX, startY,0)
    return (ans);

};

console.log(uniquePathsIII([[1,0,0,0],[0,0,0,0],[0,0,0,2]]));