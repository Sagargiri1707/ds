/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function(people, limit) {
    people.sort((a, b) => b - a);
    console.log(people)
    let count = 0, end = people.length-1;
    
    for(let start = 0; start <= end; start++) {
        if(people[start] + people[end] <= limit) end--;
        count++;
    }
    return count;
};
console.log(numRescueBoats([5,1,4,2],6));