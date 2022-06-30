const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🤡 Assertion Failed: ${actual} !== ${expected}`);
    return;
  }
  console.log(`✨ Assertion Passed: ${actual} === ${expected}`);
};


// FIRST ATTEMPT - THIS WORKS
const findKeyByValue1 = function(myObject, value) {
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

// Why do the hints seem to point to this solution?
const findKeyByValue2 = function(myObject, value) {
  let toReturn;
  let myKeys = Object.keys(myObject);
  for (let i of myKeys) {
    if (myObject[i] === value) { 
      toReturn = i;
    }
  }
  return toReturn;
}

// check if it works
const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue1(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue1(bestTVShowsByGenre, "That '70s Show"), undefined);


assertEqual(findKeyByValue2(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue2(bestTVShowsByGenre, "That '70s Show"), undefined);