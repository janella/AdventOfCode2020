const fs = require('fs');
const Day4 = require("./day4");

var day4 = new Day4();
var rawInput = fs.readFileSync('./input.txt', 'utf8');
var rows = day4.readAndSplitInput(rawInput);

var passports = rows.map(it => day4.buildPassport(it));
console.log(`Number of passports: ${passports.length}`);

var count = passports.filter(it => day4.isValidPassport(it)).length;

console.log(`Number of valid passports: ${count}`);