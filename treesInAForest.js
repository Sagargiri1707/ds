/**
 * @param {number[][]} forest
 * @return {number}
 */
var cutOffTree = function (forest) {
    var count = 0
    var val = 0
    var helper = (i, j) => {
        if (i < 0 || i >=forest.length || j < 0 || j >= forest[0].length || forest[i][j]===0)
            return
        console.log(i,j);
        if (forest[i][j] === 0) {
            val++
            return
        }
        if (forest[i][j] !== 1) {
            count++
            val++
        }
        helper(i+1,j)
        helper(i-1,j)
    
        helper(i,j+1)
        helper(i,j-1)
    }

    helper(0, 0)
    console.log(val,forest.length);
    if (val === forest.length * forest[0].length) {
        return count++
    }
    else
        return -1
};
console.log(cutOffTree([
    [1,2,3],
    [0,0,4],
    [7,6,5]
   ]));