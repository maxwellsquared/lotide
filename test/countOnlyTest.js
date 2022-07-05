const assert = require('chai').assert;
const countOnly = require("../countOnly");



const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });


describe("#countOnly", () => {
  it("count of Jason is 1", () => {
    assert.strictEqual(result1["Jason"], 1);
  });

  it("Fang appears twice", () => {
    assert.strictEqual(result1["Fang"], 2);
  });

  it("Karima is undefined", () => {
    assert.strictEqual(result1["Karima"], undefined);
  });
});

// assertEqual(result1["Jason"], 1);
// assertEqual(result1["Karima"], undefined);
// assertEqual(result1["Fang"], 2);
// assertEqual(result1["Agouhanna"], undefined);