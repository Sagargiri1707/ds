const numberofSeubseq=(a,b)=>{
    var dp=new Array(a.length+1).fill().map(_=>new Array(b.length+1).fill(0))
    
        var m = a.length; 
        var n = b.length; 
      
        
        // If first string is empty 
        for (var i = 0; i <= n; ++i) 
            dp[0][i] = 0; 
      
        // If second string is empty 
        for (var i = 0; i <= m; ++i) 
            dp[i][0] = 1; 
      
        // Fill lookup[][] in bottom up manner 
        for (var i = 1; i <= m; i++) 
        { 
            for (var j = 1; j <= n; j++) 
            { 

                if (a[i - 1] == b[j - 1]) 
                    dp[i][j] = dp[i - 1][j - 1] +  
                                   dp[i - 1][j]; 
                      
                else
                    // If last character are different, ignore 
                    // last character of first string 
                    dp[i][j] = dp[i - 1][j]; 
            } 
            console.log(dp);
        } 

      
        return dp[m][n]; 
    
}



console.log(numberofSeubseq("GeeksforGeeks","Gks"));