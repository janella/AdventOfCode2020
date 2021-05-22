const fs = require('fs');
class Day3 {
    static xMove = 3;
    static yMove = 1;

    static solve() {
        var inputRows = fs.readFileSync('./input.txt', 'utf8')
            .split('\r\n');
        var numRows = inputRows.length;
        console.log(`Number of rows: ${numRows}`);

        var numTrees = 0;
        
        var x = Day3.xMove;
        var y = Day3.yMove;
        while (y < numRows) {
            var locationValue = this.getLocationValue(inputRows, x, y);
            console.log(`Location (${x}, ${y}): ${locationValue}`);
            if (this.isTree(locationValue)) {
                numTrees++;
            }
            x = x + Day3.xMove;
            y = y + Day3.yMove;
        }
        console.log(`Number of trees found: ${numTrees}`);
    }

    static getLocationValue(rows, xValue, yValue){
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