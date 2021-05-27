class Day4 {
    constructor() { }

    readAndSplitInput(rawInput) {
        var rows = rawInput
            .split('\r\n\r\n') // only split based off of empty lines
            .map(it => it.replaceAll('\r\n', ' '));
        return rows;
    }

}
module.exports = Day4;