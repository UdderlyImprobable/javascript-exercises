const repeatString = function(string, num) {
  let i = 0;
  let repeatedString = "";
  if (num < 0) {
    return "ERROR";
  }
  while (i < num) {
    repeatedString += string;
    i++;
  }
  return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
