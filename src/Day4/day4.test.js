const Day4 = require("./day4");
const Passport = require("./Passport");
var sut = new Day4();

test("Should split empty lines", () => {
    var rawInput = "A\r\nBC\r\n\r\nD\r\nE\r\nF"
    var result = sut.readAndSplitInput(rawInput);
    expect(result.length).toBe(2);
    expect(result[0]).toBe("A BC");
    expect(result[1]).toBe("D E F");
});

test("Should build passport with byr", () => {
    var rawInput = "byr:1987"
    var result = new Passport(rawInput);
    expect(result.byr).toBe("1987");
});

test("Should build passport with iyr", () => {
    var rawInput = "iyr:2020"
    var result = new Passport(rawInput);
    expect(result.iyr).toBe("2020");
});

test("Should build passport with eyr", () => {
    var rawInput = "eyr:2029"
    var result = new Passport(rawInput);
    expect(result.eyr).toBe("2029");
});

test("Should build passport with hgt", () => {
    var rawInput = "hgt:168cm"
    var result = new Passport(rawInput);
    expect(result.hgt).toBe('168cm');
});

test("Should build passport with hcl", () => {
    var rawInput = "hcl:blk"
    var result = new Passport(rawInput);
    expect(result.hcl).toBe('blk');
});

test("Should build passport with ecl", () => {
    var rawInput = "ecl:gry"
    var result = new Passport(rawInput);
    expect(result.ecl).toBe('gry');
});

test("Should build passport with pid", () => {
    var rawInput = "pid:65498798765"
    var result = new Passport(rawInput);
    expect(result.pid).toBe("65498798765");
});

test("Should build passport with cid", () => {
    var rawInput = "cid:657"
    var result = new Passport(rawInput);
    expect(result.cid).toBe("657");
});

test("Should build passport with multiple values", () => {
    var rawInput = "cid:657 pid:129387"
    var result = new Passport(rawInput);
    expect(result.cid).toBe("657");
    expect(result.pid).toBe("129387");
});

test("Should be valid passport with all attributes", () => {
    var passport = createValidPassport();
    expect(passport.isValid()).toBe(true);
});

test("Should be valid passport with no cid attribute", () => {
    var passport = createValidPassport();
    passport.cid = null;
    expect(passport.isValid()).toBe(true);
});

test("Should not be valid passport when missing byr attribute", () => {
    var passport = createValidPassport();
    passport.byr = null;
    expect(passport.isValid()).toBe(false);
});

test("Should not be valid passport when missing iyr attribute", () => {
    var passport = createValidPassport();
    passport.iyr = null;
    expect(passport.isValid()).toBe(false);
});

test("Should not be valid passport when missing eyr attribute", () => {
    var passport = createValidPassport();
    passport.eyr = null;
    expect(passport.isValid()).toBe(false);
});

test("Should not be valid passport when missing hgt attribute", () => {
    var passport = createValidPassport();
    passport.hgt = null;
    expect(passport.isValid()).toBe(false);
});

test("Should not be valid passport when missing hcl attribute", () => {
    var passport = createValidPassport();
    passport.hcl = null;
    expect(passport.isValid()).toBe(false);
});

test("Should not be valid passport when missing ecl attribute", () => {
    var passport = createValidPassport();
    passport.ecl = null;
    expect(passport.isValid()).toBe(false);
});

test("Should not be valid passport when missing pid attribute", () => {
    var passport = createValidPassport();
    passport.pid = null;
    expect(passport.isValid()).toBe(false);
});

function createValidPassport() {
    var passport = new Passport("pid:087499704 hgt:74in ecl:grn iyr:2012 eyr:2030 byr:1980 hcl:#623a2f cid:NZL");
    return passport;
}