
var canReorderDoubled = function (A) {
    const borrowed = new Map();
    A.sort((a, b) => a - b);
    console.log(A);
    A.forEach((val) => {
        const amt = borrowed.get(val) || 0;
        if (amt) {
            console.log('in 1');
            borrowed.set(val, amt - 1);
            if (!(amt - 1)) {
                console.log(borrowed,'insdie');
                borrowed.delete(val);
            }
        } else if (val > 0) {
            console.log('in 2');
            borrowed.set(2 * val, (borrowed.get(2 * val) || 0) + 1);
        } else { 
            console.log('in 3');
            borrowed.set(val / 2, (borrowed.get(val / 2) || 0) + 1);
        }
        console.log(borrowed);
    })
    
   
    return (!borrowed.size) ? true : false;
    console.log(A);
};


console.log(canReorderDoubled( [4,-2,2,-4]));