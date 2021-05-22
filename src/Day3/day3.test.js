const Day3 = require("./day3");

// test - rows repeat horizontally - eg row[0] to row[31] == row[length + 1] to row[length * 2]
// pattern repeats approx 10 times

test("Should recognise tree", () => {
    expect(Day3.isTree('#')).toBe(true);
});

test("Should generate correct coordinates", () => {
    const xMove = 5;
    const yMove = 2;
    var numPosition = 3;
    // get the third position
    expect(Day3.getXPosition(xMove, numPosition)).toBe(15);
    expect(Day3.getYPosition(yMove, numPosition)).toBe(6);
});

test("Should generate correct x value", () => {
    var row = "12345678901234567890"; // 20 length
    var length = row.length;
    expect(Day3.getRowIndex(length, 25)).toBe(5);
});

test("Should get correct row", () => {
    var rows = ["AAAA", "BBBB", "CCCC"];
    var expectedY = 2;
    expect(Day3.getRowValues(rows, expectedY))
        .toStrictEqual(['C', 'C', 'C', 'C']);
});

test("Should get correct location value", () => {
    var rows = ["ABCD", "EFGH", "IJKL"];
    var expectedX = 1;
    var expectedY = 2;
    expect(Day3.getLocationValues(rows, expectedX, expectedY))
        .toBe('J');
});