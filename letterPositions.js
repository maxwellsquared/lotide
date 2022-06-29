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


const countLetters = function(inputString) {
  const results = {};

  for (let letter of inputString) {
    if (results[letter]) {
      results[letter] += 1;
    } else if (letter === ' ') {
      // do nothing
    } else {
      results[letter] = 1;
    }
  }
  return results;
}

const letterPositions = function(sentence) {
  const results = {};
  for (let position in sentence) {
    if (sentence[position] === ' ') {
      // do nothing
    } else if (results[sentence[position]]) {
      results[sentence[position]].push(position);
    } else {
      results[sentence[position]] = [position];
    }
  }
  return results;
};

console.log(letterPositions("doodad"));