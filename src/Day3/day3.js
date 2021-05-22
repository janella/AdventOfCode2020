class Day3 {
    constructor(rows) {
        this.inputRows = rows;
    }

    solve(xMove, yMove) {
        var numRows = this.inputRows.length;
        var numTrees = 0;
        var x = xMove;
        var y = yMove;
        while (y < numRows) {
            var locationValue = this.getLocationValue(this.inputRows, x, y);
            if (this.isTree(locationValue)) {
                numTrees++;
            }
            x = x + xMove;
            y = y + yMove;
        }
        console.log(`Number of trees found: ${numTrees}`);
        return numTrees;
    }

    getLocationValue(rows, xValue, yValue) {
        var row = this.getRowValues(rows, yValue);
        return this.getXLocationValue(row, xValue);
    }

    getRowValues(rows, yValue) {
        var splitRow = rows[yValue].split('');
        return splitRow;
    }

    getXLocationValue(row, xValue) {
        var rowIndex = this.getRowIndex(row.length, xValue);
        return row[rowIndex];
    }

    getRowIndex(rowLength, xValue) {
        return xValue % rowLength;
    }

    isTree(value) {
        return value === '#';
    }
}

module.exports = Day3;