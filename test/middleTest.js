const assert = require('chai').assert;
const middle = require("../middle");
const assertArraysEqual = require("../assertArraysEqual");

// some test cases
let shortArray = ["Spaghet"];
let oddArray = ["Spaghet", "Meat bal", "Garlickabread"];
let evenArray = ["spaghet", "meat bal", "garlickabread", "salada"];


describe('#middle', () => {
  it("checks if an odd array returns one item", () => {
    assert.isTrue(middle(oddArray).length === 1);
  });
  it("checks if an even array returns two items", () => {
    assert.isTrue(middle(evenArray).length === 2);
  });
  it("checks if the two middle items of the menu are meat bal and garlickabread", () => {
    assert.strictEqual(middle(evenArray)[0], 'meat bal');
  })
});


// test it out!

// console.log(middle(shortArray));
// console.log(middle(oddArray));
// console.log(middle(evenArray));
// console.log(middle([1, 2, 3, 4, 5, 6, 7]));
// console.log(middle([1, 2, 3, 4, 5, 6, 7, 8]));

// assertArraysEqual(middle(oddArray), ["Meat bal"]);