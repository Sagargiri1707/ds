var shortestToChar = function(s, c) {
    let idArray=[]
    s=s.split('')
    for(var i =0;i<s.length;i++){
        if(s[i]===c)
            idArray.push(i)
    }
    var resArray=[]
    let start=0
    for(var i=0 ;i<s.length ;i++){
        if(i  >Math.floor((idArray[start+1]+idArray[start ])/2) )
        start++
        resArray.push(Math.abs(idArray[start]-i))  
    }
    return resArray
    // const answer = [Infinity]
    
    // for(let i = 0; i < s.length; i++) {
    //     if(i === 0 && s[i] !== c) continue;
    //     if(s[i] === c) answer[i] = 0;
    //     else answer[i] = answer[i-1] + 1;
    // }
    
    // for(let i = s.length-2; i >= 0; i--) {
    //     answer[i] = Math.min(answer[i+1]+1, answer[i])
    // }
    // return answer;
};
console.log(shortestToChar("loveleetcode","e"));