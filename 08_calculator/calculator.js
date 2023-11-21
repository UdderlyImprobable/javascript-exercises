const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num, ...args) {
	let remainder = num;
  for (arg of args) {
    remainder -= args;
  }
  return remainder;
};

const sum = function(arr) {
	let sum = 0;
  for (arg of arr) {
    sum += arg;
  }
  return sum;
};

const multiply = function(arr) {
  let answer = 1;
  for(arg of arr) {
    answer *= arg;
  }
  return answer;
};

const power = function(base, pow) {
	let i = 0;
  let answer = 1;
  while(i < pow) {
    answer *= base;
    i++;
  }
  return answer;
};

const factorial = function(num) {
  let answer = 1;
  for(let i = num; i >= 1; i--) {
    answer *= i;
  }
  return answer;
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
