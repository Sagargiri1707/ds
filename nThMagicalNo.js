/**
 * @param {number} N
 * @param {number} A
 * @param {number} B
 * @return {number}
 */
var gcd = (a, b) => {
    if (b === 0)
        return a
    return gcd(b,a%b)
}
var lcm = (a, b) => {
    return (a*b)/ gcd(a,b)
}
var nthMagicalNumber = function(N, A, B) {
    var start = 1, mid, end =1e17
    var lcma = lcm(A, B)
    var target
    while (start < end) {
        mid = Math.floor((start + end) / 2)
        target = Math.floor(mid / A) + Math.floor(mid / B) - Math.floor(mid / lcma)
        if (target < N)
            start = mid + 1
        else
            end=mid
            
    }
console.log(start,end,target);
    return end%(10**9+7)
};

console.log(nthMagicalNumber(5,2,4));