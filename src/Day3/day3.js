const fs = require('fs');
class Day3 {
    xMove = 3;
    yMove = 1;

    // input length 32
    // num rows     323
    // movement     right 3, down 1
    // if tree      X
    // if notTree   O
    // result       numTrees

    static solve() {
        var input = fs.readFileSync('./input.txt', 'utf8')
            .split('\r\n');
        var numRows = input.length;

        // track numTrees = 0
        // get first loc
        // while y < numRows; 
        //  y = y + yMove
        //  x = x + xMove
        //  location = get next location
        //  if location.value == tree
        //      numTrees++;
    }

    static getXPosition(xMove, numPosition) {
        // xMove * numPosition (eg, the third x location)
    }

    static getYPosition(yMove, numPosition) {
        // yMove * numPosition (eg, the third y location)
    }

    static getLocationValues(rows, xValue, yValue){
        // row = getYRowValues(rows, yValue)
        // getXLocationValue(row, xValue)
    }

    static getYRowValues(rows, yValue) {
        // splitRow = rows[yValue].split('')
        // return splitRow
    }

    static getXLocationValue(row, xValue) {
        // get row index
        // location = splitRow[rowIndex]
    }

    static getRowIndex(rowLength, xValue) {
        // expected x value
        // rowIndex = x % row.length
        // return rowIndex
    }

    static isTree(value) {
        return value === '#';
    }
}

module.exports = Day3;