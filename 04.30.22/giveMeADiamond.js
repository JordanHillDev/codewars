// Give me a Diamond

// Jamie is a programmer, and James' girlfriend. She likes diamonds, and wants a diamond string from James. Since James doesn't know how to make this happen, he needs your help.

// Task
// You need to return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters. Trailing spaces should be removed, and every line must be terminated with a newline character (\n).

// Return null/nil/None/... if the input is an even number or negative, as it is not possible to print a diamond of even or negative size.

// Examples
// A size 3 diamond:

//  *
// ***
//  *
// ...which would appear as a string of " *\n***\n *\n"

// A size 5 diamond:

//   *
//  ***
// *****
//  ***
//   *
// ...that is:

// "  *\n ***\n*****\n ***\n  *\n"

function diamond(n) {
    if (n < 1 || n % 2 === 0) return null;

    let diamond = "";

    for (let i = 1; i <= n; i++) {
        if (i % 2 !== 0) {
            let spaces = "".padStart((n - i) / 2, " ");
            let stars = "".padStart(i, "*");
            diamond += spaces + stars + "\n";
        }
    }
    for (let j = n - 1; j > 0; j--) {
        if (j % 2 !== 0) {
            let spaces = "".padStart((n - j) / 2, " ");
            let stars = "".padStart(j, "*");
            diamond += spaces + stars + "\n";
        }
    }
    return diamond;
}
