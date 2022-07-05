const takeUntil = function(array, callback) {
  let toReturn = [];
  for (let element of array) {
    if (callback(element)) { return toReturn; }
    toReturn.push(element)
  };
  return toReturn;
}


module.exports = takeUntil;


// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);
// const expected1 = [ 1, 2, 5, 7, 2 ];
// //console.log(results1);
// assertArraysEqual(results1, expected1);

// console.log('---');

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// const expected2 = [ 'I\'ve', 'been', 'to', 'Hollywood' ];
// //console.log(results2);
// assertArraysEqual(results2, expected2);