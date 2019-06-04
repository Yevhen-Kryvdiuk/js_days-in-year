function isLeapYear(year) {
    return year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0);
}

function daysInYear(year) {
    try {
        if (!Number.isInteger(year) || !Number(year) > 0){
            throw new Error('exception');
        }
        return isLeapYear(year) ? 366 : 365;
    } catch (error) {
        console.log(error.message);
    }
}

daysInYear(2019); // 365
daysInYear('2019'); // exception
daysInYear(2020); // 366
daysInYear(2020.2); // exception
daysInYear(2100); // 365
daysInYear({year: 2100}); // exception
