const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🤡 Assertion Failed: ${actual} !== ${expected}`);
    return;
  }
  console.log(`✨ Assertion Passed: ${actual} === ${expected}`);
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

// The function should take in a sentence (as a string) and then 
// return a count of each of the letters in that sentence.

// For example, countLetters('LHL') should return results indicating 
// that L appears twice, and H once.

// Before implementing this function, we need to think about how it 
// will report back these counts. It's not that we want to know how 
// many H's are in this sentence?, because that would just be a number. 
// We need it report back multiple numbers.

console.log(countLetters("maxwell had a silver hammer"));