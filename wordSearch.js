/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    var helper = (i, j, kal) => {
        if (i < 0 || j < 0 || i >= board.length || j >= board[0].length)
            return false
        

        if (board[i][j] !== word[kal]) {
            return false
        }
        if (kal === word.length - 1) {
     
            return true
        }
        kal++
        var temp=board[i][j]
        board[i][j]=''
        if (helper(i + 1, j, kal)) {
            board[i][j]=temp

                    return true
                }
        if (helper(i - 1, j, kal)) {
            board[i][j]=temp

                    return true
                }
        if (helper(i, j + 1, kal)) {
            board[i][j]=temp

                    return true
                }
        if (helper(i, j - 1, kal)) {
            board[i][j]=temp

                    return true
        }
    }
    for (var k = 0; k < board.length; k++){
        for (var j = 0; j < board[0].length; j++){
            if (helper(k, j, 0)) {
                console.log(board);
                return true
            }
        }
    }
    console.log(board);
        return false
};

console.log(exist( [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]],
"ABCC"
 ));