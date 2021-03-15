/**
 * @param {number} n
 * @return {number}
 */
var lastRemaining = function(n) {

    var arr=new Array(n).fill('').map((_,i)=>i+1)
     if(arr.length===1)
    return arr[0]
    if(arr.length===0)
    return 0
    // console.log(arr);
    while(arr.length>1){
        // console.log(arr,';;;;;;');
         for(let i=0 ; i<arr.length ; i+=1){
            arr.splice(i,1)
        }
        // console.log(arr,';;;;;;');


        if(arr.length<=1)
            return arr[0]
        for(let i=arr.length-1;i>= 0 ;i-=2){
            arr.splice(i,1)
        }      
        //   console.log(arr,';;;;;;');
        //   console.log(';;;;;;;;;;;;;;;;;;;;;;;;;;;;;');

    
    }
     return arr[0]
};

console.log(lastRemaining(100000));