var partition = function (s) {
  var res = [];

  var isPalindrome = (l, r) => {
    while (l <= r) {
      if (s[l] !== s[r]) return false;
      l++;
      r--;
    }
    return true;
  };
  var helper = (i, curr) => {
    if (i === s.length) {
      res.push([...curr]);
      return;
    }
    for (var j = i; j < s.length; j++) {
      if (isPalindrome(i, j)) {
        curr.push(s.substring(i, j + 1));
        helper(j + 1, curr);
        curr.pop();
      }
    }
  };

  helper(0, []);
  return res;
};

console.log(partition("aab"));
