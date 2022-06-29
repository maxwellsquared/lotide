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
}


const assertArraysEqual = function(array1, array2) {
  if (!eqArrays(array1, array2)) {
    console.log(`🤡 Assertion Failed: ${array1} !== ${array2}`);
  } else {
    console.log(`✨ Assertion Passed: ${array1} === ${array2}`);
  }
};


const without = function(source, itemsToRemove) {
  let arrayToReturn = source;
  for (i = 0; i < source.length; i++) {
    for (j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
        shift
      }
    }
  }
}