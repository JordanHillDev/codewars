// given array of numbers and limit (a, limit)

// return true if every value in array <= limit

function smallEnough(a, limit) {
    return a.every(num => num <= limit)
}

