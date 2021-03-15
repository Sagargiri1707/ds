var bestSum=(n,arr)=>{
    var array=new Array(n+1).fill(null)
    array[0]=[]

    for(var i=0 ;i<=n ;i++){
        if(array[i]!==null)
        for(var el of arr){
             const comb=array[i].concat(el)
            if(!array[i+el]||array[i+el].length>comb.length){
                array[i+el]=comb
            }
        }
    }
    console.log(array[n])
}

bestSum(8,[2,3,5])