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


module.exports = letterPositions;