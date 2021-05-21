const fs = require('fs');

var input = fs.readFileSync('./input.txt', 'utf8')
    .split('\r\n'); 
    
var regex = new RegExp('(?<first>[0-9]+)-(?<second>[0-9]+) (?<expected>[a-z]): (?<value>[a-z]+)$');

var totalValid = 0;

for (var row = 0; row < input.length; row++){
    var match = regex.exec(input[row]);
    var count = 0;
    var split = match.groups.value.split('');
    var firstPosition = parseInt(match.groups.first) - 1;
    var secondPosition = parseInt(match.groups.second) - 1;
    var expected = match.groups.expected;
    if (split[firstPosition] == expected) {
        count++;
    }
    if (split[secondPosition] == expected) {
        count++;
    }
    if (count === 1){
        totalValid++;
    }
}

console.log(`Total valid is ${totalValid}.`);