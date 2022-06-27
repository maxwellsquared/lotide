// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log("🤡 Assertion Failed: " + actual + " !== " + expected);
    return;
  }
  console.log("✨ Assertion Passed: " + actual + " === " + expected);
};

// TEST CODE
assertEqual("Money", "Lightbulb");
assertEqual(47, (40 + 7));
assertEqual("Gonky", "Gonky");