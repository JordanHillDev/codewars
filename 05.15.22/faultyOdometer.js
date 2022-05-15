// Simple Fun #178: Faulty Odometer

// Task
// You are given a car odometer which displays the miles traveled as an integer.

// The odometer has a defect, however: it proceeds from digit 3 to digit 5 always skipping the digit 4. This defect shows up in all positions (ones, tens, hundreds, etc).

// For example, if the odometer displays 15339 and the car travels another mile, the odometer changes to 15350 (instead of 15340).

// Your task is to calculate the real distance, according The number the odometer shows.

// Example
// For n = 13 the output should be 12(4 skipped).

// For n = 15 the output should be 13(4 and 14 skipped).

// For n = 2003 the output should be 1461.

// Input/Output
// [input] integer n
// The number the odometer shows.

// 1 <= n <= 999999999

// [output] an integer
// The real distance.

//P: whole number
//R: whole number that is actual odometer amount

function faultyOdometer(n) {
    //turn n into string so we can split
    let stringN = String(n).split('')
    // initialize var to be number of 4's
    let numOf4s = 0;
    //iterate and then shift each item in stringN
    for(let i = 0; i < stringN.length; i++) {
        numOf4s += +stringN.join('') / 4
        stringN.shift()
    }
    
    console.log(numOf4s / 4)
    
  }

faultyOdometer(13) //12
faultyOdometer(15) //13
faultyOdometer(55) //40
faultyOdometer(2005) // 1462

// actual solution 
function faultyOdometer(n) {
    return String(n)
      .split('')
      .map((digit) => {
        const number = Number(digit)
  
        return number >= 5 ? number - 1 : number
      })
      .reduce((sum, item) => sum * 9 + item, 0)
  }