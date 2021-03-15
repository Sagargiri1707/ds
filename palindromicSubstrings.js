var countSubstrings = function (s) {
  var count = 0;

  const helper = (l, r) => {
    while (l >= 0 && r < s.length && s[l] == s[r]) {
      count++;
      l--;
      r++;
    }
  };

  for (var i = 0; i < s.length; i++) {
    helper(i, i);
    helper(i, i + 1);
  }

  return count;
};
console.log(countSubstrings("aaa"));
