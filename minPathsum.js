/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
     var l=grid.length
     var h=grid[0].length
     for(var i=0;i<l;i++){
        for(var j=0 ;j<h;j++){
            if(i===0 && j===0){
                grid[i][j]=grid[i][j]
            }
            else if(i===0 && j!=0) grid[i][j]+=grid[i][j-1]
            else if(j===0 && i!=0) grid[i][j]+=grid[i-1][j]
            else grid[i][j]+=Math.min(grid[i-1][j],grid[i][j-1])
        }
    }
    return grid[l-1][h-1]
    // var dfs=(i,j)=>{
    //     if(i===l-1&& j===h-1){
    //         return grid[i][j]
    //     }
    //     else {
    //         if(i===h-1) return dfs(i,j+1)+grid[i][j]
    //         else if(j===h-1) return dfs(i+1,j)+grid[i][j]
    //         else return Math.min(dfs(i+1,j),dfs(i,j+1))+grid[i][j]
    //     }
    // }
    
    // return dfs(0,0)
  
};

console.log(minPathSum([[1, 3, 1],[1, 5, 1],[4, 2, 1]]));
