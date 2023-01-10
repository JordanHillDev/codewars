// given number

// return that nth of fibonacci

function nthFibo(n) {
    if (n < 2) return n;

    return nthFibo(n - 1) + nthFibo(n - 2);
}

const fibonacci = (() => {
    const cache = {};

    return (n) => {
        if (n === 1 || n === 0) return n;
        if (cache[n - 1] === undefined) cache[n - 1] = fibonacci(n - 1);
        if (cache[n - 2] === undefined) cache[n - 2] = fibonacci(n - 2);

        return cache[n - 1] + cache[n - 2];
    };
})();

function nthFibo(n) {
    const sequence = [];

    for (let i = 0; i < n; i++) {
        if (i < 2) sequence.push(i);
        else {
            sequence.push(
                sequence[sequence.length - 1] + sequence[sequence.length - 2]
            );
        }
    }

    return sequence[sequence.length - 1];
}

// alternate solution
function nthFibo(n) {
    let [prev, curr] = [0, 1];
    for (let i = 1; i < n; i++) [prev, curr] = [curr, prev + curr];
    return prev;
}
