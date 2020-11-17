var canConvertString = function(s, t, k) {
    var count=0
    var i=0
    //charCodeAt
    while(s!==t && i<s.length){
        
        var z = t[i].charCodeAt(0) - s[i].charCodeAt(0)
        console.log(z);
        count+=z
        if (z > k) {
            console.log(count,k);
            return false
        }
        i++
        console.log(z,k);
    }
    
    return true
};

console.log(canConvertString("abc","bcd",10));