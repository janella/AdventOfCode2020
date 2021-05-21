const fs = require('fs');

const target = 2020;
var input = fs.readFileSync('./input.txt', 'utf8')
    .split('\r\n')
    .map(x => parseInt(x))
    .sort((a, b) => a - b); // 2020 is not that big, so sort asc

console.log(input);
for (let i = 0; i < input.length; i++) {
    for (let j = 1; j < input.length; j++) {
        var possible = input[i] + input[j];
        console.log(`${input[i]} + ${input[j]} = ${possible}`);
        if (target == possible) {
            console.log(`Values are ${input[i]} and ${input[j]}!`);
            var solution = input[i] * input[j];
            console.log(`Solution is ${solution}.`);
            return;
        }
    }
}