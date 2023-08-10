const removeFromArray = function(myArray) {
    let resultArray = [];
    let stays = [];
    for(let i = 0 ; i < myArray.length ; i++) stays.push(true);
    for(let j = 1 ; j < arguments.length ; j++) {
        let badElement = arguments[j];
        for(let i = 0 ; i < myArray.length ; i++) {
            if(myArray[i] === badElement) {
                stays[i] = false;
            }
        }
    }
    for(let i = 0 ; i < myArray.length ; i++) {
        if(stays[i]) {
            resultArray.push(myArray[i]);
        }
    }
    return resultArray;
};
console.log(removeFromArray([1, 2, 3], "1", 3));
// Do not edit below this line
module.exports = removeFromArray;
