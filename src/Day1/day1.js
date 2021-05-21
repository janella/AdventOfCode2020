const fs = require('fs');

const target = 2020;
var input = fs.readFileSync('./input.txt', 'utf8')
    .split('\r\n')
    .map(x => parseInt(x))
    .sort((a, b) => a - b); // 2020 is not that big, so sort asc

for (let i = 0; i < input.length; i++) {
    for (let j = 1; j < input.length; j++) {
        if (areSameIndices(i, j)){
            continue;
        }
        for (let k = 2; k < input.length; k++) {
            if (areSameIndices(i, k) || areSameIndices(j, k)){
                continue;
            }
            var possible = input[i] + input[j] + input[k];
            console.log(`${input[i]} + ${input[j]} + ${input[k]} = ${possible}`);
            if (possible > target) {
                break;
            }
            if (target == possible) {
                console.log(`Values are ${input[i]}, ${input[j]}, and ${input[k]}!`);
                var solution = input[i] * input[j] * input[k];
                console.log(`Solution is ${solution}.`);
                return;
            }
        }
    }
}

function areSameIndices(i, j) {
    return i === j;
}
// possible optimisations
// - if the result is greater than 2020, skip over the rest of the `k` loop
// - don't add the same value