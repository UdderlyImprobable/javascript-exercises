const reverseString = function(string) {
  let i = 2;
  let j = 1;
  let newString = string.slice(-1);
  while (i <= string.length) {
    newString += string.slice(-i, -j);
    i++
    j++
  }
  return newString;
};

// Do not edit below this line
module.exports = reverseString;
