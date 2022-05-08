// ASCII letters from Number

// You have to create a function that converts integer given as string into ASCII uppercase letters.

// All ASCII characters have their numerical order in table.

// For example,

// from ASCII table, character of number 65 is "A".
// Numbers will be next to each other, So you have to split given number to two digit long integers.

// For example,

// '658776' to [65, 87, 76] and then turn it into 'AWL'.
// Good Luck!

function convert(number) {
    let string = "";

    let count = 0;

    while (count < number.length) {
        let letterCode = number[count] + number[count + 1];
        string += String.fromCharCode(letterCode);
        count += 2;
    }

    return string;
}
// regex solution
function convert(number) {
    return String.fromCharCode(...number.match(/../g));
}
