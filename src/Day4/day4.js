const Passport = require("./passport");
class Day4 {
    constructor() { }

    readAndSplitInput(rawInput) {
        var rows = rawInput
            .split('\r\n\r\n') // only split based off of empty lines
            .map(it => it.replaceAll('\r\n', ' '));
        return rows;
    }

    buildPassport(row) {
        var tokens = row.split(' ').map(it => it.split(':'));
        var passport = new Passport();
        tokens.forEach(it => {
            passport[it[0]] = it[1];
        });
        return passport;
    }

    isEmpty(str) {
        return (!str || str.length === 0);
    }

    isValidPassport(passport) {
        if (this.isEmpty(passport.byr)
            || this.isEmpty(passport.iyr)
            || this.isEmpty(passport.eyr)
            || this.isEmpty(passport.hgt)
            || this.isEmpty(passport.hcl)
            || this.isEmpty(passport.ecl)
            || this.isEmpty(passport.pid)) {
            return false;
        }
        return true;
    }

}
module.exports = Day4;