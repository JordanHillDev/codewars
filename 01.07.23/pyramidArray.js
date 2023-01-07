// given a number

// return array contain n number of arrays increasing in length to n forming pyramid  3 => [[1], [1, 1], [1, 1, 1]]

function pyramid(n) {
    const result = [];

    for (let i = 1; i <= n; i++) {
        result.push(Array(i).fill(1));
    }

    return result;
}
