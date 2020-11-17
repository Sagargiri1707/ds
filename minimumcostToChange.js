const minimumCost = (word1,word2) => {
    var sol = new Array(word1.length + 1).fill().map(z=>new Array(word2.length + 1).fill(0))

    for (var i = 1; i <= word1.length; i++){
        sol[i][0] = i
    }
    for (var j = 1; j <= word2.length; j++){
        sol[0][j] = j
    }
     for (var i = 1; i <= word1.length; i++){
        
         for (var j = 1; j <= word2.length; j++){
             if (word2[j-1] === word1[i-1])
                 sol[i][j] = sol[i - 1][j - 1]
             else
             sol[i][j]=Math.min(sol[i-1][j-1],sol[i][j-1],sol[i-1][j])+1
         }
        
    }
    return sol[word1.length][word2.length]
}

minimumCost("sagar","giri")