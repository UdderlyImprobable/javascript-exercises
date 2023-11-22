const palindromes = function (str) {
  let string = str.toUpperCase().replace(/[^A-Z0-9]/g, "");
  return string.split("").reverse().join("") === string;
  
}

// Do not edit below this line
module.exports = palindromes;
