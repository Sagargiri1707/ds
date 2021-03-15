const fib=(a)=>{
     var arr=Array(a+1).fill(0)
     arr[0]=0
     arr[1]=1
    for(var i=2; i<arr.length;i++){
        arr[i]=arr[i-1]+arr[i-2]
    }
    
     console.log(arr[arr.length-1])
}

fib(6)
fib(7)
fib(18)