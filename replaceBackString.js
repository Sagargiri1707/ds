var BackSpace = (s1) => {
    var stack = []
    var i = 0;
    while (i < s1.length) {
        if (s1[i] !== '#')
            stack.push(s1[i])
        else
            stack.pop()
        i++
    }
    return stack.join('')
}

var checkString = (s1, s2) => {
    
    var s3 = BackSpace(s1)
    var s4 = BackSpace(s2)
    return s3===s4
}
console.log(checkString("asd############aa########################a", "a######################aaa#a#"));
