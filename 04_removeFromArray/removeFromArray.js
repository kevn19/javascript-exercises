const removeFromArray = function(array, ...elements) {
    for (let element of elements){
    let location = array.indexOf(element);
        if (location>=0){
        array.splice(location, 1)
        }
    }
    return array;
};



// Do not edit below this line
module.exports = removeFromArray;
