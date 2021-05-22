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
        return xMove * numPosition;
    }

    static getYPosition(yMove, numPosition) {
        return yMove * numPosition;
    }

    static getLocationValues(rows, xValue, yValue){
        var row = this.getRowValues(rows, yValue);
        return this.getXLocationValue(row, xValue);
    }

    static getRowValues(rows, yValue) {
        var splitRow = rows[yValue].split('');
        return splitRow;
    }

    static getXLocationValue(row, xValue) {
        var rowIndex = this.getRowIndex(row.length, xValue);
        return row[rowIndex];
    }

    static getRowIndex(rowLength, xValue) {
        return xValue % rowLength;
    }

    static isTree(value) {
        return value === '#';
    }
}

module.exports = Day3;