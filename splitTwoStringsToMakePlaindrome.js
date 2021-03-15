var checkPalindromeFormation = function (a, b) {
  function isPalidrome(s, i, j) {
    for (; i < j; ++i, --j)
      if (s[i] != s[j]) {
        return false;
      }
    return true;
  }

  function check(a, b) {
    for (let i = 0, j = a.length - 1; i < j; ++i, --j) {
      console.log(i, j);
      if (a[i] != b[j]) {
        return isPalidrome(a, i, j) || isPalidrome(b, i, j);
      }
    }
    return true;
  }
  return check(a, b) || check(b, a);
};

console.log(checkPalindromeFormation("ulacfd", "dfcalu"));
