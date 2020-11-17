var solve = function(board) {
    if(!board.length)return
    for(let i=0;i<board.length;i++){
        dfs(board,i,0)
        dfs(board,i,board[0].length-1)
    }
    for(let j=0;j<board[0].length;j++){
        dfs(board,0,j)
        dfs(board,board.length-1,j)
    }
    for(let i=0;i<board.length;i++){
        for(let j=0;j<board[0].length;j++){
            if(board[i][j] == 'O') board[i][j] = 'X'
            else if(board[i][j] == 'p') board[i][j] = 'O'
        }
    }
    return board
};

let dfs = (board,i,j)=>{
    if(i>=0 && j>=0 && i<board.length && j<board[0].length && board[i][j] === 'O'){
        board[i][j] = 'p'
        dfs(board,i+1,j)
        dfs(board,i,j+1)
        dfs(board,i-1,j)
        dfs(board,i,j-1)
    }
    return
}
console.log(solve(
    [
        ["X", "X", "X", "X"],
        ["X", "O", "O", "X"], 
        ["X", "O", "O", "X"],
        ["X", "O", "X", "X"]
    ]));