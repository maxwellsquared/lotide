const middle = require("../middle");
const assertArraysEqual = require("../assertArraysEqual");

// test it out!
let shortArray = ["Spaghet"];
let oddArray = ["Spaghet", "Meat bal", "Garlickabread"];
let evenArray = ["spaghet", "meat bal", "garlickabread", "salada"];

console.log(middle(shortArray));
console.log(middle(oddArray));
console.log(middle(evenArray));
console.log(middle([1, 2, 3, 4, 5, 6, 7]));
console.log(middle([1, 2, 3, 4, 5, 6, 7, 8]));

assertArraysEqual(middle(oddArray), ["Meat bal"]);