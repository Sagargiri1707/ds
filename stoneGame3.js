var stoneGameIII = function (s) {
  var n = s.length;
  var i_1 = 0,
    i_2 = 0,
    i_3 = 0;
  var i = n - 1;
  while (i >= 0) {
    var ans = -Infinity;
    ans = Math.max(ans, s[i] - i_1);
    if (i + 1 < s.length) ans = Math.max(ans, s[i] + s[i + 1] - i_2);
    if (i + 2 < s.length) ans = Math.max(ans, s[i] + s[i + 1] + s[i + 2] - i_3);
    i_3 = i_2;
    i_2 = i_1;
    i_1 = ans;

    console.log("i== ", i);
    console.log("i_3== ", i_3);
    console.log("i_2== ", i_2);
    console.log("i_1== ", i_1);
    console.log("-----------------");
    i--;
  }
  var alice = i_1;
  if (alice > 0) return "Alice";
  if (alice == 0) return "Tie";
  return "Bob";
};

console.log(stoneGameIII([1, 2, 3, 7]));
