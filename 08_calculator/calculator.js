const add = function(a , b) {
	return a + b;
};

const subtract = function(a , b) {
	return a - b;
};

const sum = function(array) {
  let result = 0;
	array.forEach(element => {
    result += element;
  });
  return result;
};

const multiply = function(array) {
  let result = 1;
  array.forEach(element => {
    result *= element;
  });
  return result;
};

const power = function(base , power) {
  let result = 1;
  while(power > 0) {
    if(power % 2) result *= base;
    power /= 2;
    power = parseInt(power);
    base *= base;
  }
  return result;
};

const factorial = function(fact) {
	let result = 1;
  for(let i = 1 ; i <= fact ; i++) result *= i;
  return result;
};
// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
