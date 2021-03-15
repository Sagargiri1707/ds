/**
 * @param {string} text
 * @return {string}
 */
var arrangeWords = function(text) {
    const newText = text
    .toLowerCase()
    .split(' ')
    .sort((x,y) => x.length - y.length)
    .join(' ')
return newText.substring(0,1).toUpperCase() + newText.substring(1)
};

console.log(arrangeWords("Leetcode is cool"));