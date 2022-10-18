// Sum String And Numbers

function sumAll(arr) {
    return arr.reduce((acc, curr) => {
        return acc += +curr
    }, 0)
}