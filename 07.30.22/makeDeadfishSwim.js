// Make the Deadfish Swim

// Write a simple parser that will parse and run Deadfish.

// Deadfish has 4 commands, each 1 character long:

// i increments the value (initially 0)
// d decrements the value
// s squares the value
// o outputs the value into the return array
// Invalid characters should be ignored.

// parse("iiisdoso") => [ 8, 64 ]

// Return the output array, and ignore all non-op characters
function parse(data) {
    const finalArr = [];
    let currValue = 0;

    data.split("").forEach((char) => {
        switch (char) {
            case "i":
                ++currValue;
                break;
            case "d":
                --currValue;
                break;
            case "s":
                currValue = currValue ** 2;
                break;
            case "o":
                finalArr.push(currValue);
                break;
        }
    });

    return finalArr;
}
