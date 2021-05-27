const fs = require('fs');
const Day4 = require("./day4");
console.log("Hello");

var rawInput = fs.readFileSync('./input.txt', 'utf8');
var rows = Day4.readAndSplitInput(rawInput);
// get raw passport rows
// build array of passports
// var count = 0;
// foreach check isValidPassport
// count++;
console.log(`Number of rows: ${rows.length}`);

console.log(`Solution across all 5: ${total}`);