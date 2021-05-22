const fs = require('fs');
const Day3 = require("./day3");

var rows = fs.readFileSync('./input.txt', 'utf8')
    .split('\r\n');
console.log(`Number of rows: ${rows.length}`);

var day3 = new Day3(rows);
var results = [
    day3.solve(1, 1),
    day3.solve(3, 1),
    day3.solve(5, 1),
    day3.solve(7, 1),
    day3.solve(1, 2)
];
var total = results.reduce((accumulator, currentValue) => accumulator * currentValue);
console.log(`Solution across all 5: ${total}`);