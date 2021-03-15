//Given a string str and a string array arr[], the task is to find the minimum count of substrings this can be splitted into such that every substring is present in the given string array arr[].//

var set=new Set()
var min=Infinity
var rec=(count,index,str)=>{
    if(index===str.length)
        min=Math.min(min,count)

    for(var i=1;i<=str.length-index ;i++){
        var ssts=str.substr(index,index+i)
        if(set.has(ssts)){
            rec(count+1,index+i,str)
        }
    }
}

var FindMin=(str,arr)=>{
    for(var i =0 ;i<arr.length ;i++){
        set.add(arr[i])
    }
     rec(0,0,str)
  return  min
}


console.log(FindMin("111112",["11","111","11111","2"]))