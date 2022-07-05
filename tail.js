const tail = function(inputArray) {
  let tailArray = [];
  for (let i = 1; i < inputArray.length; i++) {
    tailArray.push(inputArray[i]);
  }
  return tailArray;
};

module.exports = tail;