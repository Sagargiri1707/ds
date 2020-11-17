
var mostCommonWord = function(p, b) {
    console.log(p);
    p = p.toLowerCase().split(/[ .,]/)
     var map=new Map()
    for (var i of p) {
        if(i!=='')
        map.set(i,map.has(i)?map.get(i)+1 : 1 )
    }
    for (var i of b) {
        
        if(map.has(i))
            map.delete(i)
    }
    var val,max=-1e3
    for(var i of map.entries()){
        if(i[1]>max){
            max=i[1]
            val=i[0]
        }
        
    }
    return val
};

console.log(mostCommonWord("Bob. hIt, baLl",["bob", "hit"]));