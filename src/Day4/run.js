const fs = require('fs');
const Day4 = require("./day4");
const Passport = require("./passport");

var day4 = new Day4();
var rawInput = fs.readFileSync('./input.txt', 'utf8');
var rows = day4.readAndSplitInput(rawInput);

var passports = rows.map(it => new Passport(it));
console.log(`Number of passports: ${passports.length}`);

var count = passports.filter(it => it.isValid(it)).length;

console.log(`Number of valid passports: ${count}`);