var findRadius = function (houses, heaters) {
  houses.sort((a, b) => a - b);
  heaters.sort((a, b) => a - b);
  var i = 0,
    res = 0;
  for (var j = 0; j < houses.length; j++) {
    while (i < heaters.length - 1 && heaters[i] <= houses[j]) i++;
    var left = Math.abs((heaters[i - 1] || heaters[0]) - houses[j]);
    var right = Math.abs(heaters[i] - houses[j]);
    res = Math.max(res, Math.min(left, right));
     
  }
  return res;
};

console.log(findRadius([0, 1, 2, 4, 5, 6], [0, 3, 4]));
