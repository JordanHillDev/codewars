// Determine the date by the day number
// What date corresponds to the nth day of the year?
// The answer depends on whether the year is a leap year or not.

// Write a function that will help you determine the date if you know the number of the day in the year, as well as whether the year is a leap year or not.
// The function accepts the day number and a boolean value isLeap as arguments, and returns the corresponding date of the year as a string "Month, day".
// Only valid combinations of a day number and isLeap will be tested.

// Examples:
// * With input `41, false` => return "February, 10"
// * With input `60, false` => return "March, 1
// * With input `60, true` => return "February, 29"
// * With input `365, false` => return "December, 31"
// * With input `366, true` => return "December, 31"

function getDay(day, isLeap){
    let monthsThisYear = []
    let dayOfMonth;
    let daysBeforeMonth = 0;

    let months = {
        'January'   : 31,
        'February'  : isLeap ? 29 : 28,
        'March'     : 31,
        'April'     : 30,
        'May'       : 31,
        'June'      : 30,
        'July'      : 31,
        'August'    : 31,
        'September' : 30,
        'October'   : 31,
        'November'  : 30,
        'December'  : 31
    }
    
    let daysAdded = 0;
   

    for(let keys in months) {
        if(daysAdded < day) {
            daysAdded += months[keys]
            monthsThisYear.push(keys)
        }
    }

    for(let i = 0; i < monthsThisYear.length - 1; i++) {
        daysBeforeMonth += months[monthsThisYear[i]]
    }

    dayOfMonth = day - daysBeforeMonth;

    return `${monthsThisYear[monthsThisYear.length - 1]}, ${dayOfMonth}`
}