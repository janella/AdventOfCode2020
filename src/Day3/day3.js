const fs = require('fs');
class Day3 {
    static solve(xMove, yMove) {
        var inputRows = fs.readFileSync('./input.txt', 'utf8')
            .split('\r\n');
        var numRows = inputRows.length;
        console.log(`Number of rows: ${numRows}`);

        var numTrees = 0;
        
        var x = xMove;
        var y = yMove;
        while (y < numRows) {
            var locationValue = this.getLocationValue(inputRows, x, y);
            console.log(`Location (${x}, ${y}): ${locationValue}`);
            if (this.isTree(locationValue)) {
                numTrees++;
            }
            x = x + xMove;
            y = y + yMove;
        }
        console.log(`Number of trees found: ${numTrees}`);
        return numTrees;
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