const Day3 = require("./day3");

var trees11 = Day3.solve(1, 1);
var trees31 = Day3.solve(3, 1);
var trees51 = Day3.solve(5, 1);
var trees71 = Day3.solve(7, 1);
var trees12 = Day3.solve(1, 2);
var total = trees11 * trees31 * trees51 * trees71 * trees12;
console.log(`Solution across all 5: ${total}`);