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




const map = (myArray, callback) => {
  const results = [];
  for (let item of myArray) {
    results.push(callback(item));
  }
  return results;
}

const words = ["ground", "control", "to", "major", "tom"]
const results1 = map(words, word => word[0]);
console.log(results1);

const fillings = ["tofu", "tempeh", "eggplant", "bean", "mushroom"]
const results2 = map(fillings, word => word + " burrito");
console.log(results2);

const pricesBeforeTax = [119.99, 4.97, 54.99, 699.99]
const results3 = map(pricesBeforeTax, price => (price * 1.12).toFixed(2));
console.log(results3);