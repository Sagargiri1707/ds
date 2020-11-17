var findWords = function (board, words) { 
    
    var helper = (i, j, kal,word,board) => {
        if (i < 0 || j < 0 || i >= board.length || j >= board[0].length)
            return false
        if (board[i][j] !== word[kal]) {
            return false
        }
       
        if (kal === word.length - 1) {
 
            return true
        }
        kal++
        var temp = board[i][j]
        board[i][j] = ''
        if (helper(i + 1, j, kal, word, board)) {
            board[i][j]=temp
            return true
        }
        if (helper(i - 1, j, kal, word, board)) {
            board[i][j]=temp

            return true
        }
        if (helper(i, j + 1, kal,word,board)) {
            board[i][j]=temp

            return true
        }
        if (helper(i, j - 1, kal,word,board)) {


            board[i][j] = temp

            return true
        }
        board[i][j] = temp
    }
    var ap=[]
    for (var i = 0; i < words.length; i++){
        ap.push(words[i][0])
    }
    var map = new Map()
    for (var i = 0; i < board.length; i++){
        for (var j = 0; j < board[0].length; j++){
            var id=ap.indexOf(board[i][j])
            if( id>=0){
                var z = map.get(words[id][0])
                map.set(words[id][0],z?z.concat([[i,j]]):[[i,j]] )    
            }
            
        }
    }
    var op=new Set()
    for (var i of map.entries()) {
        var [key, values] = i
        for (var j of values) {
            console.log(values,key,j);
            for (var k of words) {
                if (k[0] === key) {
                    if (helper(j[0], j[1], 0, k, board)){
                        op.add(k)
                    }
                }
            }
        }
        
    }
    return [...op]
};
console.log(findWords([["a","b"],["c","d"]],
["ab","cb","ad","bd","ac","ca","da","bc","db","adcb","dabc","abb","acb"]
));










/* 
        
    }*/