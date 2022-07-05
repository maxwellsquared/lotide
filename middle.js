const eqArrays = require("./eqArrays");
const assertArraysEqual = require("./assertArraysEqual");


const middle = function(array) {
  // initialize an empty array
  let toReturn = [];
  // find the index of the middle of the array
  let arrayMiddle = (array.length / 2) - 1;
  // make sure it's a valid array with >2 elements
  if (!(array.length > 2)) {
  // if it's even, add the two elements in the middle
  } else if (array.length % 2 === 0) {
    toReturn.push(array[arrayMiddle]);
    toReturn.push(array[arrayMiddle + 1]);
  } else {
  // if it's odd, just pick the one in the middle
    toReturn.push(array[Math.ceil(arrayMiddle)]);
  }
  // return the array, with stuff added (or not)
  return toReturn;
};

module.exports = middle;