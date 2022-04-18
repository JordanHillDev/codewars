// Insert dashes

// Write a function insert_dash(num) / insertDash(num) / InsertDash(int num) that will insert dashes ('-') between each two odd digits in num. For example: if num is 454793 the output should be 4547-9-3. Don't count zero as an odd digit.

// Note that the number will always be non-negative (>= 0).

function insertDash(num) {
    return num
        .toString()
        .split("")
        .reduce((acc, curr, index, arr) => {
            if (
                index > 0 &&
                Number(arr[index]) % 2 !== 0 &&
                Number(arr[index - 1]) % 2 !== 0
            ) {
                acc = acc + "-";
            }

            return acc + curr;
        }, "");
}
