
var shortestPathBinaryMatrix = function(grid) {
    var path=0

    var findVal=(left,right)=>{
        if(left<0 || left >=grid.length ||right<0 ||right>=grid.length){
            return 0
        }
        if(grid[left][right]==='v'){
            return 0
        }
        var i=grid[left][right]
        grid[left][right]='v'
        findVal(left,right+1)
            findVal(left,right-1)
            findVal(left+1,right)
            findVal(left-1,right)
            findVal(left+1,right+1)
            findVal(left+1,right-1)
            findVal(left-1,right+1)
            findVal(left-1,right-1)
        grid[left][right]=i
        return 
        
    }

    return findVal(0,0)
};

console.log(shortestPathBinaryMatrix([[0,0,0],[1,1,0],[1,1,0]]));