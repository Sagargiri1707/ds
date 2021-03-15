var strip = (word) => {

    var res = []
    word=word.split('')
    for (var i = 0; i < word.length; i++){
        if (word[i].toLowerCase() === 's' && word[i + 2].toLowerCase() === 'r') {
            res.push(word[i])
            res.push(word[i + 2])
            word.splice(i, 3);
        }
        else
            res.push(word[i])
        
    }
    return res.join('')
}


console.log(strip("ProfeSSor"));