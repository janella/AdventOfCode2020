class Passport {
    constructor(passportString) {
        var tokens = passportString.split(' ').map(it => it.split(':'));
        tokens.forEach(it => {
            this[it[0]] = it[1];
        });
    }

    isValid() {
        return this.isByrValid()
            && this.isIyrValid()
            && this.isEyrValid()
            && this.isHgtValid()
            && this.isHclValid()
            && this.isEclValid()
            && this.isPidValid();
    }

    isByrValid() {
        var value = parseInt(this.byr);
        return 1920 <= value && value <= 2002;
    }

    isIyrValid() {
        var value = parseInt(this.iyr);
        return 2010 <= value && value <= 2020;
    }

    isEyrValid() {
        var value = parseInt(this.eyr);
        return 2020 <= value && value <= 2030;
    }

    isHgtValid() {
        var regex = new RegExp("(?<val>[0-9]+)(?<unit>cm|in)");
        var height = regex.exec(this.hgt);
        if (height) {
            var heightVal = parseInt(height.groups.val);
            if (height.groups.unit == 'cm') {
                return 150 <= heightVal && heightVal <= 193;
            }
            if (height.groups.unit == 'in') {
                return 59 <= heightVal && heightVal <= 76;
            }
            return false;
        } else {
            return false;
        }
    }

    isHclValid() {
        var regex = new RegExp("^[#]([0-9a-f]{6})$");
        var match = regex.exec(this.hcl);
        if (match) {
            return true;
        }
        return false;
    }

    isEclValid() {
        return this.ecl == 'amb'
            || this.ecl == 'blu'
            || this.ecl == 'brn'
            || this.ecl == 'gry'
            || this.ecl == 'grn'
            || this.ecl == 'hzl'
            || this.ecl == 'oth';
    }

    isPidValid() {
        var regex = new RegExp("^([0-9]{9})$");
        var match = regex.exec(this.pid);
        if (match) {
            return true;
        }
        return false;
    }
}

module.exports = Passport;