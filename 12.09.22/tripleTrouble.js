// Triple trouble

// Write a function

// tripledouble(num1,num2)
// which takes numbers num1 and num2 and returns 1 if there is a straight triple of a number at any place in num1 and also a straight double of the same number in num2.

// If this isn't the case, return 0

// Examples
// tripledouble(451999277, 41177722899) == 1 // num1 has straight triple 999s and
//                                           // num2 has straight double 99s

// tripledouble(1222345, 12345) == 0 // num1 has straight triple 2s but num2 has only a single 2

// tripledouble(12345, 12345) == 0

// tripledouble(666789, 12345667) == 1

function tripledouble(num1, num2) {
    let stringNum1 = String(num1).split("");
    let stringNum2 = String(num2).split("");
    let triple;

    stringNum1.forEach((num, i) => {
        if (stringNum1[i - 1] === num && stringNum1[i + 1] === num) {
            triple = num;
        }
    });

    if (triple) {
        for (let i = 0; i < stringNum2.length; i++) {
            if (stringNum2[i] === triple && stringNum2[i + 1] === triple)
                return 1;
        }
    }
    return 0;
}

// actual solution
function tripledouble(num1, num2) {
    let nums = [...Array(10).keys()];

    return +nums.some(
        (num) =>
            num1.toString().includes(num.toString().repeat(3)) &&
            num2.toString().includes(num.toString().repeat(2))
    );
}
