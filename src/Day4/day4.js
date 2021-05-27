const Passport = require("./passport");
class Day4 {
    birthYear = 'byr';
    issueYear = 'iyr';
    expirationYear = 'eyr';
    height = 'hgt';
    hairColor = 'hcl';
    eyeColor = 'ecl';
    passportId = 'pid';
    countryId = 'cid';


    constructor() { }

    // count number of valid passports

    readAndSplitInput(rawInput) {
        var rows = rawInput
            .split('\r\n\r\n') // only split based off of empty lines
            .map(it => it.replace('\r\n', ' '));
        return rows;
    }

    buildPassport(row) {
        // split by ' '
        // split by ':'
        // dictionary
        return new Passport();
    }

    isValidPassport(passport) {
        // all seven properties byr, iyr, eyr, hgt, hcl, ecl, pid
        // cid is optional
    }
}
module.exports = Day4;