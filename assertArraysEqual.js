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
  let arrayToReturn = source.splice();
  for (i = 0; i < source.length; i++) {
    for (j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
        arrayToReturn.splice(i, 1);
      }
    }
  }
  return arrayToReturn;
}

let fruits = ["Banana", "Mango", "Strawberry", "Melon"];

console.log("Fruits = " + fruits);
without(fruits, ["Strawberry"]);
console.log("Now fruits = " + fruits);

assertArraysEqual(fruits, ["Banana", "Mango", "Strawberry", "Melon"]);