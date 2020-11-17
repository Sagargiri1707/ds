const helper = (islands, i, j) => {
    if (i < 0 || i >= islands.length || j < 0 || j >= islands[0].length || islands[i][j]=='0')
        return 
    islands[i][j] = "0"
    helper(islands,i+1,j)
    helper(islands,i-1,j)
    helper(islands,i,j+1)
    helper(islands, i, j - 1)
}

const noOfIslands = (islands) => {
    var count=0
    for (var i = 0; i < islands.length; i++){
        for (var j = 0; j < islands[0].length; j++){
            
            if (islands[i][j] == '1') {
                helper(islands,i,j)
                count++
                
            }
        }
    }
    return count

}
console.log(noOfIslands([["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]));

/**
 * @param {character[][]} grid
 * @return {number}
 */
/*
var helper = (grid,i, j) => {
    if(i>=grid.length||i<0||j<0||j>=grid[0].length){
        return 0
    }
    if(grid[i][j]==="0"){
        return 0
    }
        grid[i][j]='0'
    helper(grid, i+1,j)
    helper(grid, i-1,j)
    helper(grid, i,j+1)
    helper(grid, i, j - 1)
    
    return 1
}
var noOfIslands = function(grid) {
    var count=0
    
    for(var i =0 ;i<grid.length ;i++){
        for(var j=0 ; j<grid[0].length ;j++){
            if (grid[i][j] === 1) {
                count+=helper(grid,i, j)
            }
        }
    }
    
    return count
};
console.log(noOfIslands([[1, 1, 1, 0, 0], [0, 1, 1, 0, 0], [1, 1, 1, 0, 1], [0, 0, 0, 1, 0]]))
*/