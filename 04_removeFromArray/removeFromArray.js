const removeFromArray = function(arr, ...remainingArgs) {
  for(arg of remainingArgs) {
    let i = 0;
    while(i < arr.length) {
      if (arr[i] ===  arg) {
        arr.splice(i, 1);
        break;
      }
      i++
    }
  }
  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
