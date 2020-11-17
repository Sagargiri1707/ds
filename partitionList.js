
var partition = function(head, k) {
    var ob=[]
    for(var i=0;i<head.length;i++){
        ob.push([head[i],i])
    }
    ob.sort((a, b) => {
            a[0] - b[0]
    })
    
    console.log(ob);
};

console.log(partition([1,4,3,2,5,2],3));