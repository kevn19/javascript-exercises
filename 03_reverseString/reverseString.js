const reverseString = function(string) {
    let stringArray = string.split("");
    let reverse = stringArray.reverse()
    return reverse.join("");
}

// Do not edit below this line
module.exports = reverseString;
