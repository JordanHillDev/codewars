// Chain me

// The input for each function is the output of the previous function (except the first function, which takes the starting value as it's input). Return the final value after execution is complete.

// function add(num) {
//   return num + 1
// }

// function mult(num) {
//   return num * 30
// }

// chain(2, [add, mult]);
// // returns 90;

function chain(input, fs) {
    return fs.reduce((input, fn) => {
        return fn(input);
    }, input);
}
