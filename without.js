const without = function(source, itemsToRemove) {
  let arrayToReturn = source;
  for (i = 0; i < source.length; i++) {
    for (j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
        shift
      }
    }
  }
}


module.exports = without;