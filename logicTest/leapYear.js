const leapYear = (startYear, endYear) => {
    let rangeYear = [];
    let resultYear = [];

    for (let i = startYear + 1; i <= endYear; i++) {
        rangeYear.push(i);
    }

    const checkLeapYear = (year) => {
        if ((year % 4 === 0 || year % 100 === 0) || (year % 100 === 0 && year % 400 === 0)) {
            return year
        } else {
            return false
        }
    }

    rangeYear.forEach(
        (year) => {
            if (checkLeapYear(year)) {
                resultYear.push(year)
            }
        }
    )

    return resultYear
}

console.log(leapYear(1900, 2020));