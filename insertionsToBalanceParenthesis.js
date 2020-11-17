/**
 * @param {string} s
 * @return {number}
 */
var minInsertions = function(s) {
    var stack = []
    var count=0
    for(var i=0 ;i< s.length; i++){
        if(s[i]==="("){
            stack.push(s[i])
        }
        else {
            if (stack.length === 0) {
                stack.push(s[i])
            }
            else {
                var s1=stack[stack.length-1]
                var s2 = stack[stack.length - 2]
                if (s1 === ')' && s2 === '(') {
                    stack.pop()
                    stack.pop()
                }
                else {
                    stack.push(s[i])
                }
            }
        }
        
    }
    console.log(stack);
    stack=['(',')','(',')','(',')']
    while (stack.length > 0) {
        var z = stack.pop()
        if (z === '(') {
            count += 2 
            
        }
        else {
            if (stack.length===0)
            {
                count+=2
            }
            else{
                stack.pop()
                count++
            }
            
        }
        console.log(stack);
        console.log('-------------');
    }
    return count
};

console.log(minInsertions("((()))()))"))