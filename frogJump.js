// /**
//  * @param {number[]} stones
//  * @return {boolean}
//  */
// var canCross = function (stones) {
//   var visited = new Set();
//   var helper = (val, i) => {
//     if (!stones.includes(val + i)) {
//       return false;
//     }
//     if (visited.has(val + "" + i)) {
//       return false;
//     }
//     if (val + i === stones[stones.length - 1]) return true;
//     visited.add(val + "" + i);
//     return (
//       helper(val + i, i - 1) || helper(val + i, i) || helper(val + i, i + 1)
//     );
//   };

//   return helper(stones[0], 1);
// };

let canCross = (stones) => {
  for (let i = 3; i < stones.length; i++) {
    if (stones[i] > stones[i - 1] * 2) {
      return false;
    }
  }
  var n = stones.length;
  var stores = new Set(stones);
  var distance = [0];
  var jumps = [0];
  while (distance.length) {
    var pos = distance.pop();
    var jumpDistance = jumps.pop();
    for (let i = jumpDistance - 1; i <= jumpDistance + 1; i++) {
      if (i <= 0) continue;
      let nextPos = pos + i;
      if (nextPos === stones[stones.length - 1]) return true;
      else if (stores.has(nextPos)) {
        distance.push(nextPos);
        jumps.push(i);
      }
    }
  }
  return false;
};

console.log(canCross([0, 1, 3, 5, 6, 8, 12, 18]));
