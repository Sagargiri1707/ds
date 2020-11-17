
var findRadius = function(houses, heaters) {
    houses.sort((a,b)=> a - b);
    heaters.sort((a,b)=> a - b);
    var i = 0, res = 0;
    for (var house of houses) {
        while(i<heaters.length-1 && heaters[i]<=house)
            i++
        var left= Math.abs((heaters[i-1]||heaters[0])-house)
        var right=Math.abs(heaters[i]-house)
        res=Math.max(res,Math.min(left,right))
        
    }
    return res;
};