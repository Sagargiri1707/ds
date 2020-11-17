var compress = function(chars) {
   
    var map=new Map()
    var s=[]
    for(var i=0 ;i< chars.length; i++){
       
        if(!map.has(chars[i])){
            map.set(chars[i],1)    
        }else{
            map.set(chars[i],map.get(chars[i])+1) 
        } 
    }
    for (var i of map.keys()) {
        s.push(i)
        s.push(map.get(i).toString())
    }
    chars.splice(0, chars.length, ...s)
};
compress(["a","a","b","b","c","c","c"]);