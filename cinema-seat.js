
// var maxNumberOfFamilies = function(n, reservedSeats) {
//     reservedSeats.sort((a, b) => a[0] - b[0])
//     var validSeats = [[2, 3, 4, 5], [4, 5, 6, 7], [6, 7, 8, 9]]
//     var count=0
//     var map=new Map()
//     for (var i of reservedSeats) {
//         var [row, col] = i
//         if (map.has(row)) {
//             map.set(row, map.get(row).concat(col))
//         }
//         else
//             map.set(row,[col])
//     } 
//     console.log(map);
//     for (var i of map.values()) {
//         var entries = i
//             if (entries.includes(2) || entries.includes(3)) {
//                 console.log('inside if');
//                 if (!entries.includes(4) && !entries.includes(7) && !entries.includes(6) && !entries.includes(5)) {
//                     count++
//                     console.log(1);
//                 }
//             }
//             else {
//                 console.log('inside else');
//                 if (!entries.includes(2) && !entries.includes(3) && !entries.includes(4) && !entries.includes(5)) {
//                 count++
                
//                 console.log(2);
//             }
            
//                 if (!entries.includes(6) && !entries.includes(7) && !entries.includes(8) && !entries.includes(9)) {
//                 count++
                
//                 console.log(3);
//         }
//         }
        
        
//     }

//     var sz = map.size
//     var dif = n - sz
//     if (dif > 0)
//         count+=dif*2
// return count

// };


// const maxNumberOfFamilies = function (n, reservedSeats) {
//     const map = {}
//     for (const [row, seat] of reservedSeats) {
//       map[row] = map[row] || [true, true, true]
//       if (seat === 2 || seat === 3) {
//         map[row][0] = false
//       }
//       if (seat === 4 || seat === 5) {
//         map[row][0] = false
//         map[row][1] = false
//       }
//       if (seat === 6 || seat === 7) {
//         map[row][2] = false
//         map[row][1] = false
//       }
//       if (seat === 8 || seat === 9) {
//         map[row][2] = false
//       }
//     }
//     console.log(map);
//     let result = 0
//   const rows = Object.keys(map)
//   console.log(rows);
//     rows.forEach((i) => {
//       if (!map[i] || (map[i][0] && map[i][1] && map[i][2])) {
//         result += 2
//       } else if (!map[i][0] && !map[i][1] && !map[i][2]) {
//         result += 0
//       } else {
//         result += 1
//       }
//     })
//     return result + (n - rows.length) * 2
//   }
  

function maxNumberOfFamilies(n, reservedSeats) {
  // [1, 2, 3,    4, 5, 6, 7,    8, 9, 10]
  const cache = new Map;
  let count = 2 * n;

// populates map
  reservedSeats.forEach(([row, seat]) => {
    cache.has(row) ? cache.get(row).push(seat) : cache.set(row, [seat]);
  })
  console.log(cache);
  for (const [_, val] of cache) {
    let [m, l, r] = [false, false, false]

    val.forEach(seat => {
      if (seat > 3 && seat < 8) m = true;
      if (seat > 1 && seat < 6) l = true;
      if (seat > 5 && seat < 10) r = true;
    })

  /*
  if theres a seat taken in all 3 regions, its not possible to have any group of 4 adjacents => count -=2
  if any of the three regions are taken but not all 3, 1 group of 4 can fit => count--
  otherwise 2 groups can fit => do nothing
  */ 
    if (l && r && m) {
      count -= 2;
    } else if (l || r || m) {
      count--;
    }
  }

  return count;
};

console.log(maxNumberOfFamilies(2,
    [
        [1, 6],
        [1, 8],
        [1, 3],
        [2, 3],
        [1, 10],
        [1, 2],
        [1, 5],
        [2, 2],
        [2, 4],
        [2, 10],
        [1, 7],
        [2, 5]
    ]
));