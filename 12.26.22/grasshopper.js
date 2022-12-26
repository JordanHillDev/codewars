// given int

// return sum of every number 1 to num

var summation = function (num) {
    if (num === 1) return num;

    return num + summation(num - 1);
};


// better solution

const summation = n => n * (n + 1) / 2