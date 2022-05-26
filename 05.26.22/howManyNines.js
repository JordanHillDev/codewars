// How many nines?

// Ask a mathematician: "What proportion of natural numbers contain at least one digit 9 somewhere in their decimal representation?"

// You might get the answer "Almost all of them", or "100%".

// Clearly though, not all whole numbers contain a 9.

// In this kata we ask the question: "How many Integers in the range [0..n] contain at least one 9 in their decimal representation?"

// In other words, write the function:

// nines :: BigInt => BigInt
// Where, for example:

// nines(1n)  = 0n
// nines(10n) = 1n     // 9
// nines(90n) = 10n    // 9, 19, 29, 39, 49, 59, 69, 79, 89, 90
// When designing your solution keep in mind that your function will be tested against some large numbers (up to 10^38)

// **
//  * Finds the number of nines in range [0...n].
//  *
//  * @param {BigInt} n
//  * Inclusive upper numeric limit to calculate 9 counts.
//  * @returns {BigInt}
//  * Nines count.
//  */
function nines(n) {
    /**
     * Base counts
     * 10n -> 1n
     * 100n -> 19n
     * 1000n -> 271n
     * 3950n -> 1035n
     */

    // Convert integer to String to find its length.
    let bigStr = n.toString();
    let len = bigStr.length - 1;
    let i, digit, pow1, pow2;
    let count = 0n;

    // Loops over string number. Starts with the highest power.
    for (i = len; i >= 0; i--) {
        // Uses i for power.
        digit = BigInt(bigStr[len-i]);

        // Uses permutation, calculates 9s up to first 9 digit.
        // Uses i for power.
        pow1 = BigInt(10) ** BigInt(i)
        pow2 = BigInt(9) ** BigInt(i)
        count += digit * ( pow1 - pow2 );

        if (digit === 9n) {
            const rest = BigInt(bigStr.slice(len-i));
            const remainder = rest % pow1;
            // let remainder = rest - digit * BigInt(Math.pow(10, i));

            // Accounts for leading 9.
            count += remainder + 1n;
            break;
        }
    }

    return count;
}