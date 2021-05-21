/**

For example, suppose you have the following list:

1-3 a: abcde
1-3 b: cdefg
2-9 c: ccccccccc

Each line gives the password policy and then the password. The password policy indicates the lowest and highest number of times a given letter must appear for the password to be valid. For example, 1-3 a means that the password must contain a at least 1 time and at most 3 times.

In the above example, 2 passwords are valid. The middle password, cdefg, is not; it contains no instances of b, but needs at least 1. The first and third passwords are valid: they contain one a or nine c, both within the limits of their respective policies.

How many passwords are valid according to their policies?
**/

// get row : string
// regex split {range inclusive}, {expected}, {actual}
// output: bool isValid
// final result: how many valid

const fs = require('fs');

const target = 2020;
var input = fs.readFileSync('./input.txt', 'utf8')
    .split('\r\n'); //
// foreach line
// get range
// regex: [1-9]+-[1-9]+
// get expected
// regex: ([a-z]):
// get the password
// regex: ([a-z]+)$
var regex = new RegExp('(?<rangeStart>[0-9]+)-(?<rangeEnd>[0-9]+) (?<expected>[a-z]): (?<value>[a-z]+)$');

var totalValid = 0;

for (var row = 0; row < input.length; row++){
    var match = regex.exec(input[row]);
    var count = 0;
    var split = match.groups.value.split('');
    for (var i = 0; i < split.length; i++) {
        if (split[i] === match.groups.expected){
            count++;
        }
    }
    if (match.groups.rangeStart <= count && count <= match.groups.rangeEnd){
        totalValid++;
    }
}

console.log(`Total valid is ${totalValid}.`);