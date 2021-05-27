const Day4 = require("./day4");
const Passport = require("./Passport");
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

test("Should build passport with iyr", () => {
    var rawInput = "iyr:2020"
    var result = sut.buildPassport(rawInput);
    expect(result.iyr).toBe(2020);
});

test("Should build passport with eyr", () => {
    var rawInput = "eyr:2029"
    var result = sut.buildPassport(rawInput);
    expect(result.byr).toBe(2029);
});

test("Should build passport with hgt", () => {
    var rawInput = "hgt:168cm"
    var result = sut.buildPassport(rawInput);
    expect(result.hgt).toBe('168cm');
});

test("Should build passport with hcl", () => {
    var rawInput = "hcl:blk"
    var result = sut.buildPassport(rawInput);
    expect(result.hcl).toBe('blk');
});

test("Should build passport with ecl", () => {
    var rawInput = "ecl:gry"
    var result = sut.buildPassport(rawInput);
    expect(result.ecl).toBe('gry');
});

test("Should build passport with pid", () => {
    var rawInput = "pid:65498798765"
    var result = sut.buildPassport(rawInput);
    expect(result.pid).toBe(65498798765);
});

test("Should build passport with cid", () => {
    var rawInput = "cid:657"
    var result = sut.buildPassport(rawInput);
    expect(result.cid).toBe(657);
});

test("Should build passport with multiple values", () => {
    var rawInput = "cid:657 pid:129387"
    var result = sut.buildPassport(rawInput);
    expect(result.cid).toBe(657);
    expect(result.pid).toBe(129387);
});

test("Should be valid passport with all attributes", () => {
    var passport = createValidPassport();
    expect(sut.isValidPassport(passport)).toBe(true);
});

test("Should be valid passport with no cid attribute", () => {
    var passport = createValidPassport();
    passport.cid = null;
    expect(sut.isValidPassport(passport)).toBe(true);
});

test("Should not be valid passport when missing byr attribute", () => {
    var passport = createValidPassport();
    passport.byr = null;
    expect(sut.isValidPassport(passport)).toBe(false);
});

test("Should not be valid passport when missing iyr attribute", () => {
    var passport = createValidPassport();
    passport.iyr = null;
    expect(sut.isValidPassport(passport)).toBe(false);
});

test("Should not be valid passport when missing eyr attribute", () => {
    var passport = createValidPassport();
    passport.eyr = null;
    expect(sut.isValidPassport(passport)).toBe(false);
});

test("Should not be valid passport when missing hgt attribute", () => {
    var passport = createValidPassport();
    passport.hgt = null;
    expect(sut.isValidPassport(passport)).toBe(false);
});

test("Should not be valid passport when missing hcl attribute", () => {
    var passport = createValidPassport();
    passport.hcl = null;
    expect(sut.isValidPassport(passport)).toBe(false);
});

test("Should not be valid passport when missing ecl attribute", () => {
    var passport = createValidPassport();
    passport.ecl = null;
    expect(sut.isValidPassport(passport)).toBe(false);
});

test("Should not be valid passport when missing pid attribute", () => {
    var passport = createValidPassport();
    passport.pid = null;
    expect(sut.isValidPassport(passport)).toBe(false);
});


function createValidPassport() {
    var passport = new Passport();
    passport.byr = '123'
    passport.iyr = '123'
    passport.eyr = '123'
    passport.hgt = '123'
    passport.hcl = '123'
    passport.ecl = '123'
    passport.pid = '123'
    passport.cid = '123'
    return passport;
}