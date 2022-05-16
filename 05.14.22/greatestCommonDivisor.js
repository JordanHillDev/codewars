// Greatest common divisor

// Find the greatest common divisor of two positive integers. The integers can be large, so you need to find a clever solution.

// The inputs x and y are always greater or equal to 1, so the greatest common divisor will always be an integer that is also greater or equal to 1.

function mygcd(x, y) {
    while (y) {
        let t = y;
        y = x % y;
        x = t;
    }
    return x;
}

// 15, 25
// while(25)
// let t = 25
// y = 15 % 25 => 10
// x = 25

// 25, 10
// while(10)
// let t = 10
// y = 25 % 10 => 5
// x = 10

// 10, 5
// while(5)