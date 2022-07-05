const assert = require('chai').assert;
const tail = require("../tail");

let parts = ["head", "shoulders", "knees", "toes"];

describe("#tail", () => {
  it("checks if the tail on an array of four words is three", () =>  {
    assert.strictEqual(tail(parts).length, 3);
  });
  it("checks if a given tail is the right words", () =>  {
    assert.deepEqual(tail(parts), ["shoulders", "knees", "toes"]);
  });
})



// console.log(tail(["head", "shoulders", "knees", "toes"]));
// // Test Case: Check the original array
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3)