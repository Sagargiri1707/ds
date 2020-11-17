
const isMatch = (s, d) => {
    return (s==='(' )
}
var longestValidParentheses = function(s) {
    var stack=[-1]
    var curr=''
    for (var i = 0; i < s.length; i++){
            if(isMatch(stack[stack.length-1],s[i])){
                var z = stack.pop()
                curr += z + s[i]
            }
            else {
                stack.push(s[i])
                console.log('pushing');
            }
        console.log(stack, 'stack');
        console.log(curr,'curr');
    }
    return curr.length
};

console.log(longestValidParentheses("(())(((())))"))