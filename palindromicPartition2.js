/**
 * @param {string} s
 * @return {number}
 */
var minCut = function (s) {
  var isPalindrome = (l, r) => {
    while (l >= 0 && r < s.length && s[l] === s[r]) {
      if (s[l] !== s[r]) return false;
      l++;
      r--;
    }
    return true;
  };

  var helper = (val, curr) => {
    console.log(val, curr);
    if (val === s.length) {
      count++;
      return;
    }
    for (var i = val; i < s.length; i++) {
      if (isPalindrome(val, i)) {
        curr.push(s.substr(val, i));
        helper(i + 1, curr);
        curr.pop();
      }
    }
  };
  var count = 0;
  helper(0, []);
  return count;
};

console.log(minCut("aab"));
