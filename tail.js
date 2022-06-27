const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🤡 Assertion Failed: ${actual} !== ${expected}`);
    return;
  }
  console.log(`✨ Assertion Passed: ${actual} === ${expected}`);
};

const tail = function(inputArray) {
  let tailArray = [];
  for (let i = 1; i < inputArray.length; i++) {
    tailArray.push(inputArray[i]);
  }
  return tailArray;
};

console.log(tail(["head", "shoulders", "knees", "toes"]));

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!