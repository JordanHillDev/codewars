// Write Number in Expanded Form

// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
// NOTE: All numbers will be whole numbers greater than 0.

// If you liked this kata, check out part 2!!

function expandedForm(num) {
    return String(num)
        .split("")
        .reduce((acc, curr, i, arr) => {
            if(curr === '0') return acc
            return acc += i > 0
                ? ` + ${curr.padEnd(String(num).length - i, "0")}`
                : `${curr.padEnd(String(num).length - i, "0")}`;
        }, "");
}
