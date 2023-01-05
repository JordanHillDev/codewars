// given a number > 0 and a digit from 0 - 9

// square each number from 0 to the number

// return the number of squared digits that contain the digit

function nbDig(n, d) {
    let count = 0;

    for (let i = 0; i <= n; i++) {
        let squared = i * i;
        count += String(squared)
            .split("")
            .filter((num) => num === String(d)).length;
    }

    return count;
}
