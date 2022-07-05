const eqArrays = require("../eqArrays");
const assertArraysEqual = require("../assertArraysEqual");

const array1 = ["Pizza", "Pasta", "Gabagool"];
const array2 = ["Pizza", "Pasta", "Gabagool"];

const array3 = [1, 2, 3, 5];
const array4 = [1, 2, 3, 4];

assertArraysEqual(array1, array2);
assertArraysEqual(array3, array4);