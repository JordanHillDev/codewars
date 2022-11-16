// given array of numbers
// return odd numbers sorted in ascending order but even numbers in same position

function sortOdd(arr) {
    let oddNums = arr.filter(num => num % 2).sort((a, b) => a - b)
    let count = 0

    return arr.map((num) => {
        if(num % 2) {
            return oddNums[count++]
        }
        else {
            return num
        }
    })
}