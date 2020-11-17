/**
 * @param {string} S
 * @return {string}
 */
var toGoatLatin = function(S) {
    S=S.split(' ')
    const ContainVowel = (a) => {
        console.log(a);
        var z = a.match(/[aeiouAEIOU]/g)
      
        if(z&&z.length>0)
            return true
        else return false
    }
    for(var i=0;i<S.length;i++){
        var isStart=ContainVowel(S[i][0])
        if(isStart)
            S[i]=S[i]+"ma"
        else
            {
                var first=S[i][0]
                S[i]=S[i].slice(1)
                S[i]+=first+"ma"
            }
        
        S[i]+='a'.repeat(i+1)
        
    }
    return S.join(' ')
};


console.log(toGoatLatin("I speak Goat Latin"));