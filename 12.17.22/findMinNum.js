// given a number < 80
// return first number starting from 1 that has the n amount of divisors

function findMinNum(num) {
    let final;
    let count = 1;
    while (!final) {
        let numOfDivisors = 0;
        for (let i = 1; i <= count; i++) {
            if (count % i === 0) numOfDivisors++;
        }
        if (numOfDivisors === num) final = count;
        count++;
    }
    return final;
}
