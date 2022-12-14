const yrNow = parseInt(new Date().getFullYear());
const dateNow = parseInt(new Date().getDate());
const monthNow = parseInt(new Date().getMonth());
const bDate = new Date(2003, 06, 21);
const bYear = parseInt(bDate.getFullYear());
const bMonth = parseInt(bDate.getMonth() - 1);
const bDay = parseInt(bDate.getDate());
const month30 = [3, 5, 8, 10];

function ageDays() {
    var daysCurYr = 0 + dateNow;
    var daysBdayYr = 0 - bDay;
    var yrDiff = yrNow - bYear - 1;
    var lpYrs = 0;

    // Total days before a given month
    for (i = 0; i < monthNow; i++) {
        if (month30.includes(i)) {
            daysCurYr += 30;
        } else if (i == 2) {
            daysCurYr += 28;
        } else {
            daysCurYr += 31;
        }
    }

    // Total days after birth until end of year.
    for (x = bMonth; x < 12; x++) {
        if (month30.includes(x)) {
            daysBdayYr += 30;
        } else if (x == 2) {
            daysBdayYr += 28;
        } else {
            daysBdayYr += 31;
        }
    }

    // Count extra leap year days
    for (j = yrNow; j >= bYear; j--) {
        if (j % 4 == 0) {
            lpYrs++;
        }
    }

    return yrDiff * 365 + daysBdayYr + daysCurYr + lpYrs;
}

function daysToBday() {
    var daysBdayYr = 0 + bDay;
    var daysCurYr = 0 - dateNow;
    var isLeapYear = 0;

    // Total days before birthdate
    for (i = 0; i < bMonth; i++) {
        if (month30.includes(i)) {
            daysBdayYr += 30;
        } else if (i == 2) {
            daysBdayYr += 28;
        } else {
            daysBdayYr += 31;
        }
    }

    // Total days after current date until end of the year.
    for (x = monthNow; x < 12; x++) {
        if (month30.includes(x)) {
            daysCurYr += 30;
        } else if (x == 2) {
            daysCurYr += 28;
        } else {
            daysCurYr += 31;
        }
    }

    if (yrNow % 4 == 0) {
        isLeapYear = 1;
    }

    return daysCurYr + daysBdayYr + isLeapYear;
}

function zodiac() {
    if ((bMonth == 0 && bDay >= 20) || (bMonth == 1 && bDay <= 18)) {
        return 'Aquarius';
    } else if ((bMonth == 1 && bDay >= 19) || (bMonth == 2 && bDay <= 20)) {
        return 'Pisces';
    } else if ((bMonth == 2 && bDay >= 21) || (bMonth == 3 && bDay <= 19)) {
        return 'Aries';
    } else if ((bMonth == 3 && bDay >= 20) || (bMonth == 4 && bDay <= 20)) {
        return 'Taurus';
    } else if ((bMonth == 4 && bDay >= 21) || (bMonth == 5 && bDay <= 20)) {
        return 'Gemini';
    } else if ((bMonth == 5 && bDay >= 21) || (bMonth == 6 && bDay <= 22)) {
        return 'Cancer';
    } else if ((bMonth == 6 && bDay >= 23) || (bMonth == 7 && bDay <= 22)) {
        return 'Leo';
    } else if ((bMonth == 7 && bDay >= 23) || (bMonth == 8 && bDay <= 22)) {
        return 'Virgo';
    } else if ((bMonth == 8 && bDay >= 23) || (bMonth == 9 && bDay <= 22)) {
        return 'Libra';
    } else if ((bMonth == 9 && bDay >= 23) || (bMonth == 10 && bDay <= 21)) {
        return 'Scorpio';
    } else if ((bMonth == 10 && bDay >= 22) || (bMonth == 11 && bDay <= 21)) {
        return 'Sagittarius';
    } else if ((bMonth == 11 && bDay >= 22) || (bMonth == 0 && bDay <= 19)) {
        return 'Capricorn';
    }
}

console.log(
    'You are ' +
        Math.floor(parseInt(ageDays()) / 365) +
        ' years and ' +
        (parseInt(ageDays()) % 365) +
        ' days old.'
);
console.log(daysToBday() + ' left till your birthday.');
console.log('Your zodiac is ' + zodiac() + '.');
