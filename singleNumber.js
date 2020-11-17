const singleNumber = (arr) => {
    var hash = new Map()
    for (var i = 0; i < arr.length; i++){
        console.log(hash,arr[i]);
        if (hash.has(arr[i])) {
            console.log('deleting');
            hash.delete(arr[i])
        }
        else
            hash.set(arr[i],i)
    }
    console.log(hash);
 }

 console.log(singleNumber([3,3,7,7,10,11,11]
    ));

