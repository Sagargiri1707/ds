
    function greatestValueDays(ratings) {
        ratings=ratings.map(a=>parseInt(a))
     var dp=new Array(ratings.length+1).fill().map(_=> new Array(ratings.length+1).fill(0))
        var maxnow=-Infinity
     for(var i=1;i<ratings.length+1 ;i++){
          for(var j=i ;j<ratings.length+1 ;j++){
            var subArr=ratings.slice(i-1,j )
            var sum=(subArr.reduce((a,b)=>a+b))
               var minnow=Math.min(...subArr )
             if(i===j){
                 dp[i][j]=ratings[i-1]*minnow
             }
             else {
                 
                     dp[i][j]=(sum)*minnow
             }
         }
                 maxnow=Math.max(maxnow,Math.max(...dp[i]))
     
     }
     console.log(dp);
       return maxnow
    }

console.log(greatestValueDays([0,0,1,2,0,0]));