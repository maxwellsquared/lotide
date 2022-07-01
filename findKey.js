const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🤡 Assertion Failed: ${actual} !== ${expected}`);
    return;
  }
  console.log(`✨ Assertion Passed: ${actual} === ${expected}`);
};

// Implement the function findKey which takes in an object and a callback. 
const findKey = (inputObject, inputFunction) => {
  let toReturn;
  let myKeys = Object.keys(inputObject);
  for (let key of myKeys) {
    if (inputFunction(inputObject[key])) {
      return key;
    }
  }
  return toReturn;
}
// It should scan the object and return the first key for which the callback returns a truthy value. 
// If no key is found, then it should return undefined.

const restaurants = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}
assertEqual(findKey(restaurants, x => x.stars === 2), "noma") // => "noma"

const foods = {
  "Gabagool":  { type: "meat", calories: 9001 },
  "Ramen":     { type: "soup", calories: 550  },
  "TV Dinner": { type: "bad!", calories: 420  }
}

assertEqual(findKey(foods, x => x.type === "bad!"), "TV Dinner") // => "noma"