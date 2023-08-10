const sum = function(num) {
    // This is a function to return summation from 1 up to num
    return num * (num + 1) / 2;
}
const sumRange = function(num1 ,num2) {
    return sum(num2) - sum(num1 - 1);
}
const sumAll = function(number1 , number2) {
    if(!(typeof number1 === 'number') || !(typeof number2 === 'number')) return "ERROR";
    if(number1 > number2) {
        let tmp = number1;
        number1 = number2;
        number2 = tmp;
    }
    if(number1 < 0) return "ERROR";
    return sumRange(number1 , number2);
};
// Do not edit below this line
module.exports = sumAll;
