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
const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🤡 Assertion Failed: ${actual} !== ${expected}`);
    return;
  }
  console.log(`✨ Assertion Passed: ${actual} === ${expected}`);
};

const assertArraysEqual = function(array1, array2) {
  if (!eqArrays(array1, array2)) {
    console.log(`🤡 Assertion Failed: ${array1} !== ${array2}`);
  } else {
    console.log(`✨ Assertion Passed: ${array1} === ${array2}`);
  }
};

const assertObjectsEqual = function(obj1, obj2) {
  const inspect = require('util').inspect; // <= add this line
  if (!eqObjects(obj1, obj2)) {
    console.log(`🤡 Assertion Failed: ${inspect(obj1)} !== ${inspect(obj2)}`);
  } else {
    console.log(`✨ Assertion Passed: ${inspect(obj1)} === ${inspect(obj2)}`);
  }
};

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) return false;
  for (let i in object1) {
    if (Array.isArray(object1[i])) {
      // yes, doing this on one line would be simpler, but also harder for people to understand
      if (!eqArrays(object1[i], object2[i])) return false;
    } else if (!(object1[i] === object2[i])) {
      return false;
    }
  }
  return true;
};

car1 = {
  make: "Honda",
  model: "CRV",
  year: 2018,
  features: ["wheels", "carplay", "honking"]
}

car2 = {
  make: "Honda",
  model: "CRV",
  year: 2018,
  features: ["wheels", "carplay", "honking"]
}

car3 = {
  make: "Mazda",
  model: "Miata",
  year: 1990,
  features: ["wheels", "honking"]
}

assertObjectsEqual(car1, car2);
assertObjectsEqual(car1, car3);