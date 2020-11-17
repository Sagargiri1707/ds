

var map = [
    '0','1','abc','def','ghi','jkl','mno','pqrs','tuv','wxyz'
]

var letterCombinations = (digit) => {
    if (digit === 0){
    
        return ['']
    
    }
    if (digit === 1) {
        return ['']
    }
    var digit = digit.toString()
    var arr = []
    recursion(arr,digit,'',0)
    return arr

}
var recursion = (arr,digit,string,id) => {
    if (string.length === digit.length) {
        arr.push(string)
        return
    }
    for (var i of  map[digit[id]]){
        recursion(arr,digit,string.concat(i), id+1)
    }
}
console.log(letterCombinations("23"));