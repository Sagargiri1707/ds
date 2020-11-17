
function lengthOfLongestSubstring(s) {
    
    var curr=''
    var index
    var long=''
    for( var i=0; i< s.length ;i++){
        index=curr.indexOf(s[i])
        if(index===-1){
            curr+=s[i]
        }
        else
            {
                if(curr.length> long.length)
                    long=curr
                curr=curr.slice(index+1 )+s[i]
            }
    }
    
    return long.length>curr.length?long.length:curr.length
}
console.log(lengthOfLongestSubstring('abcad'));