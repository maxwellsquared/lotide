const eqArrays = require("./eqArrays");

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

module.exports = eqObjects;
// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// assertEqual(eqObjects(ab, ba), true); // => true

// const abc = { a: "1", b: "2", c: "3" };
// assertEqual(eqObjects(ab, abc), false); // => false

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// const cd2 = { c: "1", d: ["2", 3, 4] };
// const cd3 = { c: "1", d: ["2", 3, 4] };

// assertEqual(eqObjects(cd, dc), true); // => true
// assertEqual(eqObjects(cd, cd2), false); // => false
// assertEqual(eqObjects(cd3, cd2), true); // => true

