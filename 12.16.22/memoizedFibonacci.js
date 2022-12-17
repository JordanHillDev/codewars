const fibonacci = (() => {
    const cache = {};

    return (n) => {
        if (n == 0 || n == 1) {
            return n;
        }

        if (cache[n - 2] === undefined) {
            cache[n - 2] = fibonacci(n - 2);
        }
        if (cache[n - 1] === undefined) {
            cache[n - 1] = fibonacci(n - 1);
        }

        return cache[n - 1] + cache[n - 2];
    };
})();

