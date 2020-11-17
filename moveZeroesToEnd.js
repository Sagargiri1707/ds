var moveZeroes = (a) => {
    var ids=0
    for (var i = 0; i < a.length; i++){
        if (a[i] != 0)
            a[ids++]=a[i]
        }

    for (var i = ids; i < a.length; i++){
        a[i]=0
    }
    return a
}

console.log(moveZeroes([0,0,0,0,3,0,2,0,1,0,0,0,1]));