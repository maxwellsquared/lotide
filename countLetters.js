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
 module.exports = countLetters;