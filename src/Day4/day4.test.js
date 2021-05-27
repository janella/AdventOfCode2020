// 
const Day4 = require("./day4");
var sut = new Day4();

test("Should split empty lines", () => {
    var rawInput = "A\r\nBC\r\n\r\nDE\r\nF"
    var result = sut.readAndSplitInput(rawInput);
    expect(result.length).toBe(2);
    expect(result[0]).toBe("A BC");
    expect(result[1]).toBe("DE F");
});

test("Should build passport with byr", () => {
    var rawInput = "byr:1987"
    var result = sut.buildPassport(rawInput);
    expect(result.byr).toBe(1987);
});