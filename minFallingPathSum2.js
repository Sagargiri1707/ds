var minFallingPathSum2=(arr)=>{
    for(var i=1;i<arr.length;i++){
        for(var j=0;j<arr.length;j++){
            var subArr=[...arr[i-1]]
            subArr.splice(j,1)
            arr[i][j]+=Math.min(...subArr)
        }
    }
  
    return Math.min(...arr[arr.length-1])
}
var t1=new Date()
console.log(minFallingPathSum2([[1,2,3],[4,5,6],[7,8,9]]));
var t2=new Date()
console.log('time',t2-t1);

//improvised

/*var minFallingPathSum = function(arr) {
    // tabulation
    let tab = Array(arr.length).fill().map(() => Array(arr[0].length).fill(0))
    for (let i=0; i< arr.length; i++) {
        let [min1, min2] = i > 0 ? minPrevRow(tab, i-1) : []
        for (let j=0; j<arr.length; j++) {
            if (i == 0) {
                tab[i][j] = arr[i][j]
            }else {
                tab[i][j] = arr[i][j] + (tab[i-1][j] == min1 ? min2 : min1)
            }
        }
    }
    return Math.min(...tab[tab.length-1])
};

const minPrevRow = (arr, row) => {
    let array = [...arr[row]]
    let first_min = Math.min(...array)
    array.splice(array.indexOf(first_min),1)
    let second_min = Math.min(...array)
    return [first_min, second_min]
}

Copyright © 2021 LeetCode

    Help Center
    Jobs
    Bug Bounty */