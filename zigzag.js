
var convert = function (s, numRows) {
    if(s==='' || numRows===1)return s
    var arr=new Array(numRows).fill('')
    var count=0,increasing=true
    for(var i=0 ;i<s.length;i++){
        arr[count] += s[i]
        if(count===numRows-1)
            increasing=false
        else if(count===0)
            increasing=true
        increasing?count++ : count--
    }
    return arr.join('')
};
console.log(
convert("ABCDE",3))