
const helper=(s,left,right)=>{
    if(left>right ||s===null)
        return 0
    while( left >=0 && right <s.length && s[right]===s[left]){
        left--
        right++
    }
    return right-left-1
}
var longestPalindrome = function(s) {
    if(s==null ||s.length<1) return ''
    var start=0,end=0
    for(var i=0;i<s.length;i++)
        {
            var left= helper(s,i,i)
            var right=helper(s,i,i+1)
            var max=Math.max(left,right)
            if(max> end-start){
                end= Math.floor( i+ (max/2))
                start=Math.ceil(i-((max-1)/2))
            }
    }
    console.log(start,end);
    return s.substring(start,end+1)
};
console.log(longestPalindrome("babad"))