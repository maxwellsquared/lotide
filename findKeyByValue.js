const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🤡 Assertion Failed: ${actual} !== ${expected}`);
    return;
  }
  console.log(`✨ Assertion Passed: ${actual} === ${expected}`);
};

// Implement the function findKeyByValue which
// takes in an object and a value. It should scan the
// object and return the first key which contains the
// given value. If no key with that given value is found,
// then it should return undefined.

/* FIRST ATTEMPT
const findKeyByValue = function(myObject, value) {
  // initialize a variable
  let toReturn;
  //scan object
  for (let i in myObject) {
    if (myObject[i] === value) {
      toReturn = i;
    }
  }
  //return the first key which contains given value
  //or return undefined
  return toReturn;
};
*/

// check if it works
const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);