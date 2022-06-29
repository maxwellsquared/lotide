const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};


const assertArraysEqual = function(array1, array2) {
  if (!eqArrays(array1, array2)) {
    console.log(`🤡 Assertion Failed: ${array1} !== ${array2}`);
  } else {
    console.log(`✨ Assertion Passed: ${array1} === ${array2}`);
  }
};


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

// test it out!
let shortArray = ["Spaghet"];
let oddArray = ["Spaghet", "Meat bal", "Garlickabread"];
let evenArray = ["spaghet", "meat bal", "garlickabread", "salada"];

console.log(middle(shortArray));
console.log(middle(oddArray));
console.log(middle(evenArray));
console.log(middle([1, 2, 3, 4, 5, 6, 7]));
console.log(middle([1, 2, 3, 4, 5, 6, 7, 8]));

assertArraysEqual(middle(oddArray), ["Meat bal"]);