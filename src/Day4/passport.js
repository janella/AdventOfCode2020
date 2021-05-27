class Passport {
    constructor(passportString) {
        var tokens = row.split(' ').map(it => it.split(':'));
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
        // 4 digits, 1920 < x < 2002        
    }

    isIyrValid() {
        // 4 digits, 2010 < x < 2020        
    }

    isEyrValid() {
        // 4 digits, 2020 < x <2030
    }

    isHgtValid() {
        // split cm/in suffix, validate int
        // if cm, 150 < x < 193
        // if in, 59 < x < 76
    }

    isHclValid() {
        // prefix #, six characters 0-9 or a-f. regex
    }

    isEclValid() {
        // amb | blu | brn | gry | grn | hzl | oth
    }

    isPidValid() {
        // 9 digits, including leading 0s
    }
}

module.exports = Passport;