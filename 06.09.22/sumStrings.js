// Sum Strings as Numbers

// Given the string representations of two integers, return the string representation of the sum of those integers.

// For example:

// sumStrings('1','2') // => '3'
// A string representation of an integer will contain no characters besides the ten numerals "0" to "9".

function sumStrings(a, b) {
    return a.length >= b.length ? findSum(a, b) : findSum(b, a);

    function findSum(a, b) {
        a = String(parseInt(a, 10));
        b = String(parseInt(b, 10));
        let sum = "";
        let carry = 0;
        let diff = b.length - a.length;
        for (let i = a.length - 1; i >= 0; i--) {
            let temp = (+a.charAt(i) % 10) + (+b.charAt(i + diff) % 10) + carry;
            if (temp >= 10) {
                sum = (temp % 10) + sum;
                carry = Math.floor(temp / 10);
            } else {
                sum = temp + sum;
                carry = 0;
            }
        }
        if (carry) {
            sum = carry + sum;
        }
        return sum;
    }
}

//much simpler solution

function sumStrings(a, b) {
    return (BigInt(a) + BigInt(b)).toString();
}
