function findSum(N) {
    var res=0
    var L=1
    while(N>(L*(L+1))/2 ){
        var a=(N-L*(L+1)/2)/(L+1)
         if(Math.floor(a)===a)
        res++
        L++
    }
    console.log(res)
}


findSum(15)