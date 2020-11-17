
var combinationSum2 = function(candidates, target) {
    candidates.sort(function(a, b) {
        return a-b
    })
    var result = []
    
    function findResult(currentResult, candidates, target) {
        console.log(currentResult, candidates, target);
        if (target === 0) result.push(currentResult)
        for (let i=0; i<candidates.length; i++) {
            if (i!==0 && candidates[i] === candidates[i-1]) continue
            if (target-candidates[i]<0) return
            findResult(currentResult.concat([candidates[i]]), candidates.slice(i+1), target-candidates[i])
        }
    }

    findResult([], candidates, target)
    return result
};

console.log(combinationSum2([10,1,2,7,6,1,5], 8));